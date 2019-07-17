import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from 'components/Header';
const restaurants = [
  { name: 'React Cafe', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant', address: '79 Food Place' },
  { name: 'Greggs Luxury Food', address: 'Every High St' }
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
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#444',
    backgroundColor: '#eee'
  }
});
