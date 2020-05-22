!function(s){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return s[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=s,e.c=t,e.d=function(s,t,o){e.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:o})},e.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,t){if(1&t&&(s=e(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var i in s)e.d(o,i,function(t){return s[t]}.bind(null,i));return o},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},e.p="",e(e.s=0)}([function(s,t,e){"use strict";e.r(t);const o=new Image;o.src="assets/sushi6.png";class i{constructor(s){this.pos=s,this.type="sushi"}draw(s){s.drawImage(o,this.pos[0],this.pos[1],100,100)}}const r=new Image;r.src="assets/chili.png";class n{constructor(s){this.pos=s,this.type="chili"}draw(s){s.drawImage(r,this.pos[0],this.pos[1],100,100)}}const a=new Image;a.src="assets/lickitung.gif";class h{constructor(s){this.pos=s,this.stepSize=100,this.moveSushiMonster()}moveSushiMonster(){document.addEventListener("keydown",s=>{const t=this,e=t.pos[0],o=t.pos[1];37===s.keyCode?e>200&&(t.pos[0]-=this.stepSize):38===s.keyCode?(s.preventDefault(),o>200&&(t.pos[1]-=this.stepSize)):39===s.keyCode?e<=600&&(t.pos[0]+=this.stepSize):40===s.keyCode&&(o<700&&(t.pos[1]+=this.stepSize),s.preventDefault())})}drawSushiMonster(s){s.drawImage(a,this.pos[0],this.pos[1],100,100)}}class l{constructor(s){this.pos=s,this.possiblePos=[]}createTile(s){const{pos:t}=this;s.fillStyle="black",s.fillRect(t[0],t[1],100,100)}}class c{constructor(s){this.num=s,this.scorebarXaxis=[];for(let s=0;s<=400;s+=40)this.scorebarXaxis.push(s)}drawScore(s){const{num:t,scorebarXaxis:e}=this;t>0&&t<6?(s.fillStyle="red",s.fillRect(300,40,e[t],20)):t>=6&&t<=10?(s.fillStyle="lightgreen",s.fillRect(300,40,e[t],20)):0===t&&alert("Sushi Monster is not happy!!!")}}const p=new Image;p.src="assets/platter.png";class u{constructor(s){this.dimensions=s,this.cols=10,this.rows=10,this.tileSize=100,this.numSushis=18,this.numChilis=10,this.allConveyorBeltItems=[],this.sushiMonster=[],this.possiblePos=[],this.tiles=[],this.score=[4],this.scorebar=[],this.allPossiblePos(),this.addItemsOntoConveyorBelt(),this.addSushiMonster(),this.addTiles(),this.addScoreBar(),document.addEventListener("keydown",s=>{" "===s.key&&(s.preventDefault(),this.eatItem())})}drawConveyorBeltItems(s){const{allConveyorBeltItems:t}=this;t.forEach(t=>t.draw(s))}drawSushiMonster(s){const{sushiMonster:t}=this;t[0].drawSushiMonster(s)}drawScoreBar(s){const{scorebar:t}=this;t[0].drawScore(s)}drawTiles(s){const{tiles:t}=this;t.forEach(t=>t.createTile(s))}addSushiMonster(){this.sushiMonster.push(new h([500,500]))}addScoreBar(){const{score:s}=this;this.scorebar.push(new c(s[0]))}allPossiblePos(){const{possiblePos:s}=this;for(let t=100;t<=800;t+=100)s.push([t,100]);for(let t=200;t<=800;t+=100)s.push([800,t]);for(let t=100;t<=700;t+=100)s.push([t,800]);for(let t=200;t<=700;t+=100)s.push([100,t]);return s}addTiles(){const{possiblePos:s}=this;s.forEach(s=>this.tiles.push(new l(s)))}addItemsOntoConveyorBelt(){const s=[],t=[],{allConveyorBeltItems:e}=this;for(this.possiblePos.forEach(t=>{let e=[];e.push(t[0]),e.push(t[1]),s.push(e)});0!==s.length;){const e=Math.floor(Math.random()*Math.floor(s.length));t.push(s[e]),s.splice(e,1)}for(let s=0;s<18;s+=1)e.push(new i(t[s]));for(let s=18;s<28;s+=1)e.push(new n(t[s]))}animate(s){s.clearRect(0,0,1e3,1e3),this.drawBoard(s),this.drawTiles(s),this.drawConveyorBeltItems(s),this.drawSushiMonster(s),this.drawScoreBar(s)}eatItem(){const{sushiMonster:s,allConveyorBeltItems:t,score:e,scorebar:o}=this,i=s[0],r=i.pos[0],n=i.pos[1];t.forEach((s,i)=>{const a=s.pos[0],h=s.pos[1];(a===r-100&&h===n||a===r+100&&h===n||h===n-100&&a===r||h===n+100&&a===r)&&("sushi"===s.type&&10!==e[0]?e[0]+=1:"chili"===s.type&&1!==e[0]?e[0]-=1:"chili"===s.type&&1===e[0]&&alert("Sushi Monster is NOT HAPPY!!!  TRY AGAIN"),t.splice(i,1),o[0].num=e[0])})}step(){this.allConveyorBeltItems.forEach(s=>{100===s.pos[0]&&100!==s.pos[1]?s.pos[1]-=100:100===s.pos[1]&&800!==s.pos[0]?s.pos[0]+=100:800===s.pos[0]&&800!==s.pos[1]?s.pos[1]+=100:800===s.pos[1]&&(s.pos[0]-=100)})}drawBoard(s){const{tileSize:t}=this;function e(e,o){s.beginPath(),s.rect(e,o,t,t),s.stroke()}for(let s=0,t=0;s<this.cols;s+=1,t+=this.tileSize)for(let s=0,o=0;s<this.rows;s+=1,o+=this.tileSize)e(t,o)}}class d{constructor(s){this.context=s.getContext("2d"),this.dimensions={width:s.width,height:s.height},this.restart()}restart(){this.board=new u(this.dimensions),this.animate(),setInterval(()=>{this.animate()},50),setInterval(()=>{this.board.step()},1e3)}animate(){this.board.animate(this.context)}}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("game-canvas");new d(s);console.log("Webpack is working!")})}]);