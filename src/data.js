const dir2 = {
    type: 'directory',
    id: 3,
    name: 'web',
    contents: [
        {
            type: 'github-url',
            id: 1,
            name: 'PostOn',
            url: 'https://www.github.com/John-Atha/PostOn',
        },
        {
            type: 'github-url',
            id: 2,
            name: 'AskMe Anything',
            url: 'https://www.github.com/John-Atha/askmeanything',
        },
        {
            type: 'github-url',
            id: 3,
            name: 'Thundercars',
            url: 'https://www.github.com/John-Atha/Thundercars',
        },
        {
            type: 'github-url',
            id: 4,
            name: 'Johnify',
            url: 'https://www.github.com/John-Atha/johnify',
        },
        {
            type: 'github-url',
            id: 5,
            name: 'FootLand',
            url: 'https://www.github.com/John-Atha/Football-Highlights-Project',
        },
        {
            type: 'github-url',
            id: 6,
            name: 'Email Page',
            url: 'https://github.com/John-Atha/Email-Page',
        },
        {
            type: 'github-url',
            id: 7,
            name: 'Todo',
            url: 'https://github.com/John-Atha/todo',
        },
        {
            type: 'github-url',
            id: 8,
            name: 'Url Formatter',
            url: 'https://github.com/John-Atha/url-formatter',
        },
        {
            type: 'github-url',
            id: 12,
            name: 'Maths Game',
            url: 'https://github.com/John-Atha/MathsGame-PC-Edition',
        },
        {
            type: 'github-url',
            id: 13,
            name: 'Country Explorer',
            url: 'https://github.com/John-Atha/Country-Explorer-Page',
        },
        {
            type: 'github-url',
            id: 14,
            name: 'Weather Page',
            url: 'https://github.com/John-Atha/Weather-Page',
        },
        {
            type: 'github-url',
            id: 9,
            name: 'Auctions Page',
            url: 'https://github.com/John-Atha/Auctions-Page',
        },
        {
            type: 'github-url',
            id: 10,
            name: 'Wikipedia Page',
            url: 'https://github.com/John-Atha/Wikipedia-Page',
        },
        {
            type: 'github-url',
            id: 11,
            name: 'Google front page clone',
            url: 'https://github.com/John-Atha/Google-frontpage-clone',
        },
        {
            type: 'github-url',
            id: 15,
            name: 'Store Database',
            url: 'https://github.com/John-Atha/Store-Database',
        },
        {
            type: 'github-url',
            id: 16,
            name: 'Instabot',
            url: 'https://github.com/John-Atha/Instabot',
        },
        {
            type: 'github-url',
            id: 29,
            name: 'Greek Cooking',
            url: 'https://github.com/John-Atha/greek-cooking',
        },
    ]

}

const dir3 = {
    type: 'directory',
    id: 4,
    name: 'AI-ML',
    contents: [
        {
            type: 'github-url',
            id: 28,
            name: 'Questions',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--nlp',
        },
        {
            type: 'github-url',
            id: 17,
            name: 'Parser',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--nlp',
        },
        {
            type: 'github-url',
            id: 18,
            name: 'Traffic',
            url: 'https://github.com/John-Atha/AI-Traffic',
        },
        {
            type: 'github-url',
            id: 19,
            name: 'Nim',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--learning',
        },
        {
            type: 'github-url',
            id: 20,
            name: 'Shopping',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--learning',
        },
        {
            type: 'github-url',
            id: 21,
            name: 'Crossword',
            url: 'https://github.com/John-Atha/AI-crossword',
        },
        {
            type: 'github-url',
            id: 22,
            name: 'Heredity',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--uncertainty',
        },
        {
            type: 'github-url',
            id: 23,
            name: 'PageRank',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--uncertainty',
        },
        {
            type: 'github-url',
            id: 24,
            name: 'Minesweeper',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--logic',
        },
        {
            type: 'github-url',
            id: 25,
            name: 'Knights',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--logic',
        },
        {
            type: 'github-url',
            id: 26,
            name: 'Tic Tac Toe',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--search',
        },
        {
            type: 'github-url',
            id: 27,
            name: 'Degrees',
            url: 'https://github.com/John-Atha/AI--Harvard-CS50--search',
        },        
    ]
}

const dir4 = {
    type: 'file',
    id: 3,
    name: 'favourites',
}

const dir1 = {
    type: 'directory',
    id: 2,
    name: 'source codes',
    contents: [
        dir2,
        dir3,
    ],
}

export const data = [
    dir1, 
    dir4,
    {
        type: 'file',
        id: 1,
        name: 'programming skills'
    },
    {
        type: 'file',
        id: 2,
        name: 'about_me'
    },
    {
        type: 'deployment-url',
        id: 1,
        name: 'PostOn',
        url: 'https://poston.herokuapp.com',
    },
    {
        type: 'deployment-url',
        id: 2,
        name: 'AskMe Anything',
        url: 'https://askmeanything52.herokuapp.com',
    },
    {
        type: 'deployment-url',
        id: 6,
        name: 'Greek Cooking',
        url: 'https://john-atha.github.io/greek-cooking/#/',
    },
    {
        type: 'deployment-url',
        id: 3,
        name: 'FootLand',
        url: 'https://john-atha.github.io/Football-Highlights-Project',
    },
    {
        type: 'deployment-url',
        id: 4,
        name: 'Url Formatter',
        url: 'https://john-atha.github.io/url-formatter-demo',
    },
    {
        type: 'deployment-url',
        id: 5,
        name: 'Maths Game',
        url: 'https://john-atha.github.io/MathsGame-PC-Edition',
    },
]

export const dir0 = {
    id: 1,
    name: 'guest',
    contents: data,
    type: 'directory',
}

export const parent = {
    'dir0': null,
    'dir1': dir0,
    'dir4': dir0,
    'dir2': dir1,
    'dir3': dir1,
}