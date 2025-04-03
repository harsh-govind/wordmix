import { uniqueNamesGenerator, adjectives, animals, colors, countries, names, starWars, languages } from 'unique-names-generator';

const categoryMap = {
    place: [adjectives, countries],
    animal: [animals],
    thing: [adjectives, colors],
    city: [adjectives, countries],
    country: [countries],
    person: [names],
    event: [adjectives, starWars],
    language: [languages],
    color: [colors],
    movie: [starWars],
    name: [names]
};

export function getRandom(category = "any", count = 1) {
    let selectedCategories = [];

    if (category === "any") {
        for (let i = 0; i < count; i++) {
            const randomKey = Object.keys(categoryMap)[Math.floor(Math.random() * Object.keys(categoryMap).length)];
            selectedCategories.push(randomKey);
        }
    } else if (Array.isArray(category)) {
        for (let i = 0; i < count; i++) {
            selectedCategories.push(category[Math.floor(Math.random() * category.length)]);
        }
    } else {
        throw new Error("Invalid category type. Must be an array or 'any'");
    }

    return selectedCategories.map(cat => {
        const dictionaries = categoryMap[cat] || [adjectives, animals, names, starWars, colors, languages, countries];
        return uniqueNamesGenerator({ dictionaries, separator: ' ', length: 2 });
    });
}
