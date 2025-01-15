import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const ProgressBar = () => {
  const dot1Scale = useSharedValue(1);
  const dot2Scale = useSharedValue(1);
  const dot3Scale = useSharedValue(1);

  React.useEffect(() => {
    dot1Scale.value = withRepeat(withTiming(2, {duration: 600}), -1, true);

    dot2Scale.value = withDelay(
      200,
      withRepeat(withTiming(2, {duration: 600}), -1, true),
    );

    dot3Scale.value = withDelay(
      400,
      withRepeat(withTiming(2, {duration: 600}), -1, true),
    );
  }, []);

  const dot1Style = useAnimatedStyle(() => ({
    transform: [{scale: dot1Scale.value}],
    opacity: dot1Scale.value > 1 ? 1 : 0.5,
  }));

  const dot2Style = useAnimatedStyle(() => ({
    transform: [{scale: dot2Scale.value}],
    opacity: dot2Scale.value > 1 ? 1 : 0.5,
  }));

  const dot3Style = useAnimatedStyle(() => ({
    transform: [{scale: dot3Scale.value}],
    opacity: dot3Scale.value > 1 ? 1 : 0.5,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>
        <Animated.View style={[styles.dot, dot1Style]} />
        <Animated.View style={[styles.dot, dot2Style]} />
        <Animated.View style={[styles.dot, dot3Style]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default ProgressBar;
