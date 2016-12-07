# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cat.destroy_all
c1 = Cat.create!(birth_date: Date.new(2015, 12, 6), color: "Black",
                 name: "Peanut", sex: "F", description: "A cat with no tail")
c2 = Cat.create!(birth_date: Date.new(2014, 12, 6), color: "Orange",
                 name: "Ginger", sex: "M", description: "Looks like Garfield")
c2 = Cat.create!(birth_date: Date.new(2014, 12, 6), color: "Calico",
                 name: "Catsy", sex: "M")

CatRentalRequest.destroy_all

cr1 = CatRentalRequest.create!(cat_id: c1.id, start_date: "2016-01-01",
                               end_date: "2016-01-05", status: "PENDING" )
cr2 = CatRentalRequest.create!(cat_id: c1.id, start_date: "2016-01-07",
                               end_date: "2016-01-10", status: "PENDING" )
cr3 = CatRentalRequest.create!(cat_id: c1.id, start_date: "2016-01-11",
                               end_date: "2016-01-16", status: "PENDING" )
