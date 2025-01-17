import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a3cef1",
    alignItems: "center",
    justifyContent: "center",
  },
  wordText:{
    fontSize:30,
    color:"navy",
    fontWeight:"bold",
    marginRight:5,
  },
  count:{
    fontSize:40,
    color:"#571089",
    fontWeight:"bold",
    marginBottom:40,
    marginLeft:30,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordSegment:{
    minWidth:250,
   justifyContent:"center",
   alignItems:"center",
   textAlign:"center",
  },
     en:{
        fontWeight:"bold",
        fontSize:30,
        color:"black",
     },
     tr:{
        fontSize:25,
        color:"#808080",
     },
     cont:{
      width: 400, 
      height: 100, 
      borderRadius: 10, 
     },
  ana:{
    flexDirection:"row",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  left:{
    alignItems: 'flex-start',
    justifyContent:"center",
  },
  right:{
    alignItems: 'flex-end',
    justifyContent:"center",
  },
  modal: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  close: { position: "absolute", top: 15, right: 25 },
  x:{
   color:"#eaeaea",
   fontWeight:"bold",
   fontSize:25,
  },
  createButton:{
    justifyContent:"space-between",
    alignItems:"center",
  },
  modal:{
    width:"100%",
    height:300,
    backgroundColor:"#571089",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    position:"absolute",
    bottom:0,
    justifyContent:"center",
    alignItems:"center",
  },
  close: { 
     position: "absolute",
     top: 15,
      right: 25
     },
  cross: {
    color: "navy",
    fontWeight: "bold",
    fontSize: 35,
  },
  textBox:{
    width:250,
    height:50,
    margin: 5,
    backgroundColor: "#eaeaea",
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 20,
  },
  button:{
   width:100,
   height:40,
   borderRadius:40,
   flexDirection:"row",
   alignItems:"center",
   backgroundColor:"#000080",
   justifyContent:"center",
   marginTop:50,
  },
  buttonText:{
   color:"white",
   fontWeight:"bold",
  },
  symbol:{
    fontSize:50,
    color:"#571089",
    fontWeight:"bold",
    marginBottom:40,
    marginLeft:30,
  },
  delete:{
    margin:40,
  },
  list:{
    width:"100%",
    height:50,
    borderColor:"orange",
    flexDirection:"row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 3,
  },
  listText:{
    color: 'purple', 
    fontWeight: 'bold',
    flex:1,
    textAlign:"center",
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'orange',
  },
  headerText: {
    flex: 1.5,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:"center",
    alignItems:"center",
    color:"#191970",
  },
  aboutBox:{
    justifyContent:"center",
    alignItems:"center",
  },
  aboutHeader:{
   fontSize:30,
   fontWeight:"bold",
   justifyContent:"center",
   alignItems:"center",
  },
  
});