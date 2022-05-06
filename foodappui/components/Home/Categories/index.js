import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import CategoriesItem from './CategoriesItem';

import categoriesData from '../../assets/data/categoriesData';
import colors from '../../assets/colors';

const Categories = () => {
  const renderCategoriesItem = ({ item }) => (
    <CategoriesItem item={item} />
  );

  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoriesItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.black,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});

export default Categories;
