# == Schema Information
#
# Table name: goals
#
#  id         :integer          not null, primary key
#  details    :text             not null
#  title      :string           not null
#  private    :boolean          default("false"), not null
#  complete   :boolean          default("false"), not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Goal < ActiveRecord::Base
  validates :title, :details, :user, presence: true
  validates :complete, :private, inclusion: [true, false]

  belongs_to :user
  include Commentable
end
