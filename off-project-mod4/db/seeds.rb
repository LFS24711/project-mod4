# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding users."
users = User.create([
    {username: 'L', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'K', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'F', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    {username: 'I', password:'1234', password_confirmation:'1234', image_url:'', bio:''},
    ])

puts "Seeding users done."
puts "Seeding topics."
topics =Topic.create([
    {title: "Sidewalks"}, {title: "Ham"}, {title: "Movies"}, {title: "Spoons"}
])
puts "Seeding topics done."


tr = Topic.all.count
ur = User.all.count

puts "Seeding reviews."
reviews = Review.create([
    {title:"What??", rating: 2, text_content: "I don't know what's happening!", topic_id: rand(1..tr), user_id: rand(1..ur)},
    {title:"I hate them!", rating: 1, text_content: "I hate them! I wish they'd all just dissapear!", topic_id: rand(1..tr), user_id: rand(1..ur)},
])

puts "Seeding reviews done."

rr = Review.all.count


comments = Comment.create([
    {text_content:"I agree!" , user_id: rand(1..ur), review_id: rand(1..rr)}
])
