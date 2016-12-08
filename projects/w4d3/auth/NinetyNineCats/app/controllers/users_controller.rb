class UsersController < ApplicationController
  before_action :redirect_if_logged_in

  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      msg = UserMailer.welcome_email
      msg.deliver
      login_user!
    else
      flash.now[:messages] = user.errors.full_messages
      render :new
    end
  end
end
