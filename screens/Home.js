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
import { BalanceInfo } from "../components/BalanceInfo";

import { BuyButton, SwapButton} from "../components/iconBuySwapButton";

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

   let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0)

   let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0)

   let percChange = valueChange / (totalWallet - valueChange) * 100

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

    function renderWalletInfoSection() {
        return (
            <View style={{
                paddingHorizontal: SIZES.padding,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 55,
                backgroundColor: COLORS.gray,
                top: 3,
            }}
            >
                {/* Balance info */}
                <BalanceInfo 
                title="Wallet Balance"
                displayAmount={totalWallet}
                changePct= {percChange}
                containerStyle={{
                    marginTop: 4,
                }}
                />

               <View
               style={{
                flexDirection: "row",
                marginTop: 12,
                marginBottom: 12,
                paddingHorizontal: SIZES.radius
               }}>
                <BuyButton 
                // onpress goes here
                />
                  <SwapButton
                />
               </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
       {/* // header - wallet info */}
       <View>
             {renderWalletInfoSection()}
             </View>
             <View style={{top: -23, }}>
             
             </View>
      {/* chart */}

      {/* top cryptocurrencies */}      
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