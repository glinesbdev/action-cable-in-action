# frozen_string_literal: true

class Message < ApplicationRecord
  belongs_to :chatroom
  belongs_to :user

  default_scope { order('created_at asc') }
end
