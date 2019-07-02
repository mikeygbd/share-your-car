class User < ApplicationRecord
  has_secure_password
  has_many :cars, foreign_key: :owner_id, class_name: "Car"
  has_many :bookings, foreign_key: :owner_id, class_name: "Reservation"
  belongs_to :hometown, class_name: "Location"
  has_many :reservations, foreign_key: :customer_id, class_name: "Reservation"
  has_many :reviews, foreign_key: :customer_id, class_name: "Review"


  validates :firstname, :lastname, :hometown, presence: true
  validates :email, uniqueness: {case_sensitive: false}, presence: true
end
