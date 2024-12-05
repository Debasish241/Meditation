import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { meditations } from "../../data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import audio from "../../../assets/meditations/audio1.mp3";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const player = useAudioPlayer(audio);
  const status = useAudioPlayerStatus(player);
  const meditation = meditations.find((m) => m.id === Number(id));

  const formatSeconds = (miliseconds: number) => {
    const minutes = Math.floor(miliseconds / 60000);
    const seconds = Math.floor((miliseconds % 60000) / 1000);
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  if (!meditation) {
    return <Text>Meditation not found!</Text>;
  }

  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      <View className="flex-1">
        <View className="p-5 mt-auto gap-5">
          <View className="flex-row justify-between p-10 items-center w-full">
            <AntDesign
              onPress={() => router.back()}
              name="infocirlceo"
              size={24}
              color="black"
            />
            <View className="bg-zinc-800 p-2 rounded-md">
              <Text className="text-zinc-100 font-semibold">
                Today's meditation
              </Text>
            </View>
            <AntDesign
              onPress={() => router.back()}
              name="close"
              size={26}
              color="black"
            />
          </View>
          <Text className="text-3xl mt-20 text-center text-zinc-800 font-semibold">
            {meditation?.title}
          </Text>
        </View>

        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          className="bg-zinc-800 self-center w-20 aspect-square  rounded-full items-center justify-center"
        >
          <FontAwesome6
            name={status.playing ? "pause" : "play"}
            size={24}
            color="snow"
          />
        </Pressable>

        <View className=" flex-1">
          <View className="p-5 mt-auto">
            <View className="flex-row justify-between w-full">
              <MaterialIcons name="airplay" size={24} color="#3A3937" />
              <MaterialCommunityIcons
                name="cog-outline"
                size={24}
                color="#3A3937"
              />
            </View>
            {/* playback indicator */}
            <View>
              <Slider
                style={{ width: "100%", height: 40 }}
                value={status.currentTime / status.duration}
                onSlidingComplete={(value) =>
                  player.seekTo(value * status.duration)
                }
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3A3937"
                thumbTintColor="#3A3937"
                maximumTrackTintColor="#3A393755"
              />
            </View>
            <View className="flex-row justify-between">
              <Text>{formatSeconds(status.currentTime)}</Text>
              <Text>{formatSeconds(status.duration)}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
