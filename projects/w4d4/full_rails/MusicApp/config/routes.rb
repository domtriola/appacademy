Rails.application.routes.draw do
  resources :users

  get 'login', to: :new, controller: 'sessions'
  post 'login', to: :create, controller: 'sessions'
  delete 'logout', to: :destroy, controller: 'sessions'
end
