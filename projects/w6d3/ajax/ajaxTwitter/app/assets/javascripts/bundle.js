/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const FollowToggle = __webpack_require__(1);
	const UsersSearch = __webpack_require__(3);
	const TweetCompose = __webpack_require__(4);
	
	$( () => {
	  $(".follow-toggle").each( (index, el) => {
	    let followToggle = new FollowToggle(el);
	  });
	  let usersSearch = new UsersSearch($('.users-search'));
	  let tweetCompose = new TweetCompose($('.tweet-compose'));
	}
	);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class FollowToggle {
	  constructor(el, options) {
	    this.$el = $(el);
	    this.userId = this.$el.data("userId") || options.userId;
	    this.followState = this.$el.data("initialFollowState") ||
	                       options.followState;
	    this.render();
	    this.$el.on("click", this.handleClick.bind(this));
	  }
	
	  render() {
	    if (this.followState === "Following") {
	      this.$el.prop("disabled", true);
	      this.$el.text("Following");
	    } else if (this.followState === "Unfollowing") {
	      this.$el.prop("disabled", true);
	      this.$el.text("Unfollowing");
	    } else {
	      this.$el.prop("disabled", false);
	      if (this.followState === "Unfollowed") {
	        this.$el.text("Follow!");
	      } else {
	        this.$el.text("Unfollow!");
	      }
	    }
	
	  }
	
	  handleClick(e) {
	    e.preventDefault();
	
	    let nf = this.followState === "Followed" ? "Unfollowed" : "Followed";
	    this.followState = nf === "Followed" ? "Following" : "Unfollowing";
	    this.render();
	
	    const updateButton = () => {
	      this.followState = nf;
	      this.render();
	    };
	
	    if (nf === "Followed")
	      APIUtil.followUser(this.userId).then(updateButton);
	    else
	      APIUtil.unfollowUser(this.userId).then(updateButton);
	  }
	}
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	const FollowToggle = __webpack_require__(1);
	
	class UsersSearch {
	  constructor(el) {
	    this.$el = $(el);
	    this.$input = this.$el.find("input");
	    this.$ul = this.$el.find("ul");
	    this.$input.on("input", (e) => this.handleInput(e));
	  }
	
	  handleInput(e) {
	    let val = this.$input.val();
	
	    APIUtil.searchUsers(val).then( (users) => this.renderResults(users));
	  }
	
	  renderButton(user) {
	
	    let $button = $(`<button type="button"
	            name="button"
	            class="follow-toggle"
	            data-user-id="${user.id}"
	            data-initial-follow-state=
	              ${user.followed ? "Followed" : "Unfollowed"}>
	    </button>`);
	
	    new FollowToggle($button);
	    return $button;
	  }
	
	  renderResults(users) {
	    this.$ul.empty();
	    users.forEach( user => {
	      let $link = $(
	        `<li><a style="margin-right: 10px"
	                href="/users/${user.id}">${user.username}</a></li>`);
	      $link.append(this.renderButton(user));
	      this.$ul.append($link);
	    });
	  }
	}
	
	module.exports = UsersSearch;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class TweetCompose {
	  constructor(el) {
	    this.$el = $(el);
	    this.$el.on("submit", (e) => this.submit(e));
	    this.$textarea = this.$el.find('textarea.user-input');
	    this.$textarea.on("input", (e) => this.updateCount(e));
	    $('.add-mentioned-user').on("click", () => this.addMentionedUser());
	    // $('.add-mentioned-user').on("click", (e) => this.removeMentionedUser(e));
	  }
	
	  updateCount(e) {
	    $('.chars-left').text(140 - e.currentTarget.value.length);
	  }
	
	  clearInput() {
	    this.$el.find('.user-input').val("");
	  }
	
	  handleSuccess(tweet) {
	    this.clearInput();
	    let $feed = $(this.$el.attr("data-tweets-ul"));
	    let $li = $("<li>");
	    $li.append(JSON.stringify(tweet));
	    $feed.prepend($li);
	  }
	
	  submit(e) {
	    e.preventDefault();
	
	    let form = $('.tweet-compose').serializeJSON();
	
	    APIUtil.createTweet(form).then((tweet) => this.handleSuccess(tweet));
	  }
	
	  addMentionedUser() {
	    let form = this.$el.find('.add-mentioned-user-form').html();
	    $('.mentioned-users').append(form);
	    return false;
	  }
	
	  // removeMentionedUser(e) {
	  //   e.preventDefault();
	  //   console.log(e.currentTarget);
	  // }
	}
	
	module.exports = TweetCompose;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map