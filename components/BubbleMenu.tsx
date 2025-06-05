import { Pressable, View, Text, TouchableOpacity} from 'react-native';
import { SFSymbol, SymbolView } from 'expo-symbols';
import { useState } from 'react';
import Animated, { FadeIn, FadeOut, LinearTransition, interpolate } from 'react-native-reanimated';

const exampleOptions: { icon: SFSymbol; text: string; onPress: () => void }[] = [
  { icon: 'macbook', text: 'MacBook', onPress: () => {} },
  { icon: 'airpods.max', text: 'AirPods Max', onPress: () => {} },
  { icon: 'airpod.gen3.left', text: 'AirPods Gen 3', onPress: () => {} },
];


export default function BubbleMenu({
  options = exampleOptions,
  radius = 100,
  size = 60,
}: {
  options?: { icon: SFSymbol; text: string; onPress: () => void }[];
  radius?: number;
  size?: number;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <Pressable
      className="absolute inset-0"
      onPress={() => setExpanded(false)}
      pointerEvents={expanded ? 'auto' : 'box-none'}>
      {expanded && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          className="absolute inset-0 bg-[#bfdbfe50]"
        />
      )}

      <View className="absolute bottom-10 right-10">
        {options.map(({ icon, text, onPress }, i) => (
          <TouchableOpacity key={icon} onPress={onPress}>
            <Animated.View
              layout={LinearTransition.springify().mass(2).restSpeedThreshold(100)
                .delay(i * 100)}
              className="absolute aspect-square -translate-x-[50%] -translate-y-[50%] items-center justify-center overflow-hidden rounded-full bg-white p-2"
              style={{
                width: size,
                left: expanded
                  ? radius *
                      Math.cos(interpolate(i, [0, options.length - 1], [Math.PI, Math.PI / 2])) +
                    size / 2
                  : size / 2,
                top: expanded
                  ? radius *
                      -Math.sin(interpolate(i, [0, options.length - 1], [Math.PI, Math.PI / 2])) +
                    size / 2
                  : size / 2,
              }}>
              <SymbolView name={icon} size={18} tintColor={'#1d4ed8'} />
              <Text className="text-center text-xs leading-none text-blue-700">
                {text}
              </Text>
            </Animated.View>
          </TouchableOpacity>
        ))}

        <Pressable onPress={() => setExpanded((expanded) => !expanded)}>
          <View
            className="aspect-square items-center justify-center rounded-full bg-blue-200"
            style={{ width: size }}>
            <SymbolView name="ellipsis" size={28} tintColor={'#1d4ed8'} />
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
}
