import React, { useMemo } from "react";
import { Provider } from "react-redux";
import { store } from "./core/store";
import {
  LoginScreen,
  RegistrationStepOneScreen,
  RegistrationStepTwoScreen,
  RegistrationStepThreeScreen,
  ProfileScreen,
  StatisticsScreen,
} from "./sreens";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <View
        style={{
          height: "10%",
          justifyContent: "flex-end",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 40 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={{
              uri:
                "https://banner2.cleanpng.com/20180513/otq/kisspng-hamburger-button-computer-icons-menu-tab-5af896fdbf7b90.7623544115262410217843.jpg",
            }}
            style={{
              opacity: 0.7,
              width: 22,
              height: 22,
            }}
          />
        </TouchableOpacity>
      </View>
      <RegistrationStepTwoScreen />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      style={{ flex: 1, height: "100%", width: "100%" }}
      {...props}
    >
      <View
        style={{
          marginLeft: 40,
        }}
      >
        <View>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image
              source={{
                uri:
                  "https://banner2.cleanpng.com/20180513/otq/kisspng-hamburger-button-computer-icons-menu-tab-5af896fdbf7b90.7623544115262410217843.jpg",
              }}
              style={{
                opacity: 0.7,
                width: 22,
                height: 22,
                marginTop: "12%",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Добрый день, Иван</Text>
          <DrawerItemList
            inactiveTintColor="#757575"
            activeTintColor="#2E2E2E"
            labelStyle={{ fontSize: 16 }}
            activeBackgroundColor="#F9D24A"
            itemStyle={{ marginLeft: -1 }}
            {...props}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: "160%" }}
          onPress={() => console.log("click")}
        >
          <Text style={styles.exit}>ВЫЙТИ</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Профиль" component={Feed} />
      <Drawer.Screen name="Статистика" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  greeting: {
    width: "80%",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "35%",
    marginBottom: "10%",
    color: "#2E2E2E",
  },
  exit: {
    fontWeight: "normal",
    color: "#757575",
    fontSize: 16,
  },
});
