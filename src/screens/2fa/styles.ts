import { StyleSheet } from "react-native";


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
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
    padding: 12,
    backgroundColor: "#ffffff",
    borderColor: "#fff"
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
    marginTop: 20,
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
  loginButtonEnabled: {
    backgroundColor: '#007BFF',
  },
  loginButtonDisabled: {
    backgroundColor: '#B0B0B0',
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
    left:10
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
    marginTop: 5,
    padding: 20

  },
  countryPicker: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    width:40,
    height:40
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  flagImage: {
    width: 30,
    height: 20,
    resizeMode: 'cover', 
    marginRight: 10,
    backgroundColor:"red"
  },
  


})