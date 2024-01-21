#Very Simple Brutalist Weather App

## Introduction
This Next.js Weather App is a modern, responsive application that provides real-time weather information. It features current weather updates, historical weather data, and an option to save and load weather data. 

Built with Next.js and styled with Tailwind CSS, this app offers a user-friendly interface with a brutalist design approach.

The weather data is retrieved from Openmeteo api https://open-meteo.com/. By default, this app shows the weather data of Toronto,Ontario Canada. User can change the location by modifying the longitude and altitude in the helpers functions at src/helpers/weather.


## Features
- **Current Weather**: Displays the latest weather information, including the temperature, weather condition, and the time when the weather was last measured.
- **Timely Update** The current weather data is refreshed every 60s to ensure the provision of the most up-to-date information 
- **Historical Weather Data**: Shows weather data from the past 5 days.
- **Saved Weather Conditions**: Allows users to save weather conditions to a local database and view saved weather conditions.
- **Responsive Design**: Fully responsive and accessible on various devices.


## Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
- MongoDB

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js v.18.17.0 or later (Download and install from [Node.js website](https://nodejs.org/))
- MongoDB (Follow the installation guide on the [MongoDB website](https://www.mongodb.com/try/download/community))


### Installation

1. **Clone the repository**

   Use Git to clone the project's repository to your local machine:

   ```bash
   git clone https://github.com/your_username/Your-Project-Name.git
   cd Your-Project-Name

2. **Install dependencies**

   Navigate to the project directory and install the required npm packages:

   ``bash
   npm install
3. **Set up environment **variables**

  Create a .env.local file in the root directory of the project to store your environment variables, like your MongoDB URI. You can use .env.example as a reference.
  ```bash
  # .env.local
  MONGO_URI=your_mongodb_uri
  Replace your_mongodb_uri with the actual URI of your MongoDB database.



