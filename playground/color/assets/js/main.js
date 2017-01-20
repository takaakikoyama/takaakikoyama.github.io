(function($){

  var color;

  $('#stage').on('click', function(){
    color = tinycolor.fromRatio({
      r : Math.random(),
      g : Math.random(),
      b : Math.random()
    });
    changeColor($('#q'), color,1)
  });

  function changeColor($target, color, time){
    var rc = tinycolor.mostReadable(color, ["#fff", "#000"]).toString();
    TweenLite.to($target,time, {
      css: {
        backgroundColor: color.toString(),
        color: rc,
      },
      ease: Linear.easeNone
    });
    console.log('%c '+color.toHex8String()+' ', [
      'background:'+color.toString(),
      'color:'+rc,
    ].join(';'),[
      color.toRgbString(),
      color.toHslString(),
      color.toHsvString()
    ]);
  }

  var question;
})(jQuery);