# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create!(email: "testing_one@email.com")
user2 = User.create!(email: "testing_two@email.com")
user3 = User.create!(email: "testing_three@email.com")

short_url1 = ShortenedUrl.create_for_user_and_long_url!(user1,
                                                       'example_1.com')
short_url1 = ShortenedUrl.create_for_user_and_long_url!(user1,
                                                       'example_2.com')
short_url1 = ShortenedUrl.create_for_user_and_long_url!(user1,
                                                       'example_3.com')
short_url1 = ShortenedUrl.create_for_user_and_long_url!(user1,
                                                       'example_4.com')
short_url1 = ShortenedUrl.create_for_user_and_long_url!(user1,
                                                       'example_5.com')

short_url2 = ShortenedUrl.create_for_user_and_long_url!(user2,
                                                       'example_8.com')

Visit.record_visit!(user1, short_url1)
Visit.record_visit!(user1, short_url1)
Visit.record_visit!(user1, short_url1)
Visit.record_visit!(user2, short_url1)
Visit.record_visit!(user2, short_url1)
Visit.record_visit!(user3, short_url1)

Visit.record_visit!(user3, short_url2)
