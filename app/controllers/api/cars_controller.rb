class Api::CarsController < ApplicationController
  before_action :set_car, only: [:show, :update, :destroy]

  # GET /cars
  def index
    if logged_in? && current_user
    @my_cars = current_user.cars
    render json: @my_cars
  else
    @cars = Car.all
    render json: @cars

  end
end

  # GET /cars/1
  def show
    render json: @car
  end

  # POST /cars
  def create
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created, location: @car
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
    @car.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def car_params
      params.require(:car).permit(:user_id, :location_id, :make, :model, :year, :vin, :milage, :car_type, :total_passengers, :daily_rate, :weekly_rate, :monthly_rate)
    end
end
