class CommentsController < ApplicationController
  def create
    type = comment_params[:type].constantize
    parent = type.find_by_id(comment_params[:parent_id])
    parent.recieve_comment(comment_params[:body], current_user.id)
    redirect_to "/#{comment_params[:type].downcase}s/#{comment_params[:parent_id]}"
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :type, :parent_id)
  end
end
