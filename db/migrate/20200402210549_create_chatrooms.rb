# frozen_string_literal: true

class CreateChatrooms < ActiveRecord::Migration[6.0]
  def change
    create_table :chatrooms do |t|
      t.string :topic, index: { unique: true }

      t.timestamps
    end
  end
end
