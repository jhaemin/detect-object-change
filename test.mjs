import hash from 'object-hash'
import equal from 'fast-deep-equal'
import { hugeObj1 } from './huge-obj1.mjs'
import { hugeObj2 } from './huge-obj2.mjs'
import { tinyObj1 } from './tiny-obj1.mjs'
import { tinyObj2 } from './tiny-obj2.mjs'

const iteration = 1000

console.log(`Tiny objects comparison\n`)

let begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame =
    hash(tinyObj1, { algorithm: 'md5' }) ===
    hash(tinyObj2, { algorithm: 'md5' })
}

console.log(`hash comparison: ${Date.now() - begin}ms`)

begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame = equal(tinyObj1, tinyObj2)
}

console.log(`deep comparison: ${Date.now() - begin}ms`)

begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame = JSON.stringify(tinyObj1) === JSON.stringify(tinyObj2)
}

console.log(`serialize comparison: ${Date.now() - begin}ms`)

console.log(`\nHuge objects comparison\n`)

begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame =
    hash(hugeObj1, { algorithm: 'md5' }) ===
    hash(hugeObj2, { algorithm: 'md5' })
}

console.log(`hash comparison: ${Date.now() - begin}ms`)

begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame = equal(hugeObj1, hugeObj2)
}

console.log(`deep comparison: ${Date.now() - begin}ms`)

begin = Date.now()

for (let i = 0; i < iteration; i += 1) {
  const theyAreSame = JSON.stringify(hugeObj1) === JSON.stringify(hugeObj2)
}

console.log(`serialize comparison: ${Date.now() - begin}ms`)
