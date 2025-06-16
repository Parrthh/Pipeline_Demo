// Following Code is a basic unit test written using Jest

// This is a test suite - a group of related tests
// Purpose: To organize your tests in a readable, grouped way
describe('Sample Test', () => {
    // This is a single test case
    // The first argument is a description of what you are testing
    // The second argument is a function that performs the test
    test('adds 2 + 2 to equal 4', () => {
        // This is the actual assertion
        // expect(...) => is the value we are testing
        // toBe(..) => is the condition expected to meet
        expect(2 + 2).toBe(4);

        //  If the answer is yes, the test passes
        //  If not, the CI will stop the workflow
    });
})