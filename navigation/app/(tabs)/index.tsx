import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}