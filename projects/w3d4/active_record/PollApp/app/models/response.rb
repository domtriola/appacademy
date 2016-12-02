class Response < ActiveRecord::Base
  validates :user_id, :answer_choice_id, presence: true
  validate :not_duplicate_response, :not_author

  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: :AnswerChoice

  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_one :question,
    through: :answer_choice,
    source: :question

  def not_author
    if self.answer_choice.question.poll.author.id == self.user_id
      errors[:author] << "can't answer own poll"
    end
  end

  def not_duplicate_response
    if respondent_already_answered?
      errors[:respondent] << 'already answered'
    end
  end

  def respondent_already_answered?
    sibling_responses.any? do |response|
      Response.exists?(id: response.id, user_id: self.user_id)
    end
  end

  def sibling_responses
    self.question.responses.where.not(id: self.id)
  end
end
