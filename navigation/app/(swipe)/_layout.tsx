import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from ".";
import About from "./about";
import Setting from "./setting";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
    return (
        
                <Tab.Navigator style={{ marginTop: 50 }}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="About" component={About} />
                    <Tab.Screen name="Profile" component={Setting} />
                </Tab.Navigator>
    );
}