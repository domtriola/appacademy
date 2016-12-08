# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  status     :string           not null
#  lyrics     :text
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ActiveRecord::Base
  validates :title, :status, :lyrics, :album_id, presence: true
  validates :status, inclusion: ["Bonus", "Regular"]

  belongs_to :album
end
