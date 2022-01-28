select "cu"."firstName",
       "cu"."lastName"
from "customers" as "cu"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
