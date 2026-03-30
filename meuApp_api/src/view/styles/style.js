import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:"#f5f5f5",
    },

    header:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingTop:20,
    },

    title:{
        fontSize:22,
        textAlign:"center",
        marginBottom:20,
    },

    card:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        padding:10,
        marginBottom:10,
        borderRadius:5
    },

    name:{
        fontSize:14
    },

    email:{
        fontSize:10
    },

    list:{
        paddingTop:10
    },

    button:{
        padding:10,
        backgroundColor:"#4caf50",
        borderRadius:5
    },

    field:{
        borderWidth: 1,
        borderColor:"#0567e7",
        marginBottom:10
    },
    
    error: {
        color:"#b90000",
        marginBottom:10
    },
});