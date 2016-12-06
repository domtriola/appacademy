# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(username: "User1")
u2 = User.create!(username: "User2")
u3 = User.create!(username: "User3")
u4 = User.create!(username: "User4")

c1 = Contact.create!(name: u1.username,
                     email: "user1@example.com", user_id: u1.id)
c2 = Contact.create!(name: u2.username,
                     email: "user2@example.com", user_id: u2.id)
c3 = Contact.create!(name: u3.username,
                     email: "user3@example.com", user_id: u3.id)
c4 = Contact.create!(name: u4.username,
                     email: "user4@example.com", user_id: u4.id)

ContactShare.create!(user_id: u1.id, contact_id: c2.id)
ContactShare.create!(user_id: u1.id, contact_id: c3.id)
ContactShare.create!(user_id: u1.id, contact_id: c4.id)
ContactShare.create!(user_id: u2.id, contact_id: c1.id)
