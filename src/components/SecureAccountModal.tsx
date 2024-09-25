import React from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface SecureAccountModalProps{
  visible:boolean,
  closeModal:()=>void
}
const SecureAccountModal = ({ visible, closeModal }:SecureAccountModalProps) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible} 
      onRequestClose={closeModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../assets/images/popup.png')}
           
          />
          <Text style={styles.title}>Secure your Account?</Text>
          <Text style={styles.description}>
            Setup two-factor authentication to secure your account in just two steps.
          </Text>
          <View style={styles.stepsContainer}>
            <View style={styles.step}>
              <Image
                source={require('../assets/images/phone.png')}
                style={styles.stepIcon}
              />
              <Text style={styles.stepText}>Link your account with your phone number</Text>
            </View>
            <View style={styles.step}>
              <Image
                source={require('../assets/images/passcode.png')}
                style={styles.stepIcon}
              />
              <Text style={styles.stepText}>Enter the one-time passcode</Text>
            </View>
            <View style={styles.step}>
              <Image
                source={require('../assets/images/secure.png')}
                style={styles.stepIcon}
              />
              <Text style={styles.stepText}>Secure your account</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#E6EDF3',
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  description: {
    color: '#777',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  stepsContainer: {
    width: '100%',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepIcon: {
    width: 40,
    height: 60,
    marginRight: 10,
  },
  stepText: {
    color: '#000',
    marginBottom:10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SecureAccountModal;
