class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :text_content, :created_at , :user
  
  has_one :user
  belongs_to :topic

  def user
    object.user.username
  end


end
