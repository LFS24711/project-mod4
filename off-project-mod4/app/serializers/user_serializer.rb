class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :unique_topics, :review_length, :topic_count
  
  has_many :reviews
  
  def unique_topics
    object.topics.uniq
  end

  def topic_count
    object.topics.uniq.count
  end
  
  def review_length
    object.reviews.count
  end

end
