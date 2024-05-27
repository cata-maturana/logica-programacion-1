function getNumbers() {
    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");
    let num3 = prompt("Ingresa el tercer número:");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingresa solo números.");
        return;
    }

    if (num1 === num2 && num2 === num3) {
        document.getElementById('result').innerText = "Todos los números son iguales: " + num1;
        return;
    }

    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);

    let menorMayor = numbers.join(', ');
    let mayorMenor = numbers.reverse().join(', ');

    document.getElementById('result').innerText = `
        Ordenados de menor a mayor: ${menorMayor}
        Ordenados de mayor a menor: ${mayorMenor}
    `;
}
