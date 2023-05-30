var tabuleiro = ['_', '_', '_', '_', '_', '_', '_', '_', '_']
var jogada = 0, posicao
//Variáveis lógicas para verificar se há campeão:
//Verdadeiro -> todos os valores são X ou O
var linhaA, linhaB, linhaC, colunaD, colunaE, colunaF, diagonalG, diagonalH


while (jogada <= 8) {

  //Impressão do tabuleiro
  alert(`${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}`)
  //Jogada do X
  //Repete a jogada se a jogada é inválida:
  while (true) {
    posicao = Number(prompt("Jogada do X (digite uma posição de 0 a 8): "))
    //Se a posição é válida então aplique a jogada no tabuleiro e para o laço ...
    if (posicao >= 0 && posicao <= 8 && tabuleiro[posicao] === '_') {
      tabuleiro[posicao] = 'X'
      jogada++
      break
    }
  }


  alert(`${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]} 
${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}`)


  //Verificação se X é vencedor:
  linhaA = (tabuleiro[0] === 'X') && (tabuleiro[1] === 'X') && (tabuleiro[2] === 'X')
  linhaB = (tabuleiro[3] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[5] === 'X')
  linhaC = (tabuleiro[6] === 'X') && (tabuleiro[7] === 'X') && (tabuleiro[8] === 'X')
  colunaD = (tabuleiro[0] === 'X') && (tabuleiro[3] === 'X') && (tabuleiro[6] === 'X')
  colunaE = (tabuleiro[1] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[7] === 'X')
  colunaF = (tabuleiro[2] === 'X') && (tabuleiro[5] === 'X') && (tabuleiro[8] === 'X')
  diagonalG = (tabuleiro[0] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[8] === 'X')
  diagonalH = (tabuleiro[2] === 'X') && (tabuleiro[4] === 'X') && (tabuleiro[6] === 'X')


  if (linhaA === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (linhaB === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (linhaC === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (colunaD === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (colunaE === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (colunaF === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (diagonalG === true) {
    alert("Jogador X é o Vencedor!")
    break
  }


  if (diagonalH === true) {
    alert("Jogador X é o Vencedor!")
    break
  }




  if (jogada <= 8) {
    //Jogada do O
    //Repete a jogada se a jogada é inválida:
    while (true) {
      posicao = Number(prompt("Jogada do O (digite uma posição de 0 a 8):"))
      //Se a posição é válida então aplique a jogada no tabuleiro e para o laço ...
      if (posicao >= 0 && posicao <= 8 && tabuleiro[posicao] === '_') {
        tabuleiro[posicao] = 'O'
        jogada++
        break
      }
    }
    //Verificação se X é vencedor:
    linhaA = (tabuleiro[0] === 'O') && (tabuleiro[1] === 'O') && (tabuleiro[2] === 'O')
    linhaB = (tabuleiro[3] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[5] === 'O')
    linhaC = (tabuleiro[6] === 'O') && (tabuleiro[7] === 'O') && (tabuleiro[8] === 'O')
    colunaD = (tabuleiro[0] === 'O') && (tabuleiro[3] === 'O') && (tabuleiro[6] === 'O')
    colunaE = (tabuleiro[1] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[7] === 'O')
    colunaF = (tabuleiro[2] === 'O') && (tabuleiro[5] === 'O') && (tabuleiro[8] === 'O')
    diagonalG = (tabuleiro[0] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[8] === 'O')
    diagonalH = (tabuleiro[2] === 'O') && (tabuleiro[4] === 'O') && (tabuleiro[6] === 'O')


    if (linhaA === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (linhaB === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (linhaC === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (colunaD === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (colunaE === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (colunaF === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (diagonalG === true) {
      alert("Jogador O é o Vencedor!")
      break
    }


    if (diagonalH === true) {
      alert("Jogador O é o Vencedor!")
      break
    }
  }
}
