class UsersController < ApplicationController

skip_before_action :authorize, only: [:create, :index]
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def index
        users = User.all
        render json: users, status: :ok
    end

   # def show
  #      render json: @current_user, status: :created
    #end

    def show
        a_user = User.find(params[:id])
        render json: a_user, status: :ok

    end

    def me
        render json: @current_user, status: :created
    end

    def your_every
        render json: @current_user.topics, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end
end
