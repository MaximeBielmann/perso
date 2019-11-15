class AddMetaDescToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :article_meta_desc, :string
  end
end
