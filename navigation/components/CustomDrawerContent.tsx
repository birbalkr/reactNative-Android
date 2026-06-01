import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{
                flex: 1,
                justifyContent: "space-between",
            }}
        >
            <View style={{ flex: 1, gap:15}}>
                <View
                    style={{
                        backgroundColor: "#9fc7f5",
                        padding: 20,
                        flexDirection: "row",
                        gap: 15,
                        alignItems: "center",
                        borderRadius: 10,
                        
                    }}
                >
                    <Image
                        source={{
                            uri: "https://i.pravatar.cc/150",
                        }}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                        }}
                    />

                    <View>
                        <Text
                        style={{
                            marginTop: 10,
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        John Doe
                    </Text>
                    <Text
                        style={{
                            marginTop: 10,
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        johndoe@gmail.com
                    </Text>
                    
                    </View>
                </View>

                <DrawerItemList {...props} />
            </View>

            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                }}
                onPress={() => console.log("logout")}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: "#333",
                    }}
                >
                    Logout
                </Text>

                <Ionicons
                    name="log-out-outline"
                    size={24}
                    color="#333"
                />
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}