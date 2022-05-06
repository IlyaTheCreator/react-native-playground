import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, View, FlatList } from 'react-native';

import COLORS from '../assets/colors';
import onboard3 from '../assets/images/Onboard3.png';

const Person = ({ name }) => <Text>{name}</Text>;

const Home = ({ handleBackClick }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => {
        data.results.forEach(result => console.log(result.name));
        console.log('\n');

        setData(data.results);
        setLoaded(true);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View
            style={{
              marginTop: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onTouchEnd={handleBackClick}
          >
            <Text style={{ fontSize: 40, color: COLORS.blue }}>Home</Text>
            <Image source={onboard3} />
          </View>
        }
        renderItem={({ item }) => {
          console.log('IN RENDER:');
          console.log(item.name);
          console.log(data.length);

          return <Text>{item.name}</Text>;
        }}
        keyExtractor={item => item.created}
      />
    </SafeAreaView>
  );
};

export default Home;
