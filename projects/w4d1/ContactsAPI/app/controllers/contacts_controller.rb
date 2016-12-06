class ContactsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    contacts = @user.contacts
    shared_contacts = @user.shared_contacts
    render json: { contacts: contacts, shared_contacts: shared_contacts }
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
    @contact = Contact.find(params[:id])
    if @contact
      render json: @contact
    else
      render_errors(@contact)
    end
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update(contact_params)
      render json: contact
    else
      render_errors(contact)
    end
  end

  def destroy
    contact = Contact.find(params[:id])
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
end
