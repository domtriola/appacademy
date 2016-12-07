class CatRentalRequest < ActiveRecord::Base

  validates :cat_id, :start_date, :end_date, :status, presence: true
  validate :start_date_before_end_date
  validate :no_rental_overlap

  belongs_to :cat
  delegate :name, to: :cat, prefix: true

  def approve!
    CatRentalRequest.transaction do
      self.status = "APPROVED"
      self.save
    end
  end

  def deny!
    self.status = "DENIED"
    self.save
  end

  def pending?
    status == "PENDING"
  end

  def no_rental_overlap
    unless overlapping_approved_requests.empty?
      errors[:cat_rental] << "overlaps another rental"
    end
  end

  def overlapping_requests
    requests = CatRentalRequest.where(cat_id: cat_id)

    overlapping = []
    requests.each do |request|
      next if self.id == request.id
      request_start = request.start_date
      request_end = request.end_date
      if (self.start_date > request_start && self.start_date < request_end) ||
         (self.start_date < request_start && self.end_date > request_start)
        overlapping << request
      end
    end

    overlapping
  end

  def overlapping_approved_requests
    overlapping_requests.select { |request| request.status == "APPROVED" }
  end

  def start_date_before_end_date
    unless start_date < end_date
      errors[:start_date] << "cannot be after end date"
    end
  end
end
