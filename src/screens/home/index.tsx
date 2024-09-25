import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SecureAccountModal from '../../components/SecureAccountModal';

interface textProps{
  label:string
}

const BoxItem = ({ label }:textProps) => (
  <View style={styles.box}>
    <Image
      source={require('../../assets/images/announce.png')}
    />
    <Text style={styles.text}>{label}</Text>
   
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const items = ['Create Campaign', 'One Time Trigger', 'Messages'];


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('2fa')
  };
  
  const data = [
    {
      id: '1', title: 'Successfully configured POS for sites', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '2', title: 'You ended the campaign Holiday Special', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '3', title: 'Created a campaign Holiday Special', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '4', title: 'Activated the user access group named Site manager', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },

{
      id: '5', title: 'Activated the user access group named Site manager', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '6', title: 'Added a discount code to a campaign named Holiday Special', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '7', title: 'Added a new customer C02039', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },
    {
      id: '8', title: 'Activated the user access group named Site Managers', subheading: 'Jun 3, 2023 | 12:30 PM', date: '12:45'
    },

  ];

  const renderItem = ({ item }:any) => (

    <View style={styles.listContainer}>
      <View style={styles.rowbox}>
        <View style={styles.imagebox}>
          <Image
            source={require('../../assets/images/userProfile.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.subheadingText}>{item.subheading}</Text>
          </View>
        
        </View>

      </View>

    </View>

  );
  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.container}>
        <View style={styles.balanceCard}>
          <TouchableOpacity onPress={openModal}>
            <View style={styles.cardRow}>
              <Image
                source={require('../../assets/images/fix.png')}
              
              />
              <View style={styles.textColumn}>
                <Text style={styles.balanceTitle}>Complete your account setup</Text>
                <Text style={styles.bottomText}>Tap to continue</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>FREQUENTLY USED</Text>
        <View style={styles.boxContainer}>
          {items.map((item, index) => (
            <BoxItem key={index} label={item} />
          ))}
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.heading}>ACTIVITIES</Text>
        <View style={styles.productContainer}>
        <Text style={styles.headings}>All Product</Text>
        <Image
                source={require('../../assets/images/downarrow.png')}
                style={styles.iconImage1}
              />
        </View>
        
        </View>
        
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        <SecureAccountModal
          visible={modalVisible}
          closeModal={closeModal}
        />

      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
