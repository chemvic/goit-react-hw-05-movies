"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[171],{839:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(243),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/popular","275907f385c33d24dbe69faf1e070b83",t="".concat("https://api.themoviedb.org/3/movie/popular","?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),"275907f385c33d24dbe69faf1e070b83",n="".concat(r,"?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/").concat(r),"275907f385c33d24dbe69faf1e070b83",a="".concat(n,"?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(a);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return"https://api.themoviedb.org/3/search/movie","275907f385c33d24dbe69faf1e070b83",r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("275907f385c33d24dbe69faf1e070b83","&query=").concat(t),e.next=7,u.Z.get(r);case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={fetchPopularMovies:o,fetchMoviesById:i,fetchMoviesByQuery:f,fetchInfoById:s};t.Z=p},171:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),i=r(689),s=r(87),f=r(839),p=r(596),h=(r(462),"Home_container__w+u63"),d=r(184),v=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,o.useState)(null),b=(0,a.Z)(v,2),l=b[0],m=b[1],x=(0,i.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchPopularMovies();case 3:if(0!==(t=e.sent).data.results.length){e.next=6;break}return e.abrupt("return",p.Am.error("No popular movies in the database"));case 6:c(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[0,9,12,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)("h1",{children:"Trending today"}),r.length>0&&!l&&(0,d.jsx)("ul",{children:r.map((function(e){var t=e.original_title,r=e.id;return(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"movies/".concat(r),state:{from:x},children:t})},r)}))}),l&&(0,d.jsx)("p",{children:'"Something went wrong((("'})]})}}}]);
//# sourceMappingURL=171.0ae9f17c.chunk.js.map