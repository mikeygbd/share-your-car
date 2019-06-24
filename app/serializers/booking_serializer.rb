class BookingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :created_at, :updated_at, :customer_id, :owner_id, :car_id
end
