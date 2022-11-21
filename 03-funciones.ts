function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = multiplicar(5, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    puntosVida: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.puntosVida += curarX;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    puntosVida: 50,
    mostrarHp() {
        console.log(`Puntos de vida: ${this.puntosVida}`);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp()