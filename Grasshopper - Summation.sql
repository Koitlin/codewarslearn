-- # write your SQL statement here: you are given a table 'kata' with a column 'n', return a table with 'n' and your result stored in a column naed 'res'.
select n, (n * (n + 1) / 2) as res from kata;