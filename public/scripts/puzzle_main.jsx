import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MyFirstGrid from './puzzle.jsx';



class Main extends React.Component {
   constructor(props) {
      super(props);	

      this.state={
         "image":['https://lh3.googleusercontent.com/-UrFYnvLF0jM/VH3cxYqM8tI/AAAAAAAAnkg/MPnUWjpBWzs/w800-h800/deadpool_gamescon_art4.jpeg',
                 'http://2.bp.blogspot.com/-Y-fRcHYVmFU/UGcLi-MBhOI/AAAAAAAABZg/_Lqt65BbI7A/s1600/breaking_bad_art.jpg',
                 'http://1.bp.blogspot.com/-Rb9FVAn3hn8/Udt1r2-rJZI/AAAAAAAAAFc/LXRi8KhVGR8/s1600/ombre-wedding-cake.jpg'
         ],
         count:0,
         grid: 25,
         size: 5,
         finalLayout:[
             {i: '0', y: 0, x: 0, w: 2, h: 2},
             {i: '1', y: 0, x: 2, w: 2, h: 2},
             {i: '2', y: 0, x: 4, w: 2, h: 2},
             {i: '3', y: 0, x: 6, w: 2, h: 2},
             {i: '4', y: 0, x: 8, w: 2, h: 2},
             {i: '5', y: 2, x: 0, w: 2, h: 2},
             {i: '6', y: 2, x: 2, w: 2, h: 2},
             {i: '7', y: 2, x: 4, w: 2, h: 2},
             {i: '8', y: 2, x: 6, w: 2, h: 2},
             {i: '9', y: 2, x: 8, w: 2, h: 2},
             {i: '10', y: 4, x: 0, w: 2, h: 2},
             {i: '11', y: 4, x: 2, w: 2, h: 2},
             {i: '12', y: 4, x: 4, w: 2, h: 2},
             {i: '13', y: 4, x: 6, w: 2, h: 2},
             {i: '14', y: 4, x: 8, w: 2, h: 2},
             {i: '15', y: 6, x: 0, w: 2, h: 2},
             {i: '16', y: 6, x: 2, w: 2, h: 2},
             {i: '17', y: 6, x: 4, w: 2, h: 2},
             {i: '18', y: 6, x: 6, w: 2, h: 2},
             {i: '19', y: 6, x: 8, w: 2, h: 2},
             {i: '20', y: 8, x: 0, w: 2, h: 2},
             {i: '21', y: 8, x: 2, w: 2, h: 2},
             {i: '22', y: 8, x: 4, w: 2, h: 2},
             {i: '23', y: 8, x: 6, w: 2, h: 2},
             {i: '24', y: 8, x: 8, w: 2, h: 2}
         ]
      };


      this.checkPos = this.checkPos.bind(this);
      this.checkIfValid = this.checkIfValid.bind(this);
      this.gameCheck = this.gameCheck.bind(this);
   }

   checkPos(current, expected) {
      return current.x === expected.x && current.y === expected.y;
   }

   checkIfValid(index, current, final) {
       const nextIndex = index + 1;

       if ( this.checkPos(current[index], final[index]) ) {
           if ( nextIndex === current.length ) {
               return true;
           } else {
               return this.checkIfValid(nextIndex, current, final);
           }
       } else {
           return false;
       }
   }


   gameCheck(layout) {
       let isValid = this.checkIfValid(0, layout, this.state.finalLayout);

       if ( isValid ) {
           console.log('Finish');
           alert('You Won!');
           var i=0;
            this.setState({
                    count:2
                });


       } else {
           console.log('Keep trying')
       }
   }

   render() {
      const { image, grid, size, count } = this.state;

      return (
         <div className ="main_wrapper">
            <MyFirstGrid image={image[count]}
               grid={grid}
               size={size}
               gameCheck={(layout) => this.gameCheck(layout)} />
         </div>   
      );
   }
}
ReactDOM.render(<Main />, document.getElementById('app'));

