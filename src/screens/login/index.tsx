import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import CustomTextInput from '../../components/CustomTextInput';
import CustomModal from '../../components/CustomModal';
import CustomToast from '../../components/CustomToast';
import Toast from 'react-native-toast-message';
import { NavigationContext } from '@react-navigation/native';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const navigation = useContext(NavigationContext);

  const validateInputs = () => {
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address entered.';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateInputs();
  };
  const handleNavigate = () => {
    navigation.navigate("drawerStack")
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
    validateInputs();
  };

  const handleLogin = () => {
    const validEmail = 'Test@gmail.com';
    const validPassword = '123456';

    if (email !== validEmail || password !== validPassword) {
      Toast.show({
        type: 'custom_error',
        text1: 'Email not found. Contact admin.',
        position: 'top',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Login successful!',
    });
  };

  const handlePress = () => {
    const validEmail = 'Test@gmail.com';
    const validPassword = '123456';

    if (email !== validEmail || password !== validPassword) {
      handleLogin();
    } else {
      setModalVisible(true);
    }
  };

  const isButtonDisabled = () => {
    return Object.keys(errors).length > 0 || !email || !password;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <BackgroundImage>
        <View style={styles.loginBox}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>with your valid credentials</Text>

          <CustomTextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email Address"
            iconSource={require('../../assets/images/email.png')}
            error={errors.email}
          />

          <View style={{ top: 10 }}>
            <CustomTextInput
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Password"
              iconSource={require('../../assets/images/lock.png')}
              error={errors.password}
              secureTextEntry={!isPasswordVisible}
              rightIconSource={require('../../assets/images/eye.png')}
              onRightIconPress={() => setPasswordVisible(prev => !prev)}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('forgetPassword')}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.loginButton, isButtonDisabled() ? styles.loginButtonDisabled : styles.loginButtonEnabled]}
            onPress={handlePress}
            disabled={isButtonDisabled()}
          >
            <Text style={styles.loginButtonText}>Primary</Text>
          </TouchableOpacity>
        </View>
      </BackgroundImage>

      <CustomModal
        visible={isModalVisible}
        title="Account Locked"
        description="Your account has been locked due to too many failed attempts. Please try again after some time."
        imageSource={require('../../assets/images/lockIcon.png')}
        buttonText="Okay"
        closeModal={() => setModalVisible(false)}
        onButtonPress={() => handleNavigate()}
      />

      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
