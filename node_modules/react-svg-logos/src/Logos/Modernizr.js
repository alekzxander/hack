import React, { Component } from "react";
import { modernizr } from "../LogoPaths.js";
export default class Modernizr extends Component { 
	 render() {
		 return<img src={modernizr}></img>
	}

}