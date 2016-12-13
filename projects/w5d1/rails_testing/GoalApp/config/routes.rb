Rails.application.routes.draw do
  resources :users, only: [:index, :show, :new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :goals, except: [:index]
  resources :comments, only: [:create]
end
