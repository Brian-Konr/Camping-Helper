import os, sys, dj_database_url
from pathlib import Path
from datetime import timedelta
from dotenv import dotenv_values

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
dev_config = {
    **dotenv_values(".env.prod"),
    **os.environ,
}

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = dev_config.get("SECRET_KEY", "3%shon=klkpnlfe4k$=r@40==6sn5!zd$2406!fqxc*=^fe5q=")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = int(dev_config.get("DEBUG", "0"))
ALLOWED_HOSTS = dev_config.get("DJANGO_ALLOWED_HOSTS").split(" ")

# Application definition
INTERNAL_APPS = [
    'apps.user.apps.UserConfig',
]

EXTERNAL_APPS = [
    # 'social_django',
    'corsheaders',
    'rest_framework',
    'rest_framework_simplejwt',
    'django_filters',
    'drf_spectacular',
    'djoser',
    'storages',
    # dev only
    'django_extensions',
]

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

INSTALLED_APPS = EXTERNAL_APPS + INTERNAL_APPS + DJANGO_APPS

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'camping_helper.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'camping_helper.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.parse(os.environ.get("DATABASE_URL"))
}

AUTH_USER_MODEL = 'user.User'

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Taipei'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'


# DRF Setting
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # Basic Auth
        'rest_framework_simplejwt.authentication.JWTAuthentication',

        # # Social Auth
        # 'social_core.backends.github.GithubOAuth2',
        # 'social_core.backends.google.GoogleOAuth2',
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'TEST_REQUEST_DEFAULT_FORMAT': 'json',
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.ScopedRateThrottle',
    ],
    # 'DEFAULT_THROTTLE_RATES': {
    #     'test': '10000/day',  # Currently activity has set throttle
    # },
}

# todo: email template
DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': 'google.com/{uid}/{token}',
    # 不開放改Email
    'USERNAME_RESET_CONFIRM_URL': '#username/reset/confirm/',
    #  改Email template 來解決前端domain 問題
    'ACTIVATION_URL': 'activation/{uid}/{token}/',

    'SEND_ACTIVATION_EMAIL': True,
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': [
        "http://localhost:8000/complete/github",
    ],
    'USER_CREATE_PASSWORD_RETYPE': True,
    'TOKEN_MODEL': None,
    'USER_ID_FIELD': 'pk',
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=180),
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=12),
    'ROTATE_REFRESH_TOKENS': True,
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = dev_config.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = dev_config.get('EMAIL_HOST_PASSWORD')

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:5432",
    "http://localhost:3000",
]

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
