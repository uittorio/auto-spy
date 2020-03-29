(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{VUuB:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("1c7q"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("2mQt");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/views/types-not-supported.mdx"}});var i={_frontmatter:s},c=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(c,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"types-not-supported"},"Types not supported"),Object(o.b)("p",null,"Like any library bugs keep us company. When we find a non supported type we try our best to fix it.\nIf it takes too much time to fix it we usually update this page."),Object(o.b)("h2",{id:"conditionaltype"},"ConditionalType"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-ts"}),'type TypeName<T> =\n    T extends string ? "string" :\n    T extends number ? "number" :\n    T extends boolean ? "boolean" :\n    T extends undefined ? "undefined" :\n    T extends Function ? "function" :\n    "object";\n\ninterface Test {\n  conditional: TypeName<string>;\n}\n\nconst mock = createMock<Test>();\n\nmock.conditional // should be string. It will be null\n')),Object(o.b)("h2",{id:"symbol-computed-property"},"Symbol Computed Property"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-ts"}),"\nconst testSymbol: unique symbol = Symbol('aSymbol');\n\nexport interface WithSymbolComputed {\n    [testSymbol]: string;\n}\n\nconst mock = createMock<WithSymbolComputed>();\n\nObject.getOwnPropertySymbols(mock); //it should return the symbol testSymbol\n")),Object(o.b)("p",null,"TsAutoMock will create a property with the random name generated by typescript (example __@aSymbol) instead of the correct symbol."),Object(o.b)("h2",{id:"extends-mapped-type"},"Extends Mapped Type"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-ts"}),"\nenum SOME_ENUM {\n    FIRST = 'FIRST',\n    SECOND = 'SECOND',\n}\n\ninterface IBase {\n    someField: string;\n    anotherField: number;\n}\n\ninterface InterfaceWithExtendsMappedType extends Record<SOME_ENUM, IBase[]> {}\n\nconst mock = createMock<InterfaceWithExtendsMappedType>();\n\nmock.FIRST // undefined, it should be IBase[]\nmock.SECOND // undefined, it should be IBase[]\n")),Object(o.b)("p",null,Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/Typescript-TDD/ts-auto-mock/issues/238"}),"issue"),"\nUnfortunately this functionality doesnt work yet because when getting properties from an interface that extend\na mapped type typescript returns a different type of property that is difficult to mock."),Object(o.b)("p",null,"There is a branch created with a working version but it needs more investigation because the implementation is not readable and it may cause more issues\n",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/Typescript-TDD/ts-auto-mock/tree/feature/extends-mapped-type"}),"link")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/views/types-not-supported.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-views-types-not-supported-mdx-f6ad85ee16e58a285bdb.js.map