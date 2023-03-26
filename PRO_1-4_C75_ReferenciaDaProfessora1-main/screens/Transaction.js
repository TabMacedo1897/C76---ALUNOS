import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: ""
    };
  }

  getCameraPermissions = async domState => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" é verdadeiro se o usuário concedeu permissão
          status === "granted" é falso se o usuário não concedeu permissão
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      /*atualizar os estados do QR CODE*/
    });
  };

  render() {
    //adicionar a constante

    if (domState === "scanner") {
      return (
        /*adicionar o componente BarCodeScanner*/
      );
    }

    return (
      <View style={styles.container}>

        /* Solicitar permissão da câmera*/ 
        <TouchableOpacity
          style={[styles.button, { marginTop: 25 }]}
          onPress={() => this.getCameraPermissions("scanner")}
        >
          <Text style={styles.buttonText}>Digitalizar QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
  button:{
    width: '50%',
   height: 55,
   alignSelf: 'center',
   backgroundColor: 'pink',
   padding: 20,
   margin: 50,
   borderRadius: 10,
   justifyContent: 'center'
  }
 
});