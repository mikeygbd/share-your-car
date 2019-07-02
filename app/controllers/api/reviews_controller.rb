class Api::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @car = Car.find_by(make: params[:review][:car][:make], model: params[:review][:car][:model], year: params[:review][:car][:year], daily_rate: params[:review][:car][:daily_rate], weekly_rate: params[:review][:car][:weekly_rate], monthly_rate: params[:review][:car][:monthly_rate], img: params[:review][:car][:img], description: params[:review][:car][:description] )
    @review.customer = current_user
    @review.car = @car
    @review.reservation = Reservation.find(@review.reservation_id)

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def review_params
      params.require(:review).permit(:customer_id, :car_id, :reservation_id, :content, :rating)
    end
end
