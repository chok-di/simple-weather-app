# Very Simple Brutalist Weather App

## Introduction
This Next.js Weather App provides real-time weather information in a responsive format. It features current weather updates, historical data, and options to save and retrieve weather conditions. The app, built using Next.js and Tailwind CSS, showcases a brutalist design and pulls data from Openmeteo (https://open-meteo.com/). By default, it displays weather for Toronto, Ontario, Canada, but users can easily change the location by adjusting longitude and latitude in the src/helpers/weather file.


## Features
- **Current Weather**: Shows the latest weather details, including temperature, condition, and last update time.
- **Timely Update** Refreshes current weather data every 60 seconds.
- **Historical Weather Data**: Access weather data from the past five days.
- **Saved Weather Conditions**: Users can save weather data to a local database and view these records.
- **Responsive Design**: Ensures compatibility across various devices.


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
   git clone git@github.com:chok-di/simple-weather-app.git Your-Folder-Name
   cd Your-Folder-Name
   ```

2. **Install dependencies**

   Navigate to the project directory and install the required npm packages:

   ```bash
   npm install
   ```
3. **Set up environment variables**

   Create a .env.local file in the root directory of the project to store your environment variables, like your MongoDB URI. You can use .env.example as a reference.
   ```bash
   # .env.local
   MONGO_URI=your_mongodb_uri
   ```
   Replace your_mongodb_uri with the actual URI of your MongoDB database.

4. **Start your local MongoDB Instance**
   Start MongoDB directly using the mongod command. First, ensure you have the default MongoDB data directory, which is /data/db. Create it with the correct permissions if it doesn't exist:
   ```bash
   sudo mkdir -p /data/db
   sudo chown `id -un` /data/db
   ``````
   Then start MongoDB:
   ```bash
   mongod
   ```
   If you installed MongoDB using Homebrew, you can start MongoDB as a service:
   ```bash
   brew services start mongodb-community
   ```
5.**Start the development server**

   ```bash
   npm run dev
   ```




