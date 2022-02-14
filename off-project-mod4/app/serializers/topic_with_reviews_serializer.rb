class TopicWithReviewsSerializer < ActiveModel::Serializer
  attributes attributes :id, :title
  
  has_many :reviews
end
