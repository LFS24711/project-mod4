class Topic < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    accepts_nested_attributes_for :reviews, allow_destroy: true


    validates :title, presence: true
    validates :title, uniqueness: true
end
