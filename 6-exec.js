function operacao(num1, num2, selecao) {
  switch (selecao) {
    case 1:
      soma = num1 + num2
      console.log(soma)
      break
    case 2:
      multi = num1 * num2
      console.log(multi)
      break
    case 3:
      div = num1 / num2
      console.log(div)
      break
  }
}

operacao(8.0, 7.5, 3)