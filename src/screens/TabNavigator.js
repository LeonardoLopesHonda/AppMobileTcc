import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// icons imports
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import RoutineScreen from './RoutineScreen';
import OptionsScreen from './OptionsScreen';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
            }} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

const TabNavigator = ({navigation}) => {
    return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {backgroundColor: "#AD40AF"},
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: 'yellow'
            }}>
                <Tab.Screen name="Home2" component={HomeScreen} options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={24} color="#fff" />
                    ),
                    headerShown: false
                }} />
                <Tab.Screen name="Routine" component={RoutineScreen} options={{
                    tabBarIcon: () => (
                        <AntDesign name="calendar" size={24} color="#fff" />
                    ),
                    title: "Gerenciamento de Rotinas",
                    headerShown: false
                }} />
                <Tab.Screen name="Options" component={OptionsScreen} options={{
                    tabBarIcon: () => (
                        <Feather name="settings" size={24} color="#fff" />
                    ),
                    title: "Configurações",
                    headerShown: false
                }} />
            </Tab.Navigator>
    )
}

export default TabNavigator;