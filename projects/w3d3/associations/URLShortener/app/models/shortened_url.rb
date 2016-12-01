require 'byebug'
class ShortenedUrl < ActiveRecord::Base
  validates :short_url, :long_url, uniqueness: true, presence: true
  validates_length_of :long_url, maximum: 1024
  validates :user_id, presence: true
  validate :recent_submissions_less_than_5

  def recent_submissions_less_than_5
    if User.find(self.user_id).premium == false && ShortenedUrl.user_num_recents(self.user_id) >= 5
      errors.add(:user_id, "too many submissions recently")
    end
  end

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :visits,
    primary_key: :id,
    foreign_key: :short_id,
    class_name: :Visit

  has_many :visitors,
    Proc.new { distinct },
    through: :visits,
    source: :visitor

  has_many :taggings,
    primary_key: :id,
    foreign_key: :url_id,
    class_name: :Tagging

  has_many :tag_topics,
    through: :taggings,
    source: :tag_topic


  def self.random_code
    url = SecureRandom.urlsafe_base64
    while exists?(short_url: url)
      url = SecureRandom.urlsafe_base64
    end
    url
  end


  def self.prune
    time_limit = 5.seconds.ago
    kept_ids = []
    keepers = Visit.all.select(:id, :short_id).where("updated_at > ?", time_limit).distinct
    keepers.each do |keeper|
      kept_ids << keeper.short_id
    end
    ShortenedUrl.all.each do |short_url|
      unless kept_ids.include?(short_url.id)
        short_url.destroy!
      end
    end
  end

  def self.user_num_recents(user_id)
    time_limit = 10.minutes.ago
    ShortenedUrl.all.select(:id).where("updated_at > ? AND user_id = ?", time_limit, user_id).distinct.count
  end

  def self.create_for_user_and_long_url!(user, long_url)
    ShortenedUrl.create!(user_id: user.id, long_url: long_url,
                         short_url: ShortenedUrl.random_code)
  end

  def num_clicks
    Visit.all.select(self.id).where("short_id = ?", self.id).count
  end

  def num_uniques
    # Visit.all.select(:user_id).where("short_id = ?", self.id).distinct.count
    visitors.count
  end

  def num_recent_uniques
    # recent = Time.now
    time_limit = 10.minutes.ago
    Visit.all.select(:user_id).where("updated_at > ? AND short_id = ?", time_limit, self.id).distinct.count
  end

end
