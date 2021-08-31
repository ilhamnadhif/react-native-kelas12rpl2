import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'native-base'

function Calculator() {
    const [angkaPertama, setAngkaPertama] = useState(0)
    const [angkaKedua, setAngkaKedua] = useState(0)
    const [hasil, setHasil] = useState(0)
    function hasilTambah() {
        setHasil(parseInt(angkaPertama) + parseInt(angkaKedua))
    }
    function hasilKurang() {
        setHasil(parseInt(angkaPertama) - parseInt(angkaKedua))
    }
    function hasilKali() {
        setHasil(parseInt(angkaPertama) * parseInt(angkaKedua))
    }
    function hasilBagi() {
        setHasil(parseInt(angkaPertama) / parseInt(angkaKedua))
    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 30 }}>
            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
            <TextInput placeholder="masukkan angka 1"
                onChangeText={setAngkaPertama}
                keyboardType="numeric"
                style={{ borderRadius: 5, marginTop: 50, height: 50, width: "100%", borderWidth: 1, padding: 10 }} />
            <TextInput placeholder="masukkan angka 2"
                onChangeText={setAngkaKedua}
                keyboardType="numeric"
                style={{ borderRadius: 5, marginTop: 20, height: 50, width: "100%", borderWidth: 1, padding: 10 }} />
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-evenly' }} >
                <Button
                    onPress={hasilTambah}
                    colorScheme="teal" size="lg">
                    Tambah
                </Button>
                <Button
                    onPress={hasilKurang}
                    colorScheme="teal" size="lg">
                    Kurang
                </Button>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 20, justifyContent: 'space-evenly' }} >
                <Button
                    onPress={hasilKali}
                    colorScheme="teal" size="lg">
                    Kali
                </Button>
                <Button
                    onPress={hasilBagi}
                    colorScheme="teal" size="lg">
                    Bagi
                </Button>
            </View>
            {/* </View> */}
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                {hasil ?
                    <Text style={{ fontSize: 30 }}>Hasil = {hasil}</Text> : null}
            </View>
        </View>
    )
}

export default Calculator
