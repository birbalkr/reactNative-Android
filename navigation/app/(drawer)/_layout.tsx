import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => (
                <CustomDrawerContent {...props} />
            )}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: "Home",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="about"
                options={{
                    title: "About",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="setting"
                options={{
                    title: "Setting",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name="settings-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer>
    );
}