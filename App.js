import React from 'react';
import { View, StyleSheet } from 'react-native';
import RockPaperScissorsGame from './components/Rock';


const App = () => {
  return (
    <View style={styles.container}>
      <RockPaperScissorsGame />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
