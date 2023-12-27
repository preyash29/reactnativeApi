import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './style';
const Home = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>   
      <Text>{t('welcome')}</Text>
    </SafeAreaView>
  );
};
export default Home





