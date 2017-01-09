# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create(description: "The first bench",
             lat: 37.77684,
             lng: -122.405722,)

Bench.create(description: "A nice bench",
             lat: 37.779652,
             lng: -122.404465,)
