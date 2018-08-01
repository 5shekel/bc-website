window.bioEp={bgEl:{},popupEl:{},closeBtnEl:{},shown:!1,overflowDefault:"visible",transformDefault:"",width:800,height:440,html:"",css:"",fonts:[],delay:5,showOnDelay:!1,cookieExp:30,showOncePerSession:!1,onPopup:null,cookieManager:{create:function(e,t,o,i){var n="";if(i)n="; expires=0";else if(o){var s=new Date;s.setTime(s.getTime()+24*o*60*60*1e3),n="; expires="+s.toGMTString()}document.cookie=e+"="+t+n+"; path=/"},get:function(e){for(var t=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var n=o[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null},erase:function(e){this.create(e,"",-1)}},checkCookie:function(){return this.cookieExp<=0?!(!this.showOncePerSession||"true"!=this.cookieManager.get("bioep_shown_session"))||(this.cookieManager.erase("bioep_shown"),!1):"true"==this.cookieManager.get("bioep_shown")},addCSS:function(){for(var e=0;e<this.fonts.length;e++){var t=document.createElement("link");t.href=this.fonts[e],t.type="text/css",t.rel="stylesheet",document.head.appendChild(t)}var o=document.createTextNode("#bio_ep_bg {display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.3; z-index: 10001;}#bio_ep {display: none; position: fixed; width: "+this.width+"px; height: "+this.height+"px; font-size: 16px; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%); -webkit-transform: translateX(-50%) translateY(-50%); -ms-transform: translateX(-50%) translateY(-50%); background-color: #fff; box-shadow: 0px 1px 4px 0 rgba(0,0,0,0.5); z-index: 10002;}#bio_ep .row {height:420px; padding: 40px 20px; }#bio_ep h2.title {padding-top: 0px; }#bio_ep_close {position: absolute; left: 100%; margin: -37.5px 0 0 -37.5px; background: white url('../_assets/svg/close.svg') no-repeat center center; background-size: 50% 50%; border-radius: 50%; width:75px; height:75px; color: #fff; cursor: pointer; transition: all 0.7s ease 0s;box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);}#bio_ep_close:hover {transform: scale(1.2);}"+this.css),i=document.createElement("style");i.type="text/css",i.appendChild(o),document.head.insertBefore(i,document.getElementsByTagName("style")[0])},addPopup:function(){this.bgEl=document.createElement("div"),this.bgEl.id="bio_ep_bg",document.body.appendChild(this.bgEl),document.getElementById("bio_ep")?this.popupEl=document.getElementById("bio_ep"):(this.popupEl=document.createElement("div"),this.popupEl.id="bio_ep",this.popupEl.innerHTML=this.html,document.body.appendChild(this.popupEl)),document.getElementById("bio_ep_close")?this.closeBtnEl=document.getElementById("bio_ep_close"):(this.closeBtnEl=document.createElement("div"),this.closeBtnEl.id="bio_ep_close",this.closeBtnEl.appendChild(document.createTextNode("")),this.popupEl.insertBefore(this.closeBtnEl,this.popupEl.firstChild))},showPopup:function(){this.shown||(this.bgEl.style.display="block",this.popupEl.style.display="block",this.scalePopup(),this.overflowDefault=document.body.style.overflow,document.body.style.overflow="hidden",this.shown=!0,this.cookieManager.create("bioep_shown","true",this.cookieExp,!1),this.cookieManager.create("bioep_shown_session","true",0,!0),"function"==typeof this.onPopup&&this.onPopup())},hidePopup:function(){this.bgEl.style.display="none",this.popupEl.style.display="none",document.body.style.overflow=this.overflowDefault},scalePopup:function(){var e=40,t=40,o=bioEp.popupEl.offsetWidth,i=bioEp.popupEl.offsetHeight,n=window.innerWidth,s=window.innerHeight,h={width:0,height:0},p=o/i;o>n-e&&(h.width=n-e,h.height=h.width/p,h.height>s-t&&(h.height=s-t,h.width=h.height*p)),0===h.height&&i>s-t&&(h.height=s-t,h.width=h.height*p);var d=h.width/o;(d<=0||d>1)&&(d=1),""===this.transformDefault&&(this.transformDefault=window.getComputedStyle(this.popupEl,null).getPropertyValue("transform")),this.popupEl.style.transform=this.transformDefault+" scale("+d+")"},addEvent:function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)},loadEvents:function(){this.addEvent(document,"mouseout",function(e){if("input"!=(e=e||window.event).target.tagName.toLowerCase()){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if(!(e.clientX>=t-50))if(!(e.clientY>=50))e.relatedTarget||e.toElement||bioEp.showPopup()}}.bind(this)),this.addEvent(this.closeBtnEl,"click",function(){bioEp.hidePopup()}),this.addEvent(window,"resize",function(){bioEp.scalePopup()})},setOptions:function(e){this.width=void 0===e.width?this.width:e.width,this.height=void 0===e.height?this.height:e.height,this.html=void 0===e.html?this.html:e.html,this.css=void 0===e.css?this.css:e.css,this.fonts=void 0===e.fonts?this.fonts:e.fonts,this.delay=void 0===e.delay?this.delay:e.delay,this.showOnDelay=void 0===e.showOnDelay?this.showOnDelay:e.showOnDelay,this.cookieExp=void 0===e.cookieExp?this.cookieExp:e.cookieExp,this.showOncePerSession=void 0===e.showOncePerSession?this.showOncePerSession:e.showOncePerSession,this.onPopup=void 0===e.onPopup?this.onPopup:e.onPopup},domReady:function(e){"interactive"===document.readyState||"complete"===document.readyState?e():this.addEvent(document,"DOMContentLoaded",e)},init:function(e){void 0!==e&&this.setOptions(e),this.addCSS(),this.domReady(function(){bioEp.checkCookie()||(bioEp.addPopup(),setTimeout(function(){bioEp.loadEvents(),bioEp.showOnDelay&&bioEp.showPopup()},1e3*bioEp.delay))})}};
