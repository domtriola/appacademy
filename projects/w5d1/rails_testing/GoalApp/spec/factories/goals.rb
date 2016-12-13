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

FactoryGirl.define do
  factory :goal do
    details "MyText"
    title "MyString"
    private ""
    complete ""
    user_id 1
  end
end
