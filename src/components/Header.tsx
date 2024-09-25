import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Icons } from '../assets';
import { colors } from '../themes';

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
            <Image source={Icons.bellIcon} style={styles.iconImage} />
            <Image source={Icons.messageIcon} style={styles.iconImage} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.strongBlue,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 100,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  text: {
    flexDirection: 'column',
  },
  location: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginTop: 4,
  },
  cartIcon: {
    flexDirection: 'row',
    marginTop: 50,
    marginRight: 20,
  },
  iconImage: {
    width: 22,
    height: 24,
    marginLeft: 10,
  },
});

export default Header;
