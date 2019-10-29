class PortfoliosController < ApplicationController
    def create
        Portfolio.create portfolio_cat: params[:portfolio_cat], portfolio_image_link: params[:portfolio_image_link], portfolio_image_alt: params[:portfolio_image_alt], portfolio_title: params[:portfolio_title], portfolio_desc: params[:portfolio_desc]
        redirect_to "/admin/"
    end
    
    def show
        if session[:user_id]
          @current_user = User.find(session[:user_id])
        end
        
         @portfolio = Portfolio.find(params[:id])
    end
    
    def update
        @portfolio = Portfolio.find(params[:id])
        @portfolio.update portfolio_cat: params[:portfolio_cat], portfolio_image_link: params[:portfolio_image_link], portfolio_image_alt: params[:portfolio_image_alt], portfolio_title: params[:portfolio_title], portfolio_desc: params[:portfolio_desc]
        redirect_to "/portfolios/#{params[:id]}"
    end
    
    def destroy
        Portfolio.find(params[:id]).destroy
        redirect_to "/admin"
    end
end
