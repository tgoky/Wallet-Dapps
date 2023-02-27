import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { SIZES, COLORS, FONTS, icons} from "../constants";

export const BalanceInfo = ({ title, displayAmount, changePct, containerStyle }) => {
    return (
        <View style={{...containerStyle}}>
            
                  {/* Title */}
            <Text style={{...FONTS.h3, color: COLORS.lightGray3}}>{title}</Text>
               {/* Figures */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3}}>$ </Text>
                <Text style={{ ...FONTS.h3,  color: "#B3E5BE"}}>{displayAmount.toLocaleString()}</Text>
                <Text style={{ color: COLORS.lightGray3, ...FONTS.h3}}> USD</Text>
            </View>

            {/* Change percentage */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end'
            }}>
                {
                    changePct != 0 &&
                    <Image
                    source={icons.back_arrow_icon}
                    style={{
                        width: 10,
                        height: 10,
                        alignSelf: 'center',
                        tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.darkRed,
                        transform: (changePct > 0) ? [{ rotate: '134deg' }] : [{ rotate: '-125deg'}]
                        
                    }}
                    />

                }
        </View>
        </View>
    )
}

export default BalanceInfo;