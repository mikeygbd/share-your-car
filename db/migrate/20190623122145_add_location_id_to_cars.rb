class AddLocationIdToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :location_id, :integer
  end
end
