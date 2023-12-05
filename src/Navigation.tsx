import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import WorldClock from "./Screens/WorldClock";
import Alarms from "./Screens/Alarms";
import Stopwatch from "./Screens/Stopwatch";
import Timers from "./Screens/Timers";

const Tab = createBottomTabNavigator();

function TabNavigation () {
    return (
        <Tab.Navigator initialRouteName="Feed"
                       screenOptions={{
                           tabBarActiveTintColor: '#FF9F0A',
                           // tabBarActiveBackgroundColor: '#000',
                           // tabBarInactiveBackgroundColor: '#000',
                           tabBarStyle: {backgroundColor: "#000000"}
                       }}
        >
            <Tab.Screen
                name="WorldClock"
                component={WorldClock}
                options={{
                    tabBarLabel: 'WorldClock',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="web" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Alarms"
                component={Alarms}
                options={{
                    tabBarLabel: 'Alarms',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alarm" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Stopwatch"
                component={Stopwatch}
                options={{
                    tabBarLabel: 'Stopwatch',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="timer" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Timers"
                component={Timers}
                options={{
                    tabBarLabel: 'Timers',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clock-time-seven-outline" color={color} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;
