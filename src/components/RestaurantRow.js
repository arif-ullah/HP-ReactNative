import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

export default class RestaurantRow extends React.Component {
  state = {
    showInfo: false
  };

  infoPressed = () => {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  };

  render() {
    const { place, i } = this.props;
    return (
      <View key={i} style={[{ backgroundColor: i % 2 === 0 ? 'white' : '#eeeeee' }]}>
        <View style={styles.row}>
          <View style={styles.edges}>
            <Text>{i + 1}</Text>
          </View>
          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
          </View>
          <View style={styles.edges}>
            <TouchableHighlight onPress={this.infoPressed} style={styles.button} underlayColor="#5938dc">
              <Text style={styles.buttonText}>Info</Text>
            </TouchableHighlight>
          </View>
        </View>
        {this.state.showInfo && (
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
          </View>
        )}
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
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: { color: '#0066cc', fontSize: 12 },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4
  }
});
