class User < ApplicationRecord
  has_secure_password
  has_many :cars
  belongs_to :hometown, class_name: "Location"
end
