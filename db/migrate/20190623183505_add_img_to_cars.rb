class AddImgToCars < ActiveRecord::Migration[5.2]
  def change
    add_column :cars, :img, :string
  end
end
