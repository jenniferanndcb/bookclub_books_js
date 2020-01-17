# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bookclub.create(name: "Better Read Than Dead")
Bookclub.create(name: "The Book Warriors")

Book.create!(title: "Homo Deus", author: "Yuval Noah Harari", description: "Sapiens shows us where we came from. Homo Deusshows us where we’re going. Yuval Noah Harari envisions a near future in which we face a new set of challenges.", image: "https://images-na.ssl-images-amazon.com/images/I/41FYAMRN6TL._SX331_BO1,204,203,200_.jpg", currently_reading: true, finished_reading: false, bookclub_id: 1)
Book.create!(title: "The Lean Startup", author: "Eric Ries", description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.", image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg", currently_reading: false, finished_reading: false, bookclub_id: 4)
Book.create!(title: "Hooked", author: "Nir Eyal", description: "How do successful companies create products people can’t put down? Why do some products capture widespread attention while others flop?", image: "https://images-na.ssl-images-amazon.com/images/I/41q7gZyFigL._SX329_BO1,204,203,200_.jpg", currently_reading: false, finished_reading: false, bookclub_id: 1)
Book.create!(title: "The $100 Startup", author: "Chris Guillebeau", description: "In The $100 Startup, Chris Guillebeau shows you how to lead of life of adventure, meaning and purpose – and earn a good living.", image: "https://images-na.ssl-images-amazon.com/images/I/81-Q4J8iEdL.jpg", currently_reading: false, finished_reading: true, bookclub_id: 1)