var song = new abeck({
  X: 1,
  title: 'The Song',
  bpm: 60,
  meter: '1/4',
  length: 1,
  rhythm: 'reel',
  key: 'Bmaj'
});

song.push([
    [null, 4]
  ])
  .push([
    ['C', 1/4],
    ['^C', 1/4],
    ['D', 1/4],
    ['D', 1/4]
  ]);

song.play();
