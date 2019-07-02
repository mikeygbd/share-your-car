class Reservation < ApplicationRecord
  belongs_to :customer, class_name: "User"
  belongs_to :owner, class_name: "User"
  belongs_to :car
  has_one :location, through: :car
  has_many :reviews

 # validates :start_date, :end_date, :overlap => {:message_title => [:start_at, :end_at], :message_content => "Some validation message"}



 # validate :no_overlap
 #
 # def no_overlap
 #   reservations = Reservation.where(customer_id: customer_id)
 #   overlap = reservations.select{ |reservation| (start_date - reservation.end_date) * (reservation.start_date - end_date) > 0  }
 #   unless overlap.blank?
 #     raise "Conflicting reservation for customer: #{customer_id}"
 #   end
 # end
end
