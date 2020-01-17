class CreateBookclubs < ActiveRecord::Migration[6.0]
  def change
    create_table :bookclubs do |t|
      t.string :name 
      
      t.timestamps
    end
  end
end
