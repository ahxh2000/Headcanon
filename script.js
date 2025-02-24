// Headcanon templates and keywords data
const headcanonTemplates = {
    "character": [
        "[角色] secretly collects [令人惊讶的收藏品].",
        "[角色] has a hidden talent for [技能], but is too shy to show it.",
        "[角色]'s biggest fear is [事物], which stems from a childhood trauma.",
        "[角色] always carries a [物品] for sentimental reasons.",
        "[角色] has a peculiar habit of [习惯性动作] when nervous.",
        "[角色] spends their free time practicing [技能] in secret.",
        "[角色] has a special connection with [事物] since their childhood.",
        "[角色] keeps a collection of [令人惊讶的收藏品] hidden under their bed.",
        "[角色] writes poetry about [事物] when no one is watching.",
        "[角色] learned [技能] from a mysterious stranger years ago."
    ],
    "relationship": [
        "[角色1] and [角色2] are secretly pen pals, exchanging letters under aliases.",
        "[角色1] and [角色2] have a shared past as rivals in a [竞争领域] competition.",
        "Despite their constant bickering, [角色1] secretly admires [角色2]'s [优点].",
        "[角色1] and [角色2] accidentally met in a [意外地点] and formed an unlikely friendship.",
        "[角色1] is secretly protective of [角色2] because of a past incident.",
        "[角色1] and [角色2] meet every week to practice [技能] together.",
        "Every year, [角色1] anonymously sends [角色2] a [物品] on their birthday.",
        "[角色1] keeps trying to help [角色2] overcome their fear of [事物].",
        "[角色1] and [角色2] bonded over their shared love of [令人惊讶的收藏品].",
        "When no one else is around, [角色1] and [角色2] drop their usual attitudes and [习惯性动作] together."
    ]
};

const keywords = {
    "令人惊讶的收藏品": [
        "vintage buttons", "antique keys", "pressed flowers", "foreign coins",
        "old maps", "unusual rocks", "miniature paintings", "rare stamps",
        "forgotten photographs", "peculiar bookmarks"
    ],
    "技能": [
        "origami", "whistling bird calls", "speed reading", "juggling",
        "solving riddles", "shadow puppetry", "fortune telling", "star navigation",
        "morse code", "brewing exotic teas"
    ],
    "事物": [
        "thunderstorms", "mirrors", "closed doors", "crowded places",
        "silence", "darkness", "heights", "deep water",
        "being alone", "loud noises"
    ],
    "物品": [
        "a mysterious locket", "an old compass", "a worn-out book",
        "a lucky charm", "a childhood toy", "a special ring",
        "a handwritten letter", "a music box", "a pocket watch",
        "a faded photograph"
    ],
    "习惯性动作": [
        "humming old lullabies", "drawing patterns in the air",
        "organizing things by color", "counting steps",
        "talking to plants", "collecting fallen leaves",
        "making paper airplanes", "braiding strings",
        "stacking coins", "writing in invisible ink"
    ],
    "竞争领域": [
        "chess", "poetry writing", "gardening", "cooking",
        "storytelling", "art", "music", "dance",
        "martial arts", "strategy games"
    ],
    "优点": [
        "creativity", "determination", "kindness", "wisdom",
        "courage", "patience", "loyalty", "intelligence",
        "resilience", "compassion"
    ],
    "意外地点": [
        "an old bookstore", "a secret garden", "a quiet cafe",
        "a hidden temple", "an abandoned library", "a rooftop garden",
        "a mysterious antique shop", "a forgotten park",
        "a cozy tea house", "a magical forest clearing"
    ],
    "角色": [
        "the mysterious artist", "the quiet librarian", "the eccentric inventor",
        "the wandering musician", "the wise gardener", "the curious explorer",
        "the gentle healer", "the skilled craftsperson", "the dreamy writer",
        "the passionate collector"
    ],
    "角色1": [
        "the stoic warrior", "the cheerful baker", "the stern teacher",
        "the playful musician", "the wise elder", "the curious scholar",
        "the brave adventurer", "the skilled artisan", "the mysterious stranger",
        "the kind healer"
    ],
    "角色2": [
        "the shy apprentice", "the rebellious student", "the lonely artist",
        "the determined dreamer", "the quiet observer", "the energetic performer",
        "the gentle soul", "the passionate creator", "the careful planner",
        "the free spirit"
    ]
};

// Helper function to get a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Helper function to get a random keyword based on type
function getRandomKeyword(keywordType) {
    const keywordList = keywords[keywordType];
    return keywordList ? getRandomItem(keywordList) : keywordType;
}

// Function to replace all placeholders in a template
function replacePlaceholders(template) {
    let result = template;
    
    // Find all placeholders in the format [placeholder]
    const placeholders = template.match(/\[([^\]]+)\]/g) || [];
    
    // Replace each placeholder with a random keyword
    placeholders.forEach(placeholder => {
        const keywordType = placeholder.slice(1, -1); // Remove [ and ]
        const replacement = getRandomKeyword(keywordType);
        result = result.replace(placeholder, replacement);
    });
    
    return result;
}

// Main function to generate a headcanon
function generateHeadcanon() {
    // Get selected values
    const type = document.getElementById('headcanon-type').value;
    const genre = document.getElementById('genre').value;
    const archetype = document.getElementById('archetype').value;

    // Get templates for the selected type
    const templates = headcanonTemplates[type];
    if (!templates) {
        return "Error: Invalid Headcanon type.";
    }

    // Select a random template
    const template = getRandomItem(templates);

    // Replace placeholders with random keywords
    const headcanon = replacePlaceholders(template);

    // Update the output text
    const outputElement = document.getElementById('headcanon-output');
    outputElement.textContent = headcanon;

    // Add a subtle animation
    outputElement.style.opacity = '0';
    setTimeout(() => {
        outputElement.style.opacity = '1';
    }, 50);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', generateHeadcanon);
}); 