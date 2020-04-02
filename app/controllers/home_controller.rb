class HomeController < ApplicationController
  def index
    @chatrooms = Chatroom.all
  end
end
