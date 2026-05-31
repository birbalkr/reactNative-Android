import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function About() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>About </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}