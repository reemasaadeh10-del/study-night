import { expect } from "chai";
import {shuffle as shuffleFunc} from "../starter/src/shuffle.js";
describe("shuffle function" , () => {
    it("should rearrange the indexes of an array" , () => {
        const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const shuffled = shuffleFunc([...original]);
        expect(shuffled).to.not.deep.equal(original);
    });
    it("should contain the same elements after shuffling" , () => {
        const original = [1, 2, 3, 4, 5];
        const shuffled = shuffleFunc([...original]);
        expect(shuffled.sort()).to.deep.equal(original.sort());
    });
    it("should return an empty array unchanged" , () => {
        expect(shuffleFunc([])).to.deep.equal([]);
    });

});