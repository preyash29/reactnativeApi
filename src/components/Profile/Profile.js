import React from 'react';
import {Text, SafeAreaView, Pressable, View} from 'react-native';
import styles from './style';
import commonStyles from '../../theme/commonStyles';
const Category = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView style={commonStyles.flex}>
      <View style={[commonStyles.containerPadding, styles.container]}>
        <Text style={styles.screenText}>Profile screen</Text>
        <Pressable
          onPress={() => navigation.navigate('Category')}
          style={styles.aboutBtn}>
          <Text style={styles.aboutBtnText}>Category</Text>
        </Pressable>
       
      </View>
     
    </SafeAreaView>
    
  );
};

export default Category;