var valor = document.querySelector('tabela');
var tabela = document.querySelector('tabuada');
const calcular = document.querySelector('btnCalcular');

calcular.addEventListener('click', () => {
    for (var i = 0; i < 11; i++) {
        var cal = String(1) + " X " + valor.value + ' = ' + i * Number(valor, value);
        var resultado = document.createElement('p')
        resultado.innerText = cal;
        tabuada.appendChild(resultado)
    }
})