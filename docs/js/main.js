window.onload = function() {
  abc_editor = new ABCJS.Editor("abc", { paper_id: "paper" });
  $('#paper').css({margin: '0 auto'});
  window.prettyPrint();

  var list = [];
  $('.story').each(function(){
    var padTop = ($(window).height() - $('.header').height() - $(this).height()) / 2;
    list.push(padTop);
  });
  $('.story').height($(window).height() - $('.header').height());
  var i = 0;
  $('.story').each(function(){
    $(this).css({'padding-top': list[i]});
    i += 1;
  });
};

$('#play').on('click', function () {
  var yo = new abeck({
    X: 1,
      title: 'The Song',
      bpm: 120,
      meter: '4/4',
      length: '1/4',
      rhythm: 'reel',
      key: 'Cmaj'
  });

  yo.push([
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

  yo.play();
});

$('#nyan').on('click', function (){
  var nyan = new abeck({
    X: 1,
    title: 'The Song',
      bpm: 450,
      meter: '4/4',
      length: '1/4',
      rhythm: 'reel',
      key: 'Cmaj'
  });

  nyan.push([
      ["^d", '1'],
      ["e", '1'],
      ["^f", '2'],
      ])
    .push([
      ["b", '2'],
      ["^d", '1'],
      ["e", '1'],
    ])
    .push([
        ["^f", '1'],
        ["b", '1'],
        ["^c'", '1'],
        ["^d'", '1']
    ])
    .push([
        ["^c'", '1'],
        ["^a", '1'],
        ["b", '2'],
        ])
    .push([
        ["^f", '2'],
        ["^d", '1'],
        ["^e", '1']
        ])
    .push([
        ["^f", '2'],
        ["b", '2']
        ])
    .push([
        ["^c'", '1'],
        ["^a", '1'],
        ["b", '1'],
        ["^c'", '1']
        ])
    .push([
        ["e'", '1'],
        ["^d'", '1'],
        ["e'", '1'],
        ["^c'", '1']
        ])
    .push([
        ["^f'", '2'],
        ["^g'", '2']
     ])
    .push([
        ["^c'", '1'],
        ["^d'", '2'],
        ["b", '1']
     ])
    .push([
        ["d'", '1'],
        ["^c'", '1'],
        ["b", '2']
     ])
    .push([
      ["b", '2'],
      ["^c'", '2']
    ])
    .push([
      ["d'", '2'],
      ["d'", '1'],
      ["^c'", '1']
    ]);
/*
    .play('B5', 1/4).play('C#6', 1/4).play('D#6', 1/4).play('F#6', 1/4)
    .play('G#6', 1/4).play('D#6', 1/4).play('F#6', 1/4).play('C#6', 1/4)
    .play('D6', 1/4).play('B5', 1/4).play('C#6', 1/4).play('B5', 1/4)
    .play('D#6', 1/2).play('F#6', 1/2)
    .play('G#6', 1/4).play('D#6', 1/4).play('F#6', 1/4).play('C#6', 1/4)
    .play('D#6', 1/4).play('B5', 1/4).play('D6', 1/4).play('D#6', 1/4)
    .play('D6', 1/4).play('C#6', 1/4).play('B5', 1/4).play('C#6', 1/4)
    .play('D6', 1/2).play('B5', 1/4).play('C#6', 1/4)
    .play('D#6', 1/4).play('F#6', 1/4).play('C#6', 1/4).play('D6', 1/4)
    .play('C#6', 1/4).play('B5', 1/4).play('C#6', 1/2)
    .play('B5', 1/2).play('C#6', 1/2);
 */
  nyan.play();
});
