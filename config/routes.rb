Rails.application.routes.draw do

  namespace :api do
  resources :users
  resources :cars
  resources :locations
  end
end
