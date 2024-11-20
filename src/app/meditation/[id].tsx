import { Link, router, useLocalSearchParams } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { SafeAreaView } from 'react-native-safe-area-context';

import { meditations } from '@/data';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found!</Text>;
  }

  return (
    <SafeAreaView className="bg-sky-600 flex-1 p-2 justify-between">
      {/* Page content */}
      <View className="flex-1">
        {/* Top part of the screen */}
        <View className="bg-sky-300 flex-1">
          {/* Header */}
          <View className="flex-row items-center justify-between p-10">
            <AntDesign name="infocirlceo" size={24} color="black" />

            <View className="bg-zinc-800 p-2 rounded-md">
              <Text className="text-zinc-100 font-semibold">
                Today's Meditation
              </Text>
            </View>

            <AntDesign
              onPress={() => router.back()}
              name="close"
              size={26}
              color="black"
            />
          </View>

          <Text className="text-3xl text-center text-zinc-800 font-bold">
            {meditation?.title}
          </Text>
        </View>

        {/* Middle part of the screen */}
        <View className="bg-sky-500 flex-1 justify-center items-center">
          {/* Play/Pause Button */}
          {/* <Pressable
            onPress={() => (player.playing ? player.pause() : player.play())}
            className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center"
          >
            <FontAwesome6
              name={status.playing ? 'pause' : 'play'}
              size={24}
              color="snow"
            />
          </Pressable> */}
          <FontAwesome6
              name='play'
              size={24}
              color="snow"
            />
        </View>

        {/* Bottom part of the screen */}
        <View className="flex-1">
          {/* Footer: Player */}
          <View className="p-5 mt-auto gap-5">
            <View className="flex-row justify-between">
              <MaterialIcons name="airplay" size={24} color="black" />
              <MaterialCommunityIcons name="cog-outline" size={24} color="black" />
            </View>

            {/* Playback Indicator */}
            <View>
              {/* <View className="bg-blue-400 h-2" /> */}
              <Slider
                style={{width: "100%", height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#7dd4fc"
                maximumTrackTintColor="#000000"
                thumbTintColor="#7dd4fc"
              />
            </View>

            {/* Timer */}
            <View className="flex-row justify-between">
              <Text className="text-sky-100">
                1:11
              </Text>
              <Text className="text-sky-100">
                11:11
              </Text>
            </View>

          </View>
          
        </View>
      </View>
      
    </SafeAreaView>
  );
}
