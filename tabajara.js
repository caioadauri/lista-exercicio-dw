function tabajara() {
  event.preventDefault()
  let salario = document.getElementById("salario").value;
  parseFloat(salario)
  vintePorCento = 1.20
  quinzePorCento = 1.15
  dezPorCento = 1.10
  cincoPorCento = 1.05
  if (salario < 280){
    aumento = salario * vintePorCento
    percentual = '20%'
    valorAumento = aumento - salario
    document.getElementById("salarioLabel").innerHTML = salario;
    document.getElementById("percentual").innerHTML = percentual;
    document.getElementById("valorAumento").innerHTML = valorAumento.toFixed(2);
    document.getElementById("aumento").innerHTML = aumento.toFixed(2);
  } else if (salario >= 280 && salario < 700) {
    aumento = salario * quinzePorCento
    percentual = '15%'
    valorAumento = aumento - salario
    document.getElementById("salarioLabel").innerHTML = salario;
    document.getElementById("percentual").innerHTML = percentual;
    document.getElementById("valorAumento").innerHTML = valorAumento.toFixed(2);
    document.getElementById("aumento").innerHTML = aumento.toFixed(2);
  } else if (salario >= 700 && salario < 1500) {
    aumento = salario * dezPorCento
    percentual = '10%'
    valorAumento = aumento - salario
    document.getElementById("salarioLabel").innerHTML = salario;
    document.getElementById("percentual").innerHTML = percentual;
    document.getElementById("valorAumento").innerHTML = valorAumento.toFixed(2);
    document.getElementById("aumento").innerHTML = aumento.toFixed(2);
  } else if (salario >= 1500) {
    aumento = salario * cincoPorCento
    percentual = '5%'
    valorAumento = aumento - salario
    document.getElementById("salarioLabel").innerHTML = salario;
    document.getElementById("percentual").innerHTML = percentual;
    document.getElementById("valorAumento").innerHTML = valorAumento.toFixed(2);
    document.getElementById("aumento").innerHTML = aumento.toFixed(2);
  }

}