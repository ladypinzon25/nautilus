(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1215:function(e,a,t){"use strict";t.r(a);var n=t(3),i=t.n(n),o=t(49),r=t.n(o),l=(t(638),t(91)),s=t(92),c=t(94),m=t(93),d=t(96),u=(t(640),t(642),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"information"},i.a.createElement("div",{className:"information__title"},this.props.title),i.a.createElement("div",{className:"information__text"},this.props.text))}}]),a}(n.Component)),h=t(36),p=(t(882),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"chip"},i.a.createElement("a",{href:this.props.link},i.a.createElement("img",{src:this.props.image,className:"chip__circle",alt:"chip circle"})))}}]),a}(n.Component)),g=(t(884),t(553)),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={openDialog:!1,data:""},t.openDialog=function(){t.setState({openDialog:!0})},t.handleClose=function(){t.setState({openDialog:!1})},t.handleChange=function(e){var a=new FileReader;a.onload=function(e){var a=g.a(e.target.result,{type:"csv"});t.props.setData(a)},a.readAsText(e[0])},t.loadData=function(e){"followers"===e?t.props.loadData("/datasets/all_followers_id.csv"):"momma"===e?t.props.loadData("/datasets/Artworks_less_columns.csv"):t.props.loadData("/datasets/Lekagul Sensor Data.csv")},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"home__information-column"},i.a.createElement("div",{className:"home__main-title"},"Nautilus"),i.a.createElement("div",{className:"home__title"},"Voyager & Navio"),i.a.createElement(u,{title:"Description",text:"Nautilus is an application which offers a fulfilling data exploration and visualization\r experience by combining two libraries called Navio and Voyager. First, Navio is a visualization\r widget focused in summarizing, exploring and navigating big datasets. In another hand, Voyager\r is a data exploration tool which show to the user multiple graphs and visualization suggestions\r which summarize the desired datasets. By combining both libraries, Nautilus is able to filter\r the datasets and show the selected data in multiple visualizations by using Voyager."}),i.a.createElement(u,{title:"How to use it?",text:"Here you can load predefined datasets or your own dataset to begin to summarize, explore,\r navigate and visualize it. In the bottom part you cand find Navio that has three main interactions,\r click on a header to sort the data, click on a value to select it, or drag to select a range.\r In the main view is Voyager that contains wildcards that let users specify multiple charts in parallel\r and it has related views suggest visualizations relevant to the currently specified chart.\r "})),i.a.createElement("div",{className:"home__options-column"},i.a.createElement("div",{className:"home__nautilus-gif-container"},i.a.createElement("img",{className:"home__nautilus-gif",src:"https://j.gifs.com/59m3RX.gif"})),i.a.createElement(h.a,{variant:"raised",className:"home__button",color:"primary",onClick:this.openDialog},"Get started"),i.a.createElement("div",{className:"home__chips-container"},i.a.createElement(p,{link:"https://github.com/ljpinzon12",name:"Lady Pinz\xf3n",image:"./LadyPinzon.jpg"}),i.a.createElement(p,{link:"https://github.com/john-guerra",name:"John Guerra",image:"./JohnGuerra.jpg"})),i.a.createElement("div",{className:"home__learn-more-option"},i.a.createElement(h.a,{variant:"outlined",href:"https://ljpinzon12.github.io/nautilusPage/",className:"home__learn-more-button"},"Learn more..."))),i.a.createElement(h.e,{open:this.state.openDialog,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"home__dialog"},i.a.createElement(h.i,{id:"alert-dialog-title"},"Upload data"),i.a.createElement(h.g,null,i.a.createElement(h.h,{id:"alert-dialog-description",className:"home__card-content"},"Explore pre-loaded datasets"),i.a.createElement("div",{className:"home__cards-container"},i.a.createElement(h.b,{className:"home__card"},i.a.createElement(h.d,null,i.a.createElement("div",{className:"home__card-title"},"Followers of presidential candid"),i.a.createElement("div",{className:"home__card-text"},"Description: Dataset with information about followers on twitter of the presidential cadidates. Records(rows): 1048575 Attributes: 10")),i.a.createElement(h.c,null,i.a.createElement(h.a,{size:"small",onClick:function(){return e.loadData("followers")}},"Start"))),i.a.createElement(h.b,{className:"home__card"},i.a.createElement(h.d,null,i.a.createElement("div",{className:"home__card-title"},"MoMA Collection"),i.a.createElement("div",{className:"home__card-text"},"Description: Evolving collection contains almost 130,000 works of modern and contemporary art. Records(rows): 131585 Attributes: 14")),i.a.createElement(h.c,null,i.a.createElement(h.a,{size:"small",onClick:function(){return e.loadData("momma")}},"Start"))),i.a.createElement(h.b,{className:"home__card"},i.a.createElement(h.d,null,i.a.createElement("div",{className:"home__card-title"},"VAST Challenge 2017"),i.a.createElement("div",{className:"home__card-text"},"Description: This offered three mini-challenges and a grand challenge dealing with environmental problems. Records(rows): 171477 Attributes: 4")),i.a.createElement(h.c,null,i.a.createElement(h.a,{size:"small",onClick:function(){return e.loadData("vast")}},"Start")))),i.a.createElement(h.h,{id:"alert-dialog-description",className:"home__card-content"},"Upload your dataset."),i.a.createElement("input",{className:"home__dialog-input",type:"file",accept:".csv,.tsv,.txt",onChange:function(a){return e.handleChange(a.target.files)}})),i.a.createElement(h.f,null,i.a.createElement(h.a,{className:"dialog-button",onClick:this.handleClose,color:"primary"},"Cancel"))))}}]),a}(n.Component),f=t(892),b=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={voyagerInstance:null,isHome:!0,data:""},t.buildNautilus=function(e){if(e){var a=[];for(var n in e[0])e[0].hasOwnProperty(n)&&a.push(n);e.columns=a,t.setState({isHome:!1},function(){t.initVoyager(e),t.initNavio(e)})}else window.d3.csv(t.state.data,function(e,a){if(e)throw e;t.initVoyager(a),t.initNavio(a)})},t.initVoyager=function(e){var a=document.getElementById("voyager-embed"),n={values:e.splice(0,500)},i=f.CreateVoyager(a,void 0,n);delete n.values.columns,t.setState({voyagerInstance:i},function(){t.state.voyagerInstance.updateData(n)})},t.initNavio=function(e){var a=window.navio(window.d3.select("#navio"),300).updateCallback(t.updateVoyager);e.columns.forEach(function(n){"sequential"===t.determineColumnType(n,e)?a.addSequentialAttrib(n):a.addCategoricalAttrib(n)}),a.data(e)},t.determineColumnType=function(e,a){for(var t=a.length,n=[],i=0;i<10;i++)n.push(a[Math.floor(Math.random()*t)][e]);return n.every(function(e){return!isNaN(e)})?"sequential":"categorical"},t.updateVoyager=function(e){t.state.voyagerInstance.updateData({values:e})},t.loadData=function(e){t.setState({data:e,isHome:!1},function(){return t.buildNautilus()})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},this.state.isHome?i.a.createElement(v,{loadData:this.loadData,setData:this.buildNautilus}):i.a.createElement("div",null,i.a.createElement("div",{id:"voyager-embed"}),i.a.createElement("div",{id:"navio"})))}}]),a}(n.Component);r.a.render(i.a.createElement(b,null),document.getElementById("root"))},554:function(e,a,t){e.exports=t(1215)},638:function(e,a,t){},640:function(e,a,t){},642:function(e,a,t){},882:function(e,a,t){},884:function(e,a,t){},886:function(e,a){},887:function(e,a){}},[[554,2,1]]]);
//# sourceMappingURL=main.916031af.chunk.js.map