class User < ActiveRecord::Base

  has_many :enrollments,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :Enrollment

  has_many :courses,
    through: :enrollments,
    source: :course
end
