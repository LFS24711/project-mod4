class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :text_content, :user_id, :review_id, presence: true
end
