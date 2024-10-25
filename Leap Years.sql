select year, (
    (year % 4 = 0) and (year % 100 <> 0) or (year % 400 = 0)
) as is_leap
from years
order by year;