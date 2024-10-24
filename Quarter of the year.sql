select month, (
  case
    when month < 4 then 1
    when month < 7 then 2
    when month < 10 then 3
    else 4
  end
) as res from quarterof