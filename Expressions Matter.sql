select a, b, c, (
  select greatest((a + b) * c, a * (b + c), a + b + c, a * b * c)
) as res from expression_matter;