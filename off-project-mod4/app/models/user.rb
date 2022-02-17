class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :topics, through: :reviews
    has_many :comments
    accepts_nested_attributes_for :topics, allow_destroy: true

    validates :username, presence: true
    validates :username, uniqueness: true
end
