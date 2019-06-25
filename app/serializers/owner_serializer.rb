class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :hometown, :img
  has_many :cars, serializer: CarSerializer
end
