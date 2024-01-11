import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
 import Colors from '../../constants/Colors';
 import { Container, SpaceBetweenRow } from '../Wrappers';
 

const Home = ({ navigation }) => {

  const { t } = useTranslation();

  return (
  
        <View>
          
          <Text style={styles.greet}>{t('Home')}</Text>
          
        </View>  
     
  )
}

export default Home

const styles = StyleSheet.create({
  
  
  

  
})
