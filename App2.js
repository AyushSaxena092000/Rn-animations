import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const App2 = () => {
  const animation = -useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animation.value == 1 ? 100 : 200,
      height: animation.value == 1 ? 100 : 200,
    };
  });
  return (
    // Interpolate
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'orange',
          },
          animatedStyle,
        ]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            animation.value = 0;
          }}>
          <Text>Start Animation</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default App2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {},
  button: {
    width: 200,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
});
