class CarSerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :description, :make, :model, :year, :milage, :car_type, :total_passengers, :daily_rate, :weekly_discount, :monthly_discount, :location_id, :img
  has_many :reservations, serializer: ReservationSerializer
  has_many :reviews, serializer: ReviewSerializer
  belongs_to :location, serializer: LocationSerializer
  belongs_to :owner, serializer: OwnerSerializer
end
