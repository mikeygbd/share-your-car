class BookingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :start_time, :end_date, :end_time, :created_at, :updated_at, :customer_id, :owner_id, :car_id

end
