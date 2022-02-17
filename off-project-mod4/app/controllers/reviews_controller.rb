class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
       review = Review.find(params[:id])
       render json: review
    end

    def create
        review =  @current_user.reviews.create!(review_params)
        render json: review, status: :created 
    end

    def current_users_reviews
        Review.all.filter{|r| user_id == current_user(:id)}
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

private

    def review_params
        params.require(:review).permit(:title, :rating, :text_content, :user_id, :topic_id)
    end
end
