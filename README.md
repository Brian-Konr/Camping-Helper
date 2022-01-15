# Camping-Helper
Camping-Helper provides activity organizers, especially college students the ability to create an elegant display page on the platform for their own activities, summer camps, and more. Besides, people interested in activities on the platform can also submit their registration information right at the website. We believe through Camping-Helper, both activity organizers and participants can host or join activities in an easy, fast, and convenient way.

## Motivation
Nowadays, more and more students want to explore their interests before entering universities. Thus whenever the summer or winter vacation is nearby, many universities will host camps for high school students to provide them an opportunity to experience college life, specific subjects, and campus environments for finding out which subject or campus lifestyle they truly like. However, these kinds of activities usually lack a systematic way to host events easily and conveniently. Thus we decided to build an activity platform where organizers can host their events fastly by following fluent and clear instructions. After creating activities, organizers can also examine registration situations and download registration information from the platform. Other than that, students interested in participating can also view camp intro and submit their registration information right on the platform, which saves them a lot of time for finding where to sign up or browse the camp information.

## Getting Started (Run the app and server in localhost)
First, we need to clone this repo. After this, `cd` to the repo directory, then we can setup frontend and backend in localhost separately by following instructions below:
### Frontend
1. `cd frontend`
2. Run `yarn`
3. find `frontend\.env` and set value of `REACT_APP_BACKEND_URL` according to different scenarios:
    - If the server is run at localhost, replace the value with `localhost:8000`
    - If the server is deployed, replace the value with `https://campinghelper.temp.dodofk.xyz`
4. Run `yarn start` and make sure the app is run at `localhost:3000` (Due to CORS Issue)
5. You should see your app being launched in your default browser.

### Backend
1. `cd backend`
2. start virtual environment and load the required package
    - using python venv for example (of course you could use conda, pipenv, or something else):
    - you could type python if you sure the python your system have is python3
    - only test on python3.9.7 and on mac and ubuntu 18.0.4
    ```
    python3 -m venv be_env

    # for mac/linux
    source be_env/bin/activate

    # for windows(cmd.exe)
    be_env/Scripts/activate.bat

    # for windows(powershell)
    be_env/Scripts/Activate.ps1

    # install required pacakges
    pip3 install -r requirements.txt
    ```
3. Set up environment files

    ```console
    cp .env.dev.defaults .env.dev

    # we will give the required env files named .env.dev.ta.defaults
    # you could copy paste the .env.dev.ta.defaults to .env.dev or use the following commands
    cp .env.dev.ta.defaults .env.dev
    ```

    Some explain for the .env.dev
    - you could change the secret key, we are using another key in production
    - the email is my own email, please don't use it to do other things
    - we've use a different s3 bucket for testing, so it's kind to contact us after testing so that we could close the service and save cost

4. Set up Database and set up static files
    ```console
    python3 manage.py migrate

    python3 manage.py collectstatic --no-input --clear
    ```
    - Set up sqlite3 for local test to reduce opportunity of errors, we use postgresql in production
    - after this two command, a db.sqlite3 file will create at backend/, and the static files will store at s3

5. create superuser (optional)
- To use the django admin page, you need to create a superuser account
    ``` console
        python3 manage.py createsuperuser
        # type the corresponding value to create superuser
    ```
6. start server:
    ``` console
        python3 manage.py runserver
    ```
    Ensure that the server run at port 8000
    
    For admin page: `localhost:8000/admin` (You could get, create, update, delete data in the admin page)

    For API documentation: `localhost:8000/api/schema/swagger-ui/`

    Use (Ctrl+C or Ctrl+D) to stop the server

## Features

### Register / Activate / Login
An user can register for the app service by entering their Email and password. After submitting a registration request, the password is encrypted and stored in the database. And the server will send an Email to the requested user's Email for account activation. When the account is activated, the user can login and host or join activities on the platform.

### View activities through different filters
The home page displays all activities, and by clicking on different filters or searching by specific activity name, the page will automatically render corresponding results.

### View activity detailed information
An user can view the detailed description of activities he / she is interested in by clicking on the activity card. After clicking on it, the page will be led to the intro of the activity.

### Join an activity
When viewing an activity and feeling interested in it, an user can click on the sign up button and fill in the form required by the activity. After filling the form, the user can click on the submit button and complete the activation registration process. At the same time, organizers of the activity can see new registration information by looking up registration situations on the platform.

### Host an activity
An organizer can host his . her own activity on the platform by entering the host event button. After clicking on it, the user can fill in the activity information through detailed instructions. The information includes activity name, activity sign up interval, activity date, form questions and more. Organizer could also download the csv file of registration result for further usage.

### Roles of the Team

郭子麟: FE/PM

劉鈺祥: BE/DevOps

劉智心: FE/UI/uX


