import React from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icons, Images } from '../assets';
import { colors } from '../themes';

interface GalleryModalProps {
  visible: boolean;
  closeModal: () => void;
  onImagePick: (source: 'gallery' | 'camera') => void;
}

const GalleryModal = ({ visible, closeModal, onImagePick }: GalleryModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => { }}>
            <View style={styles.modalContainer}>
              <Text style={styles.title}>Profile Photo</Text>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => onImagePick('gallery')}>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.gallery} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>Upload from Gallery</Text>
                    <Image source={Icons.arrow} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onImagePick('camera')}>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.camera} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>Use Camera</Text>
                    <Image source={Icons.arrow} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.optionContainer}>
                    <Image source={Icons.avatar} style={styles.optionIcon} />
                    <Text style={styles.modalOptionText}>Select an Avatar</Text>
                    <Image source={Icons.arrow} style={styles.rightIcon} />
                  </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={closeModal}>
                  <Text style={styles.closeModalText}>Cancel</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionContainer: {
    padding: 15,
    backgroundColor: colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#E6EDF3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  modalView: {
    width: '100%',
    padding: 20,
  },
  modalOptionText: {
    fontSize: 16,
    color: colors.black,
    paddingVertical: 10,
    textAlign: 'center',
    marginLeft: 20,
  },
  closeModalText: {
    fontSize: 16,
    color: '#FF3B30',
    marginTop: 10,
  },
  rightIcon: {
    width: 6,
    height: 8,
    marginLeft: 'auto',
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default GalleryModal;
