class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64(128)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return user if user && user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt = BCrypt::Password.new(password_digest)
    bcrypt.is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
