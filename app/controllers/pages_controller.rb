class PagesController < ApplicationController
  def home
    
    @portfolios = Portfolio.all
  end
  
  def admin
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
    
    @portfolios = Portfolio.all
  end
end
