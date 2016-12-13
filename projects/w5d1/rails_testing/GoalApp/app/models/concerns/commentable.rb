module Commentable
  extend ActiveSupport::Concern

  included do
    has_many :comments, as: :commentable
  end

  def recieve_comment(comment_body, author_id)
    comment = Comment.create(body: comment_body, author_id: author_id)
    self.comments += [comment]
  end
end
