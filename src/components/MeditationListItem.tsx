import { Text, View } from "react-native";
import { Meditation } from "../types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export function MeditationListItem({ meditation }: { meditation: Meditation }) {
  return (
    <View className="p-5 border-2 border-gray-300 rounded-2xl">
      <Text className="font-semibold text-2xl ">{meditation.title}</Text>
      <View className="flex-row items-center gap-1">
        <FontAwesome6 name="clock" size={24} color="black" />
        <Text className="text-gray-600">{meditation.duration} min</Text>
      </View>
    </View>
  );
}
