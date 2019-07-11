Rails.application.routes.draw do


  namespace :api do
  post '/login', to: "sessions#create"
  get '/get_current_user', to: "sessions#get_current_user"
  delete '/logout', to: "sessions#destroy"
  get '/users/:id/cars', to: "sessions#my_cars"
  post '/signup', to: "users#create"
  post '/signup_car', to: "cars#create"
  post '/create_reservation', to: "reservations#create"
  post '/create_review', to: "reviews#create"
  get '/users/:id/reservations', to: "sessions#my_reservations"
  get '/users/:id/bookings', to: "sessions#my_bookings"
  delete '/cars/:id/destroy', to: 'cars#destroy'
  get '/cars/:id/destroy', to:'cars#destroy'

  resources :users
  resources :cars
  resources :locations
  resources :reservations
  resources :reviews
  end
end
