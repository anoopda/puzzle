for (var k = 0; k < 25; k++) 
            {

            
                  var xpos = (percentage * (k % gridSize)) + '%';
                  var ypos = (percentage * Math.floor(k / gridSize)) + '%';

               var style={
                        backgroundImage: 'url(' + image+ ')',
                        backgroundSize: (5 * 100) + '%',
                        backgroundPosition: xpos + ' ' + ypos,
                        width: 100,
                        height: 100
                }

                function rand(){
                var y =  Math.ceil(Math.random() * 4) + 1;
                return {x: k * 2 %10, y: Math.floor(k / 4) * y, w: 2, h: 2, k: k.toString()};
                }

                items.push(<div id={k}  style={style} data-grid={rand()} key={k}></div>); 
              
}