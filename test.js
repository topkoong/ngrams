const expect = require('chai').expect;
const { nGrams } = require('./main');
function unitTesting() {
	describe("Ngrams Unit testing", () => {
		describe(`EMPTY STRING: ''`, () => {
			it(`should return []`, () => {
                expect([]).to.deep.equal(nGrams(""));
			});
        });
        describe(`ONE WORD: 'test.'`, () => {
			it(`should return ['test']`, () => {
                expect(['test']).to.deep.equal(nGrams('test.'));
			});
        });
        describe(`ONE WORD WITH PUNCTUATION: 't@est.#{}'`, () => {
			it(`should return []`, () => {
                expect(['test']).to.deep.equal(nGrams('t@est.#{}'));
			});
        });
        describe(`INPUT STRING: 'Show me the code.'`, () => {
			it(`should return [ 'Show ',
            'Show me ',
            'Show me the ',
            'Show me the code ',
            'me ',
            'me the ',
            'me the code ',
            'the ',
            'the code ',
            'code ' ]`, () => {
                expect([ 'Show ',
                'Show me ',
                'Show me the ',
                'Show me the code ',
                'me ',
                'me the ',
                'me the code ',
                'the ',
                'the code ',
                'code ' ]).to.deep.equal(nGrams('Show me the code.'));
			});
        });
        describe(`INPUT STRING: 'I love JavaScript.'`, () => {
			it(`should return [ 'I ',
            'I love ',
            'I love JavaScript ',
            'love ',
            'love JavaScript ',
            'JavaScript ' ]`, () => {
                expect([ 'I ',
                'I love ',
                'I love JavaScript ',
                'love ',
                'love JavaScript ',
                'JavaScript ' ]).to.deep.equal(nGrams('I love JavaScript.'));
			});
		});
        describe(`INPUT STRING: 'Which coffee is the healthiest?'`, () => {
			it(`should return [ 'Which ',
            'Which coffee ',
            'Which coffee is ',
            'Which coffee is the ',
            'Which coffee is the healthiest ',
            'coffee ',
            'coffee is ',
            'coffee is the ',
            'coffee is the healthiest ',
            'is ',
            'is the ',
            'is the healthiest ',
            'the ',
            'the healthiest ',
            'healthiest ' ]`, () => {
                expect([ 'Which ',
                'Which coffee ',
                'Which coffee is ',
                'Which coffee is the ',
                'Which coffee is the healthiest ',
                'coffee ',
                'coffee is ',
                'coffee is the ',
                'coffee is the healthiest ',
                'is ',
                'is the ',
                'is the healthiest ',
                'the ',
                'the healthiest ',
                'healthiest ' ]).to.deep.equal(nGrams('Which coffee is the healthiest?'));
			});
		});
	});
}

unitTesting();