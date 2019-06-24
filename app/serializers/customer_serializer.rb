class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown
  has_many :reservations, serializer: ReservationSerializer
end
