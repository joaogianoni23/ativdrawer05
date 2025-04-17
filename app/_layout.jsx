import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout () {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer>
        <Drawer.Screen name="index"
        options={{
            title: "",
            drawerLabel: "Inicio",
            // headerShown: false,
            // headerLeft: true,
            drawerIcon: ({ size, color}) => (
                <Ionicons name="home" size={size} color={color} />
            ),
        }}
        />
        <Drawer.Screen
        name="counter"
        options={{
            drawerLabel: 'Contador',
            title: '',
            // headerShown: false,
            // headerLeft: true,
            drawerIcon: ({ size, color }) => (
                <Ionicons name="person" size={size} color={color} />
            ),
        }}
/>
    </Drawer>
    </GestureHandlerRootView>
    );
}