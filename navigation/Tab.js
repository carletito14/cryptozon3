import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Review from '../screens/Review/Review';
import Search from '../screens/Search/Search';
import Home from '../screens/Home/Home';
import { Image } from 'react-native';


const CustomTab = createBottomTabNavigator();


export default function Tab() {
    return (
        <CustomTab.Navigator
            screenOptions={{
                headerBackgroundContainerStyle: 'transparent'
            }}
        >
            <CustomTab.Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={require('../assets/icons/pin_drop.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                        />
                    )
                },
                // tabBarButton: (props) => (
                //     <TabBarCustomButton
                //         {...props}
                //     />
                // )
            }} />
            <CustomTab.Screen name='Search' component={Search} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={require('../assets/icons/pin_drop.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                        />
                    )
                }
            }} />
            <CustomTab.Screen name='Review' component={Review} options={{
                headerShown:false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <Image
                            source={require('../assets/icons/pin_drop.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? 'blue' : 'black'
                            }}
                        />
                    )
                }
            }} />
        </ CustomTab.Navigator>
    )
}