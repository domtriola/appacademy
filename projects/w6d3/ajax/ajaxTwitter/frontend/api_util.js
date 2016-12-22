const APIUtil = {
  followUser: id => {
    return $.ajax({
      type: "POST",
      dataType: "JSON",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    return $.ajax({
      type: "DELETE",
      dataType: "JSON",
      url: `/users/${id}/follow`
    });
  },

  searchUsers: queryVal => (
    $.ajax({
      url: "/users/search",
      type: "GET",
      data: { query: queryVal},
      dataType: "JSON"
    })
  ),

  createTweet: tweet => (
    $.ajax({
      url: "/tweets",
      type: "POST",
      dataType: "JSON",
      data: tweet
    })
  )
};

module.exports = APIUtil;
