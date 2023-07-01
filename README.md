## Refill - Mobile Application
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This is a mobile app where smart fuel filling station users will use to access it services.

### Getting Started


### Prerequisites

#### System Requirement

    - Node - version 18+
    - React-Native - 0.68+
    - React - 17.0+
    - Expo - 45.0+


#### Environment Setup

- React-Native Documetation - [Expo CLI Quickstart](https://reactnative.dev/docs/environment-setup)

Clone this repository to your local machine after following the above instruction.

```
git clone https://github.com/asantaelly/smart_station_mobile_app.git
```

### Installation

Install project dependencies

```
npm install
```

Install ngrok so you can host your local service ie [Web app](https://github.com/asantaelly/smart_station_web_app)

  - After installing ngrok start your web app local and run the following command
  
  ```
   ngrok http http://127.0.0.1:8000
  ```
  - Copy a url generated by ngrok command.
 
Copy .env.example to .env and add url generated by ngrok
  
Install Expo Go app for ios or Adroid.

- [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) - Android Lollipop (5) and greater
- [iOS App Store](https://apps.apple.com/app/expo-go/id982107779) -  iOS 11 and greater

 
 -After install expo go app, Connect you phone to you computer using usb as explained in Environment setup.
 
 Now you can start your app
 ```
 npm start
 ```

## License

* **GNU General** - [License](https://github.com/asantaelly/smart_station_mobile_app/blob/main/LICENSE.md) 

