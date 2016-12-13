require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of username and password" do
        post :create, user: { username: "cooluser", password: "" }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password id at least 6 characters long" do
        post :create, user: { username: "cooluser", password: "short" }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects to the user show page" do
        post :create, user: { username: "cooluser", password: "password" }
        expect(response).to redirect_to(user_url(User.last))
        expect(flash[:errors]).to_not be_present
      end
    end
  end
end
