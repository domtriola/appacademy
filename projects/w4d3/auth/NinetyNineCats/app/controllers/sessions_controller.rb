class SessionsController < ApplicationController
  before_action :redirect_if_logged_in
  skip_before_action :redirect_if_logged_in, only: [:destroy]

  def new
    render :new
  end

  def create
    login_user!
  end

  def destroy
    unless current_user.nil?
      current_user.reset_session_token!
      session[:session_token] = ""
    end

    redirect_to new_sessions_url
  end
end
