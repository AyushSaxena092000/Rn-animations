import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const App3 = () => {
  const animation = useSharedValue(0);
  const[isDay, setIsDay] = useState(true);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: 150,
          heigth: 50,
          borderRadius: 30,
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: isDay ? 'white': 'black'
        }}
        onPress={() => {
          if (animation.value == 0) {
            animation.value = withTiming(100, {duration: 500})
            setIsDay(false)
          } else {
            animation.value = withTiming(0, {duration: 500})
            setIsDay(true)
          }
        }}>
        <Animated.View
          style={[{width: 40, height: 40, borderRadius: 20}, animatedStyle]}>
          <Image
            source={isDay ? require('./src/Images/day.png') : require('./src/Images/night.png') }
            style={{width: '100%', height: '100%'}}
          />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity><Text>Ayush</Text></TouchableOpacity>
    </View>
  );
};

export default App3; 
