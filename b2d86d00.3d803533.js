(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var o=a(3),n=a(7),r=(a(0),a(156)),i=a(157),l={slug:"filesafe/",id:"filesafe",title:"FileSafe 101",sidebar_label:"FileSafe 101",description:"What is Standard Notes FileSafe?",keywords:["standard notes","docs","notes app","end-to-end encryption","filesafe"],image:"/img/logo.png",hide_title:!1,hide_table_of_contents:!1},s={unversionedId:"usage/filesafe",id:"usage/filesafe",isDocsHomePage:!1,title:"FileSafe 101",description:"What is Standard Notes FileSafe?",source:"@site/docs/usage/filesafe.md",slug:"/usage/filesafe/",permalink:"/usage/filesafe/",editUrl:"https://github.com/standardnotes/docs/edit/main/docs/usage/filesafe.md",version:"current",lastUpdatedAt:1610322808,sidebar_label:"FileSafe 101",sidebar:"someSidebar",previous:{title:"Note History",permalink:"/usage/note-history/"},next:{title:"FileSafe with Amazon S3",permalink:"/usage/filesafe/aws/"}},d=[{value:"What is Standard Notes FileSafe?",id:"what-is-standard-notes-filesafe",children:[]},{value:"How to use FileSafe",id:"how-to-use-filesafe",children:[]},{value:"FileSafe with the Bold Editor",id:"filesafe-with-the-bold-editor",children:[]}],c={toc:d};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{canonicalUrl:"https://standardnotes.org/help/44/filesafe-101",mdxType:"CanonicalUrl"}),Object(r.b)("h2",{id:"what-is-standard-notes-filesafe"},"What is Standard Notes FileSafe?"),Object(r.b)("p",null,"FileSafe is a platform by Standard Notes that integrates directly with your day-to-day usage of Standard Notes, and serves as an encryption intermediary between you and your favorite cloud provider. When you use FileSafe, you attach files (images, videos, documents, and any other kind of file) to your individual notes. These files are then encrypted by Standard Notes offline (client-side) first, then uploaded in their encrypted form to your Dropbox, Google Drive, or WebDAV compliant server (Nextcloud, ownCloud, Seafile, Synology, and others). This means that the files you upload via Standard Notes to your cloud cannot be peeped on or seen by your cloud provider, thus ensuring that ownership of these files ultimately reside with you (i.e, Google can\u2019t monetize your encrypted files and Dropbox can\u2019t run ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hbr.org/2018/07/a-study-of-thousands-of-dropbox-projects-reveals-how-successful-teams-collaborate"}),"user studies")," on them)."),Object(r.b)("p",null,"Uploaded files can then be downloaded from the FileSafe interface, where encrypted data is retrieved from your cloud provider, decrypted client-side by the Standard Notes FileSafe extension, and then downloaded to your disk. At no point in this process does unencrypted, plaintext data ever leave the safety of your own computer. With Standard Notes, if it touches a cloud, it\u2019s encrypted."),Object(r.b)("p",null,"Because we integrate directly with your cloud provider, we do not instate any storage quotas, other than what may already be instated by your provider. So if you have 1TB of storage available, you\u2019re free to upload as much as you\u2019d like. Note however that due to the browser-based client-side encryption process, individual file uploads are currently limited to 50MB, making it suitable for images, videos, and documents. However, you are free to upload as many 50MB files as you\u2019d like. This limitation is something we hope to improve upon in the future as we explore concepts like file chunking to break apart and encrypt larger files."),Object(r.b)("h2",{id:"how-to-use-filesafe"},"How to use FileSafe"),Object(r.b)("p",null,"To use FileSafe, sign up for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://standardnotes.org/extensions"}),"Extended")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://standardnotes.org/help/29/how-do-i-install-extensions-once-i-ve-signed-up-for-extended"}),"activate")," your Extended benefits, then:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the ",Object(r.b)("strong",{parentName:"li"},"Extensions")," menu, scroll down to the bottom of ",Object(r.b)("strong",{parentName:"li"},"Repository"),", then install and activate ",Object(r.b)("strong",{parentName:"li"},"FileSafe"),"."),Object(r.b)("li",{parentName:"ol"},"At the bottom of your working note, next to ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"/usage/action-bar"}),"Action Bar")),", click ",Object(r.b)("strong",{parentName:"li"},"FileSafe")," to open the FileSafe tab."),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("em",{parentName:"li"},"Integrations"),", click ",Object(r.b)("strong",{parentName:"li"},"Add New")," to authorize each provider that you wish to use. To set up AWS S3, please see the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/usage/filesafe/aws/"}),"additional instructions"),"."),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("em",{parentName:"li"},"Keys"),", click ",Object(r.b)("strong",{parentName:"li"},"Create New")," to create a new encryption key for your files. These keys are used to encrypt your files before they are uploaded to the cloud providers. You can export these encryption keys and store them in a safe place."),Object(r.b)("li",{parentName:"ol"},"At the top of the FileSafe tab, click ",Object(r.b)("strong",{parentName:"li"},"Attach File")," to add a new file.")),Object(r.b)("h2",{id:"filesafe-with-the-bold-editor"},"FileSafe with the Bold Editor"),Object(r.b)("p",null,"If you are using the Bold Editor, then you can embed images and other files stored in FileSafe inside your notes:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Upload an image with FileSafe as described above."),Object(r.b)("li",{parentName:"ol"},"Click the name of your image at the top of the FileSafe component or under ",Object(r.b)("em",{parentName:"li"},"All Files"),"."),Object(r.b)("li",{parentName:"ol"},'Click "Copy Insert Link". The insert link will look something like ',Object(r.b)("inlineCode",{parentName:"li"},"[FileSafe:277fd264-391a-42ee-a831-6a3d188eef90:my-image.png]"),"."),Object(r.b)("li",{parentName:"ol"},"Open your note with the Bold Editor."),Object(r.b)("li",{parentName:"ol"},"Paste the link into your note. Your image will be embedded into your note.")),Object(r.b)("p",null,"To resize your image, click the image, click and hold the blue box at the bottom right corner of the image, and drag the box. Release the box when you are happy with the size."),Object(r.b)("p",null,"You can insert other files inside your notes with the Bold Editor, but some file types (such as ",Object(r.b)("inlineCode",{parentName:"p"},".pdf")," files), will be inserted as ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"}),Object(r.b)("inlineCode",{parentName:"a"},"blob"))," links rather than actual embedded files. Clicking these links will open the files in a new tab for you to view and download."),Object(r.b)("p",null,"Your inserted files will download every time you open your note. If you want to speed up the loading of your notes or reduce the amount of bandwidth (data) that you use, then you can remove the blob links and only download or preview files when you need them by returning to the FileSafe tab."))}u.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=o,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||r;return a?n.a.createElement(b,l(l({ref:t},d),{},{components:a})):n.a.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},157:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(22);t.a=({canonicalUrl:e})=>n.a.createElement(r.a,null,n.a.createElement("link",{rel:"canonical",href:e}))}}]);