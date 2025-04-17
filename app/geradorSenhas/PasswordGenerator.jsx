import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  Slider,
  ScrollView,
  SafeAreaView,
  ToastAndroid,
  Platform,
  Alert,
  Clipboard
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Assumindo uso do Expo
import styles from './PasswordGeneratorStyles';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    let charset = '';
    let newPassword = '';
    
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    
    if (charset === '') {
      setPassword('Selecione pelo menos uma opção');
      return;
    }
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password && password !== 'Selecione pelo menos uma opção') {
      Clipboard.setString(password);
      
      // Mostrar feedback ao usuário
      if (Platform.OS === 'android') {
        ToastAndroid.show('Senha copiada!', ToastAndroid.SHORT);
      } else {
        Alert.alert('Copiado', 'Senha copiada para a área de transferência');
      }
    }
  };

  const OptionRow = ({ label, value, onValueChange }) => (
    <View style={styles.optionRow}>
      <Text style={styles.optionLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#d1d1d1', true: '#81b0ff' }}
        thumbColor={value ? '#2563eb' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>Gerador de Senhas</Text>
          
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={password}
              placeholder="Sua senha aparecerá aqui"
              placeholderTextColor="#a0a0a0"
              editable={false}
            />
            <TouchableOpacity 
              style={styles.copyButton}
              onPress={copyToClipboard}
              disabled={!password || password === 'Selecione pelo menos uma opção'}
            >
              <MaterialCommunityIcons 
                name="content-copy" 
                size={24} 
                color={(!password || password === 'Selecione pelo menos uma opção') ? '#a0a0a0' : '#2563eb'} 
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.lengthContainer}>
            <Text style={styles.lengthLabel}>Tamanho: {length}</Text>
            <Slider
              style={styles.slider}
              minimumValue={4}
              maximumValue={32}
              step={1}
              value={length}
              onValueChange={setLength}
              minimumTrackTintColor="#2563eb"
              maximumTrackTintColor="#d1d1d1"
              thumbTintColor="#2563eb"
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderMinMax}>4</Text>
              <Text style={styles.sliderMinMax}>32</Text>
            </View>
          </View>
          
          <View style={styles.optionsContainer}>
            <OptionRow
              label="Letras maiúsculas (A-Z)"
              value={includeUppercase}
              onValueChange={setIncludeUppercase}
            />
            <OptionRow
              label="Letras minúsculas (a-z)"
              value={includeLowercase}
              onValueChange={setIncludeLowercase}
            />
            <OptionRow
              label="Números (0-9)"
              value={includeNumbers}
              onValueChange={setIncludeNumbers}
            />
            <OptionRow
              label="Símbolos (!@#$%^&*)"
              value={includeSymbols}
              onValueChange={setIncludeSymbols}
            />
          </View>
          
          <TouchableOpacity
            style={styles.generateButton}
            onPress={generatePassword}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="refresh" size={20} color="#fff" />
            <Text style={styles.generateButtonText}>Gerar Senha</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordGenerator;