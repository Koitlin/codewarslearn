--# write your SQL statement here:
--you are given a table 'perpendicular' with column 'n'
-- return a table with this column and your result in a column named 'res'.
select n, (
    (n / 2) * (n - n / 2)
) as res from perpendicular
//Done