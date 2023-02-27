import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { COLORS, FONTS, SIZES } from "../constants";

export const DepositTextButton = () => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
        }}
     
        >
            <Image
            source={require('../assets/icons/send.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 40,
                left: -90
         
            }}
            />
            <Text
            style={{
                marginLeft: -20,
                ...FONTS.h3,
                alignContent: 'center'
            }}
            >
              Deposit
            </Text>
        </TouchableOpacity>
    )


   
}

export const WithdrawTextButton = () => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "center",
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
        }}
     
        >
            <Image
            source={require('../assets/icons/withdraw.png')}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
                left: -80
         
            }}
            />
            <Text
            style={{
                marginLeft: -20,
                ...FONTS.h3,
                alignContent: 'center'

            }}
            >
              Withdraw
            </Text>
        </TouchableOpacity>
    )


   
}

export default { WithdrawTextButton, DepositTextButton};