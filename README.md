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

## Account for Test usage
Email: b08705038@ntu.edu.tw  
Password: aaa

## Features

### Register / Activation / Login
An user can register for the app service by entering their Email and password. After submitting a registration request, the password is encrypted and stored in the database. And the server will send an Email to the requested user's Email for account activation. When the account is activated, the user can login and host or join activities on the platform.


