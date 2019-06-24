class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown
  has_many :cars, serializer: CarSerializer
  has_many :reservations, serializer: ReservationSerializer
  has_many :bookings, serializer: BookingSerializer
end
