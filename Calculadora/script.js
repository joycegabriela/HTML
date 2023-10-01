function adicionarNumero(numero) {
    document.getElementById('visor').value += numero;
}
function operadores(operador){
    document.getElementById('visor').value += operador;
}
function calcular(){
    const resultado = eval(document.getElementById('visor').value) // eval: transforma uma string '2+3' em operção e ele retorna '5'
    document.getElementById('visor').value = resultado
}
function limpar(){
   document.getElementById('visor').value = " "
}