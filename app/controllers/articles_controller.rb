class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def create
    Article.create category_id: params[:category_id], user_id: params[:user_id], article_date: DateTime.now, article_image_link: params[:article_image_link], article_title: params[:article_title], article_content: params[:article_content], article_meta_desc: params[:article_meta_desc]
    redirect_to '/blog'
  end

  def show
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
    
    @article = Article.find(params[:id])
  end

  def update
    Article.update category_id: params[:category_id], user_id: params[:user_id], article_date: DateTime.now, article_image_link: params[:article_image_link], article_title: params[:article_title], article_content: params[:article_content], article_meta_desc: params[:article_meta_desc]
    redirect_to "/articles/#{params[:id]}"
  end
  
  def change
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
    
    @article = Article.find(params[:id])
    @users = User.all
    @categories = Category.all
  end

  def destroy
    Article.find(params[:id]).destroy
    redirect_to '/blog'
  end
end
