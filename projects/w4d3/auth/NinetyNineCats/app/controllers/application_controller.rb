class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def redirect_if_logged_in
    redirect_to cats_url if current_user
  end

  def login_user!
    user = User.find_by_credentials(user_params[:username],
                                    user_params[:password])
    if user.nil?
      # render :new ????????
      redirect_to new_sessions_url
    else
      session[:session_token] = user.reset_session_token!

      redirect_to cats_url
    end
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])

    @current_user
  end

  private

  def check_for_ownership
    cat = Cat.find_by(:id => params[:id])
    redirect_to cats_url unless current_user.cats.include?(cat)
  end


  def user_params
    params.require(:user).permit(:username, :password)
  end
end
