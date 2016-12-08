Rails.application.routes.draw do
  resources :users
  resources :bands do
    resources :albums, only: [:index, :new, :create] do
      resources :tracks, only: [:index, :new, :create]
    end
  end

  resources :albums, only: [:show, :edit, :update, :destroy]
  resources :tracks, only: [:show, :edit, :update, :destroy]

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
