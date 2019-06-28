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

mike = User.create!(firstname: "Mike", lastname: "Soares", email: "mikey.soares@gmail.com", password: "password", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6K1Nfp6CdQ9kr3d-oFrL5jmzqcuzTkE-4KqMTs6Q0Hp8BKFx", hometown_id: 1)
ryan = User.create!(firstname: "Ryan", lastname: "Reece", email: "ryan@gmail.com", password: "password", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbKLNfYnoSKRtv2wrxGfFL7X2B1y0jwcW7Q5eohbSQiLAHVyE", hometown_id: 2)
chris = User.create!(firstname: "Chris", lastname: "Reece", email: "chris@gmail.com", password: "password", img: "https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1", hometown_id: 3)
bob = User.create!(firstname: "Bob", lastname: "Doyle", email: "bob@gmail.com", password: "password", img: "https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg", hometown_id: 3)
joe = User.create!(firstname: "Joe", lastname: "Fool", email: "joe@gmail.com", password: "password", img: "http://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/ollie_ward2.jpg", hometown_id: 2)
rick = User.create!(firstname: "Rick", lastname: "Rafferty", email: "rick@gmail.com", password: "password", img: "https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2018/06/datingprofile2-900x600.jpg", hometown_id: 1)

subaru = new_york.cars.create!(owner_id: 1, img:"https://www.torquenews.com/sites/default/files/image-1084/a-october_sti_sales.jpg", description: "This car is great in the snow.", make: "Subaru", model: "STI", year: 2016, car_type: "Sedan", total_passengers: 5, daily_rate: 150, weekly_rate: 800, monthly_rate: 2000 )
tesla = new_york.cars.create!(owner_id: 1, img:"https://cdn.motor1.com/images/mgl/wMqlE/s1/dream-giveaway-2018-tesla-model-s-p100d.jpg", description: "This car needs no gas", make: "Tesla", model: "Model S", year: 2018, car_type: "Sedan", total_passengers: 5, daily_rate: 200, weekly_rate: 1000, monthly_rate: 2500 )
bmw = los_angeles.cars.create!(owner_id: 2, img:"https://pictures.topspeed.com/IMG/jpg/201810/2018-bmw-3-series-vs-10.jpg", description: "This BMW is in Mint condition. Perfect little car for LA", make: "BMW", model: "328xi", year: 2018, car_type: "Coupe", total_passengers: 4, daily_rate: 100, weekly_rate: 600, monthly_rate: 1500 )
mini = san_francisco.cars.create!(owner_id: 3, img:"https://www.newcartestdrive.com/wp-content/uploads/2018/04/2018-mini-cooper-600x400.jpg", description: "This Mini Cooper is a Perfect little car for SF", make: "Mini", model: "Cooper", year: 2018, car_type: "Coupe", total_passengers: 4, daily_rate: 60, weekly_rate: 400, monthly_rate: 1000 )
mustang = san_francisco.cars.create!(owner_id: 4 ,img:"https://www.steeda.com/thumbnail.asp?file=assets/images/exim/backup/images/steeda-s550-mustang-q-series-front-fascia-unpainted-15-16-all-028-s550-fascia-u-00000.jpg&maxx=1500&maxy=1000", description: "This car is the worst car you can drive", make: "Ford", model: "Mustang", year: 2017, car_type: "coupe", total_passengers: 2, daily_rate: 150, weekly_rate: 800, monthly_rate: 2000 )
jeep = los_angeles.cars.create!(owner_id: 5 ,img:"https://i.pinimg.com/originals/17/a2/8d/17a28d264a0abf65ddcd6f61735eba1a.jpg", description: "This car is great on the beach.", make: "Jeep", model: "Wrangler", year: 2016, car_type: "Suv", total_passengers: 5, daily_rate: 150, weekly_rate: 800, monthly_rate: 2000 )

mike = User.first
ryan = User.second
chris = User.third
bob = User.fourth
joe = User.fifth

subaru = Car.first
tesla = Car.second
bmw = Car.third
mini = Car.fourth
mustang = Car.fifth

mike_bmw = bmw.reservations.create!(customer_id: 1, owner_id: 2, start_date: "2019-7-12 01:38:54", end_date: "2019-7-15 01:38:54.840" )
mike.reviews.create(content: "This Car was very fast and fun", car: bmw)
