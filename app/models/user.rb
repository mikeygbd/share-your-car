class User < ApplicationRecord
  has_secure_password
  has_many :cars
  belongs_to :hometown, class_name: "Location"
  has_many :reservations, foreign_key: :customer_id, class_name: "Reservation"
  has_many :reviews
end
