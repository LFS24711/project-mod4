# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {username: 'L', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'K', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'F', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'I', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    ])

topics =Topic.create([
    {title: "Sidewalks"}, {title: "Ham"}, {title: "Movies"}, {title: "Spoons"}
])

tr = Topic.all.count
ur = User.all.count

reviews = Review.create([
    {title:"What??", rating: 2, text_content: "I don't know what's happening!", topic_id: rand(1..tr), user_id: rand(1..ur)}
])
