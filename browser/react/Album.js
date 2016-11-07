'use strict';

import React from 'react';

class Album extends React.Component{
	constructor(){
		super();
	}

	render(){
	  	return(
	    <div className="col-xs-4">
	      <a className="thumbnail" href="#">
	        <img src={this.props.alb.imageUrl} />
	        <div className="caption">
	          <h5>
	            <span>{this.props.alb.name}</span>
	          </h5>
	          <small>{this.props.alb.songs.length}</small>
	        </div>
	      </a>
	    </div>
	    )
	}
}

export {Album}