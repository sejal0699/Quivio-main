import { StyleSheet } from "react-native";
import { fontFamily } from "../../assets";

export default StyleSheet.create({
  container: {
    flex: 1,

  },
  backButton: {
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  loginBox: {
    backgroundColor: '#E6EDF3',
    padding: 40,

  },

  title: {
    fontFamily: fontFamily.REGULAR,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
    //   marginLeft:15
  },
  subtitle: {
    fontSize: 14,
    color: '#4F5F72',
    marginBottom: 20,
    marginLeft: 1
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 18,
    fontSize: 16,
    marginBottom: 20,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  loginButtonEnabled: {
    backgroundColor: '#007bff',
  },
  loginButtonDisabled: {
    backgroundColor: '#d3d3d3',
  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#999999',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#000000',
    marginBottom: 60,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#313C4A',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    width: '90%',
    alignSelf: 'center'
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
  signInLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});