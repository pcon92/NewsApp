# NewsApp
An app to check a hub of news articles from News API built with React-Native CLI

Name: Paul C


Packages used with notes:

    "react": "17.0.1"                                 // core
    "react-native": "0.64.1"                          // core

    "react-native-dotenv": "^2.5.5"                   // to create and read .env file to store API key 

    "@react-navigation/native": "^5.9.4"              // to allow for two home screens that can be navigated between 

    "react-native-gesture-handler": "^1.10.3"         // dependency of react-navigation/native
    "react-native-reanimated": "^2.1.0",              // dependency of react-navigation/native
    "react-native-safe-area-context": "^3.2.0"        // dependency of react-navigation/native
    "react-native-screens": "^3.2.0"                  // dependency of react-navigation/native
    "@react-native-community/masked-view": "^0.1.11"  // dependency of react-navigation/native
    "@react-navigation/stack": "^5.14.5"              // to allow transition between screens 


Other Comments:

My first time using React-Native to build an app.  

Setting up Android Studio as an emulator took more time than expected due to some issues with gradle and JDK 16 so I had to revert to JDK 8 (which was suggested on React-Native setup docs).  This ensured that I was using react-native CLI as opposed to using platforms like Expo which seem to be a favourite for online tutorials.

I was able to use my React knowledge gained from building a previous app to help with the majority of the code including API requests, and then had to look up documentation to figure out how to have two screens that can be navigated between.  The package that I found was React-Navigation as this allowed me to create a Screen stack that can be navigated between and also to pass through set State functions as props and simplify my code.

I had a brief look into how to incorporate Pull-to-Refresh and how to add Linking to allow the article to open in the device's browser however these would both have pushed me well over the suggested time.  I plan to expand on this project next week when I am free to include both of these features so that I can learn how they work.

Due to time limitations I was unable to set up an IOS emulator to test the app.  I plan to do this next week.  I also only could apply basic styling, and would like to improve the styling gradually, particularly fixing the first articles visible displacement and the details screen layout.

UPDATE 02/06/21: merged branch "extra-features" to main
