class AddStartTimeAndEndTimeToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :start_time, :string
    add_column :reservations, :end_time, :string

  end
end
