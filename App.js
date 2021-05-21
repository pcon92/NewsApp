import 'react-native-gesture-handler';
import React, {useState} from 'react';

import Home from './app/screens/Home';
import Details from './app/screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


// to allow navigation between two screens
const Stack = createStackNavigator();

const App = () => {

    const [article, setArticle] = useState([]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={
                    {headerShown: false}
            }>
                <Stack.Screen name="Home">
                    {
                    props => <Home {...props}
                        article={article}
                        setArticle={setArticle}/>
                }</Stack.Screen>
                <Stack.Screen name="Details">
                    {
                    props => <Details {...props}
                        article={article}
                        setArticle={setArticle}/>
                }</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default App;
