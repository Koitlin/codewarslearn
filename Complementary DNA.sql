--# write your SQL statement here: you are given a table 'dnastrand' with column 'dna', return a table with column 'dna' and your result in a column named 'res'.
select dna, (
   translate(dna, 'ATCG', 'TAGC')
) as res from dnastrand