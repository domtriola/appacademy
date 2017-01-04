class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :title, uniqueness: true
  validates :done, inclusion: { in: [true, false] }

end
