import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Ingredient from './Ingredient';

import colors from '../../../assets/colors';

const Ingredients = ({ ingredients }) => {
  const renderIngredientsItem = ({ item }) => {
    return <Ingredient item={item} />;
  };

  return (
    <View style={styles.ingredientsWrapper}>
      <Text style={styles.ingredientsTitle}>Ingredients</Text>
      <View style={styles.ingredientsListWrapper}>
        <FlatList
          data={ingredients}
          renderItem={renderIngredientsItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
});

export default Ingredients;
