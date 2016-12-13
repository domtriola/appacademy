require 'spec_helper'
require 'rails_helper'

RSpec.describe GoalsController, type: :controller do
  let(:newuser) { User.create!(username: "newguy", password: "interesting") }

  describe "POST #create" do
    context "if logged in" do
      context "with invalid params" do
        before do
          allow(controller).to receive(:current_user) { newuser }
        end

        it "validates the presence of params" do
          post :create, goal: { title: "Complete this assignment",
                                complete: false,
                                private: false,
                                user_id: 1
                              }
          expect(response).to render_template("new")
          expect(flash[:errors]).to be_present
        end
      end

      context "with valid params" do
        before do
          allow(controller).to receive(:current_user) { newuser }
        end

        it "redirects to user show page" do
          post :create, goal: { title: "Complete this assignment",
            details: "type, type, type",
            complete: false,
            private: false
                    }
          expect(response).to redirect_to(user_url(User.last))
          expect(flash[:errors]).to_not be_present
        end
      end
    end

    context "if not logged in" do
      before do
        allow(controller).to receive(:current_user) { nil }
      end

      it "redirects to the sign in page" do
        post :create, goal: { title: "Complete this assignment",
          details: "type, type, type",
          complete: false,
          private: false,
          user_id: 1
        }
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
