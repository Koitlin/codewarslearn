create or replace function get_seq(x integer, n integer)
returns integer[] as $$
declare
  i integer;
  result integer[];
begin
  for i in 1..n loop
    result[i] = x * i;
  end loop;
  return result;
end;
$$ language plpgsql;

select x, n, get_seq(x, n) as res
from counter
order by x, n

/*
select x, n, array(select generate_series(x, x*n, x)) as res
from counter
order by x, n
*/