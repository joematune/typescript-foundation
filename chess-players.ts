console.log('TypeScript for Chess players');

// Rating categories as a union of possible values
type RatingCategory =
      'N' // Novices
    | 'CD' // Class D
    | 'CC' // Class C
    | 'CB' // Class B
    | 'CA' // Class A
    | 'CM-USA' // USA Cadidate Master
    | 'CM' // Candidate Master
    | 'FM' // FIDE Master
    | 'IM' // International Master
    | 'GM' // GrandMaster
    | 'SGM'; // Super GrandMaster

interface Rating {
    category: RatingCategory;
    value: number;
}

interface Player {
    id: number;
    name: string;
    rating: Rating;
}

class CreatePlayer {
    name: string;
    ratingValue: number;
    rating: Rating;

    constructor(name: string, ratingValue: number) {
        this.name = name;
        this.rating = {
            category: 'CA',
            value: ratingValue
        };
    }

    get isRatingValue(): true | false {
        return this.rating.value > 0;
    }

}

const Joe: Player = {
    id: 216,
    name: 'Joe Matune',
    rating: {
        category: 'CB',
        value: 2160
    }
}

const magnus = new CreatePlayer('Magnus', 2845);

console.log(
    Joe, '\n',
    magnus, '\n',
    magnus.isRatingValue
);
