import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import commonStyles from '../../theme/commonStyles';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are on the Login page</Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}
        
        ><Text>Go to Home</Text></TouchableOpacity>
      </View>
    );
  }
}


export default Login;