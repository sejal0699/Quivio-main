
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

interface FailedModalProps{
visible:boolean,
closeModal: () => void;

}
const FailedModal:React.FC<FailedModalProps> = ({ visible, closeModal }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={closeModal} 
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image style={styles.modalIcon}source={require('../assets/images/failed.png')}/>
          <Text style={styles.modalTitle}>Too many failed attempts</Text>
          <Text style={styles.modalMessage}>
          Your account has been locked, please try again in one hour.
          </Text>
          <TouchableOpacity onPress={closeModal} style={styles.okButton}>
            <Text style={styles.okButtonText}>Back to Login</Text>
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
    backgroundColor: 'white',
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
    backgroundColor: '#2A7BBB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FailedModal;
