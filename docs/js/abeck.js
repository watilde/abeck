var abeck = function (option) {  option = (typeof option === 'object') ? option : {};  // Song object meta info {{{  this.X = option.X || 1;  this.title = option.title || 'Title';  this.bpm = option.bpm || 120;  this.meter = option.meter || '1/4';  this.length = option.length || 1;  this.rhythm = option.rhythm || 'reel';  this.key = option.key || 'Cmaj';  this.sampleRate = option.sampleRate || 44100;  this.volume = option.volume || 1;  this.notes = option.notes || [];  this.currentTime = option.currentTime || 0;  // }}}  try {    var AudioContext = window.AudioContext ||      window.webkitAudioContext ||      window.mozAudioContext ||      window.oAudioContext ||      window.msAudioContext;    this.context = window.__audioContext__ || new AudioContext();    this.context.sampleRate = this.sampleRate;    window.__audioContext__ = this.context;  } catch(e) {    console.error(e.message);  }  return this;};abeck.prototype.push = function (note) {  this.notes.push(note);  return this;};abeck.prototype.nn = function (nn) {  var keys = ['c', null, 'd', null, 'e', 'f', null, 'g', null, 'a', null, 'b'];  var index = nn.search(/[a-g]/i);  var note = nn.split('')[index];  var isUpperCase = note === note.toUpperCase();  var upper = (nn.match(/\'/g)||[]).length;  var downer = (nn.match(/\,/g)||[]).length;  var sharps = (nn.match(/\^/g)||[]).length;  var flats = (nn.match(/\_/g)||[]).length;  var num = 6;  if (isUpperCase) {    num -= 1;  }  num = num + upper - downer;  return keys.indexOf(note.toLowerCase()) + sharps - flats + 12 * num;};// Parse Note Number to freqabeck.prototype.pn = function (note) {  if (note === null) { return -1; }  var nn = this.nn(note);  var freq = this.sampleRate / 100;  var diff = nn - 69;  var i = Math.abs(diff);  if (nn === 69) {    return freq;  } else if (diff > 0) {    while(i--) freq = freq * Math.pow(2, 1 / 12);  } else {    while(i--) freq = freq / Math.pow(2, 1 / 12);  }  return freq;};abeck.prototype.play = function () {  var context = this.context;  var sampleRate = this.sampleRate;  var bpm = this.bpm;  var that = this;  this.notes.forEach(function(bar) {    bar.forEach(function(obj){      var note = obj[0];      var length = eval(obj[1]);      var buf = context.createBuffer(1, sampleRate, sampleRate);      var data = buf.getChannelData(0);      var nn = that.pn(note);      if (nn === -1) { return; }      for(var i = 0; i < 60 / bpm * length * sampleRate; i++) {        data[i]=Math.sin( (2 * Math.PI) * nn * (i / sampleRate) );      }      var gainNode = context.createGain();      gainNode.gain.value = that.volume;      gainNode.connect(context.destination);      var src = context.createBufferSource();      src.buffer = buf;      src.connect(gainNode);      src.start(that.currentTime);      that.currentTime += 60 / bpm * length;    });  });  return this;};abeck.prototype.toABC = function (){  var txt = '';  txt += 'X:' + this.X;  txt += '\n';  txt += 'T:' + this.title;  txt += '\n';  txt += 'M:' + this.meter;  txt += '\n';  txt += 'L:' + this.length;  txt += '\n';  txt += 'R:' + this.rhythm;  txt += '\n';  txt += 'K:' + this.key;  txt += '\n';  txt += '|';  this.notes.forEach(function(bar) {    txt += '|';    bar.forEach(function(note){      if (note[0] === null) {        note[0] = 'z';      }      txt += ' ' + note[0] + note[1];    });  });  txt += '||';  return txt;};