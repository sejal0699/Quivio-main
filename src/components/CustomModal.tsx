import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../themes';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

interface CustomModalProps {
    visible: boolean;
    title: string;
    description: string;
    imageSource: any;
    buttonText: string;
    closeModal?: () => void;
    onButtonPress?: () => void;
}

const CustomModal = (props: CustomModalProps) => {
    const { visible, title, description, imageSource, buttonText, closeModal, onButtonPress } = props;

    const handleButtonPress = () => {
        if (onButtonPress) {
            onButtonPress();
        }
        if (closeModal) {
            closeModal();
        }
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={closeModal}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Image style={styles.modalIcon} source={imageSource} />
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalMessage}>{description}</Text>
                    <TouchableOpacity onPress={handleButtonPress} style={styles.okButton}>
                        <Text style={styles.okButtonText}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: colors.overlayColor,
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
        width: 40,
        height: 40,
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
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    okButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomModal;
