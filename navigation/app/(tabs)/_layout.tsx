import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons"


export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                
                options={{
                    title:"Home",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen name="about" options={{
                title: "About",
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerTitle: "Profile",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" color={color} size={size} />
                ),
            }} />
            <Tabs.Screen name="setting"
             options={{
                title: "Settings",
                headerTitle: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" color={color} size={size} />
                ),
            }} />
        </Tabs>
    )
}