'use strict'

const valores = [123, 50, 456, 3, 24, 78, 10, 65, 1001, 233]
const valoresAbaixoMeta = valores.filter(valor => valor < 100)
const valoresAcimaMeta = valores.filter(valor => valor > 100)
const valoresTaxa = valores.map(valor => valor + 5)
const valoresFreteMenor100 = valores.map(valor => valor + 100).filter(valor => valor < 120)

const botaoCriarCards = document.getElementById('criar-cards')
const botaoAbaixoMeta = document.getElementById('abaixo-meta')
const botaoAcimaMeta = document.getElementById('acima-meta')
const botaoAdicionaTaxa = document.getElementById('aumenta-taxa')
const botaoAdicionaFrete = document.getElementById('aumenta-frete')

function criarCard (valor) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = valor
    container.append(card)

    if(valor <= 100) {
        card.classList.add('vermelho')
    }
}

function criarCards(listaValores) {
    const container = document.getElementById('container')
    container.replaceChildren()
    listaValores.forEach(criarCard)
}

botaoCriarCards.onclick = () => criarCards(valores)
botaoAbaixoMeta.onclick = () => criarCards(valoresAbaixoMeta)
botaoAcimaMeta.onclick = () => criarCards(valoresAcimaMeta)
botaoAdicionaTaxa.onclick = () => criarCards(valoresTaxa)
botaoAdicionaFrete.onclick = () => criarCards(valoresFreteMenor100)