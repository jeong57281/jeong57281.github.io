"use strict";(self.webpackChunkjeong57281_github_io=self.webpackChunkjeong57281_github_io||[]).push([[390],{9516:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(1597),o=a(233),r=function(e){var t=e.tag,a=e.node,r=a.frontmatter,m=r.titleImage,s=r.title,c=r.date,i=a.fields.slug,d=a.excerpt,u=(0,l.useContext)(o.N).theme;return l.createElement(n.rU,{className:u?"post-item-module--post-item-dark--4rUsN":"post-item-module--post-item--Q9cxB",to:t?i+"?tag="+encodeURI(t):i},l.createElement("div",{className:"post-item-module--image--rkAqd"},l.createElement("div",{className:"post-item-module--ratio--1qxWO"},l.createElement("img",{src:m}))),l.createElement("div",{className:"post-item-module--info--x1Zs+"},l.createElement("div",{className:"post-item-module--text--fbXlY"},l.createElement("h2",null,s),l.createElement("i",null,"Posted on "+c),l.createElement("p",null,d))))}},1887:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});a(7207);var l=a(7294),n=a(1597),o=a(233),r=a(716),m=l.memo((function(e){var t=e.repo,a=e.theme,n=(0,l.createRef)();return(0,l.useLayoutEffect)((function(){var e=document.createElement("script"),l={src:"https://utteranc.es/client.js",repo:t,theme:a,"issue-term":"pathname",label:"Comments",crossOrigin:"anonymous",async:"true"};Object.entries(l).forEach((function(t){var a=t[0],l=t[1];e.setAttribute(a,l)})),n.current.appendChild(e)}),[t]),l.createElement("div",{ref:n})}));m.displayName="Utterances";var s=m,c=a(7361),i=a.n(c),d=a(9516),u=a(4876),p=a(5186),E=function(e){var t=e.location,a=e.data,m=i()(a,"site.siteMetadata.utterances.repo",!1),c=i()(a,"site.siteMetadata.utterances.theme",!1),E=new URLSearchParams(t.search).get("tag")||"",g=a.markdownRemark,f=a.allMarkdownRemark.nodes,h=g,b=E?f.filter((function(e){return e.frontmatter.tags.includes(E)})):f,v=b.findIndex((function(e){return e.id===g.id})),N=v>0?b[v-1]:void 0,k=v<b.length-1?b[v+1]:void 0,y=(0,l.useContext)(o.N).theme,x=g.id.replaceAll(/[0-9\-]/g,"");return l.createElement("section",{className:y?"blog-post-module--post-dark--y31lV":"blog-post-module--post--YL78N"},l.createElement(p.q,{title:g.frontmatter.title+" - "+a.site.siteMetadata.nickname+"'s blog"}),l.createElement("aside",{className:"blog-post-module--aside--cgHj3"},l.createElement("div",{className:"blog-post-module--post-toc--4+MyS"},l.createElement(r.Z,{html:h.tableOfContents,title:g.frontmatter.title,titleId:x}))),l.createElement("article",{className:"blog-post-module--article--RXIeB"},l.createElement(u.Z,{data:a},l.createElement("div",{className:"blog-post-module--post-wrap--+g4ZG"},l.createElement("div",{className:"blog-post-module--post-head--F0Bz4"},l.createElement("h1",{id:x},g.frontmatter.title),l.createElement("i",null,"Posted on "+g.frontmatter.date),l.createElement("ul",{className:"blog-post-module--post-tags--i4dIF"},g.frontmatter.tags.map((function(e,t){return l.createElement("li",{key:t},e&&l.createElement(n.rU,{to:"/?tag="+encodeURI(e)},"#"+e))})))),l.createElement("div",{className:"blog-post-module--post-body--QZanD",dangerouslySetInnerHTML:{__html:h.html}})),m&&c&&l.createElement("div",{className:"blog-post-module--post-comment--nL+gW"},l.createElement("h1",null,"Comments"),l.createElement(s,{repo:m,theme:c})),(N||k)&&l.createElement("div",{className:"blog-post-module--post-footer--PQWmq"},l.createElement("h1",null,"Other Posts",l.createElement("span",null,E?" - #"+E:" - All")),l.createElement("ul",null,N&&l.createElement("li",null,l.createElement(d.Z,{tag:E,node:N})),k&&l.createElement("li",null,l.createElement(d.Z,{tag:E,node:k})))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-8b488d98f5b0622361f2.js.map