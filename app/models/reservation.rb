class Reservation < ApplicationRecord
  belongs_to :customer, class_name: "User"
  belongs_to :owner, class_name: "User"
  belongs_to :car
  has_one :location, through: :car
end
