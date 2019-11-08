class BlogFeature < ActiveRecord::Migration[5.2]
  def change
    create_table :categories
    add_column :categories, :category_title, :string
    
    create_table :articles
    add_column :articles, :category_id, :integer
    add_column :articles, :user_id, :integer
    add_column :articles, :article_date, :datetime
    add_column :articles, :article_title, :string
    add_column :articles, :article_content, :text
    add_column :articles, :article_image_link, :string
  end
end
