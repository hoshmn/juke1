'use strict';

import React from 'react';
import axios from 'axios'; 
import {Sidebar} from './Sidebar.js';
import {Footer} from './Footer.js';
import {Album} from './Album.js';

console.log('main');

class Main extends React.Component {
	constructor(){
		super();
		this.state = { 
			fakeAlbums: [/*{
			  name: 'Abbey Road',
			  id: 1,
			  imageUrl: 'http://fillmurray.com/300/300',
			  songs: [{
			    id: 1,
			    name: 'Romeo & Juliette',
			    artists: [{name: 'Bill'}],
			    genre: 'Funk',
			    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			  }, {
			    id: 2,
			    name: 'White Rabbit',
			    artists: [{name: 'Bill'}, {name: 'Alice'}],
			    genre: 'Fantasy',
			    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			  }, {
			    id: 3,
			    name: 'Lucy in the Sky with Diamonds',
			    artists: [{name: 'Bob'}],
			    genre: 'Space',
			    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			  }]
			},
			{
			  name: 'Yellow Submarine',
			  id: 2,
			  imageUrl: 'http://fillmurray.com/300/300',
			  songs: [{
			    id: 4,
			    name: 'London Calling',
			    artists: [{name: 'Bill'}],
			    genre: 'Punk',
			    audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			  }]
			}*/]
		 }
	}

	componentDidMount(){
		axios.get('api/albums/')
			.then(response=>response.data)
			.then(albums=>{
					albums.map(album=>{
					album.imageUrl = `/api/albums/${album.id}/image`;
					return album;
				})
				this.setState({ fakeAlbums: albums })
			})
			.catch(e=>console.error(e))
	}

	render(){
		return (
			<div>
				<Sidebar />
				<div className="col-xs-10">
				  <h3>Albums</h3>
				  <div className="row">
				  {this.state.fakeAlbums.map(album=><Album key={album.id} alb={album}/>)}
				  </div>
				</div>
				<Footer />
			</div>
	)}
}

export {Main}