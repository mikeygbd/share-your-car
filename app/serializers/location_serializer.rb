class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :country
  has_many :cars, serializer: CarSerializer
end
