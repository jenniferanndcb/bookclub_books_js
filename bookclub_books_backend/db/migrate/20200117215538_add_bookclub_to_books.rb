class AddBookclubToBooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :books, :bookclub
  end
end
