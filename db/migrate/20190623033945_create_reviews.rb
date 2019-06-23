class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user_id
      t.string :car_id
      t.string :content

      t.timestamps
    end
  end
end
