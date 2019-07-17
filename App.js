import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Header from 'components/Header';
const restaurants = [
  { name: 'React Cafez', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant', address: '79 Food Place' },
  { name: 'Greggs Luxury Food', address: 'Every High St' },
  { name: 'React Cafe1', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant1', address: '79 Food Place' },
  { name: 'Greggs Luxury Food1', address: 'Every High St' },
  { name: 'React Cafe2', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant2', address: '79 Food Place' },
  { name: 'Greggs Luxury Food2', address: 'Every High St' },
  { name: 'React Cafe3', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant3', address: '79 Food Place' },
  { name: 'Greggs Luxury Food3', address: 'Every High St' },
  { name: 'React Cafe4', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant4', address: '79 Food Place' },
  { name: 'Greggs Luxury Food4', address: 'Every High St' },
  { name: 'React Cafe5', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant5', address: '79 Food Place' },
  { name: 'Greggs Luxury Food5', address: 'Every High St' },
  { name: 'React Cafe6', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant6', address: '79 Food Place' },
  { name: 'Greggs Luxury Food6', address: 'Every High St' }
];

class App extends React.Component {
  state = {
    search: ''
  };

  render() {
    return (
      <View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text });
          }}
          value={this.state.search}
        />
        <ScrollView style={{ paddingTop: 30 }}>
          {restaurants
            .filter(place => !this.state.search || place.name.toLowerCase().includes(this.state.search))
            .map((place, i) => (
              <View key={i} style={[styles.row, { backgroundColor: i % 2 === 0 ? 'white' : '#eeeeee' }]}>
                <View style={styles.edges}>
                  <Text>{i + 1}</Text>
                </View>
                <View style={styles.nameAddress}>
                  <Text>{place.name}</Text>
                  <Text style={styles.address}>{place.address}</Text>
                </View>
                <View style={styles.edges}>
                  <Text>Info ></Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 5 },
  edges: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  nameAddress: { flexDirection: 'column', flex: 8 },
  address: { color: 'gray' },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#444',
    backgroundColor: '#eee'
  }
});
