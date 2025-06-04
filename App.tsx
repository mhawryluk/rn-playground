import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import './global.css';

import BubbleMenu from './components/BubbleMenu';
import { LinearGradient } from 'expo-linear-gradient';
import ExpandingMenu from './components/ExpandingMenu';

export default function App() {
  return (
    <LinearGradient
      colors={['#bfdbfe', '#dbeafe', '#eff6ff']}
      style={StyleSheet.absoluteFillObject}>
      <View className="flex-1 justify-center gap-4 px-10 py-40">
        <TouchableOpacity
          className="h-72 flex-row items-center justify-center gap-5 rounded-2xl border-blue-500 border-2 p-4"
          onPress={() => {}}>
          <Text className="text-3xl font-extrabold text-blue-500 opacity-90">Playground</Text>
        </TouchableOpacity>
        <ExpandingMenu />
        <BubbleMenu />
      </View>
    </LinearGradient>
  );
}
