'use strict';

import React from 'react';

console.log('side');

class Sidebar extends React.Component {
	constructor(){
		super();
	}
	render(){
	// function Sidebar(){
		return(
			// <div className="col-xs-2">
			    <sidebar>
			        <img src="juke.svg" className="logo" />
			        <section>
			            <h4 className="menu-item active">
			              <a href="#">ALBUMS</a>
			            </h4>
			        </section>
			    </sidebar>
			// </div>
		)}
}

export {Sidebar};