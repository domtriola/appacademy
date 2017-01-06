class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(user_params[:username],
                                    user_params[:password])
    if user
      render json: { user: user.username, id: user.id }
    else
      render json: { errors: "Invalid username or password", status: 401 }
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: { status: 404 }
    end
  end
end
