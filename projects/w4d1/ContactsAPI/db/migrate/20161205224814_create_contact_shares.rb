class CreateContactShares < ActiveRecord::Migration
  def change
    create_table :contact_shares do |t|
      t.integer :user_id, null: false
      t.integer :contact_id, null: false
      t.timestamps null: false
    end

    add_index :contact_shares, :user_id
    add_index :contact_shares, :contact_id
    add_index :contact_shares, [:user_id, :contact_id], unique: true

    # Fix contacts user_id data type
    change_column :contacts, :user_id, 'integer USING CAST(user_id AS integer)'
  end
end
