import test from 'node:test'
import assert from 'node:assert/strict'
import { par, media, filtrarMaiores18 } from '../src/utils/exercicios.js'

test('par identifica números pares e trata zero como par', () => {
  assert.equal(par(2), true)
  assert.equal(par(3), false)
  assert.equal(par(0), true)
})

test('media calcula a média aritmética', () => {
  assert.equal(media([7, 8, 9]), 8)
})

test('media retorna 0 para um array vazio', () => {
  assert.equal(media([]), 0)
})

test('filtrarMaiores18 inclui idades a partir de 18', () => {
  const usuarios = [
    { name: 'Ana', age: 22 },
    { name: 'Beto', age: 17 },
    { name: 'Carla', age: 30 },
    { name: 'Duda', age: 18 },
  ]

  assert.deepEqual(filtrarMaiores18(usuarios), [
    { name: 'Ana', age: 22 },
    { name: 'Carla', age: 30 },
    { name: 'Duda', age: 18 },
  ])
})
