console.log('TypeScript for Chess players');
class CreatePlayer {
    constructor(name, ratingValue) {
        this.name = name;
        this.rating = {
            category: 'CA',
            value: ratingValue
        };
    }
    get isRatingValue() {
        return this.rating.value > 0;
    }
}
const Joe = {
    id: 216,
    name: 'Joe Matune',
    rating: {
        category: 'CB',
        value: 2160
    }
};
const magnus = new CreatePlayer('Magnus', 2845);
console.log(Joe, '\n', magnus, '\n', magnus.isRatingValue);
//# sourceMappingURL=index.js.map