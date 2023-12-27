import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  aboutBtn: {
    backgroundColor: '#1A1924',
    height: 50,
    width: 200,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  aboutBtnText: {
    color: 'black',
    fontSize: 18,
  },
    button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  text: {
 
    fontSize: 18,
    color: 'black',
  },
  languagesList: {
    width:"100%",
    // marginTop:20,
    padding:10
    // backgroundColor: 'pink',
    
  },

  languageButton: {
    // borderBottomColor: '#dddddd',
    // borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'black',
    padding:10,
    marginHorizontal:10
  },
  buttonContent:{
  // backgroundColor:'pink',
  flexDirection:'row',
  justifyContent:'space-between',
  width:'90%'
},
selectedLanguage:{
backgroundColor:"#e3e2e9",
width:"100%"
}
});

export default styles;