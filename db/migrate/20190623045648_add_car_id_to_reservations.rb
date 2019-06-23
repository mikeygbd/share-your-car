class AddCarIdToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :car_id, :integer
  end
end
