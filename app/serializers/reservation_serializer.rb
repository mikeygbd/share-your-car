class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :start_time, :end_date, :end_time, :created_at, :updated_at, :customer_id, :owner_id, :car_id
  belongs_to :car, serializer: CarSerializer
  belongs_to :owner, serializer: OwnerSerializer
  belongs_to :customer, serializer: CustomerSerializer
  has_many :reviews, serializer: ReviewSerializer

end
