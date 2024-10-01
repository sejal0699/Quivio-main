import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import CustomTextInput from '../../components/CustomTextInput';
import CustomToast from '../../components/CustomToast';
import styles from './styles';
import CustomModal from '../../components/CustomModal';
import { ScreenNames } from '../../navigation/screenNames';
import { Icons, Images } from '../../assets';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (email: string) => {
    setEmail(email);
    validateEmail(email);
  };

  const validateEmail = (email: string) => {
    let errorMessage = '';
    if (!email.trim()) {
      errorMessage = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage = 'Email Address is invalid';
    }
    setError(errorMessage);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate(ScreenNames.Reset);
  };

  const handleHelp = () => {
    setModalVisible(true);
  };

  const isButtonDisabled = () => {
    return email.trim() === '' || error !== '';
  };

  const handlePress = () => {
    const validEmail = 'Test@gmail.com';

    if (email !== validEmail) {
      Toast.show({
        type: 'custom_error',
        text1: 'Email not found. Contact admin.',
      });
      return;
    }

    handleHelp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >

        <View style={styles.imageContainer}>
          <View style={styles.backBox}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image source={Icons.backArrow} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <Image source={Images.backDrop} style={styles.backdropIcon} />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Forgot Password</Text>
              <Text style={styles.subHeaderText}>Reset your password with just a few clicks</Text>
            </View>
            <View style={styles.form}>
              <CustomTextInput
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Email Address"
                iconSource={Icons.emailIcon}
                error={error}
              />
            </View>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.loginButton, isButtonDisabled() ? styles.loginButtonDisabled : styles.loginButtonEnabled]}
            onPress={handlePress}
            disabled={isButtonDisabled()}
          >
            <Text style={styles.buttonText}>Send Link</Text>
          </TouchableOpacity>
        </View>

        <CustomModal
          visible={isModalVisible}
          title="Link Sent"
          description="The link to reset your password has been sent to your email address."
          imageSource={Icons.linkIcon}
          buttonText="Back to Login"
          closeModal={closeModal}
        />
        <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
