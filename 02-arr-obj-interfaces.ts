let habilidades: string[] = ["Bash", "Counter", "Healing"];


// SE BORRA A LA HORA DE TRANSPILAR, SIRVE PARA DARLE UNA ESTRUCTURA A MI OBJETO
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);

// console.log(habilidades);
