class Review < ApplicationRecord
  belongs_to :user
  belongs_to :topic

  validates :text_content, :title, :rating, :topic_id, :user_id, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 1 , less_than_or_equal_to: 5}
end
