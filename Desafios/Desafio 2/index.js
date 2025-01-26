function fibonacciCheck(num) {
    let a = 0,
      b = 1
  
    while (b < num) {
      const temp = b
      b = a + b
      a = temp
    }
  
    return b === num ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`
  }
  
  const numeroParaVerificar = 34 // Você pode alterar este número
  console.log(fibonacciCheck(numeroParaVerificar))
  
  