import { Slot, Stack } from "expo-router";
import "../../global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Medical",
          headerTitleAlign: "center", // Aligns the title to the center
          headerTitleStyle: {
            fontWeight: "bold", // Optional: Customize title font weight
            fontSize: 24, // Optional: Customize title font size
          },
        }}
      />
      <Stack.Screen
        name="meditation/[id]"
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
