# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    @chatrooms = Chatroom.all
  end
end
