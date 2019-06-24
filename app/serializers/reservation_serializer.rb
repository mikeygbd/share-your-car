class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :created_at, :updated_at, :customer_id, :owner_id, :car_id
  belongs_to :car, serializer: CarSerializer
  belongs_to :owner, serializer: OwnerSerializer
  belongs_to :customer, serializer: CustomerSerializer
  has_one :location, serializer: LocationSerializer
end
