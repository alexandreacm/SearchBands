import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';

import colors from '@/theme/colors';

const SliderMarketing = ({ items }) => {
  return (
    <View>
      <SliderBox
        images={items}
        sliderBoxHeight={150}
        dotColor={colors.COLOR_WHITE}
        inactiveDotColor='#90A4AE'
        paginationBoxVerticalPadding={10}
        autoplay
        circleLoop
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)'
        }}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10
        }}
        ImageComponentStyle={{
          width: 340,
          marginTop: 10,
          borderRadius: 10
        }}
        imageLoadingColor='#FFF'
      />
    </View>
  );
};

SliderMarketing.defaultProps = {
  items: []
};

SliderMarketing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node
    })
  )
};

export default SliderMarketing;
