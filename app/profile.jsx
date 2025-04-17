import { View, Text, StyleSheet, } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.subtitle}>Aqui temos uma tela de perfil! 😊</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 36,
        color: '#666',
        marginTop: 10,
    },
});