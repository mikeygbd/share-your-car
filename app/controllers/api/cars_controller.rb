class Api::CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]

  # GET /cars
  def index

    @cars = Car.all
    render json: @cars

end

  # GET /cars/1
  def show
    render json: @car
  end

  # POST /cars
  def create

    @car = Car.new(car_params)
    @car.owner = current_user
    @car.location = current_user.hometown
    if @car.save
      render json: @car, status: :created
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @reservation = Reservation.find_by(car_id: params[:id])
    @review = Review.find_by(car_id: params[:id])
    if @reservation && @review
    @review.destroy
    @reservation.destroy
    @car.destroy
  else
    @car.destroy
  end
end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def car_params
      params.require(:car).permit(:user_id, :location_id, :description, :img, :make, :model, :year, :vin, :milage, :car_type, :total_passengers, :daily_rate, :weekly_discount, :monthly_discount)
    end
end
