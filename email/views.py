from django.core.mail import send_mail
from __future__ import unicode_literals
 
from django.conf import settings
from django.core.mail import EmailMultiAlternatives

def send_email(mail_list):

	subject = 'Issues Update Notification'
	 
	text_content = 'You have made some changes'
	 
	html_content = '<p>You have made some changes</p>'

	from_email = settings.EMAIL_HOST_USER

	to_emails = mail_list
	msg = EmailMultiAlternatives(subject, text_content, from_email,	to_emails)
	 
	msg.attach_alternative(html_content, "text/html")
	 
	msg.send()