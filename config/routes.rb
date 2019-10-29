Rails.application.routes.draw do
  root 'pages#home'
  
  post 'users/login' => 'users#check'
  
  get 'admin' => 'pages#admin'
 
  post 'portfolios' => 'portfolios#create'
  get 'portfolios/:id' => 'portfolios#show'
  patch 'portfolios/:id' => 'portfolios#update'
  delete 'portfolios/:id' => 'portfolios#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
