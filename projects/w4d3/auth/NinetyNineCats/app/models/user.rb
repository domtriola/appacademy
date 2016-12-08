class User < ActiveRecord::Base
  has_many :cats

  before_validation :ensure_session_token
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user.nil?
      nil
    else
      user.is_password?(password) ? user : nil
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    bcrypt = BCrypt::Password.new(password_digest)
    bcrypt.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(128)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
