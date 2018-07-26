var html = require ('choo/html')
var recsst = require('recsst')
var gr8 = require('gr8')

var reset = recsst.toString() + `
button {
	background: none;
	border: none;
	margin: 0;
	padding: 0;
}

figure {
	margin: 0;
	padding: 0;
}

img {
	max-width: 100%;
}
`

var utils = gr8({
	selector: s => `.${s}`,
  breakpoints: {
    sm: 800,
    md: 1024,
    lg: 1280
  },
	breakpointSelector: 'class',
	spacing: [0, 0.25, 1, 2, 3, 4],
  fontSize: [
    { sm: 1}, 
    { bg: 3}
  ],
  lineHeight: [
    {sm: 0.85}, 
    {nm: 1}
  ],
  size: [0, 50, 100],
  viewport: [50, 100],
  zIndex: [0, 1, 2, 3, 4],
  flexOrder: [0, 1, 2, 3, 4],
  opacity: [0, 25, 50, 75, 100],
  aspectRatio: [25, 50, 75, 100],
	textColumn: [1, 2, 3, 4]
})

var color = {
  prop: [
		'color',
		{ bgc: 'background-color' }
	],
  vals: [
		{ grey: 'grey' },
		{ green: '#0f410f' },
		{ bk: 'black' }
	],
	join: '-'
}

var border = {
	prop: ['border', 'border-top', 'border-right', 'border-bottom', 'border-left'],
	vals: ['1px solid grey'],
	join: '-'
}

var typography = `
html {
	width: 100%;
	box-sizing: border-box;
	font-size: 18px;
	line-height: 1.25;
	font-family: 'Times New Roman', serif;
	color: grey;
}

body {
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

code {
	font-family: 'Times New Roman';
	padding: 0 0.1rem;
	border: 1px solid black;
}

h1, h2, h3 {
	font-size: 18px;
	line-height: 1.25;
}

hr {
	border: none;
	border-bottom: 1px solid black;
	margin: 1.14rem 0;
}

h1, h2, h3,
ul, ol,
p,
blockquote {
	padding-bottom: 1rem;
}

h2, h3 {
	padding-top: 1rem;
}

h3 {
	text-indent: 1rem;
}

ul, ol {
	margin: 0 1rem;
}

a {
	color: black;
}

button {
	font-size: 18px;
	font-family: inherit;
}

.copy {
	max-width: 37.5rem;
}

.op0-hv:hover {
  opacity: 0.1;
}

.w-bl {
	width: 1rem;
}

.h-bl {
	height: 1rem;
}

@-webkit-keyframes pulse_bg {
  0% {background-color: black;}
  66.66% {background-color: gray;}
  100% {background-color: black;}
}

@-moz-keyframes pulse_bg {
  0% {background-color: black;}
  66.66% {background-color: gray;}
  100% {background-color: black;}
}

@-o-keyframes pulse_bg {
  0% {background-color: black;}
  66.66% {background-color: gray;}
  100% {background-color: black;}
}

@keyframes pulse_bg {
  0% {background-color: black;}
  66.66% {background-color: gray;}
  100% {background-color: black;}
}

.bgc-gr--pulse {
  -webkit-animation: pulse_bg 6s 1.5s infinite alternate;
  -moz-animation: pulse_bg 6s 1.5s infinite alternate;
  -o-transition: pulse_bg 6s 1.5s infinite alternate;
  transition: pulse_bg 6s 1.5s infinite alternate;
}
`

var design = gr8({
	utils: [
		color,
		border
	]
})

var css = reset + typography + design + utils

module.exports = css
