--# write your SQL statement here: 
-- you are given a table 'trilingual_democracy' with column 'grp' (String)
--   'grp' contains chars from the set 'D', 'F', 'I', 'K'
-- create a query with:
--   'grp' and your result in a column named 'res' (char)
--   'res' is a single char from the above set
--   ordered ascending by GRP
create or replace function get_lang(str text[])
returns char as $$
declare
  z integer := 0;
  d integer := 0;
  f integer := 0;
  i integer := 0;
  k integer := 0;
  ch char := '';
  result char := '';
begin
  foreach ch in array str loop
    case ch
      when 'D' then d := d + 1;
      when 'F' then f := f + 1;
      when 'I' then i := i + 1;
      when 'K' then k := k + 1;
    end case;
  end loop;
  
  if d = 0 then z := z + 1; end if;
  if f = 0 then z := z + 1; end if;
  if i = 0 then z := z + 1; end if;
  if k = 0 then z := z + 1; end if;
  
  case z
      when 1 then
        if d = 0 then result = 'D';
        elsif f = 0 then result = 'F';
        elsif i = 0 then result = 'I'; 
        else result = 'K';
        end if;
      when 2 then
        if d = 1 then result = 'D';
        elsif f = 1 then result = 'F';
        elsif i = 1 then result = 'I'; 
        else result = 'K';
        end if;
      when 3 then
        if d = 3 then result = 'D';
        elsif f = 3 then result = 'F';
        elsif i = 3 then result = 'I'; 
        else result = 'K';
        end if;
    end case;
  return result;
end;
$$ language plpgsql;
  
select grp, get_lang(string_to_array(grp, null)) as res 
from trilingual_democracy
order by grp asc