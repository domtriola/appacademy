class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
  end

  def create
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
