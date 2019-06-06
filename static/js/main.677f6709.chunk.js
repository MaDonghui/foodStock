(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(11),o=n.n(i),r=(n(21),n(2)),c=n(3),l=n(6),u=n(4),h=n(5),d=n(1),m=(n(22),n(23),n(24),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,this.props.business.state+""+this.props.business.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category),s.a.createElement("h3",{className:"rating"},this.props.business.rating," stars"),s.a.createElement("p",null,this.props.business.reviewCount," reviews"))))}}]),t}(s.a.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map(function(e){return s.a.createElement(m,{business:e,key:e.id})}))}}]),t}(s.a.Component),f=(n(25),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(d.a)(Object(d.a)(n))),n.handleLocationChange=n.handleLocationChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSearch=n.handleSearch.bind(Object(d.a)(Object(d.a)(n))),n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map(function(t){var n=e.sortByOptions[t];return s.a.createElement("li",{key:n,className:e.getSortByClass(n),onClick:e.handleSortByChange.bind(e,n)},t)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Food Name",onChange:this.handleTermChange,id:"foodName"}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange,id:"locationName"})),s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-submit",onClick:this.handleSearch},s.a.createElement("a",null,"Let's Go")))}}]),t}(s.a.Component)),b={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("N03LKYLrIi_ApS1kLcX8b0txsTNttVV7CDBdh5fmct7G2T1ZeahXfWTaKFIJHoG5SzFplk75vpihb5W5xWaReamHAnoIk72aTG8ithYGsv6ZnBRrX2orfmVwqJk1XHYx")}}).then(function(e){if(e.ok)return e.json();console.log("Request failed")}).then(function(e){if(e.businesses)return e.businesses.map(function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}})})}},v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"searchYelp",value:function(e,t,n){var a=this;b.search(e,t,n).then(function(e){a.setState({businesses:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",{id:"logo"},"Food",s.a.createElement("br",null),"Stock"),s.a.createElement(f,{searchYelp:this.searchYelp}),s.a.createElement(p,{businesses:this.state.businesses}))}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/foodStock",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/foodStock","/service-worker.js");g?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.677f6709.chunk.js.map