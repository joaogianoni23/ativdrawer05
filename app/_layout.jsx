import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen name="index"
                    options={{
                        title: "",
                        drawerLabel: "Inicio",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="contador"
                    options={{
                        title: "",
                        drawerLabel: "Contador",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="add-circle" size={size} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen name="calculator"
                    options={{
                        title: "",
                        drawerLabel: "Calculadora",
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name="calculator" size={size} color={color} />
                        ),
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}