class Question < ActiveRecord::Base
  validates :text, :poll_id, presence: true

  belongs_to :poll,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Poll

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :AnswerChoice

  has_many :responses,
    through: :answer_choices,
    source: :responses

  def bad_results
    result = {}

    answer_choices.each do |choice|
      result[choice.text] = choice.responses.count
    end

    result
  end

  def good_results
    result = {}
    choices = answer_choices.includes(:responses)

    choices.each do |choice|
      result[choice.text] = choice.responses.length
    end

    result
  end

  def better_results
    choices = AnswerChoice.find_by_sql([<<-SQL, id])
      SELECT
        answer_choices.text, COUNT(responses.id) AS response_count
      FROM
        answer_choices
      LEFT JOIN
        responses ON answer_choices.id = responses.answer_choice_id
      WHERE
        answer_choices.question_id = ?
      GROUP BY
        answer_choices.id
    SQL

    choices.inject({}) do |results, choice|
      results[choice.text] = choice.response_count
      results
    end
  end

  def best_results
    choices = self.answer_choices
      .select("answer_choices.text, COUNT(responses.id) AS response_count")
      .joins(<<-SQL).group("answer_choices.id")
        LEFT OUTER JOIN
          responses ON answer_choices.id = responses.answer_choice_id
      SQL

    choices.inject({}) do |results, choice|
      results[choice.text] = choice.response_count
      results
    end
  end
end
