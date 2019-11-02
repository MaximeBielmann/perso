class PagesController < ApplicationController
  def home
    @page_title = "Accueil"
    @page_description = "Je vous accompagne de l'idée jusqu'à la réalisation de votre projet, du cahier des charges à l'utilisation quotidienne de"
    @page_keywords = "développeur web"
    
    @portfolios = Portfolio.all
  end
  
  def admin
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
    
    @portfolios = Portfolio.all
  end
end
