/* eslint no-console: 0*/

import React from 'react';
import topicData from '../../data/topiclist.js';

// TOPIC COMPONENT =====================================
class Topic extends React.Component {
	constructor(props){
		super(props);
	}

	// TOPIC return method
	render(){
		var divStyle = {
				position: 'absolute',
				width: '220px',
				border: '1px solid black',
				fontSize: '12px',
				borderRadius: '30px 30px 30px 30px',
				backgroundColor: 'pink'
			}
		// Position the div's vertically and horizontally
		// first time through they are placed on top of one another
		// and hidden.  Second and subsequent times through they are visible.
		divStyle.top = this.props.top + 'px';
		divStyle.left = this.props.left + 'px';
		divStyle.visibility = this.props.showTopics;

		var centeredH2 = {
			textAlign: 'center'
		}
		var centeredImg = {
			margin: '0 auto',
			display: 'block'
		}
		var centeredP = {
			textAlign: 'center',
			margin: '0 auto'
		}
		var divp = {
			padding: '15px',
			width: '180px',
			marginLeft: 'auto',
			marginRight: 'auto'
		}
		var ds = this.props.dataString;
		return (
			<div onClick={(e) => this.props.clicked(e,this.props.ident)} style={divStyle} ref={input => this.divRef = input}>
				<h2 style={centeredH2}>{ds.title}</h2>
				<img style={centeredImg} src={ds.image} width={ds.imgwidth} />
				<div style={divp}>
					<p style={centeredP}>'{ds.note}'</p>
				</div>
			</div>
		);
	}
}


// TOPICS COMPONENT =================================
export default class Topics extends React.Component {
	constructor(props){
		super(props);            // Calls the constructor of the parent class. In this case React.component
		this.topicData = topicData;
		this.topPos = [5,5,5];
		this.leftPos = [5,230,455];
			// first time through all topics are loaded to 5,5.  From there we can get actual rendered sizes
			// and re-position using state to cause the trigger
		this.state = ({visibility: 'hidden'});
		    // State is only ever local or it can be passed down as props.
		this.topicRefs = [];
		this.topicHeights = [0,0,0];
			// array to hold refs for the mounted topics
		console.log('--- Topics Constructor Loading ...');

	}

	componentDidMount(){
		if (this.state.visibility = 'hidden') {
			console.log('--- All components mounted - first time load');
			console.log(this.topicRefs);
			// Work through all topics to record their rendered height.
			this.topicRefs.forEach((item,ix) => {
				this.topicHeights[ix] = item.divRef.offsetHeight;
			});
			this.setState({ visibility: 'visible' });
				/*
				Note - Immediately after setting state, visibility is still hidden.
				       However by the time we get to re-rendering the Topics it shows correctly
				       as visible.
				       Changing state forces a remount but this time topics will be visible
				       and we know the rendered height of each topic.  So we can position
				       it correctly.
				*/
		} else {
			console.log('--- All components mounted - through again');
		}
	}

	findMinIdx(anArray) {
		var minVal = anArray[0];   // Keeps a running count of the smallest value so far
	    var minIdx = 0;            // Will store the index of minVal
	    var idx=0;
	    for(idx=1; idx<anArray.length; idx++) {
	        if(anArray[idx] < minVal) {
	            minVal = anArray[idx];
	            minIdx = idx;
	        }
	    }
	    return minIdx;
	}

	// TOPICS EVENT HANDLER(S)
	handleClickEvent = (e,ident) => {
		// Having clicked on the topic we need to take information from the event to
		// jump to the next route.
		e.preventDefault();
	    console.log('--- Topic ' + ident + ' has been clicked');
	    console.log('--- Jumping to ' + this.topicData[ident].href);
	    var win = window.open(this.topicData[ident].href);
  		win.focus();

	}

	// MEMBERSLIST return method with styling
	render(){
		var bodysection = {
			position: 'relative',
			float: 'left',
			display: 'inline-block',
			width: '670px',
			height: '784px',
			margin: '2px',
			border: '1px solid black',
			padding: '5px',
			backgroundColor:' #ffcccc'
			// overflow: 'scroll'
		}
		console.log('--- Rendering the topics.  State is ' + this.state.visibility);
		console.log('--- Topic Heights ' + this.topicHeights);
		console.log('--- Topic Tops ' + this.topPos);
		console.log('--- Topic Lefts ' + this.leftPos);
		
          	
		return(
		<div style={bodysection}>
			{
			this.topicData.map((item, ix) => {
				this.newtop = 0;
				this.newleft = 0;
				if (this.state.visibility != 'hidden'){
	          	  	this.col = this.findMinIdx(this.topPos)
	          	  	this.newtop = this.topPos[this.col]
					this.newleft = this.leftPos[this.col]
						// ... finds the index of the column that is the least utilised
						// this makes the column positioning dynamic based on the positioning of what
						// has gone before.  Only second time through though.  First time through all
						// topic components are loaded on top of each other at position 5,5 and they are hidden
					/* console.log('--- The selected column is ' + this.col)
	          	  	   console.log('--- The left position is ' + this.leftPos[this.col])
	          	  	   console.log('--- The topic height is ' + this.topicHeights[this.col]). */
	          	  	this.topPos[this.col] += this.topicHeights[ix] + 5
	          	}
		      	return (
              		<Topic clicked={this.handleClickEvent}
              		       key={ix}
              		       ident={ix}
              		       dataString={item}
              		       top= {this.newtop}
              		       left = {this.newleft}
              		       showTopics = {this.state.visibility}
              		       ref={el => this.topicRefs[ix] = el}
              		       />
	          	)}
	        )}
		</div>
		);
	}
}

/*


*/

