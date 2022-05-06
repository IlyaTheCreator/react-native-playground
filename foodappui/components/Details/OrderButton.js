import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors';

const OrderButton = () => {
  return (
    <TouchableOpacity onPress={() => alert('Your order has been placed')}>
      <View style={styles.orderWrapper}>
        <Text style={styles.orderText}>Place an order</Text>
        <Feather name="chevron-right" size={18} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orderWrapper: {
    marginVertical: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 10,
  },
});

export default OrderButton;
