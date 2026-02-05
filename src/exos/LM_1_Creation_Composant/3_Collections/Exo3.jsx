import { MovieCard } from "./MovieCard"

export const Exo3 = () => {
    const movies = [
        {
            id : 1,
            title : 'Equilibrium',
            director : 'Kurt Wimmer',
            year : 2002,
            poster : 'https://resizing.flixster.com/NsZx3YPnLb1BiyzBt07poEc39mc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p30590_p_v8_ae.jpg',
            note : 5
        },
        {
            id : 2,
            title : 'Big Fish',
            director : 'Tim Burton',
            year : 2003,
            poster : 'https://upload.wikimedia.org/wikipedia/en/4/41/Big_Fish_movie_poster.png',
            note : 4
        },
         {
            id : 3,
            title : 'Eternal Sunshine of the Spotless Mind',
            director : 'Michel Gondry',
            year : 2004,
            poster : 'https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/40/09/19253739.jpg',
            note : 5
        }
    ]

    return (
        <div className="flex flex-row justify-center items-center gap-3 ">
            {
                movies.map(movie => ( <MovieCard key={movie.id} movie={movie} /> ))
            }
        </div>
    )
}






