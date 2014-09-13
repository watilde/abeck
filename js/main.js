window.onload = function() {
  $('#abc').val(song.toABC());
  abc_editor = new ABCJS.Editor("abc", { paper_id: "paper" });
  $('#paper').css({margin: '0 auto'});
};
