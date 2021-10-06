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
            name: 'AskMeAnything',
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
    ]

}

const dir3 = {
    type: 'directory',
    id: 4,
    name: 'AI-ML',
    contents: [
        {
            type: 'github-url',
            id: 16,
            name: 'Questions',
            url: 'https://github.com/John-Atha/AI-Questions',
        },
        {
            type: 'github-url',
            id: 17,
            name: 'Parser',
            url: 'https://github.com/John-Atha/AI-Parser',
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
            url: 'https://github.com/John-Atha/AI-Nim',
        },
        {
            type: 'github-url',
            id: 20,
            name: 'Shopping',
            url: 'https://github.com/John-Atha/AI-shopping',
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
            url: 'https://github.com/John-Atha/AI-heredity',
        },
        {
            type: 'github-url',
            id: 23,
            name: 'PageRank',
            url: 'https://github.com/John-Atha/AI-PageRank',
        },
        {
            type: 'github-url',
            id: 24,
            name: 'Minesweeper',
            url: 'https://github.com/John-Atha/AI-minesweeper',
        },
        {
            type: 'github-url',
            id: 25,
            name: 'Knights',
            url: 'https://github.com/John-Atha/AI-Knights',
        },
        {
            type: 'github-url',
            id: 26,
            name: 'Tic Tac Toe',
            url: 'https://github.com/John-Atha/AI-TicTacToe',
        },
        {
            type: 'github-url',
            id: 27,
            name: 'Degrees',
            url: 'https://github.com/John-Atha/AI-degrees',
        },        
    ]
}

const dir4 = {
    type: 'directory',
    id: 5,
    name: 'favourites',
    'contents': [
        {
            type: 'file',
            id: 2,
            name: 'frameworks',
        },
        {
            type: 'file',
            id: 3,
            name: 'fields',
        },
        {
            type: 'file',
            id: 4,
            name: 'languages', 
        }
    ]
}

const dir1 = {
    type: 'directory',
    id: 2,
    name: 'projects codes',
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
        name: 'skills'
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
        name: 'AskMeAnything',
        url: 'https://askmeanything52.herokuapp.com',
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