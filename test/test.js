const helpers = require("../index");
const sinon = require("sinon");
const chai = require("chai");
const chaiPromise = require("chai-as-promised");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
chai.use(chaiPromise);


describe("helpers", function () {

    describe("#sleep", function () {
        before(() => {
            console.log("Running before")
        });

        it("should resolve", async function () {
            await helpers.sleep(20).should.be.fulfilled;
        });
    });

    describe("#randomTime", function () {

        it("should return a Number", function () {
            const time = helpers.randomTime();
            assert.isNumber(time);
        });

        it("should return a time between 5000 and 7000 when options is not provided", function () {
            const time = helpers.randomTime();
            expect(time).to.be.within(5000, 7000);
        });

        it("should return a time between min and max when options is provided", function () {
            const options = {min: 8, max: 15};
            const time = helpers.randomTime(options);
            expect(time).to.be.within(options.min * 1000, options.max * 1000);
            assert.isNumber(time);
        });

        it("should throw range error when options.min is greater than options.max", function () {
            const options = {min: 20, max: 5};
            expect(() => helpers.randomTime(options)).to.throw(RangeError);
        });

        it("should throw range error when options.min is equal to options.max", function () {
            const options = {min: 5, max: 5};
            expect(() => helpers.randomTime(options)).to.throw(RangeError);
        });

        it("should not throw a range error when options.min is less than options.max", function () {
            const options = {min: 20, max: 30};
            expect(() => helpers.randomTime(options)).to.not.throw(RangeError);
        });
    });

    describe("#generateUUID", function () {

        it("should return a valid V4 UUID", function () {
            const uuid = helpers.generateUUID();
            expect(uuid).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
        });
    });
});