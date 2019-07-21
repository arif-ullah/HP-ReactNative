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
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const About = () => {
  return (
    <ScrollView style={styles.root}>
      <View>
        <Text style={{ color: '#333', fontSize: 24, textAlign: 'center', marginTop: 20 }}>Hogwarts</Text>
      </View>

      <View>
        <Icon name="fort-awesome" size={100} color="#0066cc" style={{ marginVertical: 20, alignSelf: 'center' }} />
        <Text style={{ textAlign: 'center' }}>This is Hogwarts School of Witchcraft and Wizardry</Text>
      </View>
    </ScrollView>
  );
};

export default About;

About.navigationOptions = {
  title: 'Info'
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
