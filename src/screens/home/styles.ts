import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },

  balanceCard: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: '#D9E2EE',
    margin: 18,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,

  },
  balanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#164061',
    marginTop: 1
  },
  bottomText: {
    color: "#60707D",
    marginTop: 8
  },
  balanceTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
    color: '#60707D',

  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 14,
    gap: 10
  },
  box: {
    backgroundColor: '#F8F9F9',
    paddingHorizontal: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row'

  },

  text: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'semibold',
    marginBottom: 10,
    marginLeft: 10
  },
  heading: {
    marginLeft: 22,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0F2C43'
  },

  listContainer: {
    padding: 1,
    alignContent: 'space-between',
    backgroundColor: '#F8F9F9',
    margin: 14,
    borderRadius: 20,

  },
  rowbox: {
    borderBottomWidth: 0.5,
    padding: 20,
    borderBottomColor: 'gray',

  },
  imagebox: {
    flexDirection: "row",
    gap: 10,

  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  subheadingText: {
    marginTop: 5,
    color: '#60707D'
  },
  dateText: {
    textAlign: 'right',
    paddingLeft: 40
  },
  icon: {
    paddingRight: 10
  },


  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productContainer: {
    flexDirection: 'row',
    gap: 4,
    marginRight: 12

  },

  
  headings: {
    marginTop: 10
  },
  iconImage1: {
    top: 16,
    marginRight: 2
  }
})