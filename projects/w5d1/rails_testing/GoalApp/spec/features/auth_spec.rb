require 'spec_helper'
require 'rails_helper'

feature "the signup process" do

  scenario "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  feature "signing up a user" do

    scenario "shows username on the homepage after signup" do
      sign_up_testuser
      expect(page).to have_content "testuser"
    end

  end

end

feature "logging in" do

  scenario "shows username on the homepage after login" do
    sign_up_testuser
    click_on "Sign Out"
    sign_in_test_user
    expect(page).to have_content "testuser"
  end

end

feature "logging out" do

  scenario "begins with a logged out state" do
    visit users_url
    expect(page).to have_content "Sign In"
  end

  scenario "doesn't show username on the homepage after logout" do
    sign_up_testuser
    click_on "Sign Out"
    expect(page).to_not have_content "testuser"
  end
end
