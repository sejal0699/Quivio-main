import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export default StyleSheet.create({

  container: {

  },
  backButton: {
    margin: 16,
  },
  Icon: {
    alignSelf: 'center',
  },
  loginButtonEnabled: {
    backgroundColor: '#007BFF',
  },
  loginButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  verifyText: {
    color: colors.pink,
    fontSize: 16,
    position: 'absolute',
    left: 120,
  },
  input: {
    flexDirection: 'row'
  },
  backIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  phoneInput: {
    flex: 3,
    margin: 5,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    padding: 22,
    backgroundColor: "#ffffff",

    borderColor: '#E7EBF3'
  },
  backBox: {
    backgroundColor: "#FFFFFF",
    width: 50,
    margin: 10,
    borderRadius: 10
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10
  },
  form: {

    flexDirection: 'row',

  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  loginButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#007BFF',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  phonebox: {
    marginLeft: 10,
  },
  inputPhone: {
    fontSize: 14,
    left: 10
  },
  flagView:
  {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 80,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: 6,
    padding: 26,
    borderWidth: 1,
    borderColor: '#E7EBF3'

  },
  countryPicker: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    width: 40,
    height: 40
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  flagImage: {
    width: 40,
    height: 60,
    resizeMode: 'center',
    marginRight: 1,

  },



})