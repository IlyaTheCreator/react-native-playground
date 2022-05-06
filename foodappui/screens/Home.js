import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Categories from '../components/Home/Categories';
import Search from '../components/Home/Search';
import Popular from '../components/Home/Popular';
import Header from '../components/Home/Header';

import colors from '../assets/colors';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={styles.titlesWrapper}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.title}>Delivery</Text>
        </View>

        <Search />
        <Categories />
        <Popular navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.textDark,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
});

export default Home;
