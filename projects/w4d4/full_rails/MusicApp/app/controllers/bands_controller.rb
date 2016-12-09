class BandsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @bands = Band.all
  end

  def new
  end

  def create
    band = Band.new(band_params)
    if band.save
      redirect_to bands_url
    else
      render :new
    end
  end

  def show
    @band = Band.find_by(id: params[:id])
  end

  def edit
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end
