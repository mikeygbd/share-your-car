class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown, :img
  has_many :reservations, serializer: ReservationSerializer
  has_many :reviews, serializer: ReviewSerializer
end
