const APIUtil = require('./api_util.js');

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
