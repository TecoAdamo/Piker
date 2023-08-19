import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 27.90},
        {key: 2, nome: 'Portuguesa', valor: 39.90},
        {key: 3, nome: 'Quatro queijos', valor: 49.90},
        {key: 4, nome: 'Frango com Catupiry', valor: 65.90},
        {key: 5, nome: 'Calabresa', valor: 25.70},
      ]
    };
  }
  
  render(){

    let pizzasItem = this.state.pizzas.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
   
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 25,   
    fontWeight: 'bold'
  },
});

export default App;
