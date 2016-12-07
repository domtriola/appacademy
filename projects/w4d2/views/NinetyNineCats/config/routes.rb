Rails.application.routes.draw do

  resources :cats

  resources :cat_rental_requests, only: [:show, :new, :create] do
    post 'approve', on: :member
    post 'deny', on: :member
  end


end
