(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(151)),i=r(154),s={slug:"filesafe/",id:"filesafe",title:"FileSafe 101",sidebar_label:"FileSafe 101",description:"What is Standard Notes FileSafe?",keywords:["standard notes","docs","notes app","end-to-end encryption","filesafe"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},l={unversionedId:"usage/filesafe",id:"usage/filesafe",isDocsHomePage:!1,title:"FileSafe 101",description:"What is Standard Notes FileSafe?",source:"@site/docs/usage/filesafe.md",slug:"/usage/filesafe/",permalink:"/usage/filesafe/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/filesafe.md",version:"current",lastUpdatedAt:1608766907,sidebar_label:"FileSafe 101",sidebar:"someSidebar",previous:{title:"Email Backups",permalink:"/usage/email-backups/"},next:{title:"FileSafe with Amazon S3",permalink:"/usage/filesafe/aws/"}},d=[{value:"What is Standard Notes FileSafe?",id:"what-is-standard-notes-filesafe",children:[]}],c={toc:d};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{canonicalUrl:"https://standardnotes.org/help/44/filesafe-101",mdxType:"CanonicalUrl"}),Object(o.b)("h2",{id:"what-is-standard-notes-filesafe"},"What is Standard Notes FileSafe?"),Object(o.b)("p",null,"FileSafe is a platform by Standard Notes that integrates directly with your day-to-day usage of Standard Notes, and serves as an encryption intermediary between you and your favorite cloud provider. When you use FileSafe, you attach files (images, videos, documents, and any other kind of file) to your individual notes. These files are then encrypted by Standard Notes offline (client-side) first, then uploaded in their encrypted form to your Dropbox, Google Drive, or WebDAV compliant server (Nextcloud, ownCloud, Seafile, Synology, and others). This means that the files you upload via Standard Notes to your cloud cannot be peeped on or seen by your cloud provider, thus ensuring that ownership of these files ultimately reside with you (i.e, Google can\u2019t monetize your encrypted files and Dropbox can\u2019t run ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hbr.org/2018/07/a-study-of-thousands-of-dropbox-projects-reveals-how-successful-teams-collaborate"}),"user studies")," on them)."),Object(o.b)("p",null,"Uploaded files can then be downloaded from the FileSafe interface, where encrypted data is retrieved from your cloud provider, decrypted client-side by the Standard Notes FileSafe extension, and then downloaded to your disk. At no point in this process does unencrypted, plaintext data ever leave the safety of your own computer. With Standard Notes, if it touches a cloud, it\u2019s encrypted."),Object(o.b)("p",null,"Because we integrate directly with your cloud provider, we do not instate any storage quotas, other than what may already be instated by your provider. So if you have 1TB of storage available, you\u2019re free to upload as much as you\u2019d like. Note however that due to the browser-based client-side encryption process, individual file uploads are currently limited to 50MB, making it suitable for images, videos, and documents. However, you are free to upload as many 50MB files as you\u2019d like. This limitation is something we hope to improve upon in the future as we explore concepts like file chunking to break apart and encrypt larger files."))}u.isMDXComponent=!0},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,y=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return r?n.a.createElement(y,s(s({ref:t},d),{},{components:r})):n.a.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},154:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(23);t.a=({canonicalUrl:e})=>n.a.createElement(o.a,null,n.a.createElement("link",{rel:"canonical",href:e}))}}]);