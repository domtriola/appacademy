class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    debugger
    Pokemon.create!(pokemon_params)
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:image_url, :name, :poke_type, :attack, :defense, moves: [], items: [])
  end
end
