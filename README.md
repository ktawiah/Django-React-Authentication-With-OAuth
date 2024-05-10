# Django-React-Authentication-With-OAuth

This project showcases the implementation of full user authentication using JSON Web Token authentication from Djoser with OAuth support. Implementation was done using Django Rest Framework for the backend and Next.js for the frontend.

## Table of Contents
- [Features](#features)
- [Project Setup](#getting-started)
- [Contribution](#contributing)

## Features

- User Account Registration
- User Account Login
- User Account Logout

## Getting Started
Follow the following instruction to setup this project locally on your device

#### 1. To begin first clone this project 
```bash
  git clone https://github.com/ktawiah/Django-React-Authentication.git
```

#### 2. Navigate to the backend directory
```bash
cd backend
```

#### 3. Create a virtual environment
``` bash
  pipenv shell
```

#### 4. Install backend dependencies
```bash
  pipenv install
```
#### 6. Setup backend environment variables in backen/.env.local paste these

```
DEVELOPMENT_MODE= 
DEBUG=
DJANGO_SECRET_KEY=
AUTH_COOKIE_SECURE=
DOMAIN=
SOCIAL_AUTH_ALLOWED_REDIRECT_URIS=
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY=
REDIRECT_URLS=
```


#### 7. Run migrations
```bash
  python manage.py makemigrations
  python manage.py migrate
```
#### 8. Start the backend development server
```bash
  python manage.py runserver
```

#### 9. Open a new terminal instance and navigate into the frontend directory
```bash
  cd frontend
```

#### 10. Install frontend dependencies
```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
```
#### 11. Setup frontend environment variable in frontend/.env.local
```
NEXT_PUBLIC_HOST=
```

#### 9. Run frontend dev server
```bash
  npm run dev
```

#### 10. Open [http://localhost:3000](http://localhost:3000) with your browser to see frontend result and [http://localhost:8000](http://localhost:8000) to view backend results.


## Contributing
Contributions to this project are welcomed! If you have any ingenious ideas for enhancements or new features, please don't hesitate to open an issue or submit a pull request. Your input is much appreciated.
