select  ("c"."firstName","c"."lastName") as "Name",
        sum("p"."amount") as "totalPaid"
     from "customers" as "c"
     join "payments" as "p" using ("customerId")
     group by "Name"
     order by "totalPaid" desc;
