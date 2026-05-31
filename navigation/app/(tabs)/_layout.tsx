import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabsUI from '../../components/TabsUI'


export default function TabLayout() {
    return (
        <Tabs tabBar={(props) => <TabsUI {...props} />} />
    )
}