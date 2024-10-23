select flower1, flower2, (
  mod(flower1, 2) != mod(flower2, 2)
) as res from love