import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Details/Header';
import PizzaInfo from '../components/Details/PizzaInfo';
import Ingredients from '../components/Details/Ingredients';
import OrderButton from '../components/Details/OrderButton';

import colors from '../assets/colors';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Header navigation={navigation} />

        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

        <PizzaInfo item={item} />
        <Ingredients ingredients={item.ingredients} />
        <OrderButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
  },
});

export default Details;
