class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]

  # GET /reservations
  def index
    @reservations = Reservation.all

    render json: @reservations
  end

  # GET /reservations/1
  def show
    render json: @reservation
  end

  # POST /reservations
  def create
    @reservation = Reservation.new(reservation_params)

    @car = Car.find_by(make: params[:reservation][:car][:make], model: params[:reservation][:car][:model], year: params[:reservation][:car][:year], daily_rate: params[:reservation][:car][:daily_rate], weekly_rate: params[:reservation][:car][:weekly_rate], monthly_rate: params[:reservation][:car][:monthly_rate], img: params[:reservation][:car][:img], description: params[:reservation][:car][:description] )
    @reservation.customer = current_user
    @reservation.car = @car
    @reservation.owner = @car.owner





    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reservation_params
      params.require(:reservation).permit(:owner_id, :customer_id, :location_id, :start_date, :end_date)
    end
end
