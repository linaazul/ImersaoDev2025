function conversor() {
    const umWon = 0.0040
    const valorWons = prompt("Digite um valor em won:")
    
    // o parseFloat serve para exibir o valor com, nesse caso, duas casas decimais
    const valorReais = umWon * parseFloat(valorWons) 
    alert("R$" + valorReais.toLocaleString("pt-BR"))
}