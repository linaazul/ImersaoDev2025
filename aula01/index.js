function conversor() {
    const umWon = 0.0040
    const valorWons = prompt("Digite um valor em won:")
    
    // o parseFloat serve para exibir o valor com duas casas decimais
    const valorReais = umWon * parseFloat(valorWons) 
    // toLocaleString --> Formata a string de acordo com o local informado no método
    alert("R$" + valorReais.toLocaleString("pt-BR"))
}