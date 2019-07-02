class Review < ApplicationRecord
  belongs_to :customer, class_name: "User"
  belongs_to :car
  belongs_to :reservation
end
