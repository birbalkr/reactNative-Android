import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(swipe)" options={{ headerShown:false }} />
    {/* <Stack.Screen name="about" options={{ headerTitle: "About" }} /> */}
  </Stack>
}
