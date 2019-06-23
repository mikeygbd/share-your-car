class Car < ApplicationRecord
  belongs_to :owner, class_name: "User"
  belongs_to :location
  has_many :reservations
  has_many :reviews

end
