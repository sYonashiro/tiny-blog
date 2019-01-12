import { loremText } from "./text"

export const blogPosts = [
    {
        id: 1,
        title: "Post Title 1",
        date: '2019-01-10 12:15',
        tags: ['sports', 'variety'],
        content: '[lorem1] ' + loremText + '\r\n' + loremText + '\r\n' + loremText
    },
    {
        id: 2,
        title: "Post Title 2",
        date: '2019-01-11 12:15',
        tags: ['sports', 'news'],
        content: '[lorem2] ' + loremText + '\r\n' + loremText + '\r\n' + loremText
    },
    {
        id: 3,
        title: "Post Title 3",
        date: '2019-01-12 12:15',
        tags: ['news'],
        content: '[lorem3] ' + loremText + '\r\n' + loremText + '\r\n' + loremText
    },
]