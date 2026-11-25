
export function par(n) {
  return n % 2 === 0
}

export function media(notas) {
  if (notas.length === 0) return 0
  return notas.reduce((soma, nota) => soma + nota, 0) / notas.length
}


export function filtrarMaiores18(usuarios) {
  return usuarios.filter((usuario) => usuario.age >= 18)
}
