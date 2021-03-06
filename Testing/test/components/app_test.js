// This file is called app_test because the app component is what
// will be tested.

// Import a few helpers from our helper file.
import {renderComponent, expect} from "../test_helper";
// Import the component that we'll be testing.
import App from "../../src/components/app";

// Three keywords will generally be the backbone of all tests we write:
// describe, it, expect

// We use describe to group together similar tests. We want to test the App
// component so we place a string called App as first argument to describe.
// This string App does not bind to component App in any way. It's simply
// the title of the report that returns after the tests finish. Report
// strings help us narrow down what tests are doing what. Naming the report
// string the same as the component being tested is simply convention.

// We use the it function to test a single attribute of a target. It is very
// specific, saying here's exactly what we're testing about App component.
// For example, we're testing whether or not App shows some specific text
// like "Hello World". So we put a report string
// of what it, the specific test, is about as first argument.

// We use the expect function to make an assertion about a target. By target we
// mean a thing we're testing. By assertion, we issue a claim that a specific
// part of our target is true. For example, if we're testing that App component
// contains the words "Hello World" then that's what we're claiming/asserting
// in the expect function.

// Use 'describe' to group together similar tests.
describe("App", () => {
    // Setting up tests will always be the same. Describe takes will the report
    // string and a function containing one or more it functions. Each it function
    // takes a report string and a function containing expect.

    // Use 'it' to test a single attribute of a target.
    it("shows the correct text", () => {

        // Create an instance of the component to be tested.
        const component = renderComponent(App);

        // Use 'expect' to make an 'assertion' about a target.
        expect(component).to.contain("Hello World");
    });


});

















