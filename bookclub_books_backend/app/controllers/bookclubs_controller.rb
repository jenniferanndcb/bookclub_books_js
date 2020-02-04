class BookclubsController < ApplicationController

  def index 
    @bookclubs = Bookclub.all 
    render json: @bookclubs, include: [:books]
  end 

  def create
    @bookclub = Bookclub.create(bookclub_params)
    @bookclub.books << Book.create(title: params[:book][:title], author: params[:book][:author], currently_reading: true)
    
    render json: @bookclub, include: [:books]
    
  end 

  def show 
    @bookclub = Bookclub.find(params[:id]) 

    render json: @bookclub, include: [:books] 
  end 


  def destroy 
    @bookclub = Bookclub.find(params[:id])
    @bookclub.delete 

    render json: {"message": "Bookclub deleted"}
    
  end 


  private 

  def bookclub_params 
    params.require(:bookclub).permit(:name)
  end 
  
end
