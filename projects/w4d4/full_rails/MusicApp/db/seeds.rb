# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# u1 = User.new()

User.delete_all
User.create!(email: "a", password: "testing")

Band.delete_all
b1 = Band.create!(name: "First")

Album.delete_all
a1 = Album.create!(title: "Primero",
                   band_id: b1.id,
                   recording_type: "Studio")

Track.delete_all
Track.create!(title: "Song one",
              status: "Regular",
              lyrics: "This is the first song.",
              album_id: a1.id)
Track.create!(title: "Song two",
              status: "Regular",
              lyrics: "This is the second song.",
              album_id: a1.id)
