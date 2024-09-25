import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

interface Text1{
  text1:String
}
const CustomToast = ({ text1 }:Text1) => {
  return (
    <View style={styles.toastContainer}>
      <View style={styles.toastContent}>
        <Image source={require('../assets/images/alert.png')} style={styles.icon} />
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#F44336', 
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '80%', 
    marginTop: 15,
  },
  toastContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,

  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CustomToast;
