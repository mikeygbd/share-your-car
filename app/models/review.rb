class Review < ApplicationRecord
  belongs_to :user
  belongs_to :car
  belongs_to :reservation
end
