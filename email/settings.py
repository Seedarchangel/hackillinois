EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_USE_SSL = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 465
EMAIL_HOST_USER = "hackillinoisproject@gmail.com"
EMAIL_HOST_PASSWORD = 'hackthontestpwd'
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER