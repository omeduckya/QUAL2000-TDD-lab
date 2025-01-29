module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node: test");
const assert = require("node:assert");


//Suite and tests
describe("Lab-TDD tests", () => {
    describe("Add function tests", () => {
         test("Add function should return 8 when adding 5 and 3" , () => {
            assert.strictEqual(add(3, 5), 8)
    });
        test ("Add function should return 0 when adding -5 and 5", () => {
            assert.strictEqual(add(-5, 5), 0);
        });
});
describe("Divide function tests", () => {
    test("Divide function should return 4 when dividing 32 over 8",
        assert.strictEqual(divide(32, 8), 4));
});
test("Zero division should throw and error", () => {
    assert.throws(divide(10, 0),)

});
///////////////////////////////////////////////////////

describe("Substract function tests", () =>{
    test("Substract function should return 4 when substracting 7 and 3" , () => {
        assert.strictEqual(subtract(7, 3), 4)
    });

    test("Substract function should return 40 when substracting 90 and 50", () => {
        assert.strictEqual(substract(90, 50), 40);
    });
});


describe("Modulas function tests", () => {
    test("Modulas function should return 1 when dividing 5 over 2", () => {
        assert.strictEqual(modulas(5, 2), 1);
    });

    test("Modulas function should return 2 when dividing 8 over 3", () => {
        assert.strictEqual(modulas(8, 3), 2);
    });
});


describe("Multiply function test", () =>{
    test("Multiply function should return 21 when multiplying 7 and 3", () => {
        assert.strictEqual(multiply(7, 3), 21);
    });

    test("Multiply function should return 24 when multiplying 6 and 4", () => {
        assert.strictEqual(multiply(6, 4), 24);
    });
});

describe("Power function test", () => {
    test("Power function should return 256 when raising 4 to the power of 4", () => {
        assert.strictEqual(power(4,4 ), 256);
    });
    
    test ("Power function should return 125 when raising 5 to the power of 3", () => {
        assert.strictEqual(power(5, 3), 125);
    });
});

describe("Square function test", () => {
    test("Square function should return 9 when squaring  3", () => {
        assert.strictEqual(square(3), 9);
    });
    
    test ("Square function should return 64 when squaring 8", () => {
        assert.strictEqual(square(8), 64);
    });
});

describe("Ceiling function test", () => {
    test("Ceiling function should return 6 for 5.3", () => {
        assert.strictEqual(ceiling(5.3), 6);
    });
    
    test ("Ceiling function should return 7 for 6.2", () => {
        assert.strictEqual(ceiling(6.2),7);
    });
});

describe("Floor function test", () => {
    test("Floor function should return 2 for 2,7", () => {
        assert.strictEqual(floor(2.7), 2);
    });
    
    test ("Floor function should return 3 for 3.6", () => {
        assert.strictEqual(floor(3.6), 3);
    });
});


});



