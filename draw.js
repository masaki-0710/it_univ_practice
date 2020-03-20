$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
  
  let tool = new Tool();
  
  tool.onMouseDown = function(event) {
    let c = Shape.Circle(event.point.x, event.point.y, 50);
    c.fillColor = 'skyblue';
  };
    paper.view.draw();
});


