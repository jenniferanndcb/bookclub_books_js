class BookclubsController < ApplicationController

  def index 
    @bookclubs = Bookclub.all 
    render json: @bookclubs, include: [:books]
  end 
end
