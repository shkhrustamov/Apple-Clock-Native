import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import WorldClock from "./Screens/WorldClock";
import Alarms from "./Screens/Alarms";
import Stopwatch from "./Screens/Stopwatch";
import Timers from "./Screens/Timers";
import {Text} from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigation () {
    return (
        <Tab.Navigator screenOptions={{
                           tabBarActiveTintColor: '#FF9F0A',
                           tabBarStyle: {backgroundColor: "#000000", borderTopWidth: 0, borderColor: '#000000'},
                       }}
        >
            <Tab.Screen
                name="WorldClock"
                component={WorldClock}
                options={{
                    tabBarLabel: 'WorldClock',
                    headerStyle: { backgroundColor: 'rgba(0, 0, 0, 1)', borderBottomWidth: 0},
                    headerTitle: 'Edit',
                    headerTitleStyle: {
                        color: '#FF9F0A',
                        borderColor: '#000000'
                    },
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name="plus"
                            color="#FF9F0A"
                            size={24}
                            style={{ marginRight: 10 }}
                        />
                    ),
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
                    headerTitle: 'Edit',
                    headerStyle: { backgroundColor: 'rgba(0, 0, 0, 1)',borderBottomWidth: 0 },
                    headerTitleStyle: {
                        color: '#FF9F0A',
                    },
                    headerTitleAlign: 'left',
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name="plus"
                            color="#FF9F0A"
                            size={24}
                            style={{ marginRight: 10 }}
                        />
                    ),
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
                    headerStyle: { backgroundColor: 'rgba(0, 0, 0, 1)',borderBottomWidth: 0 },
                    headerTitle: '',
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
                    headerStyle: { backgroundColor: 'rgba(0, 0, 0, 1)',borderBottomWidth: 0 },
                    headerTitle: '',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clock-time-seven-outline" color={color} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;
