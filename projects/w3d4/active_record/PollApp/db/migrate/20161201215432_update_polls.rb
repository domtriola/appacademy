class UpdatePolls < ActiveRecord::Migration
  def change
    remove_column :polls, :author
    add_column :polls, :author_id, :integer, null: false
    add_index :polls, :author_id 
  end
end
