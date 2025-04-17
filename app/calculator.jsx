import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';

export default function CalculadoraScreen() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handlePress = (value) => {
        if (value === 'C') {
            setInput('');
            setResult(null);
        } else if (value === '=') {
            try {
                setResult(eval(input)); 
            } catch (error) {
                setResult('Erro');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.display}>{result !== null ? result : input || '0'}</Text>
            <View style={styles.pressableGrid}>
                {['1', '2', '/', '3', '4', '*', '5', '6', '-', '7', '8', '+', '9', '0', '=', 'C' ].map((value) => (
                    <Pressable
                        key={value}
                        style={styles.pressable}
                        onPress={() => handlePress(value)}
                    >
                        <Text style={styles.pressableText}>{value}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Fundo mais escuro para um visual moderno
        justifyContent: 'flex-end',
        padding: 20,
    },
    display: {
        fontSize: 48,
        color: '#333', // 
        textAlign: 'right',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#008b8b', // Linha mais sutil
        paddingBottom: 10,
    },
    pressableGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // Espaçamento uniforme
    },
    pressable: {
        backgroundColor: '#008b8b', // Botões com fundo escuro
        width: '22%',
        height: 80, // Botões mais altos
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12, // Bordas mais arredondadas
        margin: 10,
        shadowColor: '#000', // Sombra para profundidade
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Sombra no Android
    },
    pressableText: {
        color: '#fff', // Texto laranja para contraste
        fontSize: 28, // Texto maior
        fontWeight: 'bold',
    },
});