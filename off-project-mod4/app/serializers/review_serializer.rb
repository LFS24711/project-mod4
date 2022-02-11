class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :text_content
  has_one :user
  has_one :topic
end
