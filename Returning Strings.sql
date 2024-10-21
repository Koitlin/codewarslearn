--person table has name data
select (
  'Hello, ' || name || ' how are you doing today?'
) as greeting from person