export default function selectionFilter({ series, films}) {
    return {
        series: [
            {
                title: "Documentaries", 
                data: series.filter((items) => items.genre === 'documentaries'),
            },

            {
                title: "Comedies", 
                data: series.filter((items) => items.genre === 'comedies'),
            },

            {
                title: "Children", 
                data: series.filter((items) => items.genre === 'children'),
            },

            {
                title: "Crime", 
                data: series.filter((items) => items.genre === 'crime'),
            },

            {
                title: "Feel Good", 
                data: series.filter((items) => items.genre === 'feel-good'),
            },

        ],
        films: [
            {
                title: "Drama", 
                data: films.filter((items) => items.genre === 'drama'),
            },

            {
                title: "Thriller", 
                data: films.filter((items) => items.genre === 'thriller'),
            },

            {
                title: "Children", 
                data: films.filter((items) => items.genre === 'children'),
            },

            {
                title: "Suspense", 
                data: films.filter((items) => items.genre === 'suspense'),
            },

            {
                title: "Romance", 
                data: films.filter((items) => items.genre === 'romance'),
            },

        ]    

    }
}