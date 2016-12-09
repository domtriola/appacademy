Rails.application.routes.draw do
  resources :users
  resources :bands do
    resources :albums, only: [:new] do
      resources :tracks, only: [:new]
    end
  end

  resources :albums, only: [:show, :create, :edit, :update, :destroy]
  resources :tracks, only: [:show, :create, :edit, :update, :destroy]

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
