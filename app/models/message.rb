class Message < ApplicationRecord
  validates :greeting, presence: true, length: { minimum: 5 }
end
