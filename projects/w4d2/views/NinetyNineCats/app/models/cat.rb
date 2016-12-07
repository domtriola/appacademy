class Cat < ActiveRecord::Base

  validates :birth_date, :name, presence: true
  validates :sex, presence: true, inclusion: { in: %w(M F) }
  validates :color, presence: true, inclusion: { in: %w(Orange Black White Brown Calico Grey) }

  has_many :rental_requests,
    -> { order(start_date: :asc) },
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :CatRentalRequest


  def age
    t = Time.now
    diff = t.to_i - birth_date.to_time.to_i
    diff / (31536000)
  end
end
