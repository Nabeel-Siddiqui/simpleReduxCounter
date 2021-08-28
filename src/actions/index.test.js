const index = require("./index")
// @ponicode
describe("index.increment", () => {
    test("0", () => {
        let callFunction = () => {
            index.increment()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.incrementByFive", () => {
    test("0", () => {
        let callFunction = () => {
            index.incrementByFive(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.incrementByFive(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.incrementByFive(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.incrementByFive(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.incrementByFive(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.incrementByFive(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.decrementByFive", () => {
    test("0", () => {
        let callFunction = () => {
            index.decrementByFive(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.decrementByFive(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.decrementByFive(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.decrementByFive(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.decrementByFive(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.decrementByFive(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
