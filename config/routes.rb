Rails.application.routes.draw do


  namespace :api do
  post '/login', to: "sessions#create"
  get '/get_current_user', to: "sessions#get_current_user"
  delete '/logout', to: "sessions#destroy"
  get '/users/:id/cars', to: "sessions#my_cars"

  resources :users
  resources :cars
  resources :locations
  resources :reservations
  resources :reviews
  end
end
