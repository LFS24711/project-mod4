class CommentSerializer < ActiveModel::Serializer
  
  attributes :id, :text_content, :created_at , :user
  
  has_one :user
  has_one :review

  def user
    object.user.username
  end

  def created_at
    object.created_at.strftime('%F')
  end

end
