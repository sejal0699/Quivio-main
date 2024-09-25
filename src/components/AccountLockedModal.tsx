
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { colors } from '../themes';

interface AccountLockedModalProps {
  visible: boolean; 
  closeModal: () => void;
}

// const AccountLockedModal:React.FC<AccountLockedModalProps> = ({ visible, closeModal }) => {
const AccountLockedModal = ({ visible, closeModal }:AccountLockedModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={closeModal} 
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image style={styles.modalIcon}source={require('../assets/images/lockIcon.png')}/>
          <Text style={styles.modalTitle}>Account Locked</Text>
          <Text style={styles.modalMessage}>
            Your account has been locked due to too many failed attempts. Please try again after some time.
          </Text>
          <TouchableOpacity onPress={closeModal} style={styles.okButton}>
            <Text style={styles.okButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AccountLockedModal;
