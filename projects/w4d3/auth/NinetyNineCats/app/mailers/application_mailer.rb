class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com"
  # layout 'mailer'

  def welcome_email
    mail(to: 'testing@example.com',
         subject: 'Welcome to the our cat rental service')
  end
end
