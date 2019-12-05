class PagesController < ApplicationController
  def home
    @users = User.all
    @portfolios = Portfolio.all
  end
  
  def admin
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
     
    @users = User.all
    @portfolios = Portfolio.all
  end
end
