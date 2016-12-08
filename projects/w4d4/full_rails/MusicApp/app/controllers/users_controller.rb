class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      login!(user)
    else
      flash[:errors] = user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def edit
    # @user = User.find_by(id: params[:id])
  end

  def update
  end

  def destroy
    render text: "destroyed..."
  end
end
