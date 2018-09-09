(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{234:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-gwt-and-widgets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-gwt-and-widgets","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue GWT and Widgets")]),s("p",[t._v("For easy backward compatibility it's possible to wrap any Vue GWT Component in a GWT "),s("code",[t._v("Widget")]),t._v(".\nFor this you need to use "),s("code",[t._v("VueGwtWidget")]),t._v(".")]),s("h2",{attrs:{id:"adding-the-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-dependency","aria-hidden":"true"}},[t._v("#")]),t._v(" Adding the dependency")]),s("p",[s("code",[t._v("VueGwtWidget")]),t._v(" is in it's own Maven module.\nIf you want to use it, add this Maven Dependency to your "),s("code",[t._v("pom.xml")]),t._v(":")]),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.axellience"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("vue-gwt-gwt2"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${vue-gwt.version}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("And this in your "),s("code",[t._v("gwt.xml")]),t._v(":")]),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("inherits")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("com.axellience.vuegwt.GWT2"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"instantiating-a-democomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-a-democomponent","aria-hidden":"true"}},[t._v("#")]),t._v(" Instantiating a DemoComponent")]),s("p",[t._v("Let's instantiate a "),s("code",[t._v("DemoComponent")]),t._v(" with "),s("code",[t._v("VueGwtWidget")]),t._v(":")]),s("p",[s("em",[s("strong",[t._v("GwtIndex.html")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("childComponentAttachPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("em",[s("strong",[t._v("RootGwtApp.java")])])]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RootGwtApp")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EntryPoint")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onModuleLoad")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Create a VueGwtPanel, it's a regular GWT Widget and can be attached to any GWT Widget")]),t._v("\n        VueGwtWidget"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DemoComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" vueGwtWidget "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("VueGwtWidget")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DemoComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Attach it to inside our DOM element")]),t._v("\n        RootPanel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"childComponentAttachPoint"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueGwtWidget"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"accessing-our-vue-instance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-our-vue-instance","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessing our Vue Instance")]),s("p",[t._v("It's even possible to interact with our instantiated "),s("code",[t._v("Vue")]),t._v(".")]),s("p",[t._v("Let's say our "),s("code",[t._v("DemoComponent")]),t._v(" has a method "),s("code",[t._v("increaseCounter()")]),t._v(".\nWe can do:")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("VueGwtWidget"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DemoComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" vueGwtWidget "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("VueGwtWidget")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DemoComponent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRootPanel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"childComponentAttachPoint"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueGwtWidget"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvueGwtWidget"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("increaseCounter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"cleaning-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-up","aria-hidden":"true"}},[t._v("#")]),t._v(" Cleaning Up")]),s("p",[t._v("If you don't need your "),s("code",[t._v("VueGwtWidget")]),t._v(" anymore, you can destroy it's Vue instance by calling:")]),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("vueGwtWidget"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),s("span",{attrs:{class:"token function"}},[t._v("destroy")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);