import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Image } from 'react-native-elements';
import Home from '../components/Home';
import Setting from '../components/Setting';
import Detail from '../components/Detail';

const Tab = createBottomTabNavigator();
export default (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({color}) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = 'home';                    // if elsenya untuk menentukan page mana yang aktif dan menentukan logonya
                  } else if (route.name === 'Setting') {
                    iconName = 'account-box';
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={35} color={color} />;               
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: true // kalo false ga ada labelnya
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}
