class TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end

  def new
    @album = Album.find_by(id: params[:album_id])
  end

  def create
    track = Track.new(track_params)
    if track.save!
      redirect_to album_url(track.album)
    else
      flash[:errors] = track.errors.full_messages
      # render :new
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :status, :lyrics)
  end
end
