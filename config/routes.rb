Rails.application.routes.draw do
  root 'pages#home'
  
  post 'users/login' => 'users#check'
  
  get 'admin' => 'pages#admin'
 
  post 'portfolios' => 'portfolios#create'
  get 'portfolios/:id' => 'portfolios#show'
  patch 'portfolios/:id' => 'portfolios#update'
  delete 'portfolios/:id' => 'portfolios#destroy'
  
  get 'blog' => 'articles#index'
  post 'articles' => 'articles#create'
  get 'articles/:id' => 'articles#show'
  get 'articles/:id/change' => 'articles#change'
  patch 'articles/:id' => 'articles#update'
  delete 'articles/:id' => 'articles#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
