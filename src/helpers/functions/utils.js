import Animated, { Easing } from 'react-native-reanimated';

const { Value, clockRunning, stopClock, startClock, set, cond, timing } =
  Animated;

export const runTiming = (clock, value, dest, config = {}) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const timingConfig = {
    duration: 200,
    toValue: new Value(0),
    easing: Easing.ease,
    ...config
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(timingConfig.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, timingConfig),
    cond(state.finished, stopClock(clock)),
    state.position
  ];
};

export const handlePixels = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

export const SliderImages = () => {
  const images = [
    'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/07/musocal-1467633431.jpg',
    'https://www.designhill.com/design-blog/wp-content/uploads/2019/10/Top-10-Ways-To-Promote-Your-Music-Band-In-2021.jpg',
    'https://i.pinimg.com/originals/92/a6/95/92a6952be8747f7896441369dd17b5f4.jpg',
    'https://cdn.shopify.com/s/files/1/2929/5648/files/my-band_large.jpg?v=1531312528'
  ];

  return images;
};
export const convertToNumber = textNumber =>
  textNumber ? parseFloat(textNumber.replace(',', '.')) : 0;
