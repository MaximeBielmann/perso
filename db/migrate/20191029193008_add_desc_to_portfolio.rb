class AddDescToPortfolio < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :portfolio_desc, :string
  end
end
