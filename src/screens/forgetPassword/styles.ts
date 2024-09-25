import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#E6EDF3',
    },
    backButton: {
      margin: 16,
      position: 'absolute', 
      top: 0,  
      left: 0, 
      width: 60, 
      height: 40, 
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    backIcon: {
      width: 15,
      height: 15,
      bottom:12,
      right:20
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop:20
    },
    backBox:{
      backgroundColor:"#FFFFFF",
      width:48,
      margin:12,
      borderRadius:10,
      height:48,
    
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
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
      marginTop:10
    },
    form: {
      marginTop: 20,
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
    },
    backdropIcon:{
    
paddingVertical:10,
justifyContent:'flex-end'
    },
    imageContainer:{
  
    flexDirection:'row',
    justifyContent:'space-between',
    height:10,
   
     
   
    }

})