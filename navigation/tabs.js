import React from "react";
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { connect } from "react-redux";
// import { setTradeModalVisibility } from "../stores/tab/tabActions";

import { Home } from "../screens/";
import { icons, COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
        height: "10%",
        backgroundColor: COLORS.black,
    },

}

const Tabs = ({}) => {

    // function tradeTabButtonOnClickHandler() {
    //     setTradeModalVisibility(!isTradeModalVisible)
    // }
    return (
        <Tab.Navigator
            // tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            tabBarStyle: [{
                    "display": "flex",
                    height: "10%",
                    backgroundColor: COLORS.black,
            },
        null ],
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.lightGreen : COLORS.lightGray2;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.dashboard_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Search":
                            return (
                                <Image
                                    source={icons.portfolio_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "Notification":
                            return (
                                <Image
                                    source={ icons.trade_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                    
                                />
                            )
                            case "Chart":
                                return (
                                    <Image
                                        source={icons.chart_icon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                )

                        case "Setting":
                            return (
                                <Image
                                    source={icons.menu_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
            <Tab.Screen
                name="Notification"
                component={Home}
                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    }, 
                  }}
                //   onPress={() => tradeTabButtonOnClickHandler ()}
            />
            <Tab.Screen
                name="Chart"
                component={Home}
                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
            <Tab.Screen
                name="Setting"
                component={Home}
                options={{
                    headerStyle: {
                      backgroundColor: "#25282F",
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

// function mapStateToProps(state) {
//      return {
//         isTradeModalVisible: state.tabReducer.isTradeModalVisible
//      }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         setTradeModalVisibility: (isVisible) => {return dispatch(setTradeModalVisibility(isVisible))}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Tabs);