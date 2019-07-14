import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ padding: 40, fontSize: 30, textAlign: 'center', color: '#0066cc', fontWeight: '300' }}>
        Restaurant Review
      </Text>
      <Text>React Cafe</Text>
      <Text style={{ color: 'gray' }}>123 Anywhere St</Text>
    </View>
  );
};

export default App;
