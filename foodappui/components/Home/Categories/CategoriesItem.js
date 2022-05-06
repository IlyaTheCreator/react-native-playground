import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors';

const CategoriesItem = ({ item }) => {
  return (
    <View
      style={[
        styles.categoryItemWrapper,
        {
          backgroundColor: item.selected ? colors.primary : colors.white,
        },
      ]}
    >
      <Image style={styles.categoryItemImage} source={item.image} />
      <Text style={styles.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categorySelectWrapper,
          {
            backgroundColor: item.selected
              ? colors.white
              : colors.secondary,
          },
        ]}
      >
        <Feather
          name="chevron-right"
          size={8}
          color={item.selected ? colors.black : colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemWrapper: {
    backgroundColor: 'colors.primary',
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  categoryItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginBottom: 10,
  },
  categorySelectWrapper: {
    marginTop: 20,
    marginBottom: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesItem;
