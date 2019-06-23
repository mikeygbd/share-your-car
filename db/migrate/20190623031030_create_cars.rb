class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.integer :user_id
      t.string :make
      t.string :model
      t.integer :year
      t.integer :vin
      t.integer :milage
      t.string :type
      t.integer :total_passengers
      t.float :daily_rate
      t.float :weekly_rate
      t.float :montly_rate
      t.timestamps
    end
  end
end
