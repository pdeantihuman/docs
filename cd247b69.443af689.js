(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(157)),i={id:"heroku",title:"Self-Hosting with Heroku",sidebar_label:"Heroku",description:"Self-host a Standard Notes sync server with Heroku.",keywords:["standard notes","docs","notes app","end-to-end encryption","self-host","sync server","Heroku"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"self-hosting/heroku",id:"self-hosting/heroku",isDocsHomePage:!1,title:"Self-Hosting with Heroku",description:"Self-host a Standard Notes sync server with Heroku.",source:"@site/docs/self-hosting/heroku.md",slug:"/self-hosting/heroku",permalink:"/self-hosting/heroku",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/self-hosting/heroku.md",version:"current",lastUpdatedAt:1594964207,sidebar_label:"Heroku",sidebar:"someSidebar",previous:{title:"Self-hosting with Docker",permalink:"/self-hosting/docker"},next:{title:"Self-Hosting with EC2 and Nginx",permalink:"/self-hosting/ec2-nginx"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],l={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure the Heroku Command Line Interface (CLI) using these steps: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://devcenter.heroku.com/articles/heroku-cli"}),"Heroku CLI"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy the Standard Notes server to your account using the following deploy link: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server/tree/master"}),"https://heroku.com/deploy?template=https://github.com/standardnotes/syncing-server/tree/master"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install a MySQL add-on. Here we'll use the JawsDB add-on: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://elements.heroku.com/addons/jawsdb"}),"https://elements.heroku.com/addons/jawsdb"),". If you already have a database, you can skip this step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After installing JawsDB, choose it from the add-ons list in your Heroku dashboard. This will take you to your JawsDB dashboard. You'll need the information found here for the next step.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In your Heroku application, choose the "Settings" tab.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'In the "Config Variables" section, click "Reveal Config Variables".')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add 4 new variables:"),Object(o.b)("table",{parentName:"li"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_HOST")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Host" value from your JawsDB dashboard.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_DATABASE")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'In your JawsDB dashboard, you should see at the top "Connection String". Copy the part after "3306/". That will be the name of your database.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_USERNAME")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Username" value.')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"DB_PASSWORD")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Use the "Password" value.'))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Restart your Heroku instance using either the web interface (you\'ll find this option under "More" in the top right) or using the command line:'),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku restart --app name_of_app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Perform initial database setup:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku run rake db:migrate --app name_of_app\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You're done!"))),Object(o.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(o.b)("p",null,"You can immediately start using your new server by using the Standard Notes app at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"."),Object(o.b)("p",null,"In the account menu, choose ",Object(o.b)("inlineCode",{parentName:"p"},"Advanced Options")," and enter the address of your new server in ",Object(o.b)("inlineCode",{parentName:"p"},"Sync Server Domain"),"."),Object(o.b)("p",null,"Then, register for a new account or log into an existing account and begin using your private new secure Standard Notes server!"),Object(o.b)("p",null,"Note that you should understand the limitations of Heroku's free tier. In particular, your instance will sleep after 30 minutes of idleness, and may take several seconds to start up again on subsequent requests."))}b.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);