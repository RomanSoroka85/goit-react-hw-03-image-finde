(this.webpackJsonphw1=this.webpackJsonphw1||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__32dOg",Modal:"Modal_Modal__30o_l"}},23:function(e,t){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(2),c=a.n(n),o=a(22),s=a.n(o),l=a(3),i=a(4),u=a(6),h=a(5),d=a(13),m=a(23),p=a.n(m),g=a(11),b=a.n(g),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:b.a.Overlay,children:Object(r.jsx)("div",{className:b.a.Modal,children:Object(r.jsx)("img",{src:this.props.src})})})}}]),a}(n.Component),f=a(7),y=a.n(f),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.hendleChange=function(t){e.setState({inputValue:t.target.value})},e.hendleSubmit=function(t){t.preventDefault(),console.log(e.state.inputValue),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:y.a.searchbar,children:Object(r.jsxs)("form",{className:y.a.searchForm,onSubmit:this.hendleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:y.a.SearchFormButton,children:Object(r.jsx)("span",{className:y.a.searchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:y.a.searchFormInput,value:this.state.inputValue,onChange:this.hendleChange,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),v=a(12),_=a.n(v),x=a(24),w=a(9),M=a.n(w);M.a.defaults.baseURL="https://pixabay.com/api/",M.a.defaults.params={key:"18864788-659534fccb4bfac7e1ae65a8e",image_type:"photo",orientation:"horizontal",per_page:12};var S={fatchArticlesWithQuery:function(){var e=Object(x.a)(_.a.mark((function e(t){var a,r,n,c=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,M.a.get("?q=".concat(t),{params:{searchQuery:t,page:a}});case 4:return r=e.sent,n=r.data,console.log(n),e.abrupt("return",n.hits);case 10:return e.prev=10,e.t0=e.catch(1),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},I=a(8),F=a.n(I),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={articles:[],loading:!1,error:null,searchQuery:"",page:0,isOpenModal:!1,src:""},e.fetchArticles=function(t,a){console.log("searchQuery :>> ",t),S.fatchArticlesWithQuery(t,a).then((function(a){return e.setState((function(e){return{articles:a,page:e.page+1,searchQuery:t}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.loadMore=function(){S.fatchArticlesWithQuery(e.state.searchQuery,e.state.page).then((function(t){return e.setState((function(e){return{articles:[].concat(Object(d.a)(e.articles),Object(d.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.openModal=function(t){console.log(t.target.dataset.largeimage),e.setState({isOpenModal:!0,src:t.target.dataset.largeimage})},e.closeModal=function(){e.setState({isOpenModal:!1,src:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({loading:!0}),console.log("this.state :>> ",this.state),this.fetchArticles("")}},{key:"render",value:function(){var e=this,t=this.state,a=t.articles,n=t.isLoading,c=t.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{onSubmit:this.fetchArticles}),Object(r.jsxs)("div",{className:F.a.imageGallery,children:[c&&Object(r.jsxs)("p",{children:["Whoops, something went wrong: ",c.message]}),n&&Object(r.jsx)(p.a,{message:"Loading..."}),this.state.isOpenModal&&Object(r.jsx)(j,{src:this.state.src,closeModal:this.closeModal}),a.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:F.a.imageGalleryItemImage,children:this.state.articles.map((function(t){return Object(r.jsx)("li",{className:F.a.imageGalleryItem,children:Object(r.jsx)("img",{src:t.previewURL,alt:t.title,target:"_blank",rel:"noopener noreferrer",className:F.a.imageGalleryItemImage,"data-largeimage":t.largeImageURL,onClick:e.openModal,children:t.title})},t.id)}))}),Object(r.jsx)("button",{type:"button",onClick:this.loadMore,className:F.a.Button,children:"Load more"})]})]})]})}}]),a}(n.Component),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(t){return{showModal:!e.state.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.showModal;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsx)("div",{children:e&&Object(r.jsxs)(j,{onClose:this.toggleModal,children:[Object(r.jsx)("h2",{children:"modal title"}),Object(r.jsx)("button",{type:"button",onClick:this.toggleModal,children:"close modal"})]})})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__ouueD",searchForm:"Searchbar_searchForm__Tu7wz",searchForButton:"Searchbar_searchForButton__24Q0K",searchFormButton:"Searchbar_searchFormButton__ZbN_F",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__frnV0",searchFormInput:"Searchbar_searchFormInput__2dyiI"}},8:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__1ZzQW",imageGalleryItem:"ImageGallery_imageGalleryItem__2LZGV",imageGalleryItemImage:"ImageGallery_imageGalleryItemImage__3Omng",Button:"ImageGallery_Button__2YKvB"}}},[[49,1,2]]]);
//# sourceMappingURL=main.f2a96692.chunk.js.map