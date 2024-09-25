import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import styles from './styles';
import FailedModal from '../../components/FailedModal';
import AccountVerifiedModal from '../../components/AccountVerifiedModal';
import LogoutModal from '../../components/LogoutModal';
import CustomModal from '../../components/CustomModal';

interface NavigationProps {
  navigation: any
}

const VerificationScreen = ({ navigation }: NavigationProps) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const inputRefs = useRef([]);
  const [showLogout, setShowLogout] = useState(false);
  const [resend, setIsResend] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // Enable the button when OTP is filled
    const allFilled = code.every((digit) => digit.length > 0);
    setButtonDisabled(!allFilled);
  }, [code]);

  useEffect(() => {
    let interval: any;
    console.log(interval);

    if (resend && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResend(false);
    }
    return () => clearInterval(interval);
  }, [resend, timer]);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredCode = code.join('');
    const defaultOTP = '123456';

    if (enteredCode !== defaultOTP) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setErrorMessage('The code you entered is incorrect, you have two (2) attempts remaining.');

      if (newAttempts >= 3) {
        setShowModal(true);
      }
    } else {
      setErrorMessage('');
      setAttempts(0);
      setShowModal(false);
      setShowSuccessModal(true);
      console.log('Submitted code:', enteredCode);
    }
  };

  const handleResendCode = () => {
    if (!resend) {
      console.log('Resending OTP...');
      Toast.show({
        type: 'success',
        text1: 'OTP Resent Successfully!',
      });
      setIsResend(true);
      setTimer(60);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setShowLogout(false);
    navigation.navigate('login');
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setShowLogout(true);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/images/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.header}>Verify Account Access</Text>
        <Text style={styles.subHeader}>Enter the verification code sent to +1-788-895-5435.</Text>
        <View style={styles.box}>
          <View style={styles.codeInputContainer}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                keyboardType="numeric"
                maxLength={1}
                value={value}
                onChangeText={(text) => handleTextChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                ref={(input) => { inputRefs.current[index] = input; }}
              />
            ))}
          </View>
        </View>

        {errorMessage ? (
          <View style={styles.errorContainer}>
            <Image
              source={require('../../assets/images/alert.png')}
              style={styles.errorImage}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
        ) : null}

        <TouchableOpacity onPress={handleResendCode} disabled={resend}>
          <Text style={styles.textCode}>
            {resend ? `Resend in 00:${timer < 10 ? `0${timer}` : timer}` : 'Resend'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButton,
            buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled,
          ]}
          onPress={handleSubmit}
          disabled={buttonDisabled}
        >
          <Text style={styles.loginButtonText}>Confirm Code</Text>
        </TouchableOpacity>
      </View>



      <CustomModal
        visible={showModal}
        title="Too many failed attempts"
        description="Your account has been locked, please try again in one hour."
        imageSource={require('../../assets/images/failed.png')}
        buttonText="Back to Login"
        closeModal={closeModal}

      />
      <CustomModal
        visible={showSuccessModal}
        title="Account Verified!"
        description="Your account has been verified successfully."
        imageSource={require('../../assets/images/done.png')}
        buttonText="Back to Login"
        closeModal={closeSuccessModal}

      />


      <CustomModal
        visible={showLogout}
        title="Exit 2FA?"
        description="Are you sure you want to exit 2FA, You will need to redo it again."
        imageSource={require('../../assets/images/failed.png')}
        buttonText="Yes, Exit"
        closeModal={closeModal}

      />


      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} ref={(ref) => Toast.setRef(ref)} />
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;
