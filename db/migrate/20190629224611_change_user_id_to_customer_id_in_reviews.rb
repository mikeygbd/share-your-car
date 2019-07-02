class ChangeUserIdToCustomerIdInReviews < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :user_id, :customer_id
  end
end
