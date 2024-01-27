import { analyzeArray } from './arrayAnalyzer.js'
import { expect } from 'chai'

describe('analyzeArray', () => {
    it('should return correct result when array of numbers input is given', () => {
        // Arrange
        const inputArray = [1, 6, 10 , -3, 2.37, -21]
        const expected = {
            min: -21,
            max: 10,
            length: 6
        };

        // Act
        let result = analyzeArray(inputArray)

        // Assert
        expect(result).to.deep.equal(expected)
    })

    it('should return correct result when single element array is given', () => {
        // Arrange
        const singleInputArray = [1]
        
        // Act
        let result = analyzeArray(singleInputArray)

        // Assert
        expect(result).to.deep.equal({min: 1, max: 1, length: 1})
    })

    it('should return correct result when array with equal elements is given', () => {
        // Arrange
        const equalElementsInputArray = [3, 3, 3]
        
        // Act
        let result = analyzeArray(equalElementsInputArray)

        // Assert
        expect(result).to.deep.equal({min: 3, max: 3, length: 3})
    })

    it('should return undefined result when empty array is given', () => {
        // Arrange
        const emptyInputArray = []
        
        // Act
        let result = analyzeArray(emptyInputArray)

        // Assert
        expect(result).to.deep.equal(undefined)
    })

    it('should return undefined result when non-array is given', () => {
        // Arrange
        const stringInput = 'Levski Sofia 1914'
        
        // Act
        let result = analyzeArray(stringInput)

        // Assert
        expect(result).to.deep.equal(undefined)
    })

    it('should return undefined result when text array is given', () => {
        // Arrange
        const stringInputArray = ['Levski', 'Sofia', '1914']
        
        // Act
        let result = analyzeArray(stringInputArray)

        // Assert
        expect(result).to.deep.equal(undefined)
    })
})
