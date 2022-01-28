select "co"."name" as "Countries",
count("cities"."countryId") as "totalCities"
from "countries" as "co"
join "cities" using ("countryId")
group by "co"."name"
