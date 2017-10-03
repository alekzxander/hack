import React, { Component } from "react";
import { gravatar } from "../LogoPaths.js";
export default class Gravatar extends Component { 
	 render() {
		 return<img src={gravatar}></img>
	}

}