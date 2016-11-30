class AddIndexToPeople < ActiveRecord::Migration
  def change
    add_index :people, :name
    add_index :people, :house_id
  end
end
