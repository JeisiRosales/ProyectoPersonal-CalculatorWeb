document.addEventListener('DOMContentLoaded', () => {
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('button');
    let expresion = '';

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const valor = boton.textContent;

            if (valor === 'C') {
                expresion = '';
                pantalla.textContent = '0';
            } else if (valor === '=') {
                try {
                    // Evalúa la expresión y la muestra
                    pantalla.textContent = eval(expresion);
                    expresion = pantalla.textContent;
                } catch (e) {
                    pantalla.textContent = 'Error';
                    expresion = '';
                }
            } else {
                expresion += valor;
                pantalla.textContent = expresion;
            }
        });
    });
});