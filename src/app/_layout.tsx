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
          //   headerStyle: {
          //     backgroundColor: "#fff", // Optional: Add a background color to the header
          //   },
          headerTitleStyle: {
            fontWeight: "bold", // Optional: Customize title font weight
            fontSize: 24, // Optional: Customize title font size
          },
        }}
      />
    </Stack>
  );
}
