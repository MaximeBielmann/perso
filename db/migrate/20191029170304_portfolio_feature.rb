class PortfolioFeature < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios
    add_column :portfolios, :portfolio_cat, :string
    add_column :portfolios, :portfolio_image_link, :text
    add_column :portfolios, :portfolio_image_alt, :string
    add_column :portfolios, :portfolio_title, :string
  end
end
