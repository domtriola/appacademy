require 'rails_helper'

RSpec.describe User, type: :model do
  let(:dom) { User.new(name: "Dom", password: "testing") }

  # validations
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  # associations
  it { should have_many(:subs) }
  it { should have_many(:user_votes) }
  it { should have_many(:comments) }

  describe "#is_password?" do
    it "returns true for correct user password" do
      expect(dom.is_password?("testing")).to be_truthy
    end

    it "returns false for incorrect passwords" do
      expect(dom.is_password?("Testing")).to be_falsey
      expect(dom.is_password?("testing1")).to be_falsey
      expect(dom.is_password?("notmypassword")).to be_falsey
    end
  end

  describe "#is_password?" do
    let(:dom) { User.new(name: "Dom", password: "testing") }

    it "returns true for correct user password" do
      expect(dom.is_password?("testing")).to be_truthy
    end

    it "returns false for incorrect passwords" do
      expect(dom.is_password?("Testing")).to be_falsey
      expect(dom.is_password?("testing1")).to be_falsey
      expect(dom.is_password?("notmypassword")).to be_falsey
    end
  end

  describe "#reset_session_token" do
    it "changes user's session token" do
      old_token = dom.session_token
      dom.reset_session_token!

      expect(dom.session_token).not_to eq(old_token)
    end
  end

  describe "::find_by_credentials" do
    before { dom.save! }

    it "find's a user with correct credentials" do
      expect(User.find_by_credentials("Dom", "testing")).to eq(dom)
    end

    it "returns nil if username does not exist" do
      expect(User.find_by_credentials("notme", "test")).to be_nil
    end
  end
end
