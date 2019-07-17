import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
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
  { name: 'Fancy Restaurant45', address: '79 Food Place' },
  { name: 'Greggs Luxury Food45', address: 'Every High St' },
  { name: 'React Cafe55', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant55', address: '79 Food Place' },
  { name: 'Greggs Luxury Food55', address: 'Every High St' },
  { name: 'React Cafe650', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant69', address: '79 Food Place' },
  { name: 'Fancy Restaurant25', address: '79 Food Place' },
  { name: 'Greggs Luxury Food25', address: 'Every High St' },
  { name: 'React Cafe35', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant35', address: '79 Food Place' },
  { name: 'Greggs Luxury Food35', address: 'Every High St' },
  { name: 'React Cafe49', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant47', address: '79 Food Place' },
  { name: 'Greggs Luxury Food49', address: 'Every High St' },
  { name: 'React Cafe559', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant59', address: '79 Food Place' },
  { name: 'Greggs Luxury Food55', address: 'Every High St' },
  { name: 'React Cafe del bar', address: '123 Anywhere St' },
  { name: 'Fancy Restaurant so fancy', address: '79 Food Place' },
  { name: 'Greggs Luxury Food Express', address: 'Every High St' }
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
        <FlatList
          style={{}}
          data={restaurants.filter(place => !this.state.search || place.name.toLowerCase().includes(this.state.search))}
          renderItem={({ item, index }) => <RestaurantRow place={item} i={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={5}
          enableEmptySections={true}
        />
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
