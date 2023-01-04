var calc = window.document.getElementById('btn1')
calc.addEventListener('click', calcular)
function calcular() {
    var n1 = Number(inp2.value)
    var n2 = Number(inp3.value)
    var n3 = Number(inp4.value)
    var nome = String(inp1.value)

    var média = (n1 + n2 + n3) / 3
    var resultado = média >= 7 ? "Aprovado" : "Reprovado"

    window.alert(`O aluno ${nome} foi ${resultado} com a nota média de ${média.toFixed(2)}`)
}
