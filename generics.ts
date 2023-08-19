interface Rank<RankedItem> {
  item: RankedItem;
  rank: number;
}

function ranker<RankItem>(item: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = item.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Pikachu",
    hp: 200,
  },
  {
    name: "Charmander",
    hp: 50,
  },
  {
    name: "Bulbasaur",
    hp: 100,
  },
];

const ranks = ranker(pokemon, (p) => p.hp);

console.log(ranks);
