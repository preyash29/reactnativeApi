import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import styles from './style';
// import commonStyles from '../../theme/commonStyles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Home page</Text>
      </View>
    );
  }
}


export default Home;