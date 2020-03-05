import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../components/LandingPage';
import Detail from '../components/Detail';
import TabNav from '../navigations/TabNav';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Login"
          headerMode="none"
        >
          <Stack.Screen name="Login" component={LandingPage} />
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}