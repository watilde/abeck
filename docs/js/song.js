var song = new abeck({
  X: 1,
  title: 'The Song',
  bpm: 120,
  meter: '4/4',
  length: '1/4',
  rhythm: 'reel',
  key: 'Cmaj'
});

song.push([
    [null, '4']
  ])
  .push([
    ['C', '1'],
    ['D', '1'],
    ['E', '1'],
    ['F', '1']
  ])
  .push([
    ["G", '1'],
    ["A", '1'],
    ["B", '1'],
    ["C'", '1']
  ]);
