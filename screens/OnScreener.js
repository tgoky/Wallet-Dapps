import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Image, View, StatusBar, Text, Pressable, TouchableOpacity, } from 'react-native';
// import { AuthContext } from '../auth/AuthContext';
// import { colorsDark } from 'react-native-elements/dist/config';
import COLORS from '../constants/onboardingColor';
//import COLORS from '../../consts/colors';



const OnScreen = ({navigation}) => {
    // const {test} = useContext(AuthContext);
    return (
       
        <View style={{flex: 1, backgroundColor: "black"}}>
           <StatusBar translucent backgroundColor={COLORS.red}/>

            <Image
            source={require('../assets/images/fortknox.png')}
            style={style.image}
            />
            <View style={style.indicatorContainer}>
                <View style={style.indicator}/>
                <View style={style.indicator}/>
                <View style={[style.indicator, style.indicatorActive]}/>
            </View>
            <View style={{paddingHorizontal: 20, paddingTop: 20}}></View>
            <View>
        {/* <View>
                <BackgroundImg />
                </View> */}
                 <Text style={style.title}>Fort Knox</Text>
                 <Text style={style.title}>Web3 Exchange</Text>
             </View>
             <View style={{marginTop: 10}}>
                 <Text style={style.textStyle}>Trade, Earn & Yield</Text>
                 <Text style={style.textStyle}>Fort Knox you can build on...</Text>
                 {/* <Text style={style.textStyle}>{test}</Text> */}
             </View>
             <View style={{flex:1,justifyContent: "flex-end",paddingBottom: 40}}>
             <View>
            <TouchableOpacity  style={{ backgroundColor: "gray",
     alignItems: "center",
     left: 17,
     top: 34,
     width: 360,
     borderRadius: 30,
     top: 6}}>
               <Pressable onPress={() => navigation.navigate("Home")}>
               <View style={style.btn}>
                     <Text style={{color: COLORS.dark, fontSize: 18, fontWeight: "bold",}}>Welcome to Fort Knox</Text>
                 </View>
               </Pressable>
               </TouchableOpacity>
               </View>
             </View>
         </View>
    );
};

const style = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
        left: 40,
        bottom: -40,
        borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: "gray",
        marginHorizontal:5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: "white",
    },
    title: {
        fontSize:38,
        bottom: -70,
        color: "gray",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Futura",
    },
    textStyle: {
        fontSize: 13,
        color: "gray",
        bottom: -90,
        alignItems: "center",
        alignSelf: "center",
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: "gray",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnScreen;