class AddNullFalseToBenches < ActiveRecord::Migration
  def change
    change_column :benches, :seating, :integer, null: false
  end
end
