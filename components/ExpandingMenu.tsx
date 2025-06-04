import { Pressable, TouchableOpacity } from 'react-native';
import { SFSymbol, SymbolView } from 'expo-symbols';
import { useState } from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

const exampleOptions: { icon: SFSymbol; text: string; onPress: () => void }[] = [
  { icon: 'macbook', text: 'MacBook', onPress: () => {} },
  { icon: 'airpods.max', text: 'AirPods Max', onPress: () => {} },
  { icon: 'airpod.gen3.left', text: 'AirPods Gen 3', onPress: () => {} },
];

const transition = LinearTransition.springify().mass(0.8);

export default function ExpandingMenu({
  options = exampleOptions,
}: {
  options?: { icon: SFSymbol; text: string; onPress: () => void }[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable
      className="absolute inset-0"
      onPress={() => setExpanded(false)}
      pointerEvents={expanded ? 'auto' : 'box-none'}>
      
      {expanded && <Animated.View entering={FadeIn} exiting={FadeOut} className='bg-[#bfdbfe50] absolute inset-0'/>}

      <Animated.View
        layout={transition}
        className={`absolute bottom-32 right-10 items-end justify-end ${expanded ? 'gap-2' : ''} overflow-hidden rounded-2xl bg-blue-200 p-4`}>
        <Animated.View className="items-end" layout={transition}>
          <Pressable onPress={() => setExpanded((expanded) => !expanded)}>
            <SymbolView name="ellipsis" size={28} tintColor={'#1d4ed8'} />
          </Pressable>
        </Animated.View>

        <Animated.View layout={transition} className={`overflow-hidden rounded-2xl gap-2 ${expanded ? '' : 'h-0 w-0'}`}>
          {options.map(({ icon, text, onPress }) => (
            <TouchableOpacity key={text} onPress={onPress}>
              <Animated.View
                layout={transition}
                className={`flex-row items-center justify-between gap-6 overflow-hidden rounded-2xl bg-blue-100 p-4  ${expanded ? '' : 'h-0 w-0'}`}>
                <SymbolView name={icon} size={20} tintColor={'#1d4ed8'} />
                <Animated.Text className="text-right text-xl text-blue-700">{text}</Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}
