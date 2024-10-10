-- # write your SQL statement here: you are given a table 'getcount' with column 'str', return a table with column 'str' and your result in a column named 'res'.
select str, (
    length(str) - length(
        replace(
            replace(
                replace(
                    replace(
                        replace(str,
                            'a', ''),
                        'e', ''),
                    'i', ''),
                'o', ''),
            'u', '')
    )
) as res from getcount