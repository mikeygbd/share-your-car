class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown
  has_many :cars, serializer: CarSerializer
end
