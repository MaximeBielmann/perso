class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def create
    Article.create category_id: params[:category_id], user_id: params[:user_id], article_date: DateTime.now, article_image_link: params[:article_image_link], article_title: params[:article_title], article_content: params[:article_content]
    redirect_to '/blog'
  end

  def show
    @article = Article.find(params[:id])
  end

  def update
  end

  def delete
  end
end
