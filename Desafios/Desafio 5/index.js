function inverterString(str) {
    let invertida = ""
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i]
    }
    return invertida
  }
  
  const stringOriginal = "Olá, mundo!"
  console.log("String original:", stringOriginal)
  console.log("String invertida:", inverterString(stringOriginal))
  
  