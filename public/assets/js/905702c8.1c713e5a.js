"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[707],{2675:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(1527),i=n(8672);const o={sidebar_label:"Operators",sidebar_position:6},t="Operators",a={id:"basics/operators",title:"Operators",description:"In programming languages, an operator is a symbol or keyword that represents a specific operation or action to be performed on one or more operands. Operators define how data values are manipulated, combined, compared, or transformed within expressions and statements in a program. They play a fundamental role in performing computations, controlling program flow, and implementing various algorithms and operations.",source:"@site/docs/basics/operators.md",sourceDirName:"basics",slug:"/basics/operators",permalink:"/basics/operators",draft:!1,unlisted:!1,editUrl:"https://github.com/Harish-M-2003/Squig-Docusaurus/tree/main/docs/basics/operators.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Operators",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"User input",permalink:"/basics/input"},next:{title:"Conditionals",permalink:"/basics/conditionals"}},l={},d=[{value:"1. Arithmetic Operators",id:"1-arithmetic-operators",level:2},{value:"Example",id:"example",level:3},{value:"2. Comparison Operators",id:"2-comparison-operators",level:2},{value:"Example",id:"example-1",level:3},{value:"3. Logical Operators",id:"3-logical-operators",level:2},{value:"Example",id:"example-2",level:3},{value:"4. Assignment Operators",id:"4-assignment-operators",level:2},{value:"Example",id:"example-3",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"operators",children:"Operators"}),"\n",(0,s.jsx)(r.p,{children:"In programming languages, an operator is a symbol or keyword that represents a specific operation or action to be performed on one or more operands. Operators define how data values are manipulated, combined, compared, or transformed within expressions and statements in a program. They play a fundamental role in performing computations, controlling program flow, and implementing various algorithms and operations."}),"\n",(0,s.jsx)(r.p,{children:"Overall, operators are essential language constructs in programming, providing concise syntax for expressing computations, comparisons, and transformations of data values. Understanding operators and their behaviors is crucial for writing correct, efficient, and maintainable code in programming languages."}),"\n",(0,s.jsx)(r.p,{children:"Operators in Squig enable you to perform various operations on variables and values. Here's an overview of the different types of operators supported in Squig."}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"\ud83d\udea7 We're actively enhancing Squig to provide comprehensive support for a wide range of operators! While Squig currently has a limited set of operators, our development team is hard at work expanding its capabilities to include a broader array of operators for various operations and computations. Stay tuned for updates as we continue to evolve and enrich Squig's feature set to meet your programming needs! \ud83d\udee0\ufe0f\ud83d\udd0d"})}),"\n",(0,s.jsx)(r.h2,{id:"1-arithmetic-operators",children:"1. Arithmetic Operators"}),"\n",(0,s.jsx)(r.p,{children:"Arithmetic operators are used to perform basic mathematical operations."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Addition ",(0,s.jsx)(r.code,{children:"+"})]}),": Adds two values."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Subtraction ",(0,s.jsx)(r.code,{children:"-"})]}),": Subtracts the right operand from the left operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Multiplication ",(0,s.jsx)(r.code,{children:"*"})]}),": Multiplies two values."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Division ",(0,s.jsx)(r.code,{children:"/"})]}),": Divides the left operand by the right operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Modulus ",(0,s.jsx)(r.code,{children:"%"})]}),": Returns the remainder of the division of the left operand by the right operand."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"let a : 10\r\nlet b : 3\r\n\r\nlet sum : a + b        // 13\r\nlet difference : a - b  // 7\r\nlet product : a * b     // 30\r\nlet quotient : a / b    // 3.333...\r\nlet remainder : a % b   // 1\n"})}),"\n",(0,s.jsx)(r.h2,{id:"2-comparison-operators",children:"2. Comparison Operators"}),"\n",(0,s.jsx)(r.p,{children:"Comparison operators are used to compare two values."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Equal ",(0,s.jsx)(r.code,{children:"="})]}),": Checks if the values on both sides are equal."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Not Equal ",(0,s.jsx)(r.code,{children:"!="})]}),": Checks if the values on both sides are not equal."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Greater Than ",(0,s.jsx)(r.code,{children:">"})]}),": Checks if the left operand is greater than the right operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Less Than ",(0,s.jsx)(r.code,{children:"<"})]}),": Checks if the left operand is less than the right operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Greater Than or Equal ",(0,s.jsx)(r.code,{children:">="})]}),": Checks if the left operand is greater than or equal to the right operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Less Than or Equal ",(0,s.jsx)(r.code,{children:"<="})]}),": Checks if the left operand is less than or equal to the right operand."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"let x : 5\r\nlet y : 10\r\n\r\nlog x = y    //false\r\nlog x != y    // true\r\nlog x > y     // false\r\nlog x < y     // true\r\nlog x >= y    // false\r\nlog x <= y    // true\n"})}),"\n",(0,s.jsx)(r.h2,{id:"3-logical-operators",children:"3. Logical Operators"}),"\n",(0,s.jsx)(r.p,{children:"Logical operators are used to perform logical operations."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Logical AND ",(0,s.jsx)(r.code,{children:"&"})]}),": Returns true if both operands are true."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Logical OR ",(0,s.jsx)(r.code,{children:"|"})]}),": Returns true if at least one operand is true."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Logical NOT ",(0,s.jsx)(r.code,{children:"!"})]}),": Returns true if the operand is false, and false if the operand is true."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"let isTrue : true\r\nlet isFalse : false\r\n\r\nlog isTrue & isFalse  // false\r\nlog isTrue | isFalse  // true\r\nlog !isTrue           // false\n"})}),"\n",(0,s.jsx)(r.h2,{id:"4-assignment-operators",children:"4. Assignment Operators"}),"\n",(0,s.jsx)(r.p,{children:"Assignment operators are used to assign values to variables."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Assignment ",(0,s.jsx)(r.code,{children:":"})]}),": Assigns the value on the right to the variable on the left."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Addition Assignment ",(0,s.jsx)(r.code,{children:":+"})]}),": Adds the right operand to the left operand and assigns the result to the left operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Subtraction Assignment ",(0,s.jsx)(r.code,{children:":-"})]}),": Subtracts the right operand from the left operand and assigns the result to the left operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Multiplication Assignment ",(0,s.jsx)(r.code,{children:":*"})]}),": Multiplies the left operand by the right operand and assigns the result to the left operand."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsxs)(r.strong,{children:["Division Assignment ",(0,s.jsx)(r.code,{children:":/"})]}),": Divides the left operand by the right operand and assigns the result to the left operand."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"let num : 5\r\n\r\nnum :+ 2  # num is now 7\r\nnum :- 3  # num is now 4\r\nnum :* 2  # num is now 8\r\nnum :/ 4  # num is now 2\n"})}),"\n",(0,s.jsx)(r.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(r.p,{children:"Understanding and effectively utilizing operators in Squig is fundamental to writing expressive and efficient code. Whether performing mathematical operations, making comparisons, or handling logical conditions, operators play a crucial role in shaping the behavior of your Squig programs."})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8672:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>t});var s=n(959);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);