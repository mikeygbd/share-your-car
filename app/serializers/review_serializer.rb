class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :car_id, :customer_id, :reservation_id, :rating
  belongs_to :customer, serializer: UserSerializer
  belongs_to :car, serializer: CarSerializer
  belongs_to :reservation, serializer: ReservationSerializer


end
