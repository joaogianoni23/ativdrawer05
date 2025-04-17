import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen() {
    const [contador, setContador] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>CONTADOR:</Text>
                
                <Text style={styles.counter}>{contador}</Text>

                <View style={styles.buttonContainer}>
                    <Button title="Incrementar" onPress={() => setContador(contador + 1)} color="#008b8b" />
                    <Button title="Zerar" onPress={() => setContador(0)} color="#008b8b"/>
                    <Button title="Decrementar" onPress={() => setContador(contador - 1)} color="#008b8b"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff', 
        padding: 20, 
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 5, 
        width: '50%', 
        alignItems: 'center', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10, 
    },
    counter: {
        fontSize: 28,
        marginVertical: 20,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        marginTop: 20,
    },
});