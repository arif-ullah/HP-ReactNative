import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderStyle from './HeaderStyle';
const restaurants = [
  { name: 'React Cafe', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant', address: '79 Food Place' },
  { name: 'Greggs Luxury Food', address: 'Every High St' }
];

const App = () => {
  return (
    <View>
      <Text style={HeaderStyle.header}>Restaurant Review</Text>
      {restaurants.map((place, i) => (
        <View key={i} style={[styles.row, { backgroundColor: i % 2 === 0 ? 'white' : '#eeeeee' }]}>
          <View style={styles.edges}>
            <Text>{i + 1}</Text>
          </View>
          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <Text>Info</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 5 },
  edges: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  nameAddress: { flexDirection: 'column', flex: 8 },
  address: { color: 'gray' }
});
