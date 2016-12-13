class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.text :details, null: false
      t.string :title, null: false
      t.boolean :private, null: false, default: false
      t.boolean :complete, null: false, default: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
