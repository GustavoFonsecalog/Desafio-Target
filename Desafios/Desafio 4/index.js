function calcularPercentualFaturamento(faturamentoPorEstado) {
    const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((soma, valor) => soma + valor, 0)
  
    const percentuais = {}
    for (const [estado, faturamento] of Object.entries(faturamentoPorEstado)) {
      percentuais[estado] = ((faturamento / faturamentoTotal) * 100).toFixed(2) + "%"
    }
  
    return percentuais
  }
  
  const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  }
  
  const percentuais = calcularPercentualFaturamento(faturamentoPorEstado)
  console.log("Percentual de faturamento por estado:")
  for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual}`)
  }
  
  