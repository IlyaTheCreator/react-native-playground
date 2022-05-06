import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

import OnboardSlide from './OnboardSlide';

import COLORS from '../assets/colors';

const slides = [
  {
    key: 'one',
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    key: 'two',
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    key: 'three',
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('../assets/images/Onboard3.png'),
  },
];

const Onboard = ({ handleDone }) => {
  const renderItem = ({ item }) => (
    <OnboardSlide title={item.title} text={item.text} image={item.image} />
  );

  const renderDoneButton = () => (
    <LinearGradient
      colors={[COLORS.blueFaded, COLORS.blue]}
      style={styles.doneBtnWrapper}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.doneButtonText}>Done</Text>
    </LinearGradient>
  );

  const renderNextButton = () => (
    <View style={{ ...styles.textWrapper, marginRight: 20 }}>
      <Text style={styles.text}>Next</Text>
    </View>
  );

  const renderPrevButton = () => (
    <View style={{ ...styles.textWrapper, marginLeft: 20 }}>
      <Text style={styles.text}>Prev</Text>
    </View>
  );

  return (
    <>
      <StatusBar transluent backgroundColor="transparent" />

      <View style={{ flex: 1 }}>
        <AppIntroSlider
          keyExtractor={item => item.key}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton
          data={slides}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onDone={handleDone}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: COLORS.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: COLORS.blue,
  },
  textWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.blue,
    fontFamily: 'OpenSans-SemBold',
    fontSize: 14,
  },
  doneBtnWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    marginRight: -40,
    borderRadius: 25,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    margin: 10,
    color: COLORS.white,
  },
});

export default Onboard;
