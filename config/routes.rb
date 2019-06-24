Rails.application.routes.draw do


  namespace :api do
    post '/login', to: "sessions#create"
    get '/get_current_user', to: "sessions#get_current_user"

  resources :users
  resources :cars
  resources :locations
  resources :reservations
  resources :reviews
  end
end
