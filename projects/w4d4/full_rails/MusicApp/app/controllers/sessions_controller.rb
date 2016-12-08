class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(user_params[:email],
                                    user_params[:password])
    if user
      login!(user)
    else
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    redirect_to users_url
  end
end
