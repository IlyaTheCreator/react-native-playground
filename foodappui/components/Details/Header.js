import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../assets/colors';

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.headerLeft}>
          <Feather name="chevron-left" size={12} color={colors.textDark} />
        </View>
      </TouchableOpacity>

      <View style={styles.headerRight}>
        <MaterialCommunityIcons
          name="star"
          size={12}
          color={colors.white}
        />
      </View>
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
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
});

export default Header;
