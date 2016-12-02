# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create!(user_name: "user1")
user2 = User.create!(user_name: "user2")
user3 = User.create!(user_name: "user3")
user4 = User.create!(user_name: "user4")
user5 = User.create!(user_name: "user5")

poll1 = Poll.create!(title: "favourite color", author_id: 1)
poll2 = Poll.create!(title: "favourite food", author_id: 1)
# poll3 = Poll.create!(title: "favourite place", author_id: 1)
# poll4 = Poll.create!(title: "favourite pet", author_id: 2)

question1 = Question.create!(text: "color please", poll_id: poll1.id)
question2 = Question.create!(text: "What is your favorite food?", poll_id: poll1.id)

answer_choice1 = AnswerChoice.create!(text: "blue", question_id: question1.id)
answer_choice2 = AnswerChoice.create!(text: "red", question_id: question1.id)
answer_choice3 = AnswerChoice.create!(text: "green", question_id: question1.id)
answer_choice4= AnswerChoice.create!(text: "yellow", question_id: question1.id)

answer_choice5= AnswerChoice.create!(text: "pizza", question_id: question2.id)
answer_choice6= AnswerChoice.create!(text: "ice cream", question_id: question2.id)

response2 = Response.create!(user_id: user2.id, answer_choice_id: answer_choice3.id)
response3 = Response.create!(user_id: user3.id, answer_choice_id: answer_choice3.id)
response4 = Response.create!(user_id: user4.id, answer_choice_id: answer_choice3.id)

response5 = Response.create!(user_id: user2.id, answer_choice_id: answer_choice5.id)
response6 = Response.create!(user_id: user3.id, answer_choice_id: answer_choice6.id)
