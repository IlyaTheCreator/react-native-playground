import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Image
        source={require('../assets/images/profile.png')}
        style={styles.profileImage}
      />
      <Feather name="menu" size={24} color={colors.textDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});

export default Header;
