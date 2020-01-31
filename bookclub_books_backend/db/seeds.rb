# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bookclub.create(name: "Better Read Than Dead")
Bookclub.create(name: "The Book Warriors")
Bookclub.create(name: "Book Wanderings")

Book.create!(title: "Homo Deus", author: "Yuval Noah Harari", description: "Sapiens shows us where we came from. Homo Deusshows us where we’re going. Yuval Noah Harari envisions a near future in which we face a new set of challenges.", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468760805i/31138556._UY500_SS500_.jpg", currently_reading: true, finished_reading: false, bookclub_id: 1)
Book.create!(title: "The Lean Startup", author: "Eric Ries", description: "Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876l/10127019.jpg", currently_reading: false, finished_reading: false, bookclub_id: 2)
Book.create!(title: "Hooked", author: "Nir Eyal", description: "How do successful companies create products people can’t put down? Why do some products capture widespread attention while others flop?", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1407112405l/22668729.jpg", currently_reading: false, finished_reading: false, bookclub_id: 1)
Book.create!(title: "The $100 Startup", author: "Chris Guillebeau", description: "In The $100 Startup, Chris Guillebeau shows you how to lead of life of adventure, meaning and purpose – and earn a good living.", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345666854i/12605157._UY475_SS475_.jpg", currently_reading: false, finished_reading: true, bookclub_id: 1)
Book.create!(title: "Educated: A Memoir", author: "Tara Westover", description: "Born to survivalists in the mountains of Idaho, Tara prepared for the end of the world by stockpiling home-canned peaches and sleeping with her \"head-for-the-hills bag\". In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.", image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922.jpg", currently_reading: true, finished_reading: false, bookclub_id:2)
Book.create!(title: "Enduring Cuba", author: "Zoe Bran", description: "Intrigued by the many disparate views of Cuba, Zoe Bran visits this country of contradictions. Interweaving history and current events, personal and wider viewpoints, she paints a vivid and compelling picture of contemporary Cuba.", image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348311386l/2647612.jpg", currently_reading: true, finished_reading: false, bookclub_id: 3)