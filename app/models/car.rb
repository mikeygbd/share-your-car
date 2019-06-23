class Car < ApplicationRecord
  belongs_to :user
  belongs_to :location
  has_many :reservations
  has_many :reviews

end
