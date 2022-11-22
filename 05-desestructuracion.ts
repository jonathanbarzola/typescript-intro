interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
  }
  
  interface Detalles {
    autor: string;
    anio: number;
  }
  
  const reproductor: Reproductor = {
    volumen: 99,
    segundo: 36,
    cancion: "Mess",
    detalles: {
      autor: "Ed Sheeran",
      anio: 2015,
    },
  };
  
  const { volumen, segundo, cancion, detalles } = reproductor;
  const { autor } = detalles;
  
  // console.log('Volumen actual: ', volumen);
  // console.log('Segundo actual: ', segundo);
  // console.log('Canción actual: ', cancion);
  // console.log('Autor: ', autor);
  
  
  
  const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
  
  const [ p1, p2, p3 ] = dbz;
  
  console.log('Personaje 1: ', p1);
  console.log('Personaje 2: ', p2);
  console.log('Personaje 3: ', p3);