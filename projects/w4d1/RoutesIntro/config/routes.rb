Rails.application.routes.draw do
  # Short-hand
  # resources :users

  # Long-hand
  get    'users/'    => 'users#index'
  post   'users/'    => 'users#create'
  get    'user/new'  => 'users#new',  as: 'new_user'
  get    'user/edit' => 'users#edit', as: 'edit_user'
  get    'users/:id' => 'users#show', as: 'user'
  patch  'users/:id' => 'users#update'
  put    'users/:id' => 'users#update'
  delete 'users/:id' => 'users#delete'
end
