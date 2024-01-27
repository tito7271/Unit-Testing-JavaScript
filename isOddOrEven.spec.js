import { isOddOrEven } from './isOddOrEven.js'
import { expect } from 'chai'

describe('isOddOrEven', () => {
    it('should return even when even string length is given as paramater', () => {
        //Arrange
        const evenStringLengthInput = 'Levski'

        //Act
        const evenStringLengthResult = isOddOrEven(evenStringLengthInput)

        //Assert
        expect(evenStringLengthResult).to.be.equal('even')
    })

    it('should return odd when odd string length is given as paramater', () => {
        //Arrange
        const oddStringLengthInput = 'Text '

        //Act
        const oddStringLengthResult = isOddOrEven(oddStringLengthInput)

        //Assert
        expect(oddStringLengthResult).to.be.equal('odd')
    })

    it('should return even as result when zero length string is given as paramater', () => {
        //Arrange
        const zeroStringLengthInput = ''

        //Act
        const zeroStringLengthResult = isOddOrEven(zeroStringLengthInput)

        //Assert
        expect(zeroStringLengthResult).to.be.equal('even')
    })

    it('should return correct result when multiple even and odd strings length are given as paramaters', () => {
        //Arrange
        const evenInput = 'Text'
        const oddInput = 'alabala'
        const evenInput2 = '123456'
        const oddInput2 = '1'

        //Act
        const evenStringLengthResult = isOddOrEven(evenInput)
        const oddStringLengthResult = isOddOrEven(oddInput)
        const evenStringLengthResult2 = isOddOrEven(evenInput2)
        const oddStringLengthResult2 = isOddOrEven(oddInput2)

        //Assert
        expect(evenStringLengthResult).to.be.equal('even')
        expect(oddStringLengthResult).to.be.equal('odd')
        expect(oddStringLengthResult2).to.be.equal('odd')
        expect(evenStringLengthResult2).to.be.equal('even') 
    })

    it('should return undefined when non-string type is given as paramater', () => {
        //Arrange
        const intInput = 123
        const nullInput = null
        const undefinedInput = undefined
        const arrayInput = []
        const objectInput = {}

        //Act
        const intResult = isOddOrEven(intInput)
        const nullResult = isOddOrEven(nullInput)
        const undefinedResult = isOddOrEven(undefinedInput)
        const arrayResult = isOddOrEven(arrayInput)
        const objectResult = isOddOrEven(objectInput)

        //Assert
        expect(intResult).to.be.equal(undefined)
        expect(nullResult).to.be.equal(undefined)
        expect(undefinedResult).to.be.equal(undefined)
        expect(arrayResult).to.be.equal(undefined)
        expect(objectResult).to.be.equal(undefined)
    })
})