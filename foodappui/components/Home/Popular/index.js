import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import PopularItem from './PopularItem';

import popularData from '../../../assets/data/popularData';

const Popular = ({ navigation }) => {
  return (
    <View style={styles.popularWrapper}>
      <Text style={styles.popularTitle}>Popular</Text>
      {popularData.map(item => (
        <PopularItem
          onPress={() => navigation.navigate('Details', { item })}
          key={item.id}
          item={item}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  popularWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
});

export default Popular;
