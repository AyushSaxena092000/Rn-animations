import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const App = () => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{scale: animation.value}]};
    // we can use rotate also in place of scale we can also use translateX and translateY
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'orange'},
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={styles.text}
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(1, {});
            // withTiming we can also use here for annimations
          } else {
            animation.value = withSpring(0.5, {});
          }
          setClicked(!clicked);
        }}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
