class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    render json: @contacts
  end

  def create
    contact = Contact.new(contact_params)
    if contact.save
      render json: contact
    else
      render_errors(contact)
    end
  end

  def show
    @contact = Contact.find_by(id: params[:id])
    if @contact
      render json: @contact
    else
      render_errors(@contact)
    end
  end

  def update
    contact = Contact.find_by(id: params[:id])
    if contact.update(contact_params)
      render json: contact
    else
      render_errors(contact)
    end
  end

  def destroy
    contact = Contact.find_by(id: params[:id])
    if contact.destroy
      render json: contact
    else
      render_errors(contact)
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :user_id)
  end

  def render_errors(el)
    render json: el.errors.full_messages, status: :unprocessable_entity
  end
end
