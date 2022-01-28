select "genres"."name" as "Genre",
    count("c"."filmId") as "#ofMovies"
    from "castMembers" as "c"
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    join "actors" using ("actorId")
  where  "actors"."firstName" = 'Lisa'
    and   "actors"."lastName" = 'Monroe'
  group by "genres"."name";
