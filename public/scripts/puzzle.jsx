import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
var ReactGridLayout = require('react-grid-layout');


export default class  extends React.Component {

    constructor(props) {
        super(props);

        this.generateDOM = this.generateDOM.bind(this);
        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.generateLayout =  this.generateLayout.bind(this);

        this.state = {
            layout: this.generateLayout(),
            load:false
        };
    }


    componentWillMount(){
        this.setState({layout: this.generateLayout(),load:true});
    }


    generateLayout() {

        const { image, grid, size } = this.props;
        const items = [...Array(grid).keys()];

        var stepDown = size - 1,
            stepUp = size + 1;

        return _.map(items, function(item, i) {
            var y = Math.ceil(Math.random() * stepDown) + 1;
            return {x: i * 2 % 12, y: Math.floor(i / stepUp) * y, w: 2, h: 2, i: i.toString()};
            console.log(x= i * 2 % 12);
        });
    }


    generateDOM() {
        console.log("entered generate dom");


        const { image, grid, size ,count } = this.props;

        const items = [...Array(grid).keys()];

        const percentage = 100 / ( size - 1 );

        let x, y, style;

        var v =  items.map((item, i) => {
            x = ( percentage * (i % size) ) + '%';
            y = ( percentage * Math.floor(i / size) ) + '%';
            style = {
                backgroundImage: 'url(' + image + ')',
                backgroundSize: (size * 100) + '%',
                backgroundPosition: x + ' ' + y,
                width: 100,
                height: 100,
                color: "rgba(0,0,0,0.5)",
                fontSize: '70px',
                fontWeight: 700,
                textShadow: "3px 3px 5px rgba(255, 255, 255, 0.5)"
            };


            return <div key={i} id={i} className="puzzles" style={style}>{i}</div>
        })

        return v;

    }   



    render() {
        if(!this.state.load){
            return <div>Loading</div>
        }

            if(this.state.load){
     return (

            <div className="wrap">
                <ReactGridLayout className="layout"
                    cols={10}
                    rowHeight={100}
                    width={800}
                    layout={this.state.layout}
                    onLayoutChange={this.onLayoutChange}
                >
                    {this.generateDOM()}
                </ReactGridLayout>
            </div>    
        );
 }
      
    }

    onLayoutChange(layout) {
        this.props.gameCheck(layout);
    }
}







