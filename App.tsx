import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import './global.css';

// import BubbleMenu from './components/BubbleMenu';
import { LinearGradient } from 'expo-linear-gradient';
import ExpandingMenu from './components/ExpandingMenu';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <LinearGradient
      colors={['#bfdbfe', '#dbeafe', '#eff6ff']}
      style={StyleSheet.absoluteFillObject}>
      <View className="flex-1 items-start justify-center gap-4 px-10 py-40">
        <Text className="text-4xl font-extrabold text-blue-600">Playground</Text>

        <TouchableOpacity className="flex-row items-center justify-center gap-5 bg-blue-600 p-4 rounded-xl" onPress={() => setCounter(counter + 1)}>
          <Text className='text-white text-xl font-bold'>{counter}</Text>
        </TouchableOpacity>
        <ExpandingMenu />
      </View>
    </LinearGradient>
  );
}
