// Rating categories
type RatingCategory =
      'UR' // Unranked
    | 'N' // Novices
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

class Player {
    id: string;
    name: string;
    rating: number;

    constructor(name: string, rating: number) {
        this.id = Math.floor(Math.random() * 1000).toString();
        this.name = name;
        this.rating = rating;
    }

    get ratingCategory(): RatingCategory {
        const { rating: r } = this;
         if (r < 1200) {
            return 'N' // Novices
        } else if (r < 1400) {
            return 'CD' // Class D
        } else if (r < 1600) {
            return 'CC' // Class C
        } else if (r < 1800) {
            return 'CB' // Class B
        } else if (r < 2000) {
            return 'CA' // Class A
        } else if (r < 2200) {
            return 'CM-USA' // USA Cadidate Master
        } else if (r < 2300) {
            return 'CM' // Candidate Master
        } else if (r < 2400) {
            return 'FM' // FIDE Master
        } else if (r < 2500) {
            return 'IM' // International Master
        } else if (r < 2700) {
            return 'GM' // GrandMaster
        } else {
            return 'SGM'; // (informal title) Super GrandMaster
        }
    }
}

const magnus = new Player('Magnus', 2845)

console.log(
    magnus, '\n', // CreatePlayer { id: '980', name: 'Magnus', rating: 2845 } 
    magnus.ratingCategory // SGM
)
