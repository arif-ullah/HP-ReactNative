import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class RestaurantRow extends React.Component {
  render() {
    const { place, i } = this.props;
    return (
      <View key={i} style={[styles.row, { backgroundColor: i % 2 === 0 ? 'white' : '#eeeeee' }]}>
        <View style={styles.edges}>
          <Text>{i + 1}</Text>
        </View>
        <View style={styles.nameAddress}>
          <Text>{place.name}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <View style={styles.edges}>
          <Button title="info" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', padding: 8 },
  edges: { flex: 1, justifyContent: 'center', alignItems: 'center', minWidth: 50 },
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
