console.log('TypeScript for Chess players');

// Player interface with primitive type properties
interface Player {
    id: number;
    name: string;
    rating: {
        category: string;
        value: number;
    };
}

const Joe: Player = {
    id: 216,
    name: 'Joe Matune',
    rating: {
        category: 'CB',
        value: 2160
    }
}

console.log(Joe);
