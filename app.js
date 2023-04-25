/*
  Crie um programa que seja capaz de percorrer uma lista de números e imprima os números pares e os números ímpares.
*/

class Numeros {
  constructor() {
    this.lista = []
  }

  adicionaNumeros(numeros) {
    let campoLista = document.querySelector('#lista')
    let lista = this.inserirNumeros(numeros)
    let listaOrdenada = this.ordenaLista(lista)
    campoLista.textContent = `[${listaOrdenada}]`
  }

  inserirNumeros(numeros) {
    let lista = this.lista
    lista.push(numeros)
    return lista
  }

  lerDados() {
    let numero = parseInt(document.querySelector('#inputNumber').value)
    return numero
  }

  limparInput() {
    let input = document.querySelector('#inputNumber')
    input.value = ''
  }

  ordenaLista(lista) {
    let listaOrdenada = lista.sort((a, b) => a - b)
    return listaOrdenada
  }

  salvar() {
    let numero = this.lerDados()
    if (isNaN(numero)) {
      alert('Por favor, informe um número válido.')
      this.limparInput()
    } else {
      this.adicionaNumeros(numero)
      this.limparInput()
    }
  }

  numerosPares() {
    let lista = this.lista
    let campoLista = document.querySelector('#resultado')
    let resultado = []

    for (let i = 0; i <= lista.length; i++) {
      if (lista[i] % 2 === 0) {
        resultado.push(lista[i])
        let listaOrdenada = this.ordenaLista(resultado)
        campoLista.textContent = `[${listaOrdenada}]`
      }
    }
  }

  numerosImpares() {
    let lista = this.lista
    let campoLista = document.querySelector('#resultado')
    let resultado = []

    for (let i = 0; i <= lista.length; i++) {
      if (lista[i] % 2 === 1) {
        resultado.push(lista[i])
        let listaOrdenada = this.ordenaLista(resultado)
        campoLista.textContent = `[${listaOrdenada}]`
      }
    }
  }
}

let numero = new Numeros()