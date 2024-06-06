const baseballTeams = [
    "Seattle Mariners",
    "Houston Astros",
    "Texas Rangers",
    "Los Angeles Angels",
    "Oakland Athletics",
];

const hockeyTeams = [
    "Carolina Hurricanes",
    "Columbus Blue Jackets",
    "New Jersey Devils",
    "New York Islanders",
    "New York Rangers",
    "Philadelphia Flyers",
    "Pittsburgh Penguins",
    "Washington Capitals",
];

const basketballTeams = [
    "Portland Trail Blazers",
    "Utah Jazz",
    "Denver Nuggets",
    "Oklahoma City Thunder",
    "Minnesota Timberwolves",
];

function genMessage() {
    console.log(`My favorite baseball team is the ${baseballTeams[Math.floor(Math.random() * baseballTeams.length)]}`);
    console.log(`My favorite hockey team is the ${hockeyTeams[Math.floor(Math.random() * hockeyTeams.length)]}`);
    console.log(`My favorite basketball team is the ${basketballTeams[Math.floor(Math.random() * basketballTeams.length)]}`);
}

genMessage();