import React,{useState} from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Svg, {Polygon} from 'react-native-svg';
// import MaskedView from '@react-native-masked-view/masked-view';
import MaskedView from '@react-native-masked-view/masked-view';

// import styles from './style';
import {setLogin} from '../../redux/reducers/Auth/authReducer';
import {useDispatch} from 'react-redux';
import {useNavigationState, CommonActions} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import commonStyles from '../../theme/commonStyles';
import { useTranslation } from 'react-i18next';
// const {height, width} = Dimensions.get('window');
const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
const AnimatedMaskedView = Animated.createAnimatedComponent(MaskedView);

const {width, height} = Dimensions.get('window');
const fromCoords = {x: 0, y: height};
const toCoords = {x: width, y: 0};

const SideMenu = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const isArabic = selectedLanguage === 'ar';

  const navigation = props.navigation;
  let index = 0;
  useNavigationState(state => {
    index =
      state && state.routes && state.routes[0].state
        ? state.routes[0].state.routes[0].state
          ? state.routes[0].state.routes[0].state.index
          : 0
        : 0;
  });
  const dispatch = useDispatch();

  const isDrawerOpened = useDrawerStatus() === 'open';
  const polygonRef = React.useRef();
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.ValueXY(fromCoords)).current;
  const animate = toValue => {
    const animations = [
      Animated.spring(animation, {
        toValue: toValue === 1 ? toCoords : fromCoords,
        useNativeDriver: true,
        bounciness: 2,
        speed: 10,
      }),
      Animated.timing(animatedWidth, {
        toValue: toValue === 1 ? width : 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ];

    return Animated.sequence(toValue === 1 ? animations.reverse() : animations);
  };

  React.useEffect(() => {
    const listener = animation.addListener(v => {
      if (polygonRef?.current) {
        polygonRef.current.setNativeProps({
          points: `0,0 ${v.x}, ${v.y} ${width}, ${height} 0, ${height}`,
        });
      }
    });

    return () => {
      animation.removeListener(listener);
    };
  });

  React.useEffect(() => {
    animate(isDrawerOpened ? 1 : 0).start();
  }, [isDrawerOpened]);

  const opacity = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [0, 1],
  });

  const translateX = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [-50, 0],
  });

  const navigateToScreen = route => {
    navigation.navigate(route);
    navigation.closeDrawer();
  };

  const signOut = () => {
    navigation.closeDrawer();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
    dispatch(setLogin(false));
  };

  const maskedStyle = {width: animatedWidth, flex: 1};
  const animatedViewStyle = {
    opacity,
    transform: [{translateX}],
    flex: 1,
    backgroundColor: '#fff',
    width:'80%'
  };
  // const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showLanguagesList, setShowLanguagesList] = useState(true);

  // const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguagesList(false);
    console.log('Selected Language:', t(lang));
  };

  // Additional console log for all languages
  // console.log('All Languages:', languages.map((item) => t(item.name)).join(', '));

  const englishButtonHandler = () => {
    const langCode = 'en';
    changeLanguage(langCode);
  };
  const { t, i18n } = useTranslation();
  const changeLanguageButtonHandler = () => {
    // Toggle between English and Hindi for demonstration
    const langCode = i18n.language === 'en' ? 'ar' : 'en';
    changeLanguage(langCode);
  };
  return (
    <SafeAreaView style={commonStyles.flex}>
      <AnimatedMaskedView
        style={maskedStyle}
        maskElement={
          <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={commonStyles.transparent}>
            <AnimatedPolygon
              ref={polygonRef}
              points={`0,0 ${fromCoords.x}, ${fromCoords.y} ${width}, ${height} 0, ${height}`}
              // points={`0,0 ${toCoords.x}, ${toCoords.y} ${width}, ${height} 0, ${height}`}
              fill="blue"
            />
          </Svg>
        }>
        <Animated.View style={animatedViewStyle}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.itemContainer}>

              <View style={{backgroundColor:'#fff8bd',padding:10}}>
                <View style={{flexDirection:'row'}}>
                <FontAwesome5 name="user-circle" size={35} color="#9f0202" />
               <View style={{alignSelf:'center',paddingHorizontal:10,flex:1}}>
               <Text style={{color:'#9f0202',fontSize:18,fontWeight:'bold'}}>John Mark</Text>
               </View>
               <View style={{alignSelf:'center'}}>
               <FontAwesome5 name="user-edit" size={18} color="#9f0202" />
               </View>
                </View>
                
              </View>
            
        
          <TouchableOpacity
              style={{ padding: 11,
                // flexDirection: 'row',
                // alignItems: 'center',
                borderRadius: 3,}}
             >
              <Text style={styles.drawerRouteText}>{t('Home')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>WOMEN'S FASHION</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>MEN'S FASHION</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>BOY'S & GIRLS FASHION</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>BABY FASHION & SUPPLIES</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>HOME FURNISHING</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>SCHOOL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.drawerItem(index === 0)}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>MEDICAL DRESS</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={{ padding: 11,
                // flexDirection: 'row',
                // alignItems: 'center',
                borderRadius: 3,}}
              onPress={() => {
                navigateToScreen('Home');
              }}>
              <Text style={styles.drawerRouteText}>{t('CUSTOMER SERVICE')}</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
              style={{ padding: 11,
                // flexDirection: 'row',
                // alignItems: 'center',
                borderRadius: 3,}}
              // onPress={() => {
              //   navigateToScreen('Home');
              // }}
              onPress={() => {
                signOut();
              }}
              
              >
              <Text style={styles.drawerRouteText}>{t('LOGOUT')}</Text>
            </TouchableOpacity>
     
          </ScrollView>
     
         
              

          <View>
      <View style={styles.btns}>
            <TouchableOpacity
          style={[
            styles.btn,
            selectedLanguage === 'en' ? styles.selectedBtn : null,
          ]}
          onPress={changeLanguageButtonHandler}
             >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: 'white' , marginRight: 5 }}>{i18n.language === 'ar' ? t('English' ) : t('عربي')}</Text>
        <Image 
        source={
          i18n.language === 'en'
            ? require('../../assests/ar.png')
            : require('../../assests/en.png')
        }
        
        style={{ width: 15, height: 15, alignSelf: 'center' }} />
      </View>
              
            </TouchableOpacity>
           
          </View>
    </View>
          <View style={styles.footerContainer}>
            <View style={styles.bottomSection}>
              <View style={styles.logoutContainer}>
                <TouchableOpacity
                  style={[styles.logoutSection]}
                  >
                </TouchableOpacity>
              </View>
              <View style={styles.versionInfo}>
                <Text style={styles.versionText}>Build : v1.1</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </AnimatedMaskedView>
    </SafeAreaView>
  );
};

export default SideMenu;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    // height: height / 2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center', 
  },
  btn: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBtn: {
    backgroundColor: '#980404', // You can set your desired background color
    
  },
  container: {
    flex: 1,
  },
  drawerItem: (active = false) => ({
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    // backgroundColor: active ? 'black' : 'transparent',
  }),
  drawerRouteText: {
    letterSpacing: 0.4,
    // marginLeft: 10,
    color: 'black',
    fontSize:15,
    fontWeight:'400'
  },
  itemContainer: {
    flex: 0.8,
    padding: 15,
  },
  bottomSection: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  versionInfo:{
    marginBottom: 20
  },
  logoutContainer: {
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  versionText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  logoutSection: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.2,
  },
  copyRightText:{
    fontSize:12
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});