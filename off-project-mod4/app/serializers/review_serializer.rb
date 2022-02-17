class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :text_content, :created_at , :user, :topic_id
  
  has_one :user
  has_one :topic

  def user
    object.user.username
  end

end
