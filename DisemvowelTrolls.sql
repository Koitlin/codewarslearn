-- # write your SQL statement here: you are given a table 'disemvowel' with column 'str', return a table with column 'str' and your result in a column named 'res'.
select str, (translate (str, 'euioaEUIOA', '')) as res
from disemvowel