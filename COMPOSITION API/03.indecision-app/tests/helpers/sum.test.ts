// sum.test.js
import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum'

describe('add function', () => {
  
  test('adds 1 + 2 to equal 3', () => {
  
    // Preparación
    const a = 1;
    const b = 2;
    
    // Estimulo 
    const resultado = sum( a, b );
    
    // Comportamiento esperado
    expect( resultado ).toBe( a + b )
      // if( sum(1, 2) !== 3) {
      //     throw new Error('La suma no es correcta.')
      // }
  })
  
})

describe('addArray function', () => {
  
  test('should return 0 if the array is empty', () => {
  
    // Prepare
    const numberArray = [];
    // Injection
    const result = addArray(numberArray)
    // 
  
    expect( result ).toBe(0) 
    
  })
  
  test('should return the proper value of the addArray function', () => {
  
    // Prepare
    const numberArray = [1,2,3,4,5];
    // Injection
    const result = addArray(numberArray)
    // 
  
    expect( result ).toBe(15) 
    
  })

})


