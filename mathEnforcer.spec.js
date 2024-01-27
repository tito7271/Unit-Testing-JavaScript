import { mathEnforcer } from './mathEnforcer.js'
import { expect } from 'chai'

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return correct result when positive number is given', () => {
            //Arrange
            const positiveInput = 6;

            //Act
            const positiveResult = mathEnforcer.addFive(positiveInput)

            //Assert
            expect(positiveResult).to.be.equal(11)
        })

        it('should return correct result when negative number is given', () => {
            //Arrange
            const negativeInput = -6;

            //Act
            const negativeResult = mathEnforcer.addFive(negativeInput)

            //Assert
            expect(negativeResult).to.be.equal(-1)
        })

        it('should return correct result when positive floating point number is given', () => {
            //Arrange
            const positiveFloatingPointInput = 6.50;

            //Act
            const positiveFloatingPointResult = mathEnforcer.addFive(positiveFloatingPointInput)

            //Assert
            expect(positiveFloatingPointResult).to.be.equal(11.50)
        })

        it('should return correct result when it is assert with closeTo() and floating point number is given', () => {
            //Arrange
            const positiveFloatingPointInput = 1.000000001;

            //Act
            const positiveFloatingPointResult = mathEnforcer.addFive(positiveFloatingPointInput)

            //Assert
            expect(positiveFloatingPointResult).to.be.closeTo(6.01, 0.01)
        })

        it('should return correct result when negative floating point number is given', () => {
            //Arrange
            const negativeFloatingPointInput = -6.50;

            //Act
            const negativeFloatingPointResult = mathEnforcer.addFive(negativeFloatingPointInput)

            //Assert
            expect(negativeFloatingPointResult).to.be.equal(-1.50)
        })

        it('should return correct result when zero as input is given', () => {
            //Arrange
            const zeroInput = 0;

            //Act
            const zeroResult = mathEnforcer.addFive(zeroInput)

            //Assert
            expect(zeroResult).to.be.equal(5)
        })

        it('should return undefined result when non-number input is given', () => {
            //Arrange
            const nullInput = null
            const undefinedInput = undefined
            const arrayInput = []
            const stringInput = 'Levski Sofia 1914'

            //Act
            const nullResult = mathEnforcer.addFive(nullInput)
            const undefinedResult = mathEnforcer.addFive(undefinedInput)
            const arrayResult = mathEnforcer.addFive(arrayInput)
            const stringResult = mathEnforcer.addFive(stringInput)

            //Assert
            expect(nullResult).to.be.undefined
            expect(undefinedResult).to.be.undefined
            expect(arrayResult).to.be.undefined
            expect(stringResult).to.be.undefined
        })
    })

    describe('subtractTen', () => {
        it('should return correct result when positive number is given', () => {
            //Arrange
            const positiveInput = 11;

            //Act
            const positiveResult = mathEnforcer.subtractTen(positiveInput)

            //Assert
            expect(positiveResult).to.be.equal(1)
        })

        it('should return correct result when negative number is given', () => {
            //Arrange
            const negativeInput = -6;

            //Act
            const negativeResult = mathEnforcer.subtractTen(negativeInput)

            //Assert
            expect(negativeResult).to.be.equal(-16)
        })

        it('should return correct result when positive floating point number is given', () => {
            //Arrange
            const positiveFloatingPointInput = 6.50;

            //Act
            const positiveFloatingPointResult = mathEnforcer.subtractTen(positiveFloatingPointInput)

            //Assert
            expect(positiveFloatingPointResult).to.be.equal(-3.50)
        })

        it('should return correct result when it is assert with closeTo() and floating point number is given', () => {
            //Arrange
            const positiveFloatingPointInput = 1.000000001;

            //Act
            const positiveFloatingPointResult = mathEnforcer.subtractTen(positiveFloatingPointInput)

            //Assert
            expect(positiveFloatingPointResult).to.be.closeTo(-9, 0.01)
        })

        it('should return correct result when negative floating point number is given', () => {
            //Arrange
            const negativeFloatingPointInput = -6.50;

            //Act
            const negativeFloatingPointResult = mathEnforcer.subtractTen(negativeFloatingPointInput)

            //Assert
            expect(negativeFloatingPointResult).to.be.equal(-16.50)
        })

        it('should return correct result when zero as input is given', () => {
            //Arrange
            const zeroInput = 0;

            //Act
            const zeroResult = mathEnforcer.subtractTen(zeroInput)

            //Assert
            expect(zeroResult).to.be.equal(-10)
        })

        it('should return correct result when result is equal to zero', () => {
            //Arrange
            const zeroInput = 10;

            //Act
            const zeroResult = mathEnforcer.subtractTen(zeroInput)

            //Assert
            expect(zeroResult).to.be.equal(0)
        })

        it('should return undefined result when non-number input is given', () => {
            //Arrange
            const nullInput = null
            const undefinedInput = undefined
            const arrayInput = []
            const stringInput = 'Levski Sofia 1914'

            //Act
            const nullResult = mathEnforcer.subtractTen(nullInput)
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput)
            const arrayResult = mathEnforcer.subtractTen(arrayInput)
            const stringResult = mathEnforcer.subtractTen(stringInput)

            //Assert
            expect(nullResult).to.be.undefined
            expect(undefinedResult).to.be.undefined
            expect(arrayResult).to.be.undefined
            expect(stringResult).to.be.undefined
        })
    })

    describe('sum', () => {
        it('should return correct result when correct input is given', () => {
            //Arrange
            const firstParam = 6
            const secondParam = -10
            const firstParam2 = 10
            const secondParam2 = -6
            const firstParam3 = 6
            const secondParam3 = -6
            const firstParam4 = 6
            const secondParam4 = 6

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)
            const result2 = mathEnforcer.sum(firstParam2, secondParam2)
            const result3 = mathEnforcer.sum(firstParam3, secondParam3)
            const result4 = mathEnforcer.sum(firstParam4, secondParam4)

            //Assert
            expect(result).to.be.equal(-4)
            expect(result2).to.be.equal(4)
            expect(result3).to.be.equal(0)
            expect(result4).to.be.equal(12)
        })

        it('should return correct result when both parameter are positive numbers', () => {
            //Arrange
            const firstParam = 6
            const secondParam = 10

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.equal(16)
        })

        it('should return correct result when floating point numbers input is given', () => {
            //Arrange
            const firstParam = 6.5
            const secondParam = -10.5

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.equal(-4)
        })

        it('should return correct result when it is assert with closeTo() and floating point number is given', () => {
            //Arrange
            const firstParam = 6.500000001
            const secondParam = -10.600002

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.closeTo(-4.1, 0.01)
        })

        it('should return correct result when positive floating point numbers input is given', () => {
            //Arrange
            const firstParam = 6.5
            const secondParam = 10.5

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.equal(17)
        })

        it('should return correct result when zero and floating point number input is given', () => {
            //Arrange
            const firstParam = 0
            const secondParam = 0.00001

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.closeTo(0, 0.01)
        })


        it('should return correct result when zero input is given', () => {
            //Arrange
            const firstParam = 0
            const secondParam = 0

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.equal(0)
        })

        it('should return correct result when result is equal to zero', () => {
            //Arrange
            const firstParam = 10
            const secondParam = -10

            //Act
            const result = mathEnforcer.sum(firstParam, secondParam)

            //Assert
            expect(result).to.be.equal(0)
        })

        it('should return undefined when first parameter is non-number', () => {
            //Arrange
            const nullInputFirstParam = null
            const undefinedInputFirstParam = undefined
            const arrayInputFirstParam = []
            const stringInputFirstParam = 'Levski Sofia 1914'

            //Act
            const nullResult = mathEnforcer.sum(nullInputFirstParam, 6)
            const undefinedResult = mathEnforcer.sum(undefinedInputFirstParam, 6)
            const arrayResult = mathEnforcer.sum(arrayInputFirstParam, 6)
            const stringResult = mathEnforcer.sum(stringInputFirstParam, 6)

            //Assert
            expect(nullResult).to.be.undefined
            expect(undefinedResult).to.be.undefined
            expect(arrayResult).to.be.undefined
            expect(stringResult).to.be.undefined

        })

        it('should return undefined when second parameter is non-number', () => {
            //Arrange
            const nullInputSecondParam = null
            const undefinedInputSecondParam = undefined
            const arrayInputSecondParam = []
            const stringInputSecondParam = 'Levski Sofia 1914'

            //Act
            const nullResult = mathEnforcer.sum(6, nullInputSecondParam)
            const undefinedResult = mathEnforcer.sum(6, undefinedInputSecondParam)
            const arrayResult = mathEnforcer.sum(6, arrayInputSecondParam)
            const stringResult = mathEnforcer.sum(6, stringInputSecondParam)

            //Assert
            expect(nullResult).to.be.undefined
            expect(undefinedResult).to.be.undefined
            expect(arrayResult).to.be.undefined
            expect(stringResult).to.be.undefined

        })
    })
})