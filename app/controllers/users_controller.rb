class UsersController < ApplicationController
  def login
  end
  
  def check
    @current_user = User.where(name: params[:name], password: params[:password]).first
    if @current_user
      session[:user_id] = @current_user.id
      flash[:info] = "Vous êtes maintenant connecté"
      redirect_to "/admin"
    else
      session[:user_id] = nil
      flash[:info] = "Échec de la connexion"
      redirect_to "/admin"
    end
  end
end
