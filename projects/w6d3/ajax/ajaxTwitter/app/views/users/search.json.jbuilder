json.array!(@users) do |user|
  json.(user, *User.column_names)
  json.followed(current_user.follows?(user))
  # print(user.followers.include?(current_user))
  # json.followed(user.out_follows.exists?(follower_id: current_user.id))
  # json.followed(user.out_follows.includes(current_user))
end
