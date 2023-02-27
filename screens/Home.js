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
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";
import { useFocusEffect } from "@react-navigation/native";

import dummyData from "../constants/dummy";
import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins}) => {

   useFocusEffect(
    React.useCallback(() => {
          getHoldings(holdings = dummyData.holdings)
          getCoinMarket()
    }, [])
   )

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


// export default Home;

function mapStateToProps(state) {
    return {
     myHoldings: state.marketReducer.myHoldings,
     coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
       getHoldings: (holdings, currency, coinList, orderBy,
        sparkline, priceChangePerc, perpage, page) => {
            return dispatch(getHoldings(holdings, currency, coinList, orderBy,
                sparkline, priceChangePerc, perpage, page))
        },
        getCoinMarket: (currency, coinList, orderBy,
             sparkline, priceChangePerc, perPage, page) => {return dispatch(getCoinMarket(currency, coinList, orderBy,
                sparkline, priceChangePerc, perPage, page))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);