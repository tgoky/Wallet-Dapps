import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Animated
} from 'react-native';
import { WithdrawTextButton, DepositTextButton } from "../components/IconTextButton";
import { connect } from "react-redux";


import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({  }) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
             Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
             }).start();
    })

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0,1],
        outputRange: [SIZES.height, SIZES.height -325]
    }
   
    )


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
           <Animated.View
           style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: "100%",
            padding: SIZES.padding,
            backgroundColor: COLORS.darkGreen
           }}
           >
            <DepositTextButton
           
            />
            <View style={{bottom: -10}}>
            <WithdrawTextButton 
            
           
        />
        </View>
           </Animated.View>
        </SafeAreaView>
    )
    }

   


export default Home;