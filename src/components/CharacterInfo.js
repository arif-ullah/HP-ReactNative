import React, { Fragment } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from 'react-native';

const CharacterInfo = props => {
  const { character } = props.navigation.getParam('character');
  console.log(character);
  return (
    <ScrollView style={styles.root}>
      <View style={styles.infoHeader}>
        <Image
          source={{
            uri: character.image
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.address}>{character.house}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterInfo;

CharacterInfo.navigationOptions = {
  title: 'Character Info'
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  infoHeader: {
    flexDirection: 'row'
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 24
  },
  address: {
    color: 'grey',
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
