import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import COLORS from '../assets/colors';

const OnboardSlide = ({ image, title, text }) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    verticalMargin: 60,
  },
  title: {
    fontSize: 24,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: COLORS.gray,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
});

export default OnboardSlide;
