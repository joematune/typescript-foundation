console.log('TypeScript for Chess players');
class CreatePlayer {
    constructor(name, rating) {
        this.id = Math.floor(Math.random() * 1000).toString();
        this.name = name;
        this.rating = rating;
    }
    get ratingCategory() {
        const { rating: r } = this;
        if (r < 1200) {
            return 'N'; // Novices
        }
        else if (r < 1400) {
            return 'CD'; // Class D
        }
        else if (r < 1600) {
            return 'CC'; // Class C
        }
        else if (r < 1800) {
            return 'CB'; // Class B
        }
        else if (r < 2000) {
            return 'CA'; // Class A
        }
        else if (r < 2200) {
            return 'CM-USA'; // USA Cadidate Master
        }
        else if (r < 2300) {
            return 'CM'; // Candidate Master
        }
        else if (r < 2400) {
            return 'FM'; // FIDE Master
        }
        else if (r < 2500) {
            return 'IM'; // International Master
        }
        else if (r < 2700) {
            return 'GM'; // GrandMaster
        }
        else {
            return 'SGM'; // (informal title) Super GrandMaster
        }
    }
}
const joe = new CreatePlayer('Joe', 1616);
const magnus = new CreatePlayer('Magnus', 2845);
console.log(joe, '\n', joe.ratingCategory, '\n', magnus, '\n', magnus.ratingCategory);
//# sourceMappingURL=index.js.map