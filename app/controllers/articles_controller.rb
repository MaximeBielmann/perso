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
    Article.update category_id: params[:category_id], user_id: params[:user_id], article_date: DateTime.now, article_image_link: params[:article_image_link], article_title: params[:article_title], article_content: params[:article_content]
    redirect_to "/articles/#{params[:id]}"
  end
  
  def change
    @article = Article.find(params[:id])
    @users = User.all
    @categories = Category.all
  end

  def destroy
    Article.find(params[:id]).destroy
    redirect_to '/blog'
  end
end
