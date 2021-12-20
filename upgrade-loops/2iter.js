// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia.
// Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const iter of alumns) {
  let alum = iter;
  let aproved = 0;
  if (alum.T1 ) {
    aproved += 1;
  }
  if (alum.T2) {
    aproved += 1;
  }
  if (alum.T3) {
    aproved += 1;
  }
  iter.isApproved = aproved >= 2 ? true : false;
}

console.log(alumns);
