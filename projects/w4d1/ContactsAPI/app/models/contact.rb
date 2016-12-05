class Contact < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: { scope: :email }
  belongs_to :owner, foreign_key: :user_id, class_name: :User

  
end
