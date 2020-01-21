(this["webpackJsonpremote-user-manager"]=this["webpackJsonpremote-user-manager"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(23),u=a(10),c=a(13),l=a(32),i=a(6),o={userList:[],selectedUser:null,usersFetched:!1,usersFetchingError:!1,userUpdated:!1,userUpdatingError:!1},m=Object.freeze({SetUsers:"[Users] Set users",SetSelectedUser:"[Users] Set selected user",SetUsersFetched:"[Users] Set users fetched",SetUsersFetchingError:"[Users] Set users fetching error",SetUserUpdatingError:"[Users] Set user updating error",UpdateUser:"[Users] update user",UpdateUserSuccessful:"[User] update user successful",UpdateUserFailed:"[Users] update user failed"});function d(e){return{type:m.SetSelectedUser,payload:e}}function p(e){return{type:m.SetUsersFetched,payload:e}}function h(e,t){return{type:m.UpdateUser,user:e,payload:t}}function b(e){return{type:m.UpdateUserFailed,payload:e}}function k(e){return{type:m.UpdateUserSuccessful,payload:e}}var g=Object(c.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SetUsers:return Object(i.a)({},e,{userList:t.payload});case m.SetSelectedUser:return Object(i.a)({},e,{selectedUser:t.payload});case m.SetUsersFetched:return Object(i.a)({},e,{usersFetched:t.payload});case m.SetUsersFetchingError:return Object(i.a)({},e,{usersFetchingError:t.payload});case m.UpdateUser:return Object(i.a)({},e,{userList:e.userList.map((function(e){return e.id===t.user.id?Object(i.a)({},e,{},t.payload,{updated_at:new Date}):e}))});case m.UpdateUserFailed:return Object(i.a)({},e,{userUpdatingError:t.payload});case m.UpdateUserSuccessful:return Object(i.a)({},e,{userUpdated:t.payload});default:return e}}}),f={users:o},E=[l.a],v=Object(c.d)(g,f,c.a.apply(void 0,E)),U=(a(48),a(16)),y=a(17),N=a(19),x=a(18),S=a(20),O=a(14),w=a(12),j=a(7),C=a(33),I=a.n(C),F=a(26),L=a(21),T=a.n(L);var D=function(e){function t(e){var a;return Object(U.a)(this,t),(a=Object(N.a)(this,Object(x.a)(t).call(this,e))).state={searchText:""},a.searchTextChange=a.searchTextChange.bind(Object(j.a)(a)),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.users,a=e.usersFetched,r=e.getUsers;t.length||a||r()}},{key:"searchTextChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props,a=t.selectedUser,r=t.users,n=t.selectUser,u=t.usersFetched,c=t.usersFetchingError,l=[{name:"Name",selector:"name",sortable:!0},{name:"Email",selector:"email",sortable:!0},{name:"Occupation",selector:"occupation",sortable:!0},{name:"Actions",cell:function(e){return s.a.createElement("button",{onClick:function(){return n(e)},className:"uk-button uk-button-primary uk-button-small uk-text-capitalize uk-margin-small-right","uk-tooltip":"Click to view user information on the right side panel"},"View")}}],i=r.filter((function(t){var a=e.state.searchText.toLowerCase();return t.name.toLowerCase().indexOf(a)+t.email.toLowerCase().indexOf(a)+t.bio.toLowerCase().indexOf(a)+t.occupation.toLowerCase().indexOf(a)>=0}));return s.a.createElement("div",{id:"viewing"},s.a.createElement("h2",{className:"uk-heading"},"View and manage users"),!u&&s.a.createElement("div",{className:"uk-flex uk-flex-center uk-margin-medium"},s.a.createElement("div",{"uk-spinner":"ratio: 3"})),u&&c&&s.a.createElement("div",{className:"uk-alert-danger","uk-alert":""},s.a.createElement("p",null,"This was not supposed to happen. Sometimes when an error occurs, user always blames the developer. So before you do that, try to make sure the problem is not on your side first!"),s.a.createElement("p",null,"Try refreshing this page also to see if the problem goes away.")),u&&!c&&s.a.createElement("div",null,s.a.createElement("h4",{className:"uk-heading"},"Showing "+r.length+" users"),s.a.createElement((function(){return s.a.createElement("div",{className:"uk-grid-medium","uk-grid":""},s.a.createElement("div",{className:"uk-width-2-3"},s.a.createElement("input",{type:"text",value:e.state.searchText,onChange:e.searchTextChange,autoFocus:!0,className:"uk-input uk-input-small",placeholder:"Search "+r.length+" users by name, email, bio and occupation"}),s.a.createElement(I.a,{noHeader:!0,columns:l,pagination:!0,paginationRowsPerPageOptions:[10,20,30,50],defaultSortField:"id",striped:!0,data:i})),s.a.createElement("div",{className:"uk-width-expand"},s.a.createElement("div",{className:"uk-card uk-card-small uk-card-default"},s.a.createElement("div",{className:"uk-card-header"},s.a.createElement("h3",{className:"uk-card-title"},"View selected user information")),a?s.a.createElement("div",{className:"uk-card-body"},s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Name:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},a.name),s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Email:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},a.email),s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Occupation:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},a.occupation),s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Bio:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},a.bio),s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Created At:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},F(a.created_at).format("DD MMM, YYYY HH:mm")),s.a.createElement("p",{className:"uk-text-bold uk-margin-remove-bottom"},"Updated At:"),s.a.createElement("p",{className:"uk-text-muted uk-margin-remove-top"},F(a.updated_at).format("DD MMM, YYYY HH:mm")),s.a.createElement(O.b,{to:"/user",className:"uk-button uk-button-secondary uk-margin"},"Edit")):s.a.createElement("div",{className:"uk-card-body uk-flex uk-flex-middle uk-flex-center"},s.a.createElement("p",{className:"uk-text-muted"},"No user selected")))))}),null)))}}]),t}(r.Component);var A=Object(u.b)((function(e){return{users:e.users.userList,usersFetched:e.users.usersFetched,usersFetchingError:e.users.usersFetchingError,selectedUser:e.users.selectedUser}}),(function(e){return{getUsers:function(){return e((function(e){var t,a;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,T.a.awrap(fetch("https://ti-react-test.herokuapp.com/users"));case 3:if(!((t=r.sent).status>=400)){r.next=6;break}throw t;case 6:return r.next=8,T.a.awrap(t.json());case 8:a=r.sent,e((n=a,{type:m.SetUsers,payload:n})),e(p(!0)),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),e((s=!0,{type:m.SetUsersFetchingError,payload:s})),e(p(!0));case 17:case"end":return r.stop()}var s,n}),null,null,[[0,13]])}))},selectUser:function(t){return e(d(t))}}}))(D),Y=a(54),M=function(e){function t(e){var a;Object(U.a)(this,t),a=Object(N.a)(this,Object(x.a)(t).call(this,e));var r=e.selectedUser,s=new Y;return a.check=s.compile({name:{type:"string",trim:!0},email:{type:"email",normalize:!0},occupation:{type:"string"},bio:{type:"string",trim:!0}}),a.state={name:r.name,email:r.email,occupation:r.occupation,bio:r.bio,submitting:!1},a.nameInputChange=a.nameInputChange.bind(Object(j.a)(a)),a.emailInputChange=a.emailInputChange.bind(Object(j.a)(a)),a.occupationInputChange=a.occupationInputChange.bind(Object(j.a)(a)),a.bioInputChange=a.bioInputChange.bind(Object(j.a)(a)),a.formSubmit=a.formSubmit.bind(Object(j.a)(a)),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentWillUnmount",value:function(){this.props.updateUserSuccessful(!1),this.props.updateUserError(!1),window.UIkit.modal(document.getElementById("modal-success")).hide()}},{key:"componentDidUpdate",value:function(e,t,a){!e.userUpdatingSuccessful&&this.props.userUpdatingSuccessful&&(window.UIkit.modal(document.getElementById("modal-success")).show(),this.setState({submitting:!1})),!e.userUpdatingError&&this.props.userUpdatingError&&this.setState({submitting:!1})}},{key:"nameInputChange",value:function(e){this.setState({name:e.target.value})}},{key:"emailInputChange",value:function(e){this.setState({email:e.target.value})}},{key:"occupationInputChange",value:function(e){this.setState({occupation:e.target.value})}},{key:"bioInputChange",value:function(e){this.setState({bio:e.target.value})}},{key:"formSubmit",value:function(e){e.preventDefault(),this.setState({submitting:!0}),this.props.updateUserSuccessful(!1),this.props.updateUserError(!1);var t=Object.assign({},this.state);if(Array.isArray(this.check(t)))return console.warn(this.check(t)),void window.UIkit.notification({message:"Please rectify your input(s) first!",status:"danger"});this.props.updateUser(this.props.selectedUser,t)}},{key:"render",value:function(){var e=this.props,t=e.selectedUser,a=e.userList,r=e.userUpdatingError,n=Array.from(new Set(a.map((function(e){return e.occupation})))).map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}));return s.a.createElement("div",null,s.a.createElement("h2",{className:"uk-heading"},"Edit a user"),r&&s.a.createElement("div",{className:"uk-alert-danger","uk-alert":""},s.a.createElement("p",null,"Oops! An unexpected error occured while committing your updates, please try again after sometime.")),s.a.createElement("div",{className:"uk-card uk-card-default"},s.a.createElement("div",{className:"uk-card-header"},s.a.createElement("h3",null,"User with ID <",t.id,">")),s.a.createElement("div",{className:"uk-card-body"},s.a.createElement("form",{onSubmit:this.formSubmit,className:"uk-form-stacked"},s.a.createElement("div",{className:"uk-margin"},s.a.createElement("label",{className:"uk-form-label"},"Name:"),s.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameInputChange,className:"uk-input"})),s.a.createElement("div",{className:"uk-margin"},s.a.createElement("label",{className:"uk-form-label"},"Email:"),s.a.createElement("input",{type:"text",value:this.state.email,onChange:this.emailInputChange,className:"uk-input"})),s.a.createElement("div",{className:"uk-margin"},s.a.createElement("label",{className:"uk-form-label"},"Occupation:"),s.a.createElement("select",{defaultValue:t.occupation,onChange:this.occupationInputChange,className:"uk-select"},n)),s.a.createElement("div",{className:"uk-margin"},s.a.createElement("label",{className:"uk-form-label"},"Bio:"),s.a.createElement("textarea",{value:this.state.bio,onChange:this.bioInputChange,className:"uk-textarea",rows:"5"})),s.a.createElement("div",{className:"uk-margin"},s.a.createElement("button",{disabled:this.state.submitting,type:"submit",className:"uk-button uk-button-secondary uk-margin-right"},"Update"),s.a.createElement(O.b,{to:"/",className:"uk-button uk-button-default uk-margin-left"},"Cancel"))))),s.a.createElement("div",{id:"modal-success","uk-modal":"esc-close: false; bg-close: false"},s.a.createElement("div",{className:"uk-modal-dialog uk-modal-body"},s.a.createElement("h2",{className:"uk-modal-title"},"Success"),s.a.createElement("p",null,"User details were successfully updated!"),s.a.createElement("p",{className:"uk-text-right"},s.a.createElement("button",{className:"uk-button uk-button-default uk-modal-close",type:"button"},"Edit Again"),s.a.createElement(O.b,{to:"/",className:"uk-button uk-button-primary",type:"button"},"Back")))))}}]),t}(r.Component);var B=Object(u.b)((function(e){return{userList:e.users.userList,selectedUser:e.users.selectedUser,userUpdatingError:e.users.userUpdatingError,userUpdatingSuccessful:e.users.userUpdated}}),(function(e){return{updateUser:function(t,a){return e(function(e,t){return function(a){var r;return T.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,T.a.awrap(fetch("https://ti-react-test.herokuapp.com/users/{id}".replace("{id}",e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 3:if(!((r=s.sent).status>=400)){s.next=6;break}throw r;case 6:a(k(!0)),a(h(e,t)),a(d(Object(i.a)({},e,{},t,{updated_at:new Date}))),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),a(b(!0));case 14:case"end":return s.stop()}}),null,null,[[0,11]])}}(t,a))},updateUserError:function(t){return e(b(t))},updateUserSuccessful:function(t){return e(k(t))}}}))(M),H=a(29),P=a.n(H),V=function(e){function t(){return Object(U.a)(this,t),Object(N.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.user;return s.a.createElement("div",{id:"root-component",className:"uk-flex uk-flex-between uk-flex-column"},s.a.createElement("div",null,s.a.createElement("nav",{id:"header",className:"uk-navbar-container uk-navbar-transparent uk-background-secondary","uk-navbar":""},s.a.createElement("div",{className:"uk-navbar-left uk-padding-small"},s.a.createElement("img",{className:"logo",src:P.a,alt:"Logo"}))),s.a.createElement("div",{className:"uk-padding"},s.a.createElement(O.a,null,s.a.createElement(w.d,null,s.a.createElement(w.b,{exact:!0,path:"/",component:A}),s.a.createElement(w.b,{exact:!0,path:"/user",render:function(t){return e?s.a.createElement(B,null):s.a.createElement(w.a,{to:"/"})}}))))),s.a.createElement("div",null,s.a.createElement("nav",{id:"footer",className:"uk-navbar-container uk-navbar-transparent uk-background-secondary","uk-navbar":""},s.a.createElement("div",{className:"uk-navbar-left uk-padding"},s.a.createElement("img",{className:"logo",src:P.a,alt:"Logo"})))))}}]),t}(r.Component);var _=Object(u.b)((function(e){return{user:e.users.selectedUser}}))(V);Object(n.render)(s.a.createElement(u.a,{store:v},s.a.createElement(_,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fd04dd4c.chunk.js.map