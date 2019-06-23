# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

new_york = Location.create!(city: "New York", state: "NY", country: "United States of America")
los_angeles = Location.create!(city: "Los Angeles", state: "LA", country: "United States of America")
san_francisco = Location.create!(city: "San Francisco", state: "SF", country: "United States of America")

mike = User.create!(firstname: "Mike", lastname: "Soares", email: "mikey.soares@gmail.com", password: "password", hometown_id: 1)
ryan = User.create!(firstname: "Ryan", lastname: "Reece", email: "ryan@gmail.com", password: "password", hometown_id: 2)
chris = User.create!(firstname: "Chris", lastname: "Reece", email: "chris@gmail.com", password: "password", hometown_id: 3)

tesla = new_york.cars.create!(owner_id: 1, description: "This car needs no gas", make: "Tesla", model: "Model S", year: 2018, car_type: "Sedan", total_passengers: 5, daily_rate: 200, weekly_rate: 1000, monthly_rate: 2500 )
bmw = los_angeles.cars.create!(owner_id: 2, description: "This BMW is in Mint condition. Perfect little car for LA", make: "BMW", model: "328xi", year: 2018, car_type: "Coupe", total_passengers: 4, daily_rate: 100, weekly_rate: 600, monthly_rate: 1500 )
mini = san_francisco.cars.create!(owner_id: 3, description: "This Mini Cooper is a Perfect little car for SF", make: "Mini", model: "Cooper", year: 2018, car_type: "Coupe", total_passengers: 4, daily_rate: 60, weekly_rate: 400, monthly_rate: 1000 )

mike = User.first
ryan = User.second
chris = User.third
tesla = Car.first
bmw = Car.second
mini = Car.third

mike_bmw = bmw.reservations.create!(customer_id: 1, owner_id: 2, start_date: "2019-7-12 01:38:54", end_date: "2019-7-15 01:38:54.840" )
mike.reviews.create(content: "This Car was very fast and fun", car: bmw)
