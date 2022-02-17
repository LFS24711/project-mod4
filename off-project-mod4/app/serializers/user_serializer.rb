class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :unique_topics
  
  has_many :reviews
  
  def unique_topics
    object.topics.uniq
  end

end
