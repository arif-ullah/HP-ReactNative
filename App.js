import React, { Fragment } from 'react';
import { getData } from './api';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image } from 'react-native';
import Header from 'components/Header';
import RestaurantRow from 'components/RestaurantRow';
import Snape from 'images/Snape.jpg';

class App extends React.Component {
  state = {
    search: '',
    characters: []
  };

  async componentDidMount() {
    try {
      const response = await getData('/characters');
      this.setState({ characters: response.data });
    } catch (err) {
      console.log(`error`, err);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ marginop: 30, alignItems: 'center' }}>
          <Image source={Snape} />
        </View>
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
          data={this.state.characters.filter(
            char => !this.state.search || char.name.toLowerCase().includes(this.state.search)
          )}
          renderItem={({ item, index }) => <RestaurantRow character={item} i={index} />}
          keyExtractor={item => item.name}
          initialNumToRender={5}
          enableEmptySections={true}
        />
      </ScrollView>
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
