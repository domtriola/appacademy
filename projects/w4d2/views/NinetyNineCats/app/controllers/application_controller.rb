class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def render_errors(obj)
    render text: obj.errors.full_messages, status: :unprocessable_entity
  end
end
