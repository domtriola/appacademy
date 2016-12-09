class AlbumsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @band = Band.find_by(id: params[:band_id])
    @albums = @band.albums
  end

  def new
    @band = Band.find_by(id: params[:band_id])
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def create
    album = Album.new(album_params)
    if album.save!
      redirect_to band_url(album.band)
    else
      flash[:errors] = album.errors.full_messages
      # render :new
    end
  end

  def edit
  end

  def destroy
    album = Album.find_by(id: params[:id])
    album.destroy
    redirect_to band_url(album.band)
  end

  private

  def album_params
    params.require(:album).permit(:title, :band_id, :recording_type)
  end
end
