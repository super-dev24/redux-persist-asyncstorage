import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BooksList from "../screens/BooksList";
import BookmarksList from "../screens/BookmarksList";

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch(route.name) {
    case 'BooksList':
      iconName = 'view-dashboard';
      break;
    case 'BookmarksList':
      iconName = 'bookmark-multiple-outline';
      break;
    default:
      break;
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={24} />;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='BooksList'
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#00FF00",
          tabBarInactiveTintColor: "#FFF",
          tabBarShowLabel: false,
          tabBarStyle: {
            height: '10%',
            backgroundColor: '#1E1B26',
          },
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen name='BooksList' component={BooksList} />
        <Tab.Screen name='BookmarksList' component={BookmarksList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;