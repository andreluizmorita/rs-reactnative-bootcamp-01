import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Todo from './components/Todo';

export default class App extends Component {
  state = {
    usuario: 'André',
    todos: [
      { id: 0, text: 'Fazer café'},
      { id: 1, text: 'Estudar o GoNative'},
    ],
    counter: 0
  } 

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: 'Timer'})
    }, 3000);
  }

  componentWillUnmount() {
  }

  handlerAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  /* Não deve ser usado para atualizar estados nem propriedades */
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.counter < 5;
  // }

  componentDidUpdate() {
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text }
  }

  addTodo = () => {
    this.setState({
      todos: [ ...this.state.todos, { 
        id: Math.random(), 
        text: 'Novo'
      }]
    })
  }

  render() {
    return <View style={styles.container}>
      <Text>{this.state.usuario}</Text>
      <Text>{this.state.text}</Text>
      { this.state.todos.map(todo => (
        <Todo key={todo.id} title={todo.text} />
      ))}
      <Button title="Adicionar todo" onPress={this.addTodo} />
      <Text>{this.state.counter}</Text>
      <Button title="Adicionar counter" onPress={this.handlerAddCounter} />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  }
});
