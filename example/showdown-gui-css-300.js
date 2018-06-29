//
// showdown-gui-css-300.js
//
// Author: JLA Uro (justineuro@gmail.com)
// Date: 2018-06-30 00:06:00   
//
// This script inserts additional css rules into Moodle pages for the  
// proper rendering of showdon-gui.html.
// The codes based on an answer of User:Martin Wantke in StackOverflow to  
// https://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript.
// The styles are from showdown-gui.html.
//
const css = document.createElement( 'style' );

css.textContent = `
html,body { 
margin:0;
padding:0;
font-family: Helvetica, Arial, Verdana, sans-serif;
font-size: 90%;
background-color: #e0d8d8;
}

html {
overflow: auto; /* hidden, visible */
}

textarea {
font-family: monospace;
}

#pageHeader {
margin: 0;
padding: 0;
text-align: center;
margin-bottom: 0;
margin-top: 0.4em;
color: #766;
}

#pageHeader h1 {
font-size: 3em;
}

#pageHeader * {
margin: 0;
padding: 0;
line-height: 1em;
font-weight: 100;
}

#pageHeader a {
color: #766;
text-decoration: none;
position: relative;
z-index: 20;
}

#pageHeader h1 a:hover {
color: #fff;
}

#pageHeader h4 a:hover {
text-decoration: underline;
}

#leftContainer, #rightContainer {
margin: 0;
padding: 0;
position: relative;
width: 47.5%;
margin-top: -1.4em;
}

#leftContainer {
float: left;
left: 1.5%;
}

#rightContainer {
float: right;
right: 1.5%;
}

#rightContainer > * {
float: right;
}

.paneHeader {
margin: 0;
padding: 0;
position: relative;
width: 100%;
display: block;
height: 2em;
}

.paneHeader * {
position: relative;
font-weight: 900;
}

.paneHeader span {
background-color: #ddd5d5;
color: #444;
padding: 0 0.75em;
font-size: 110%;
}

#paneSetting {
display: block;
margin-left: auto;
margin-right: 0.5em;
font-size: 110%;
font-weight: 900;
font-family: Arial, Verdana, sans-serif;
background-color: #dacccc;
color: #444;
border: 1px solid #999;
}

.pane {
margin: 0;
padding: 0;
padding-left: 4px; /* pane padding */
width: 100%;
border: none;
background-color: #eee;
display: block;
border: 1px solid #888;
border-right: 1px solid #000;
border-bottom: 1px solid #000;

/* note: the panes get their height set with
   javascript; see sizeTextAreas(). */

/* for now, set a height so things look nice
   if the user has javascript disabled */
height: 300px; /* 400px */
}

#previewPane {
background-color: #f3eeee;
}

#outputPane {
background-color: #6c6666;
color: #fff;
display: none;
}

#syntaxPane {
background-color: #e6dede;
background-color: #f7ecec;
display: none;
}

div.pane {
overflow: auto;
}

#inputPane {
background-color: #fff;
}

#previewPane {
padding: 0;
}

#previewPane > * {
margin-left: 4px;
margin-right: 4px;
}

#previewPane > blockquote {
margin-left: 3em;
}

#previewPane > :first-child {
margin-top: 4px; /* pane padding */
}

#previewPane * {
line-height: 1.4em;
}

#previewPane code {
font-size: 1.3em;
}

#footer {
margin: 0;
padding: 0;
position: relative;
float: left;
width: 100%;
height: 2.5em;
margin-top: 0.5em;
font-family: Helvetica, Arial, Verdana, sans-serif;
}

#footer a {
text-decoration: none;
color: #666;
}

#footer a:hover {
text-decoration: underline;
}

#byline {
padding-left: 2em;
color: #666;
}

#convertTextControls {
position: absolute;
right: 5em;
}

#convertTextButton {
line-height: 1em;
background-color: #ccbfbf;
color: #000;
border: none;
}

#convertTextButton:hover {
background-color: #fff;
color: black;
}

#convertTextSetting {
background-color: #dacccc;
color: #222;
border: 1px solid #999;
}

#processingTime {
margin: 0;
padding: 0;
width: 4em;
text-align: right;
color: #999;
position: absolute;
right: 1em;
top: 0;
}
`;

document.head.appendChild( css );

