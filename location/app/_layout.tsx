import { Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayoutNav() {
  return (
    // <View style={{ flex: 1 }}>
    //   {/* <Stack>
    //     <Stack.Screen name="(tabs)" />
    //   </Stack> */}
    //   {/* <Slot /> */}
    //   <Stack screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="(tabs)"/>
    //   </Stack>
    // </View>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
