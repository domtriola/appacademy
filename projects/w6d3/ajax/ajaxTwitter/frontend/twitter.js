const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");
const TweetCompose = require("./tweet_compose.js");

$( () => {
  $(".follow-toggle").each( (index, el) => {
    let followToggle = new FollowToggle(el);
  });
  let usersSearch = new UsersSearch($('.users-search'));
  let tweetCompose = new TweetCompose($('.tweet-compose'));
}
);
