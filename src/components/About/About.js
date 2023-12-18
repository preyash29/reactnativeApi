import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import styles from './style';
// import commonStyles from '../../theme/commonStyles';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the about page</Text>
      </View>
    );
  }
}


export default About;