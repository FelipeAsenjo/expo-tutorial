import { ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // useSharedValue helps to mutate data and runs animations based on the current value.
  // We can access and modify the shared value using the .value property.
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // animated style
  const imageStyle = useAnimatedStyle(() => {
    return {
      // withSpring uses spring real physics to animate the transitions
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  // define a gesture
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
  });

  return (
    <Animated.View style={{ top: -350 }}>
      {/* Detect desirable gesture */}
      <GestureDetector gesture={ doubleTap }>
        {/* Animated components use the components styles to determine which values to animate */}
        {/* Animated exports Animated.View, Animated.Text, Animated.ScrollView among others */}
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, {width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </Animated.View>
  );
}
