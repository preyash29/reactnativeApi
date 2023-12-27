import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import i18next from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import languagelists from '../../services/languagelist.json';
import styles from './style';

const ChangeLanguage = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setSelectedLanguage(lng);
    // showAlert(lng); // Display alert after changing language
  };

  // const showAlert = (selectedLng) => {
  //   Alert.alert(
  //     'Language Selected',
  //     `You selected ${languagelists[selectedLng].nativeName}`,
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => console.log('OK Pressed'),
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languagesList}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'en' ? styles.selectedLanguage : null,
          ]}
          onPress={() => changeLng('en')}>
          <View style={styles.buttonContent}>
            <Text style={styles.lngName}>{languagelists['en'].nativeName}</Text>
            <Image source={require('../../assests/en.png')} style={{ width: 25, height: 25, alignSelf: 'center' }} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.languagesList}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'ar' ? styles.selectedLanguage : null,
          ]}
          onPress={() => changeLng('ar')}>
          <View style={styles.buttonContent}>
            <Text style={styles.lngName}>{languagelists['ar'].nativeName}</Text>
            <Image source={require('../../assests/ar.png')} style={{ width: 25, height: 25, alignSelf: 'center' }} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;
