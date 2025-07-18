import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    {/* stack.screen es el titulo de la vista */}
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="about" options={{ title: 'About' }} />
  </Stack>;
}
