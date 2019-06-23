class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :user_id
      t.string :location_id
      t.string :start_date
      t.string :end_date
      t.timestamps
    end
  end
end
