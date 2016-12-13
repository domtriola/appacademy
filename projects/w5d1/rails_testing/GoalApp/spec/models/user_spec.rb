# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create!(username: "cooluser", password: "password") }

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }

    it { should validate_uniqueness_of(:username) }

    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe "associations" do
    # it { should have_many(:comments) }
    it { should have_many(:goals) }
  end

  describe "::find_by_credentials" do

    context "when params are valid" do
      it "returns the user" do
        found_user = User.find_by_credentials("cooluser", "password")
        expect(found_user).to eq(user)
      end
    end

    context "when params are invalid" do
      it "returns nil when no password input" do
        not_found = User.find_by_credentials("cooluser", "")
        expect(not_found).to eq(nil)
      end

      it "returns nil with wrong password" do
        not_found = User.find_by_credentials("cooluser", "wronggg")
        expect(not_found).to eq(nil)
      end
    end
  end

  describe "#is_password?" do
    it "verifies a password is correct" do
      expect(user.is_password?("password")).to be true
    end

    it "verifies a password is not correct" do
      expect(user.is_password?("bad_password")).to be false
    end
  end

  describe "#reset_session_token!" do
    it "resets user's session token" do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(old_session_token).to_not eq(user.session_token)
    end
  end
end
