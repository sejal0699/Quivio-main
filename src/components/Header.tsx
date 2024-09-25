import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';
class Header extends Component {
  static contextType = NavigationContext;



  render() {


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>

            <View style={styles.headerText}>
              <View style={styles.text}>
                <Text style={styles.location}>Welcome</Text>

                <Text style={styles.name}>Kevin</Text>

              </View>
            </View>
          </View>

          <View style={styles.cartIcon}>
            <Image
              source={require('../assets/images/bellIcon.png')}
              style={styles.iconImage}
            />
            <Image
              source={require('../assets/images/message.png')}
              style={styles.iconImage}
            />
          </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#2A7BBB',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 100,
  },
  downIcon: {
    flexDirection: 'row',
  },
  text: {
    flexDirection: "column",
  },
  location: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 20,
    marginLeft: 10
  },
  headerText: {
    flexDirection: 'row',
    marginTop: 20,

    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: 'white',
    marginLeft: 10,
    marginTop: 4
  },
  details: {
    color: '#888',
    fontSize: 12,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
    backgroundColor: 'red',
    gap: 4,
  },
  backgroundBox: {
    backgroundColor: '#f5f5f5',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  spacer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
  },
  icons: {
    width: 155,
    height: 48,
    flex: 1,
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    padding: 12,
    marginTop: 4,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  locationText: {
    marginLeft: 5,
    color: '#007aff',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: 8,
  },
  tab: {
    paddingHorizontal: 10,
  },
  tabText: {
    color: 'black',
  },
  arrowicon: {
    height: 15,
    width: 15,
    marginLeft: 4,
  },
  locationArea: {
    marginBottom: 4,
  },
  tabTextActive: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  iconImage: {
    width: 22,
    height: 24,


  },
  cartIcon: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 50,
    marginRight: 20,

  },
  arrow: {
    height: 10,
    width: 12,
    marginTop: 8,
    gap: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 150,
    alignItems: 'center',
  },
  modalItem: {
    fontSize: 18,
    color: 'red',
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Header;
