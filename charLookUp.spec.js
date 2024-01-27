import { lookupChar } from './charLookUp.js'
import { expect } from 'chai'

describe('lookupChar', () => {
    it('should return correct char when correct input is given', () => {
        //Arrange
        const inputString = 'Levski Sofia 1914'
        const inputIndex = 7

        //Act
        const result = lookupChar(inputString, inputIndex)

        //Assert
        expect(result).to.be.equal('S')
    })

    it('should return correct char when single element input string is given', () => {
        //Arrange
        const inputString = 'a'
        const inputIndex = 0

        //Act
        const result = lookupChar(inputString, inputIndex)

        //Assert
        expect(result).to.be.equal('a')
    })

    it('should return undefined when first parameter is incorrect type', () => {
        //Arrange
        const incorrectInputTypeNumber = 123
        const incorrectInputTypeArray = []
        const incorrectInputTypeNull = null
        const incorrectInputTypeUndefined = undefined
        const inputIndex = 0

        //Act
        const resultTypeNumber = lookupChar(incorrectInputTypeNumber, inputIndex)
        const resultTypeArray = lookupChar(incorrectInputTypeArray, inputIndex)
        const resultTypeNull = lookupChar(incorrectInputTypeNull, inputIndex)
        const resultTypeUndefined = lookupChar(incorrectInputTypeUndefined, inputIndex)

        //Assert
        expect(resultTypeNumber).to.be.undefined
        expect(resultTypeArray).to.be.undefined
        expect(resultTypeNull).to.be.undefined
        expect(resultTypeUndefined).to.be.undefined
    })

    it('should return undefined when second parameter is incorrect type', () => {
        //Arrange
        const inputString = 'Levski Sofia 1914'
        const incorrectInputTypeFloatingNumber = 1.23
        const incorrectInputTypeArray = []
        const incorrectInputTypeNull = null
        const incorrectInputTypeUndefined = undefined

        //Act
        const resultTypeFloatingNumber = lookupChar(inputString, incorrectInputTypeFloatingNumber)
        const resultTypeArray = lookupChar(inputString, incorrectInputTypeArray)
        const resultTypeNull = lookupChar(inputString, incorrectInputTypeNull)
        const resultTypeUndefined = lookupChar(inputString, incorrectInputTypeUndefined)

        //Assert
        expect(resultTypeFloatingNumber).to.be.undefined
        expect(resultTypeArray).to.be.undefined
        expect(resultTypeNull).to.be.undefined
        expect(resultTypeUndefined).to.be.undefined
    })

    it('should return "Incorrect index" when second parameter is negative number', () => {
        //Arrange
        const inputString = 'Levski Sofia 1914'
        const inputIndex = -1

        //Act
        const result = lookupChar(inputString, inputIndex)

        //Assert
        expect(result).to.be.equal('Incorrect index')
    })

    it('should return "Incorrect index" when second parameter is equal to first parameter length', () => {
        //Arrange
        const inputString = 'Levski Sofia 1914'
        const inputIndex = 17

        //Act
        const result = lookupChar(inputString, inputIndex)

        //Assert
        expect(result).to.be.equal('Incorrect index')
    })

    it('should return "Incorrect index" when second parameter is bigger than first parameter length', () => {
        //Arrange
        const inputString = 'Levski Sofia 1914'
        const inputIndex = 18

        //Act
        const result = lookupChar(inputString, inputIndex)

        //Assert
        expect(result).to.be.equal('Incorrect index')
    })
})