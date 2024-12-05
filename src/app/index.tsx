import { FlatList, Text, View } from "react-native";
import { meditations } from "../data";
import { Meditation } from "../types";
import { MeditationListItem } from "../components/MeditationListItem";
// const mediation = meditations[0];

export default function HomeScreen() {
  return (
    <FlatList
      className="bg-white"
      contentContainerClassName="gap-8 p-3"
      data={meditations}
      renderItem={({ item }) => <MeditationListItem meditation={item} />}
    />
  );
}
