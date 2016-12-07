class CatRentalRequestsController < ApplicationController

  def create
    @rental_request = CatRentalRequest.new(rental_request_params)
    if @rental_request.save
      redirect_to cat_url(@rental_request.cat)
    else
      render_errors(@rental_request)
    end
  end

  def new
    @cats = Cat.all
    render :new
  end

  def approve

    @rental_request = CatRentalRequest.find_by(id: params[:id])
    if @rental_request.approve!
      redirect_to cat_url(@rental_request.cat)
    else
      render :deny
    end
  end

  def deny
    @rental_request = CatRentalRequest.find_by(id: params[:id])
    @rental_request.deny!
    redirect_to cat_url(@rental_request.cat)
  end

  private

  def rental_request_params
    params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
  end
end
