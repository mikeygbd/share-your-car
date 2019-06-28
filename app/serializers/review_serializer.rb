class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :car_id, :user_id, :reservation_id
  belongs_to :user, serializer: UserSerializer
  belongs_to :car, serializer: CarSerializer
  belongs_to :reservation, serializer: ReservationSerializer


end
