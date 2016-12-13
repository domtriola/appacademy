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

require 'rails_helper'

RSpec.describe Goal, type: :model do
  describe "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:details) }
    it { should validate_presence_of(:user) }
  end

  describe "associations" do
    it { should belong_to(:user) }
    # it { should have_many(:comments) }
  end
end
