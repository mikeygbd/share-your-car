class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown, :img
  has_many :cars, serializer: CarSerializer
  has_many :reservations, serializer: ReservationSerializer
  has_many :bookings, serializer: BookingSerializer
  has_many :reviews, serializer: ReviewSerializer
end
