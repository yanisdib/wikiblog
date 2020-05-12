import moment from 'moment';

export default [
    {
        id: '1',
        title: 'Final Fantasy',
        subtitle: 'The Legendary series explained',
        description: 'This is a simple test',
        permalink: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()

    },
    {
        id: '2',
        title: 'Yoshitaka Amano',
        subtitle: 'From Art to Poetry',
        description: 'This is another simple test',
        permalink: '',
        createdAt: 4500000
    },
    {
        id: '3',
        title: 'Chrono Cross',
        subtitle: 'A bad sequel, but a brilliant game',
        description: 'This is another test as simple as the others',
        permalink: '',
        createdAt: moment(0).add(8, 'days').valueOf()

    }
];