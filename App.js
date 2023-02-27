import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';
import OnScreen from './screens/OnScreener';

import {  applyMiddleware} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './stores/rootReducer';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}
const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
  });

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null;
    }
    return (
        <Provider store={store}>
        <NavigationContainer theme={theme}
        
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                    
                }}
                initialRouteName={'OnScreener'}
                
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs}  
                    />
                       <Stack.Screen name="OnScreener" component={OnScreen}
                
                />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;