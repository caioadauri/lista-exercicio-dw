function mediaAluno(nome, nota1, nota2, nota3) {
  media = (nota1 + nota2 + nota3) / 3
  if (media >= 8) {
    console.log('O aluno ' + nome + ' foi aprovado com a média: ' + media.toFixed(2))
  } else {
    console.log('O aluno ' + nome + ' foi reprovado com a média: ' + media.toFixed(2))
  }
}

mediaAluno('Milka', 8, 9, 8)