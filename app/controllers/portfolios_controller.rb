class PortfoliosController < ApplicationController
    def create
        Portfolio.create portfolio_cat: params[:portfolio_cat], portfolio_image_link: params[:portfolio_image_link], portfolio_image_alt: params[:portfolio_image_alt], portfolio_title: params[:portfolio_title], portfolio_desc: params[:portfolio_desc]
        redirect_to "/admin/"
    end
    
    def show
         @portfolio = Portfolio.find(params[:id])
    end
    
    def update
        Portfolio.update portfolio_cat: params[:portfolio_cat], portfolio_image_link: params[:portfolio_image_link], portfolio_image_alt: params[:portfolio_image_alt], portfolio_title: params[:portfolio_title], portfolio_desc: params[:portfolio_desc]
        redirect_to "/admin/"
    end
    
    def destroy
        Portfolio.find(params[:id]).destroy
        redirect_to "/admin"
    end
end
