import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES } from "../constants";

export const BuyButton = () => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
            height: 38,
            width: 125,
            left: 49,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.darkGreen,
        }}
     
        >
            <Image
            source={require('../assets/icons/trade.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 40,
                left: -30
         
            }}
            />
            <Text
            style={{
                marginLeft: -20,
                ...FONTS.h3,
                alignContent: 'center',
                color: 'orange'
               
            }}
            >
              Buy
            </Text>
        </TouchableOpacity>
    )


   
}

export const SwapButton = () => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
            height: 38,
            width: 125,
            left: 58,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.darkGreen,
        }}
     
        >
            <Image
            source={require('../assets/icons/page_filled_icon.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
                left: -30
                
         
            }}
            />
            <Text
            style={{
                marginLeft: -20,
                ...FONTS.h3,
                alignContent: 'center',
                color: 'orange'

            }}
            >
              Swap
            </Text>
        </TouchableOpacity>
    )


   
}

export default { BuyButton, SwapButton};