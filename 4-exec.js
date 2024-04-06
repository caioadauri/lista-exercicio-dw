function parcela(valorProduto, numParcela) {
  dezPorcento = 1.10
  vintoPorcento = 1.20
  if (numParcela <= 3) {
    valorParcela = (valorProduto / numParcela) * dezPorcento
    valorTotal = valorParcela * numParcela
    console.log('O valor do produto será '+ valorTotal.toFixed(2)  +'O valor da parcela será de R$' + valorParcela.toFixed(2))
  } else if (numParcela >= 4) {
    valorParcela = (valorProduto / numParcela) * vintoPorcento
    valorTotal = valorParcela * numParcela
    console.log('O valor do produto será '+ valorTotal.toFixed(2)  +' O valor da parcela será de R$' + valorParcela.toFixed(2))
  }
}

parcela(100, 3)