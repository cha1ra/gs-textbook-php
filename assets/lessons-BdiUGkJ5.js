import{_ as B}from"./mermaid-vendor-CpAEI21m.js";import{aq as t,ag as e}from"./entry.client-DtWayQEr.js";function y(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l}=s;return r||b("Callout"),n||b("Details"),l||b("Infographic"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"CSS入門"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"CSSとは何かを理解する"}),`
`,e.jsx(s.li,{children:"CSSの基本ルールを覚える"}),`
`,e.jsx(s.li,{children:"セレクタの種類と使い方を学ぶ"}),`
`,e.jsx(s.li,{children:"ボックスモデルの仕組みを理解する"}),`
`,e.jsx(s.li,{children:"marginとpaddingの違いを覚える"}),`
`,e.jsx(s.li,{children:"Flexboxで要素を横並びにできるようになる"}),`
`,e.jsx(s.li,{children:"レスポンシブデザインの基本を知る"}),`
`,e.jsx(s.li,{children:"メディアクエリの使い方を学ぶ"}),`
`]})}),`
`,e.jsx(s.h2,{children:"CSSとは"}),`
`,e.jsxs(n,{summary:"CSSの定義",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cascading Style Sheets"})," の略語"]}),`
`,e.jsx(s.li,{children:"Webページの外観・デザインを定義するスタイルシート言語"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"Cascading"})]}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"text-lg font-bold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full inline-block",children:e.jsx(s.p,{children:"カスケード = 滝"})})}),e.jsx("div",{className:"text-sm text-slate-600 mb-3",children:e.jsx(s.p,{children:"親から子へ、上から下へ、スタイルが「滝のように流れ落ちる」仕組み"})}),e.jsx("div",{className:"text-xs text-slate-500 bg-white p-2 rounded",children:e.jsx(s.p,{children:"例：親要素が「文字色：青」→ 子要素も自動的に「文字色：青」になる"})})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"Style Sheets"})]}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"text-lg font-bold text-green-700 bg-green-50 px-3 py-0.5 rounded-full inline-block",children:e.jsx(s.p,{children:"スタイル設計書"})})}),e.jsx("div",{className:"text-sm text-slate-600 mb-3",children:e.jsx(s.p,{children:"色・サイズ・配置などの見た目を指定する設計書"})}),e.jsx("div",{className:"p-2 bg-slate-800 text-white text-xs rounded",style:{color:"#ffffff"},children:"p { color: red; }"})]})]})}),e.jsxs(r,{type:"info",title:"CSSの歴史",children:[e.jsx(s.p,{children:"CSSは1994年、ハーコン・ウィウム・リー氏によって提案されました。当時のWebページはHTMLだけで作られており、見た目もすべてHTMLタグで指定していました。"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"昔のHTMLでの見た目指定例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 文字色を変える -->
<font color="red">赤い文字</font>

<!-- 文字サイズを変える -->
<font size="5">大きな文字</font>

<!-- 背景色を変える -->
<body bgcolor="yellow">
`})}),e.jsxs(s.p,{children:["このように、HTMLの中に見た目の情報が混在していたため、コードが複雑になり管理が大変でした。CSSの登場により、",e.jsx(s.strong,{children:"構造（HTML）"})," と ",e.jsx(s.strong,{children:"見た目（CSS）"})," を分離できるようになり、より効率的で美しいWebサイトが作れるようになったのです。"]})]})]}),`
`,e.jsx(n,{summary:"CSSの利点",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"HTMLとスタイルの分離"}),e.jsx("div",{className:"text-sm text-slate-600",children:"コードの保守性が高くなり、管理が容易"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"スタイル変更の容易さ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"一箇所の変更で複数ページのデザイン変更が可能"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"効率的な開発"}),e.jsx("div",{className:"text-sm text-slate-600",children:"複数のHTMLページで同じスタイルを再利用可能"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"高速な表示"}),e.jsx("div",{className:"text-sm text-slate-600",children:"スタイルが適用される前のHTML文書の表示が速くなる"})]})]})]})})}),`
`,e.jsx(s.h2,{children:"実践してみよう"}),`
`,e.jsxs(n,{summary:"はじめてのCSS",children:[e.jsx(r,{type:"info",title:"CSSファイルの作成手順",children:e.jsx(s.p,{children:"実際にCSSファイルを作成して、文字色を変更してみましょう！"})}),e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ1"}),e.jsx("div",{className:"text-sm text-slate-600",children:"cssフォルダを開く"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ2"}),e.jsx("div",{className:"text-sm text-slate-600",children:"style.cssを作成"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ3"}),e.jsx("div",{className:"text-sm text-slate-600",children:"HTMLにリンクを記述"})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. CSSファイルの作成"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* cssフォルダ内にstyle.cssを作成 */
p {
  color: red;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. HTMLでCSSファイルを読み込み"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>はじめてのCSS</title>
  <!-- CSSファイルを読み込む -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <p>この文字が赤くなります！</p>
</body>
</html>
`})}),e.jsx(r,{type:"tip",title:"pタグの文字を赤くしてみよう",children:e.jsxs(s.p,{children:["上記のコードで、すべての",e.jsx(s.code,{children:"p"}),"タグの文字が赤色になります。ブラウザで確認してみましょう！"]})}),e.jsxs(n,{summary:'[補足] @charset "utf-8" について',children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"CSSファイルがUTF-8でエンコードされている場合に必要な記述"}),`
`,e.jsxs(s.li,{children:["しかし、ほとんどの場合、HTMLの",e.jsx(s.code,{children:"charset"}),"属性やWebサーバーの設定でUTF-8を指定するため、記述が必要になることはほとんどない"]}),`
`,e.jsx(s.li,{children:"そのため、CSSファイルもUTF-8でエンコードされることが多く、現在では省略されることが一般的"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 必要に応じて記述（通常は省略可能） */
@charset "utf-8";

p {
  color: red;
}
`})})]})]}),`
`,e.jsxs(n,{summary:"CSSの基本ルール",children:[e.jsx(l,{children:e.jsxs("div",{className:"bg-slate-50 p-6 rounded border border-slate-200",children:[e.jsxs("div",{className:"mb-4 bg-slate-50 p-4 rounded border border-slate-200 text-center",children:[e.jsx("div",{className:"text-lg font-bold text-slate-800 mb-2",children:e.jsxs(s.p,{children:[`CSSのポイントは
`,e.jsx("span",{className:"text-blue-600 mx-1",children:"「どこの」"}),`
`,e.jsx("span",{className:"text-green-600 mx-1",children:"「何を」"}),`
`,e.jsx("span",{className:"text-orange-600 mx-1",children:"「どうする」"}),`
です！`]})}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"text-blue-600 font-medium",children:"セレクタ"}),`で
`,e.jsx("span",{className:"text-green-600 font-medium",children:"プロパティ"}),`を
`,e.jsx("span",{className:"text-orange-600 font-medium",children:"値"}),"に設定する"]})})]}),e.jsxs("div",{className:"bg-white p-4 rounded border border-slate-200 font-mono text-sm",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("span",{className:"text-blue-600 font-bold",children:"セレクタ"}),e.jsx("span",{className:"text-slate-800",children:"{"})]}),e.jsxs("div",{className:"ml-4 mb-1",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"プロパティ"}),e.jsx("span",{className:"text-slate-800",children:": "}),e.jsx("span",{className:"text-orange-600 font-bold",children:"値"}),e.jsx("span",{className:"text-slate-800",children:";"})]}),e.jsxs("div",{className:"ml-4 mb-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"プロパティ"}),e.jsx("span",{className:"text-slate-800",children:": "}),e.jsx("span",{className:"text-orange-600 font-bold",children:"値"}),e.jsx("span",{className:"text-slate-800",children:";"})]}),e.jsx("div",{children:e.jsx("span",{className:"text-slate-800",children:"}"})})]}),e.jsxs("div",{className:"mt-4 space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-600 rounded mr-2"}),e.jsx("span",{className:"font-medium text-slate-800",children:"セレクタ:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"「どこの」要素にスタイルを適用するか"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-3 h-3 bg-green-600 rounded mr-2"}),e.jsx("span",{className:"font-medium text-slate-800",children:"プロパティ:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"「何を」変更するか（色、サイズ、位置など）"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-3 h-3 bg-orange-600 rounded mr-2"}),e.jsx("span",{className:"font-medium text-slate-800",children:"値:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"「どうする」か（赤色にする、大きくするなど）"})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実際の例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* セレクタとプロパティの例 */
p {
  color: red;           /* 文字色を赤に */
  background-color: yellow;  /* 背景色を黄色に */
  font-size: 18px;      /* 文字サイズを18pxに */
}
`})})]}),`
`,e.jsxs(n,{summary:"CSSセレクタの種類",children:[e.jsx(r,{type:"info",title:"重要なセレクタ",children:e.jsxs(s.p,{children:["特に",e.jsx(s.strong,{children:"タグ・ID・クラス"}),"セレクタが押さえられていればひとまずOKです！"]})}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-2",children:"タグセレクタ"}),e.jsx("div",{className:"text-sm text-blue-700 mb-2",children:"HTML要素を直接指定"}),e.jsxs("code",{className:"bg-blue-100 px-2 py-1 rounded text-sm",children:["p ","{ color: red; }"]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"IDセレクタ"}),e.jsx("div",{className:"text-sm text-green-700 mb-2",children:"一意の要素を#で指定"}),e.jsxs("code",{className:"bg-green-100 px-2 py-1 rounded text-sm",children:["#header ","{ background: blue; }"]})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded border border-purple-200",children:[e.jsx("div",{className:"font-medium text-purple-800 mb-2",children:"クラスセレクタ"}),e.jsx("div",{className:"text-sm text-purple-700 mb-2",children:"複数要素に.で指定"}),e.jsxs("code",{className:"bg-purple-100 px-2 py-1 rounded text-sm",children:[".text-center ","{ text-align: center; }"]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"その他のセレクタ"}),e.jsx("div",{className:"text-sm text-slate-700 mb-2",children:"属性・子孫・隣接など"}),e.jsxs("code",{className:"bg-slate-100 px-2 py-1 rounded text-sm",children:["a[href] ","{ color: green; }"]})]})]})})})]}),`
`,e.jsxs(n,{summary:"[補足] その他のセレクタについて",children:[e.jsx(r,{type:"info",title:"今回取り上げないセレクタについて",children:e.jsx(s.p,{children:"今回取り上げないセレクタについて説明します！"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"属性セレクタ"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="submit" value="送信">
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 属性セレクタを使用して、type属性がsubmitのinput要素にスタイルを適用 */
input[type="submit"] {
  background-color: #0066cc;
  color: #ffffff;
  padding: 10px;
  border: none;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"子孫セレクタ"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="parent">
  <div class="child">子要素</div>
</div>
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 子孫セレクタを使用して、.child要素にスタイルを適用 */
.parent .child {
  font-weight: bold;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"直接子セレクタ"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 直接子セレクタは指定した要素の直接的な子要素にのみスタイルを適用 */
.parent > .child {
  font-weight: bold;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"隣接セレクタ"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li class="selected">list item 4</li>
  <li>list item 5</li>
  <li>list item 6</li>
</ul>
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 隣接セレクタを使用して、「list item 4」の隣にある「list item 5」だけをスタイル指定 */
.selected + li {
  color: red;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"否定セレクタ"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="item">項目1</div>
<div class="item">項目2</div>
<div class="item no-border">項目3</div>
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 否定セレクタを使用して、.no-border以外の.item要素にborderを追加 */
.item:not(.no-border) {
  border: 1px solid #ccc;
}
`})})]}),`
`,e.jsxs(n,{summary:"タグセレクタ",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLの要素名を直接指定する"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<p>こんにちは</p>
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* タグセレクタを使用して、p要素にスタイルを適用 */
p {
  color: red;
}
`})}),e.jsx(r,{type:"note",children:e.jsx(s.p,{children:"タグ名は小文字で指定する必要があります。"})})]}),`
`,e.jsxs(n,{summary:"IDセレクタとクラスセレクタ",children:[e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 20l4-16m6 2 2.5-5a1.5 1.5 0 000-3H19V2H8.5a1.5 1.5 0 000 3L11 7H9.5a1.5 1.5 0 000 3L12 15l-3 5h10a2 2 0 002-2V5a2 2 0 00-2-2H4z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"IDセレクタ"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-green-700",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"構文:"})," ",e.jsxs("code",{className:"bg-green-100 px-1 rounded",children:["#id名 ","{ }"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"指定対象:"})," 一意の要素"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"重複:"})," 同一ページ内で重複不可"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"優先度:"})," 高い"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"用途:"})," ユニークな要素のスタイル"]})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"クラスセレクタ"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-blue-700",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"構文:"})," ",e.jsxs("code",{className:"bg-blue-100 px-1 rounded",children:[".class名 ","{ }"]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"指定対象:"})," 複数の要素"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"重複:"})," 同一ページ内で複数回可能"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"優先度:"})," IDより低い"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"用途:"})," 同じスタイルの複数要素"]})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"使用例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- IDセレクタの例（一意の要素） -->
<header id="main-header">メインヘッダー</header>

<!-- クラスセレクタの例（複数の要素） -->
<p class="highlight">強調されたテキスト1</p>
<p class="highlight">強調されたテキスト2</p>
<div class="highlight">強調されたボックス</div>
`})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* IDセレクタ */
#main-header {
  background-color: navy;
  color: white;
  padding: 20px;
}

/* クラスセレクタ */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
`})})]}),`
`,e.jsxs(n,{summary:"[補足] セレクタの優先度",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"CSSで複数のセレクタが同時に指定された場合に、どのセレクタが優先されるかが決まっている"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-8 h-8 text-red-600 mr-3 flex items-center justify-center font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-red-800",children:"!importantキーワード"}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsx("code",{className:"bg-red-100 px-1 rounded",children:"color: red !important;"})})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-8 h-8 text-orange-600 mr-3 flex items-center justify-center font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-orange-800",children:"インラインスタイル"}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsx("code",{className:"bg-orange-100 px-1 rounded",children:'<div style="color: blue;">'})})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-8 h-8 text-green-600 mr-3 flex items-center justify-center font-bold",children:"3"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"IDセレクタ"}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs("code",{className:"bg-green-100 px-1 rounded",children:["#header ","{ color: green; }"]})})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-8 h-8 text-blue-600 mr-3 flex items-center justify-center font-bold",children:"4"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-blue-800",children:"クラス・属性セレクタ"}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs("code",{className:"bg-blue-100 px-1 rounded",children:[".text ","{ color: orange; }"]})})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("div",{className:"w-8 h-8 text-purple-600 mr-3 flex items-center justify-center font-bold",children:"5"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-purple-800",children:"タグセレクタ"}),e.jsx("div",{className:"text-sm text-purple-700",children:e.jsxs("code",{className:"bg-purple-100 px-1 rounded",children:["p ","{ color: gray; }"]})})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3 flex items-center justify-center font-bold",children:"6"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ユーザエージェントスタイルシート"}),e.jsx("div",{className:"text-sm text-slate-700",children:"ブラウザのデフォルトスタイル"})]})]})]})}),e.jsx(r,{type:"note",title:"ユーザエージェントスタイルシートとは",children:e.jsx(s.p,{children:"ユーザエージェントスタイルシートとは、ブラウザがデフォルトで持っているスタイルシートのことです。"})})]}),`
`,e.jsx(s.h2,{children:"よく使うCSSプロパティ"}),`
`,e.jsx(n,{summary:"フォントに関するプロパティ",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"font-size"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フォントサイズを指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"font-size: 16px;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"font-family"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フォントの種類を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"font-family: Arial;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"font-weight"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フォントの太さを指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"font-weight: bold;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"font-style"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フォントのスタイルを指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"font-style: italic;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"line-height"}),e.jsx("div",{className:"text-sm text-slate-600",children:"行の高さを指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"line-height: 1.5;"})})]})})]})})}),`
`,e.jsx(n,{summary:"ボックスモデルに関するプロパティ",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"width / height"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の幅・高さを指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"width: 300px;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"margin"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の外側の余白を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"margin: 10px;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"padding"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の内側の余白を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"padding: 15px;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"border"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の境界線を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"border: 1px solid #ccc;"})})]})})]})})}),`
`,e.jsx(n,{summary:"テキストに関するプロパティ",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"text-align"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テキストの水平方向の配置を指定"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"text-align: center;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"text-decoration"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テキストの下線や取り消し線などの修飾"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"text-decoration: none;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"color"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テキストの色を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"color: #333;"})})]})})]})})}),`
`,e.jsx(n,{summary:"その他の重要なプロパティ",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"background-color"}),e.jsx("div",{className:"text-sm text-slate-600",children:"背景色を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"background-color: #f0f0f0;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"display"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の表示方法を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"display: block;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"position"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の配置方法を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"position: relative;"})})]})}),e.jsx("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800 mb-1",children:"opacity"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素の不透明度を指定する"})]}),e.jsx("div",{className:"text-sm text-slate-500",children:e.jsx("code",{className:"bg-slate-100 px-2 py-1 rounded",children:"opacity: 0.8;"})})]})})]})})}),`
`,e.jsx(n,{summary:"[補足] どんどん使って慣れていこう！",children:e.jsxs(r,{type:"tip",title:"生成AIをフル活用しよう！",children:[e.jsx(s.p,{children:"CSSは「やりたいこと CSS」で検索すれば大体出てきます。"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例えば："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「ボタン 丸く CSS」"}),`
`,e.jsx(s.li,{children:"「文字に影 CSS」"}),`
`,e.jsx(s.li,{children:"「画像中央配置 CSS」"}),`
`]}),e.jsxs(s.p,{children:["さらに、学習の絶対量が多いからこそ、",e.jsx(s.strong,{children:"生成AIにガンガン質問"}),"するのが最強の学習法です！"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例えば："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「ボタンを丸くするCSSを教えて」"}),`
`,e.jsx(s.li,{children:"「文字に影をつけたい」"}),`
`,e.jsx(s.li,{children:"「画像を中央に配置したい」"}),`
`,e.jsx(s.li,{children:"「このデザインを実現するCSSは？」"}),`
`]}),e.jsx(s.p,{children:"どんどん聞いて、実際に試して、慣れていきましょう！"})]})}),`
`,e.jsx(s.h2,{children:"ボックスモデルの理解"}),`
`,e.jsxs(n,{summary:"ボックスモデルとは",children:[e.jsx(l,{children:e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsxs("div",{className:"bg-slate-50 p-8 rounded border border-slate-200",children:[e.jsx("div",{className:"text-center mb-6",children:e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"ボックスモデルの構造"})}),e.jsxs("div",{className:"border-2 border-dashed border-red-300 p-4 bg-red-50",children:[e.jsx("div",{className:"text-sm text-red-700 font-medium mb-2",children:"Margin（マージン）"}),e.jsxs("div",{className:"border-4 border-solid border-blue-400 p-4 bg-blue-50",children:[e.jsx("div",{className:"text-sm text-blue-700 font-medium mb-2",children:"Border（ボーダー）"}),e.jsxs("div",{className:"border-2 border-dashed border-green-400 p-4 bg-green-50",children:[e.jsx("div",{className:"text-sm text-green-700 font-medium mb-2",children:"Padding（パディング）"}),e.jsxs("div",{className:"bg-yellow-100 border border-yellow-300 p-4 text-center",children:[e.jsx("div",{className:"text-sm text-yellow-800 font-medium",children:"Content（コンテンツ）"}),e.jsx("div",{className:"text-xs text-yellow-700",children:"HTML要素そのもの"})]})]})]})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"各領域の役割："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-yellow-50 rounded border border-yellow-200",children:[e.jsx("div",{className:"w-6 h-6 text-yellow-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-yellow-800",children:"コンテンツ領域"}),e.jsx("div",{className:"text-sm text-yellow-700",children:"HTML要素そのもの（テキストや画像など）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 8V4a1 1 0 011-1h4M4 16v4a1 1 0 001 1h4m8-16h4a1 1 0 011 1v4m-4 12h4a1 1 0 001-1v-4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"パディング領域"}),e.jsx("div",{className:"text-sm text-green-700",children:"要素と内容との余白（内側の余白）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-blue-800",children:"ボーダー領域"}),e.jsx("div",{className:"text-sm text-blue-700",children:"要素の境界線（枠線）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-red-800",children:"マージン領域"}),e.jsx("div",{className:"text-sm text-red-700",children:"要素と要素との間の余白（外側の余白）"})]})]})]})}),e.jsx(r,{type:"info",title:"重要な概念",children:e.jsxs(s.p,{children:["ページの見た目を整えるには「ボックスモデル」の理解が必要不可欠です。今回は",e.jsx(s.code,{children:"margin"}),"と",e.jsx(s.code,{children:"padding"}),"の違いに着目しながら学習しましょう！"]})})]}),`
`,e.jsxs(n,{summary:"`margin` の使い方",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"marginとは？"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["要素の",e.jsx(s.strong,{children:"外側の余白"}),"を設定するプロパティ"]}),`
`,e.jsx(s.li,{children:"他の要素との間隔を空けるために使用"}),`
`,e.jsx(s.li,{children:"「この要素の周りにスペースを作りたい」時に使う"}),`
`]}),e.jsx(r,{type:"info",title:"marginの役割",children:e.jsx(s.p,{children:"marginは「要素と要素の間の距離」を決めます。例えば、段落と段落の間に空白を作ったり、ボタンを他の要素から離したりする時に使います。"})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"書き方パターン"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"margin: 10px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"全方向に10px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"margin: 10px 20px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上下10px、左右20px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"margin: 10px 20px 30px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上10px、左右20px、下30px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"margin: 10px 20px 30px 40px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上→右→下→左（時計回り）"})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"個別指定"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"margin-top"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"margin-right"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"margin-bottom"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"margin-left"})]})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-2",children:"よく使う値"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm",children:[e.jsxs("div",{children:[e.jsx("code",{children:"margin: 0;"})," - 余白なし"]}),e.jsxs("div",{children:[e.jsx("code",{children:"margin: auto;"})," - 自動調整"]}),e.jsxs("div",{children:[e.jsx("code",{children:"margin: 0 auto;"})," - 中央寄せ"]}),e.jsxs("div",{children:[e.jsx("code",{children:"margin: 20px;"})," - 全方向20px"]})]})]})]})}),e.jsx(r,{type:"tip",title:"覚え方のコツ",children:e.jsxs(s.p,{children:["時計回り（上→右→下→左）で覚えましょう！「",e.jsx(s.strong,{children:"上"}),"から",e.jsx(s.strong,{children:"右"}),"に回って",e.jsx(s.strong,{children:"下"}),"、最後に",e.jsx(s.strong,{children:"左"}),"」です。"]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"主な用法："})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"要素間の間隔調整"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`p {
  margin-bottom: 20px; /* 段落の下に20pxの間隔 */
}
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"中央寄せ"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.container {
  margin: 0 auto; /* 左右中央に配置 */
}
`})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"レイアウト調整"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.header {
  margin-top: 50px; /* ヘッダーの上に50pxの余白 */
}
`})}),`
`]}),`
`]})]}),`
`,e.jsxs(n,{summary:"`padding` の使い方",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"paddingとは？"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["要素の",e.jsx(s.strong,{children:"内側の余白"}),"を設定するプロパティ"]}),`
`,e.jsx(s.li,{children:"コンテンツと境界線（border）の間の空間を作る"}),`
`,e.jsx(s.li,{children:"「この要素の中身にゆとりを持たせたい」時に使う"}),`
`]}),e.jsx(r,{type:"info",title:"paddingの役割",children:e.jsx(s.p,{children:"paddingは「要素の内側のスペース」を決めます。例えば、ボタンの文字と枠の間に余白を作ったり、カードの中身に余裕を持たせたりする時に使います。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"marginとpaddingの文法は一緒です！"})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"書き方パターン（marginと同じ）"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"padding: 10px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"全方向に10px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"padding: 10px 20px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上下10px、左右20px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"padding: 10px 20px 30px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上10px、左右20px、下30px"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm text-slate-700",children:"padding: 10px 20px 30px 40px;"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上→右→下→左（時計回り）"})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"個別指定"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"padding-top"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"padding-right"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"padding-bottom"}),e.jsx("code",{className:"text-sm text-slate-700 p-2 bg-white rounded border border-slate-200",children:"padding-left"})]})]})]})})]}),`
`,e.jsx(s.h2,{children:"Flexboxレイアウト - 要素を横並びにする"}),`
`,e.jsxs(n,{summary:"Flexboxの仕組み",children:[e.jsx(r,{type:"info",title:"横並びレイアウトの主流",children:e.jsx(s.p,{children:"Flexboxは横並びのレイアウトを作成したいときに使われます。以前はfloat:leftが使われていたが今はFlexboxの方が主流です。"})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"text-center font-medium text-slate-800 mb-4",children:e.jsx(s.p,{children:"display:flexを適用すると横並びに！"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-center font-medium text-slate-700",children:"適用前（通常）"}),e.jsx("div",{className:"bg-slate-100 p-4 rounded border-2 border-slate-300",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 text-center",children:"縦に並んでいる"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-center font-medium text-slate-700",children:"適用後（display: flex）"}),e.jsx("div",{className:"bg-slate-100 p-4 rounded border-2 border-slate-300",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium flex-1",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium flex-1",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white p-3 rounded text-center font-medium flex-1",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 text-center",children:"横に並んでいる"})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"HTMLコード："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="container">
  <div class="box">box</div>
  <div class="box">box</div>
  <div class="box">box</div>
</div>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"CSSコード："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* 横並びしたい要素をラップしているブロックに適用する */
.container {
  display: flex;  /* この部分！ */
}

.box {
  background-color: #e74c3c;
  color: white;
  padding: 12px;
  margin: 4px;
}
`})})]}),`
`,e.jsxs(n,{summary:"Flexboxレイアウトに使えるプロパティ",children:[e.jsx(s.h2,{children:"デフォルトの状態（display: flex のみ）"}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-blue-300",children:"display: flex;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1 flex",children:e.jsxs("div",{className:"flex gap-1 w-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"左から順に横並び（デフォルト）"})]})]})}),e.jsx(r,{type:"info",title:"基本の動作",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"display: flex"}),"だけを指定すると、子要素が自動的に横一列に並びます。これがFlexboxの基本動作です！"]})}),e.jsx(s.h2,{children:"justify-content（横の並び方を調整）"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-slate-300",children:"display: flex;"}),e.jsx("div",{className:"ml-2 text-blue-300",children:"justify-content: flex-start;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1 flex items-start",children:e.jsxs("div",{className:"flex justify-start gap-1 w-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"左寄せ（デフォルト）"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-slate-300",children:"display: flex;"}),e.jsx("div",{className:"ml-2 text-blue-300",children:"justify-content: center;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1 flex items-start",children:e.jsxs("div",{className:"flex justify-center gap-1 w-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"中央寄せ"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-slate-300",children:"display: flex;"}),e.jsx("div",{className:"ml-2 text-blue-300",children:"justify-content: space-between;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1 flex items-start",children:e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"両端揃え"})]})]})]})}),e.jsx(s.h2,{children:"align-items（縦の並び方を調整）"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-slate-300",children:"display: flex;"}),e.jsx("div",{className:"ml-2 text-blue-300",children:"align-items: center;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1",children:e.jsxs("div",{className:"flex items-center gap-1 h-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"縦方向中央揃え"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"CSSコード"}),e.jsx("div",{className:"bg-slate-800 text-white p-3 rounded font-mono text-sm flex-1 flex items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-slate-300",children:[".container ","{"]}),e.jsx("div",{className:"ml-2 text-slate-300",children:"display: flex;"}),e.jsx("div",{className:"ml-2 text-blue-300",children:"align-items: flex-end;"}),e.jsx("div",{className:"text-slate-300",children:"}"})]})})]}),e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200 h-40 flex flex-col",children:[e.jsx("div",{className:"text-sm font-medium text-slate-700 mb-2",children:"見た目"}),e.jsx("div",{className:"bg-white border-2 border-slate-300 p-3 rounded flex-1",children:e.jsxs("div",{className:"flex items-end gap-1 h-full",children:[e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"}),e.jsx("div",{className:"bg-slate-400 text-white px-3 py-2 rounded text-xs",children:"box"})]})}),e.jsx("div",{className:"text-xs text-slate-500 mt-1",children:"下揃え"})]})]})]})}),e.jsx(s.h2,{children:"その他のよく使うプロパティ"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"justify-content のその他の値"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"space-around"}),e.jsx("div",{className:"text-xs text-slate-500",children:"各アイテムの両側に均等な余白"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"space-evenly"}),e.jsx("div",{className:"text-xs text-slate-500",children:"アイテム間と端の余白が全て均等"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"flex-end"}),e.jsx("div",{className:"text-xs text-slate-500",children:"右寄せ"})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"align-items のその他の値"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"flex-start"}),e.jsx("div",{className:"text-xs text-slate-500",children:"上揃え"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"stretch"}),e.jsx("div",{className:"text-xs text-slate-500",children:"縦方向に伸ばす（デフォルト）"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"baseline"}),e.jsx("div",{className:"text-xs text-slate-500",children:"文字のベースラインで揃える"})]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"その他の便利なプロパティ"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"flex-direction"}),e.jsx("div",{className:"text-xs text-slate-500",children:"並ぶ方向を変更（row / column）"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"flex-wrap"}),e.jsx("div",{className:"text-xs text-slate-500",children:"折り返しの制御（wrap / nowrap）"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"gap"}),e.jsx("div",{className:"text-xs text-slate-500",children:"アイテム間の間隔を指定"})]}),e.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border border-slate-200",children:[e.jsx("code",{className:"text-sm",children:"flex-grow"}),e.jsx("div",{className:"text-xs text-slate-500",children:"子要素の伸縮比率（子要素に指定）"})]})]})]})]})}),e.jsx(r,{type:"tip",title:"学習のコツ",children:e.jsxs(s.p,{children:["まずは基本の",e.jsx(s.code,{children:"display: flex"}),"、",e.jsx(s.code,{children:"justify-content: center"}),"、",e.jsx(s.code,{children:"justify-content: space-between"}),"を覚えましょう！"]})})]}),`
`,e.jsx(s.h2,{children:"リセットCSS"}),`
`,e.jsxs(n,{summary:"ブラウザのデフォルトCSSの問題",children:[e.jsx(r,{type:"info",title:"ブラウザのデフォルトCSSの問題",children:e.jsxs(s.p,{children:["各ブラウザはそれぞれ独自のCSSを持っています",e.jsx(s.br,{}),`
`,"そのため、CSSを指定しないとブラウザによって表示が異なるのです！"]})}),e.jsx(s.h4,{children:"ブラウザのデフォルトCSS"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chrome"}),": ",e.jsx(s.a,{href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css",children:"Chromium User Agent Stylesheet"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Safari"}),": ",e.jsx(s.a,{href:"https://github.com/WebKit/WebKit/blob/main/Source/WebCore/css/html.css",children:"WebKit User Agent Stylesheet"})]}),`
`]}),e.jsx(s.h4,{children:"リセットCSS・ノーマライズCSS"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The New CSS Reset"}),": ",e.jsx(s.a,{href:"https://github.com/elad2412/the-new-css-reset",children:"elad2412/the-new-css-reset"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Normalize.css"}),": ",e.jsx(s.a,{href:"https://github.com/necolas/normalize.css",children:"necolas/normalize.css"})]}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"問題点"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-red-700",children:[e.jsx("div",{children:"• ブラウザごとに異なるスタイル"}),e.jsx("div",{children:"• 意図しない余白やスタイル"}),e.jsx("div",{children:"• デザインの一貫性が保てない"}),e.jsx("div",{children:"• 予期しない表示崩れ"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"リセットCSSの効果"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-green-700",children:[e.jsx("div",{children:"• 全ブラウザで統一された表示"}),e.jsx("div",{children:"• クリーンな状態から開始"}),e.jsx("div",{children:"• 予測しやすいスタイル適用"}),e.jsx("div",{children:"• モダンな開発手法に対応"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"モダンなリセットCSS例",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/*** The new CSS reset - version 1.5.1 (last updated 1.3.2022) ***/

*:where(:not(iframe,canvas,img,svg,video):not(svg *,symbol *)){all:unset;display:revert}*,*::before,*::after{box-sizing:border-box}a,button{cursor:revert}ol,ul,menu{list-style:none}img{max-width:100%}table{border-collapse:collapse}textarea{white-space:revert}meter{-webkit-appearance:revert;appearance:revert}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space}:where([draggable="true"]){-webkit-user-drag:element}
`})}),e.jsx(r,{type:"tip",title:"リセットCSSの使い方",children:e.jsxs(s.p,{children:["リセットCSSは、通常のCSSファイルよりも先に読み込むようにHTMLの",e.jsx(s.code,{children:"<head>"}),"内に記述します。"]})})]}),`
`,e.jsx(s.h2,{children:"スマートフォン対応"}),`
`,e.jsx(n,{summary:"レスポンシブデザインとは",children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4",children:e.jsx("div",{className:"w-8 h-8 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})})}),e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"レスポンシブデザイン"}),e.jsx("div",{className:"text-sm text-slate-600 max-width-md mx-auto",children:e.jsx(s.p,{children:"PCやスマホなど、デバイスの種類や画面のサイズに応じて、自動的にレイアウトを調整することで、どのデバイスでも最適な表示を行うための設計手法"})})]})})}),`
`,e.jsx(n,{summary:"メディアクエリの基本文法",children:e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"メディアクエリの基本構文"}),e.jsxs("div",{className:"bg-white p-4 rounded border border-slate-200 font-mono text-sm mb-4",children:[e.jsx("div",{className:"text-blue-600",children:"@media"}),e.jsx("div",{className:"ml-2 text-green-600",children:"screen"}),e.jsx("div",{className:"ml-2 text-slate-800",children:"and"}),e.jsx("div",{className:"ml-2 text-orange-600",children:"(max-width: 768px)"}),e.jsx("div",{className:"text-slate-800",children:"{"}),e.jsx("div",{className:"ml-4 text-slate-600",children:"/* スマホ用のスタイル */"}),e.jsx("div",{className:"text-slate-800",children:"}"})]}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-3 h-3 bg-blue-600 rounded mr-2 mt-1"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-slate-800",children:"@media:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"メディアクエリを開始するキーワード"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-3 h-3 bg-green-600 rounded mr-2 mt-1"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-slate-800",children:"screen:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"画面表示を対象とする"})]})]}),e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-3 h-3 bg-orange-600 rounded mr-2 mt-1"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium text-slate-800",children:"条件:"}),e.jsx("span",{className:"text-slate-600 ml-1",children:"max-width（〜以下）、min-width（〜以上）"})]})]})]})]})})}),`
`,e.jsx(n,{summary:"代表的なブレイクポイント",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"スマートフォン"}),e.jsx("div",{className:"text-sm text-slate-700",children:"〜 768px"})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v3"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"タブレット"}),e.jsx("div",{className:"text-sm text-slate-700",children:"577px 〜 768px"})]})]}),e.jsxs("div",{className:"flex items-center p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"PC・デスクトップ"}),e.jsx("div",{className:"text-sm text-slate-700",children:"769px 〜"})]})]})]})})})]})}function O(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(y,{...d})}):y(d)}function b(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const W=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));function k(d){const s={h2:"h2",li:"li",ul:"ul",...t(),...d.components},{Details:r,LinkCard:n}=s;return r||w("Details"),n||w("LinkCard"),e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{children:"Git / GitHub 入門"}),`
`,e.jsx(r,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Git と GitHub とは何かを理解する"}),`
`,e.jsx(s.li,{children:"GitHub にアップロードできる設定を完了する"}),`
`]})}),`
`,e.jsx(s.h2,{children:"事前準備"}),`
`,e.jsx(n,{url:"https://cha1ra.notion.site/Git-GitHub-5901d9d9aea74ab79ffeadec5ef89633"}),`
`,e.jsx(s.h2,{children:"Git / GitHub 講義資料"}),`
`,e.jsx(n,{url:"https://yubase-inc.notion.site/Git-GitHub-e776fdb10bee418aa33321b94f8ccdf6?source=copy_link"})]})}function R(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(k,{...d})}):k(d)}function w(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const z=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));function L(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l}=s;return r||N("Callout"),n||N("Details"),l||N("Infographic"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"HTML入門"}),`
`,e.jsx(n,{summary:"学習目標・ゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLの役割と基本概念を理解する"}),`
`,e.jsx(s.li,{children:"VSCodeを使ったHTML開発の基本操作を習得する"}),`
`,e.jsx(s.li,{children:"HTMLタグの基本ルールを覚える"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsxs(s.p,{children:["zipファイルをダウンロード後に展開し、VSCodeで開いてください！",e.jsx(s.br,{}),`
`,"※ VSCodeでの開き方は講義内で解説します"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/htmlcss.zip",children:"htmlcss.zip"})]}),`
`,e.jsxs(s.li,{children:["課題ファイル: ",e.jsx(s.a,{href:"../../zip/htmlcss-lp.zip",children:"htmlcss-lp.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"HTMLとは"}),`
`,e.jsxs(n,{summary:"HTMLの定義",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"HyperText Markup Language"})," の略語"]}),`
`,e.jsx(s.li,{children:"Webページの構造を定義するマークアップ言語"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"HyperText"})]}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"text-lg font-bold text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full inline-block",children:e.jsx(s.p,{children:"超スゲー文章"})})}),e.jsx("div",{className:"text-sm text-slate-600 mb-3",children:e.jsx(s.p,{children:"本の文章を押しても何も起こらないが、Webサイトなら移動できる！（ハイパーリンク）"})})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"Markup Language"})]}),e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"text-lg font-bold text-green-700 bg-green-50 px-3 py-0.5 rounded-full inline-block",children:e.jsx(s.p,{children:"指示をする言語"})})}),e.jsx("div",{className:"text-sm text-slate-600 mb-3",children:e.jsx(s.p,{children:"< > で囲んだ範囲が対象となる、タグで意味付けする言語"})}),e.jsx("div",{className:"p-2 bg-slate-800 text-white text-xs rounded",style:{color:"#ffffff"},children:"<p>ここは段落（Paragraph）です</p>"})]})]})}),e.jsx(r,{type:"info",title:"HTMLの歴史",children:e.jsxs(s.p,{children:["HTMLは1989年、ティム・バーナーズ＝リー博士が研究者たちが効率よく論文を検索・共有できるように発明したものです。文字に ",e.jsx(s.strong,{children:"「価値」"})," を与えて、タイトルやリンクなどの重要な情報を強調し、関連資料へすぐにアクセスできるようにするための仕組みがハイパーテキストとして誕生しました。"]})}),e.jsxs(r,{type:"tip",title:"HTMLはプログラミング言語ではない！",children:[e.jsxs(s.p,{children:["実は、HTMLはプログラミング言語ではありません。HTMLは",e.jsx(s.strong,{children:"マークアップ言語"}),"と呼ばれる種類の言語です。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"プログラミング言語との違い："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"プログラミング言語"}),"（JavaScript、Python等）：コンピュータに「処理の手順」を指示する",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"計算をする、条件によって処理を変える、繰り返し処理をする等"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"マークアップ言語"}),"（HTML）：文書に「意味や構造」を付ける",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「ここはタイトル」「ここは段落」「ここはリンク」等の情報を付与"}),`
`]}),`
`]}),`
`]}),e.jsxs(s.p,{children:["ちなみに、CSSも ",e.jsx(s.strong,{children:"スタイルシート言語"})," に分類されるため、プログラミング言語ではありません。",e.jsx(s.br,{}),`
`,"言葉の定義に気をつけましょう！"]})]})]}),`
`,e.jsx(n,{summary:"HTMLの主な役割",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"構造の定義"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Webページの骨組みを作る"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"コンテンツの種類を伝える"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ブラウザに内容の意味を教える"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"リンクの作成"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Webページ間の繋がりを作る"})]})]})]})})}),`
`,e.jsx(s.h2,{children:"初めてのHTMLとVSCode操作"}),`
`,e.jsxs(n,{summary:"はじめてのHTML演習",children:[e.jsx(s.p,{children:"HTMLファイルを作って、ブラウザに表示させてみましょう！"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"手順"})}),e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ1"}),e.jsx("div",{className:"text-sm text-slate-600",children:"VSCodeを開く"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ2"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フォルダーとファイルを作成"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ステップ3"}),e.jsx("div",{className:"text-sm text-slate-600",children:"コードを記述"})]})]})}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"VSCodeを開く"}),`
`,e.jsx(s.li,{children:"新しいフォルダーを作成し、その中に「index.html」という名前のファイルを作成する"}),`
`,e.jsx(s.li,{children:"index.html をVSCodeで開く"}),`
`,e.jsxs(s.li,{children:["キーボードで ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"!"})})," + ",e.jsx(s.code,{children:"Tab"})," キーを入力する"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"body"})})," タグ内に ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"こんにちは"})})," と入力する"]}),`
`]}),e.jsx(r,{type:"tip",title:"Emmetの活用",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"!"})," + ",e.jsx(s.code,{children:"Tab"})," のように、HTMLやCSSを効率的に記述する仕組みを ",e.jsx(s.code,{children:"Emmet"})," と呼びます。開発効率が大幅に向上するので、ぜひ覚えておきましょう！"]})})]}),`
`,e.jsxs(n,{summary:"VSCode操作のコツ",children:[e.jsx(s.p,{children:"以下の操作はとても便利なので覚えておきましょう！"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"! + Tab"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:"HTMLテンプレートを自動生成"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a.997.997 0 01-1.414 0l-7-7A1.997 1.997 0 013 12V7a4 4 0 014-4z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"タグ名 + Tab"})]}),e.jsx("div",{className:"text-sm text-green-700",children:"タグを自動補完"})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"Ctrl（cmd） + /"})]}),e.jsx("div",{className:"text-sm text-orange-700",children:"コメントタグの挿入"})]})]})})]}),`
`,e.jsx(s.h2,{children:"HTMLの基本構造と概念"}),`
`,e.jsxs(n,{summary:"HTMLタグの基本ルール",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLタグは「囲った範囲の意味を定義する」ことが役割です！"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"space-y-6",children:e.jsx("div",{className:"text-max-w-full bg-slate-50 rounded border border-slate-200",children:e.jsxs("div",{className:"p-6 max-w-lg mx-auto",children:[e.jsx("div",{className:"text-lg font-mono text-slate-800 mb-4 text-center",children:e.jsx(s.p,{children:"<タグ>コンテンツ</タグ>"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 text-sm",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-6 h-6 mx-auto mb-1 text-blue-600",children:"<>"}),e.jsx("div",{className:"font-medium text-blue-800",children:"開始タグ"}),e.jsx("div",{className:"text-slate-600",children:"意味付け開始"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-6 h-6 mx-auto mb-1 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"コンテンツ"}),e.jsx("div",{className:"text-slate-600",children:"実際の内容"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-6 h-6 mx-auto mb-1 text-red-600",children:"</>"}),e.jsx("div",{className:"font-medium text-red-800",children:"終了タグ"}),e.jsx("div",{className:"text-slate-600",children:"意味付け終了"})]})]})]})})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<タグ>コンテンツ</タグ>
<!-- 実際の例: 段落を定義する場合 -->
<p>HTMLタグの基本ルール</p>
`})}),e.jsx(r,{type:"info",title:"重要なポイント",children:e.jsxs(s.p,{children:["先ほど ",e.jsx(s.code,{children:"body"})," タグに記述した文章も、タグで囲って意味を与える必要がありますね！"]})}),e.jsx(r,{type:"note",children:e.jsx(s.p,{children:"自己完結型タグ（開始タグだけで完結するタイプ）などの例外もありますが、基本的には開始タグと終了タグのペアで使用します。"})})]}),`
`,e.jsxs(n,{summary:"Webページの基本構造",children:[e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-full mx-auto",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/html/html-structure.png",alt:"Webページの基本構造",className:"w-full rounded border border-slate-200"})})})}),e.jsx(r,{type:"info",title:"DOCTYPE宣言について",children:e.jsxs(s.p,{children:["HTMLの最初に書く ",e.jsx(s.code,{children:"<!DOCTYPE html>"})," は「",e.jsx(s.strong,{children:"これからHTML5を使いますよ！"}),"」という宣言です。昔のバージョン（HTML4）では、もっと長い宣言が必要だったけど、HTML5からはシンプルになって簡単に書けるようになりました。"]})})]}),`
`,e.jsx(s.h2,{children:"テキストと構造化"}),`
`,e.jsxs(n,{summary:"見出し (`<h1>` ~ `<h6>`)",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"heading の略"}),`
`,e.jsx(s.li,{children:"文書の階層構造を表現"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-slate-50 p-4 rounded border border-slate-200",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 text-blue-800 rounded flex items-center justify-center text-sm font-bold mr-3",children:"H1"}),e.jsx("div",{className:"text-xl font-bold text-slate-800",children:"私のウェブサイト"}),e.jsx("div",{className:"ml-auto text-xs text-slate-500",children:"最重要"})]}),e.jsxs("div",{className:"ml-4 flex items-center",children:[e.jsx("div",{className:"w-7 h-7 bg-green-100 text-green-800 rounded flex items-center justify-center text-sm font-bold mr-3",children:"H2"}),e.jsx("div",{className:"text-lg font-semibold text-slate-700",children:"自己紹介"})]}),e.jsxs("div",{className:"ml-8 flex items-center",children:[e.jsx("div",{className:"w-6 h-6 bg-yellow-100 text-yellow-800 rounded flex items-center justify-center text-xs font-bold mr-3",children:"H3"}),e.jsx("div",{className:"text-base font-medium text-slate-600",children:"趣味"})]}),e.jsxs("div",{className:"ml-12 flex items-center",children:[e.jsx("div",{className:"w-5 h-5 bg-orange-100 text-orange-800 rounded flex items-center justify-center text-xs font-bold mr-3",children:"H4"}),e.jsx("div",{className:"text-sm text-slate-600",children:"読書について"})]}),e.jsxs("div",{className:"ml-16 flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-red-100 text-red-800 rounded flex items-center justify-center text-xs font-bold mr-3",children:"H5"}),e.jsx("div",{className:"text-xs text-slate-500",children:"好きなジャンル"})]}),e.jsxs("div",{className:"ml-20 flex items-center",children:[e.jsx("div",{className:"w-3 h-3 bg-purple-100 text-purple-800 rounded flex items-center justify-center text-xs font-bold mr-3",children:"H6"}),e.jsx("div",{className:"text-xs text-slate-500",children:"最近読んだ本"})]})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-4 h-4 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"正しい階層"})]}),e.jsx("div",{className:"text-green-700",children:"H1 → H2 → H3 の順番で使用"})]}),e.jsxs("div",{className:"p-3 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-4 h-4 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"間違った使い方"})]}),e.jsx("div",{className:"text-red-700",children:"H1 → H4 のように階層を飛ばす"})]})]})]})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h1>私のウェブサイト</h1>
<h2>自己紹介</h2>
<h3>趣味</h3>
<h4>読書について</h4>
<h5>好きなジャンル</h5>
<h6>最近読んだ本</h6>
`})}),e.jsx(r,{type:"tip",title:"SEOにも重要",children:e.jsx(s.p,{children:"見出しタグは検索エンジンにとっても重要な情報です。適切な階層構造を作ることで、読みやすく、検索にも強いページが作れます。"})})]}),`
`,e.jsxs(n,{summary:"段落 (`<p>`)",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"paragraph"})," の略"]}),`
`,e.jsx(s.li,{children:"テキストのまとまりを表現する"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<p>これは段落です。長い文章を書くときに使います。</p>
<p>別の段落になります。段落ごとに改行が入ります。</p>
`})})]}),`
`,e.jsxs(n,{summary:"リスト (`<ul>`, `<ol>`, `<li>`)",children:[e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"順序なしリスト (ul)"})]}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsx(s.p,{children:"unordered list - 箇条書き"})})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"順序付きリスト (ol)"})]}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsx(s.p,{children:"ordered list - 番号付きリスト"})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"順序なしリスト："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 順序なしリスト: くだもの一覧 -->
<ul>
  <li>りんご</li>
  <li>バナナ</li>
  <li>オレンジ</li>
</ul>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"順序付きリスト："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 順序付きリスト: パスタの調理方法 -->
<ol>
    <li>鍋に水を入れ、沸騰させる</li>
    <li>塩を加え、パスタを入れる</li>
    <li>パッケージに記載された時間茹でる</li>
    <li>湯切りをする</li>
    <li>ソースと絡めて完成</li>
</ol>
`})})]}),`
`,e.jsxs(n,{summary:"[演習] プレーンテキストのHTML化",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"論文をHTMLでマークアップしよう！"})}),e.jsxs(s.p,{children:["以下のテキストを ",e.jsx(s.code,{children:"見出し"})," , ",e.jsx(s.code,{children:"段落"})," , ",e.jsx(s.code,{children:"リスト"})," を使ってHTML化してみましょう。"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`人工知能が社会に与える影響

著者：山田太郎

第1章 はじめに
近年、人工知能技術の急速な発展により、社会のさまざまな分野でAIの活用が進んでいる。

第2章 AIの影響
・雇用への影響
・教育への影響
・プライバシーへの影響

第3章 結論
AIの発展は社会に大きな変革をもたらす可能性がある。

参考文献
1. Smith, J. (2022). AI and Society: A Comprehensive Analysis.
2. 佐藤花子 (2023). 『AI時代の教育革命』.
`})}),e.jsx(r,{type:"info",title:"HTMLの記述に絶対的な正解はありません！",children:e.jsxs(s.p,{children:["HTMLには推奨される書き方はありますが、絶対的な正解は存在しません。",e.jsx(s.br,{}),`
`,"まずは実際に記述してみることで理解を深めていきましょう!"]})}),e.jsx(n,{summary:"正解例",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h1>人工知能が社会に与える影響</h1>

<p>著者：山田太郎</p>

<h2>第1章 はじめに</h2>
<p>近年、人工知能技術の急速な発展により、社会のさまざまな分野でAIの活用が進んでいる。</p>

<h2>第2章 AIの影響</h2>
<ul>
    <li>雇用への影響</li>
    <li>教育への影響</li>
    <li>プライバシーへの影響</li>
</ul>

<h2>第3章 結論</h2>
<p>AIの発展は社会に大きな変革をもたらす可能性がある。</p>

<h2>参考文献</h2>
<ol>
    <li>Smith, J. (2022). AI and Society: A Comprehensive Analysis.</li>
    <li>佐藤花子 (2023). 『AI時代の教育革命』.</li>
</ol>
`})})})]}),`
`,e.jsx(s.h2,{children:"リンクと画像"}),`
`,e.jsxs(n,{summary:"ハイパーリンク (`<a>`)",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"anchor"})," の略"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"href"})," 属性にリンク先のURLを指定する（hypertext reference）。"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<a href="https://www.example.com">Example.comへ</a>
`})}),e.jsx(r,{type:"info",title:"なぜanchor（錨）？",children:e.jsx(s.p,{children:"anchor…錨…？ と思った方。リンクは文書や情報を「繋ぎ止める」役割があるのだ、と理解しましょう！"})})]}),`
`,e.jsxs(n,{summary:"絶対パスと相対パス",children:[e.jsx(s.p,{children:"リンク先や画像の読み込み元を指定する方法が2つあります。"}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"絶対パス"})]}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"定義:"})," リソースの完全な位置を指定"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"例:"})," ",e.jsx("code",{children:e.jsx(s.a,{href:"https://www.example.com/page1.html",children:"https://www.example.com/page1.html"})})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"現実例:"})," 東京都港区芝公園四丁目2番8号"]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsx("div",{className:"font-medium text-green-800",children:"相対パス"})]}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"定義:"})," 現在の位置を基準にして指定"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"例:"})," ",e.jsx("code",{children:"./images/logo.png"})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"現実例:"})," この道をまっすぐ進んで次の角を左"]})]})]})]})}),e.jsx(r,{type:"tip",title:'"現在の位置"とは？',children:e.jsx(s.p,{children:"Web開発における現在の位置とは、ファイルが存在するディレクトリ（フォルダ）のことです。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"比較表："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"項目"}),e.jsx(s.th,{children:"絶対パス"}),e.jsx(s.th,{children:"相対パス"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"定義"})}),e.jsx(s.td,{children:"リソースの完全な場所を指定するパス"}),e.jsx(s.td,{children:"現在のページや文書を基準にしたリソースの場所"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"開始"})}),e.jsxs(s.td,{children:["プロトコル（例: ",e.jsx(s.code,{children:"https://"}),"）から始まる"]}),e.jsxs(s.td,{children:[e.jsx(s.code,{children:"./"}),", ",e.jsx(s.code,{children:"../"}),"、またはフォルダ/ファイル名"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"使用場面"})}),e.jsx(s.td,{children:"外部サイトや異なるドメインへのリンク"}),e.jsx(s.td,{children:"同じプロジェクト内のリソース参照"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"例"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"https://example.com"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"./images/logo.png"})})]})]})]})]}),`
`,e.jsxs(n,{summary:"画像 (`<img>`)",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"image の略"}),`
`,e.jsx(s.li,{children:"画像をWebページに挿入する"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<img src="cat.jpg" alt="かわいい猫の写真">
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"重要な属性："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"src"})," 属性：画像のパスを指定（source の略）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"alt"})," 属性：画像の説明を追加（alternative text の略、アクセシビリティのため）"]}),`
`]})]}),`
`,e.jsxs(n,{summary:"[補足] ブロックレベル要素とインライン要素",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLはブロックレベル、インラインのいずれかの性質を持つ"}),`
`,e.jsx(s.li,{children:"大事なのは「改行の有無」！"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"ブロックレベル要素"})]}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"役割:"})," ページ全体の構造を作る"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"表示幅:"})," 親要素の幅と同じ"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"改行:"})," 改行が伴う"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"例:"})," ",e.jsx("code",{children:"<div>, <h1>, <p>"})]})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"インライン要素"})]}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"役割:"})," 文章の一部に意味を持たせる"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"表示幅:"})," 内容の幅に応じて表示"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"改行:"})," 改行は伴わない"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"例:"})," ",e.jsx("code",{children:"<a>, <span>, <img>"})]})]})]})]})}),e.jsxs(r,{type:"info",title:"厳密な分け方",children:[e.jsx(s.p,{children:"厳密な分け方をするならコンテンツカテゴリという考え方がありますが、ややこしいので最初は上記２つの特性があるということがわかっていればOKです！"}),e.jsxs(s.p,{children:["参考: ",e.jsx(s.a,{href:"https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories",children:"https://developer.mozilla.org/ja/docs/Web/HTML/Content_categories"})]})]})]}),`
`,e.jsx(s.h2,{children:"フォームの基本"}),`
`,e.jsxs(n,{summary:"フォーム (`<form>`)",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ユーザーからの入力を収集するブロック"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form action="/submit" method="post">
  <!-- フォーム要素がここに入ります -->
</form>
`})}),e.jsx(r,{type:"note",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"action"}),", ",e.jsx(s.code,{children:"method"})," は サーバーサイド（PHP など）とやり取りするときに使います。今回の演習では省略して構いません。"]})})]}),`
`,e.jsxs(n,{summary:"input タグの3つの重要な属性",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"フォームの入力欄には、それぞれ3つの重要な情報を設定する"}),`
`]}),e.jsx(r,{type:"info",title:"フォームタグの3つの属性",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"type"}),": どんな種類の入力欄か（テキスト？パスワード？）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"name"}),": この入力欄の名前（データを識別するため）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"value"}),": 実際に入力された内容"]}),`
`]})}),e.jsx(s.p,{children:"例えば、ユーザー名の入力欄なら："}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="text" name="username" value="">
`})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'type="text"'})," → 普通のテキスト入力"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'name="username"'})," → この入力欄の名前は「username」"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'value=""'})," → 最初は空、ユーザーが入力すると値が入る"]}),`
`]})]}),`
`,e.jsxs(n,{summary:'テキスト入力（`<input type="text">`）',children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"一行のテキスト入力用"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="text" name="username" placeholder="ユーザー名">
`})})]}),`
`,e.jsxs(n,{summary:'パスワード入力（`<input type="password">`）',children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"パスワード入力用（文字が *** で表示される）"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="password" name="password" placeholder="パスワード">
`})})]}),`
`,e.jsxs(n,{summary:'選択肢の入力（`<input type="radio">` と `<input type="checkbox">`）',children:[e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"ラジオボタン"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:["複数の選択肢から",e.jsx("strong",{children:"1つ"}),"を選ぶ"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"チェックボックス"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:["複数の選択肢から",e.jsx("strong",{children:"複数"}),"選べる"]})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ラジオボタンの例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="radio" name="gender" value="male"> 男性
<input type="radio" name="gender" value="female"> 女性
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"チェックボックスの例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="checkbox" name="hobby" value="reading"> 読書
<input type="checkbox" name="hobby" value="sports"> スポーツ
`})})]}),`
`,e.jsxs(n,{summary:'送信ボタン（`<input type="submit">`）',children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"フォームのデータを送信する"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<input type="submit" value="送信">
`})})]}),`
`,e.jsx(n,{summary:"フォーム作成例",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form action="#" method="post">
  <h2>ユーザー登録フォーム</h2>

  <label for="username">ユーザー名:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">パスワード:</label>
  <input type="password" id="password" name="password" required>

  <div class="radio-group">
    <p>性別:</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">男性</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女性</label><br>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">その他</label>
  </div>

  <div class="checkbox-group">
    <p>興味のある分野（複数選択可）:</p>
    <input type="checkbox" id="web" name="interests" value="web">
    <label for="web">Web開発</label><br>
    <input type="checkbox" id="mobile" name="interests" value="mobile">
    <label for="mobile">モバイルアプリ開発</label><br>
    <input type="checkbox" id="ai" name="interests" value="ai">
    <label for="ai">AI/機械学習</label>
  </div>

  <input type="submit" value="登録">
</form>
`})})}),`
`,e.jsx(s.h2,{children:"div要素による構造化"}),`
`,e.jsxs(n,{summary:"div要素とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"division（分割）の略"})}),`
`,e.jsx(s.li,{children:"HTMLの汎用コンテナ要素"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div>
   <p>hogehoge hogehoge hogehoge</p>
   <p>hogehoge hogehoge hogehoge</p>
   <p>hogehoge hogehoge hogehoge</p>
</div>
`})}),e.jsx(l,{children:e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"p-6 bg-slate-50 rounded border border-slate-200 max-w-md mx-auto",children:[e.jsx("div",{className:"border-2 border-dashed border-slate-300 p-4 rounded",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-3 bg-slate-200 rounded"}),e.jsx("div",{className:"h-3 bg-slate-200 rounded"}),e.jsx("div",{className:"h-3 bg-slate-200 rounded w-3/4"})]})}),e.jsx("div",{className:"text-sm text-slate-600 mt-3",children:e.jsx(s.p,{children:"要素をまとめるコンテナ"})})]})})})]}),`
`,e.jsx(s.h2,{children:"セマンティックHTML"}),`
`,e.jsxs(n,{summary:"セマンティックHTMLとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ウェブページの構造と内容の意味を明確に表現するHTMLの書き方のこと"}),`
`,e.jsx(s.li,{children:"タグが単に見た目を整えるだけでなく、コンテンツの意味や役割を示す"}),`
`]}),e.jsx(r,{type:"info",title:"最初は意識しすぎないでOK",children:e.jsx(s.p,{children:"最適なものは...？と考えすぎると作業が進まなくなります。後から徐々に意識していきましょう！"})}),e.jsx(l,{children:e.jsx("div",{className:"text-center",children:e.jsxs("div",{className:"max-w-sm mx-auto border border-slate-200 rounded overflow-hidden",children:[e.jsx("div",{className:"bg-blue-100 p-3 border-b border-slate-200",children:e.jsx("div",{className:"text-sm font-medium text-blue-800",children:"header"})}),e.jsx("div",{className:"bg-green-100 p-2 border-b border-slate-200",children:e.jsx("div",{className:"text-xs text-green-800",children:"nav"})}),e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsxs("div",{className:"bg-orange-100 p-2 rounded",children:[e.jsx("div",{className:"text-xs text-orange-800",children:"main"}),e.jsx("div",{className:"bg-purple-100 p-1 rounded mt-1",children:e.jsx("div",{className:"text-xs text-purple-800",children:"article"})})]}),e.jsx("div",{className:"bg-yellow-100 p-2 rounded",children:e.jsx("div",{className:"text-xs text-yellow-800",children:"aside"})})]}),e.jsx("div",{className:"bg-gray-100 p-3 border-t border-slate-200",children:e.jsx("div",{className:"text-sm font-medium text-gray-800",children:"footer"})})]})})})]}),`
`,e.jsx(n,{summary:"主なセマンティックタグ",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<header>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ページやセクションのヘッダー"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<nav>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ナビゲーションリンク"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<main>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"メインコンテンツ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<article>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"独立したコンテンツ（ブログ記事など）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<section>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"コンテンツのセクション"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<aside>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"補足情報"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<footer>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ページやセクションのフッター"})]})]})]})})}),`
`,e.jsxs(n,{summary:"例:セマンティックHTMLの実践",children:[e.jsx(s.p,{children:"先ほどの「論文のHTML化」演習にセマンティックHTMLを追加すると..."}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<article>
    <h1>人工知能が社会に与える影響</h1>

    <p>著者：山田太郎</p>

    <section>
        <h2>第1章 はじめに</h2>
        <p>近年、人工知能技術の急速な発展により、社会のさまざまな分野でAIの活用が進んでいる。</p>
    </section>

    <section>
        <h2>第2章 AIの影響</h2>
        <ul>
            <li>雇用への影響</li>
            <li>教育への影響</li>
            <li>プライバシーへの影響</li>
        </ul>
    </section>

    <section>
        <h2>第3章 結論</h2>
        <p>AIの発展は社会に大きな変革をもたらす可能性がある。</p>
    </section>

    <section>
        <h2>参考文献</h2>
        <ol>
            <li>Smith, J. (2022). AI and Society: A Comprehensive Analysis.</li>
            <li>佐藤花子 (2023). 『AI時代の教育革命』.</li>
        </ol>
    </section>
</article>
`})}),e.jsx(r,{type:"success",title:"セマンティックHTMLのメリット",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SEO向上"}),": 検索エンジンが内容を理解しやすくなる"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"アクセシビリティ向上"}),": スクリーンリーダーなどの支援技術が内容を正しく解釈できる"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"保守性向上"}),": コードの構造が明確になり、他の開発者が理解しやすくなる"]}),`
`]})})]})]})}function V(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(L,{...d})}):L(d)}function N(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const F=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));function S(d){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,LinkCard:i,Mermaid:c}=s;return r||a("Callout"),n||a("Details"),l||a("Infographic"),i||a("LinkCard"),c||a("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"AI時代のプログラミング学習"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"AI時代になぜプログラミングを学ぶ必要があるかを理解する"}),`
`]})}),`
`,e.jsx(s.h2,{children:"「バイブコーディング」の罠"}),`
`,e.jsxs(n,{summary:"バイブコーディングとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「AIで何でも作れる！もうコーディングを学ぶ必要はない！」という考え方で開発を進めること"}),`
`]}),e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"私が『バイブコーディング（Vibe coding）』と呼んでいる新しいタイプのコーディングがあります。ここでは、バイブス（感覚）に完全に身を委ね、指数関数的な進化を受け入れ、コードの存在そのものを忘れてしまいます"}),`
`]}),e.jsx(i,{url:"https://www.technologyreview.jp/s/359884/what-is-vibe-coding-exactly/"})]}),`
`,e.jsxs(n,{summary:"バイブコーディングの危険な落とし穴",children:[e.jsxs(r,{type:"warning",title:"バイブコーディングの危険性",children:[e.jsxs(s.p,{children:["最悪なのは、エンジニアでない人が大きなプロジェクトをバイブコーディングで作って、それを保守しようとすることです。そのような事態は",e.jsx(s.strong,{children:"子供にクレジットカードを渡すようなもの"}),"です。"]}),e.jsx(s.p,{children:`最初は「この小さなプラスチックカードを振りかざすだけで、店で何でも持って帰れる！」と興奮します。
しかし1ヶ月後、クレジットカードの請求書が届きます。`}),e.jsx(s.p,{children:"バイブコーダーも同じです：「コードが壊れた。これらのファイルやフォルダは何をするものなんだ？これを直すにはどうすればいいんだ？」"}),e.jsx(s.p,{children:"コードが読めないとAIに頼るしかない、すなわち別のクレジットカードで借金を返済するような状態の陥ることになります。"}),e.jsx(i,{url:"https://note.com/shu127/n/n51b59836a93b"})]}),e.jsx(l,{children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h3",{className:"text-center text-lg font-bold text-slate-800 mb-6",children:"バイブコーディングの落とし穴"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsx("h4",{className:"font-bold text-slate-800 mb-2",children:"1. 初期の興奮"}),e.jsx("p",{className:"text-sm text-slate-600",children:"「AIですごいアプリが作れた！」"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h4",{className:"font-bold text-slate-800 mb-2",children:"2. 問題発生"}),e.jsx("p",{className:"text-sm text-slate-600",children:"「エラーが出た...なぜ？」"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-16 h-16 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center",children:e.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h4",{className:"font-bold text-slate-800 mb-2",children:"3. 借金地獄"}),e.jsx("p",{className:"text-sm text-slate-600",children:"「修正のために別のAIコードで重ね塗り...」"})]})]}),e.jsx("div",{className:"mt-8 bg-slate-100 p-4 rounded text-center",children:e.jsx("p",{className:"text-sm text-slate-700 font-medium",children:e.jsxs(s.p,{children:["これは",e.jsx("span",{className:"text-red-600 font-bold",children:"クレジットカードの借金を別のクレジットカードで返済"}),"するようなものです！"]})})})]})})]}),`
`,e.jsx(s.h2,{children:"AI時代でもプログラミングを学ぶ理由"}),`
`,e.jsxs(n,{summary:"知識がもたらす「解像度」の違い",children:[e.jsxs(s.p,{children:["同じ「おみくじアプリを作って」という依頼でも、プログラミングの知識があるかどうかで、AIへの指示の",e.jsx(s.strong,{children:"精度"}),"と",e.jsx(s.strong,{children:"品質"}),"が大きく変わります。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"初心者の指示例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`おみくじアプリ作って
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"知識がある人の指示例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`ボタン（id="omikuji-btn"）をクリックしたら、
大吉・中吉・小吉・末吉・凶からMath.random()を使って
ランダムに選んで、結果をid="result"の要素に.text()で表示する
jQueryのコードを書いて
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:[e.jsxs("div",{className:"bg-red-50 p-6 rounded border-2 border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-red-500 rounded mr-3 flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"知識なしの指示"}),e.jsx("p",{className:"text-sm text-slate-600 ml-2",children:"曖昧・大きな範囲"})]}),e.jsxs("div",{className:"bg-slate-800 text-green-400 p-4 rounded font-mono text-sm mb-4",children:[e.jsx("span",{className:"text-white",children:"// お願いの仕方"}),e.jsx("br",{}),e.jsx("span",{className:"text-white",children:"「ECサイト全部作って」"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"1000行のコードが生成される"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"エラーが出てもどこが原因かわからない"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-red-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"まるで「ハウルの動く城」のような継ぎ接ぎコード"})]})]})]}),e.jsxs("div",{className:"bg-green-50 p-6 rounded border-2 border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded mr-3 flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("h3",{className:"text-lg font-bold text-slate-800",children:"知識ありの指示"}),e.jsx("p",{className:"text-sm text-slate-600 ml-2",children:"具体的・小さな範囲"})]}),e.jsxs("div",{className:"bg-slate-800 text-green-400 p-4 rounded font-mono text-sm mb-4",children:[e.jsx("span",{className:"text-white",children:"// お願いの仕方"}),e.jsx("br",{}),e.jsx("span",{className:"text-white",children:"「ボタンクリックで文字を表示」（10行）"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"全部理解できる"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"エラーが出ても自分で直せる"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"w-4 h-4 text-green-500 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),e.jsx(s.p,{children:"確実に動く小さな部品を組み合わせる"})]})]})]})]})}),e.jsx(r,{type:"info",title:"重要な考え方: 自分の見える範囲で指示を出すこと！",children:e.jsx(s.p,{children:"知識があることで、自分が理解できる範囲で適切な指示を出せるようになります。これにより、AIとの協働がより効果的になります。"})})]}),`
`,e.jsxs(n,{summary:"AIと人間の最適な役割分担",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"プロジェクトの性質によって、AIと人間のどちらが主導すべきかが変わる"}),`
`,e.jsx(s.li,{children:"この判断ができることが、AI時代の重要なスキル"}),`
`]}),e.jsxs(l,{children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse bg-white rounded",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200 min-w-32 text-sm",children:"システムレベル"}),e.jsx("th",{className:"p-3 text-center font-medium text-slate-800 border border-slate-200 w-16 text-sm",children:"難易度"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200 min-w-32 text-sm",children:"期待値"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200 min-w-40 text-sm",children:"要件定義"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200 min-w-40 text-sm",children:"実装"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200 min-w-32 text-sm",children:"保守運用"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200 text-sm",children:"モックアプリ"}),e.jsx("td",{className:"p-3 text-center text-slate-600 border border-slate-200 text-sm",children:"低"}),e.jsx("td",{className:"p-3 text-xs text-slate-600 border border-slate-200",children:e.jsxs(s.p,{children:["• 動けば良い",e.jsx("br",{}),`
• 学習・検証目的`,e.jsx("br",{}),`
• 完璧性は不要`]})}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-800 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"アイデア出しから実施"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-800 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"コード生成で十分"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"使い捨て前提"})]})]}),e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200 text-sm",children:"社内システム"}),e.jsx("td",{className:"p-3 text-center text-slate-600 border border-slate-200 text-sm",children:"低-中"}),e.jsx("td",{className:"p-3 text-xs text-slate-600 border border-slate-200",children:e.jsxs(s.p,{children:["• 業務効率化が目標",e.jsx("br",{}),`
• 80%の精度で十分`,e.jsx("br",{}),`
• 段階的改善OK`]})}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"要件の整理から実施"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"コード生成と調整"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"人間主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"顧客対応・監視"})]})]}),e.jsxs("tr",{className:"bg-slate-200",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200 text-sm",children:"SaaSアプリ"}),e.jsx("td",{className:"p-3 text-center text-slate-600 border border-slate-200 text-sm",children:"中-高"}),e.jsx("td",{className:"p-3 text-xs text-slate-600 border border-slate-200",children:e.jsxs(s.p,{children:["• 商用品質が必須",e.jsx("br",{}),`
• 競合優位性が重要`,e.jsx("br",{}),`
• スケーラビリティ必要`]})}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"ビジネス要件は人間"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"コア機能は慎重にレビュー"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"人間主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"段階的リリース管理"})]})]}),e.jsxs("tr",{className:"bg-slate-300",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200 text-sm",children:"基幹業務"}),e.jsx("td",{className:"p-3 text-center text-slate-600 border border-slate-200 text-sm",children:"高"}),e.jsx("td",{className:"p-3 text-xs text-slate-600 border border-slate-200",children:e.jsxs(s.p,{children:["• 100%の精度が必要",e.jsx("br",{}),`
• 法的責任を伴う`,e.jsx("br",{}),`
• 暗黙知の業務プロセス多数`]})}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"人間主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"業務分析が必須"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"AI支援"}),e.jsx("div",{className:"text-xs text-slate-600",children:"生産性向上ツールとして"})]}),e.jsxs("td",{className:"p-3 border border-slate-200",children:[e.jsx("div",{className:"bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold mb-1",children:"人間主導"}),e.jsx("div",{className:"text-xs text-slate-600",children:"24時間監視体制"})]})]})]})]})}),e.jsxs("div",{className:"mt-6 grid grid-cols-3 gap-4 text-sm",children:[e.jsx("div",{className:"flex items-center justify-center p-3 bg-slate-800 text-white rounded",children:e.jsx("span",{className:"font-bold",children:"AI主導で実現可能"})}),e.jsx("div",{className:"flex items-center justify-center p-3 bg-slate-600 text-white rounded",children:e.jsx("span",{className:"font-bold",children:"AI支援で効率化"})}),e.jsx("div",{className:"flex items-center justify-center p-3 bg-slate-400 text-white rounded",children:e.jsx("span",{className:"font-bold",children:"人間の専門性が必須"})})]}),e.jsx("div",{className:"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"w-6 h-6 text-yellow-600 mr-2 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("div",{className:"text-sm text-yellow-800",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"重要ポイント："}),"システムが深くなればなるほど、AI任せでは対応できない領域が増えます。期待値が高く、業務の暗黙知が多い領域では、人間の深い理解と判断が不可欠です。"]})})]})})]})]}),`
`,e.jsx(s.h2,{children:"AI時代の効果的な学習方法"}),`
`,e.jsxs(n,{summary:"AIを活用した学習の3つの基本原則",children:[e.jsx(s.h4,{children:"1. 理解を深める質問をする"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"悪い例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`クイズアプリを作って
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"良い例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`クイズアプリを作りたいです。ステップバイステップで、プログラミング初心者にもわかりやすく説明してください。各機能をコメント付きで実装してください
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"よく使うフレーズ："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ステップバイステップで教えてください"}),`
`,e.jsx(s.li,{children:"初心者にもわかりやすく説明してください"}),`
`,e.jsx(s.li,{children:"小学生でも理解できるように例えを使って"}),`
`,e.jsx(s.li,{children:"各行にコメントを付けてください"}),`
`,e.jsx(s.li,{children:"なぜこの書き方をするのか理由も教えてください"}),`
`]}),e.jsx(s.h4,{children:"2. 前提条件を明確に定義する"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"悪い例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`ボタンを作って
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"良い例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`jQueryを使って、クリックしたら数字が増えるボタンを作ってください
`})}),e.jsx(s.p,{children:"現在学んでいる技術範囲（変数、計算、if文、jQuery基礎など）を伝えることで、適切なレベルの回答を得られます。"}),e.jsx(s.h4,{children:"3. なぜそうなるのかを追求する"}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"悪い例："}),`
AIの回答をそのままコピペして終わり`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"良い例："}),`
以下のような追加質問を実施：`]}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"このコードの各行が何をしているか説明してください"}),`
`,e.jsx(s.li,{children:"なぜ$(document).ready()が必要なのですか？"}),`
`,e.jsx(s.li,{children:"もしこの行を削除したらどうなりますか？"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// プロンプトの例
\`$('.button').click(function(){...})\` の部分がわかりません。
・$は何ですか？
・.buttonは何を指していますか？
・functionは何ですか？
もっと簡単な言葉で説明してください
`})})]}),`
`,e.jsx(n,{summary:"AI活用学習フロー",children:e.jsx(c,{children:`
graph TD
  A[作りたいものを決める] --> B[AIに具体的な条件を伝える]
  B --> C[生成されたコードを読む]
  C --> D{理解できた？}
  D -->|いいえ| E[わからない部分を詳しく質問]
  E --> C
  D -->|はい| G[自分で書き直してみる]
  G --> H[動かしてみる]
  H --> I{動いた？}
  I -->|いいえ| J[エラーを読んで原因を考える]
  J --> K[AIに具体的なエラー内容を相談]
  K --> G
  I -->|はい| L[少し変えてみる・機能追加]
  L --> M[理解完了！]
  
  style A fill:#e1f5fe
  style M fill:#c8e6c9
  style E fill:#fff3e0
  style K fill:#fff3e0
`})}),`
`,e.jsxs(n,{summary:"効果的なプロンプト例",children:[e.jsx(s.h4,{children:"自分の現在地を伝える"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`私はプログラミング初心者です。今日HTMLとjQueryの基本を学びました。
変数とif文は理解しています。
簡単なボタンクリックの処理を教えてください。
また、上記で実現できない場合はどの知識が追加で必要かを明示した上で別解を提示してください。
`})}),e.jsx(s.h4,{children:"例えを使ってもらう"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`jQueryのセレクタがよくわかりません。
日常生活の例えを使って説明してください。
`})}),e.jsx(s.h4,{children:"別の書き方を学ぶ"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`同じ動きをする、もっと簡単な書き方はありますか？
なぜ最初の書き方を教えたのか理由も教えてください。
`})}),e.jsx(r,{type:"tip",title:"実践のコツ",children:e.jsx(s.p,{children:"授業中の演習は、講師から特別な指示がない場合、まずは生成AIを使わずに取り組んでみましょう！数学の教科書を読んだだけでは数学の問題を解けないのと同じで、自分で手を動かす経験が重要です。"})})]}),`
`,e.jsx(s.h2,{children:"まとめ"}),`
`,e.jsxs(n,{summary:"AI時代に求められるプログラミング力",children:[e.jsx(l,{children:e.jsx("div",{className:"bg-slate-50 p-6 rounded",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-bold text-slate-800 text-center",children:"従来重要だったスキル"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-white rounded border",children:[e.jsx("div",{className:"w-2 h-2 bg-slate-400 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-600",children:"記法の暗記"})]}),e.jsxs("div",{className:"flex items-center p-3 bg-white rounded border",children:[e.jsx("div",{className:"w-2 h-2 bg-slate-400 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-600",children:"アルゴリズム実装"})]}),e.jsxs("div",{className:"flex items-center p-3 bg-white rounded border",children:[e.jsx("div",{className:"w-2 h-2 bg-slate-400 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-600",children:"全てを一から書く力"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-bold text-slate-800 text-center",children:"AI時代に重要なスキル"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center p-3 bg-blue-50 rounded border-2 border-blue-200",children:[e.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"要件を明確に伝える力"})]}),e.jsxs("div",{className:"flex items-center p-3 bg-green-50 rounded border-2 border-green-200",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"コードを読んで理解する力"})]}),e.jsxs("div",{className:"flex items-center p-3 bg-orange-50 rounded border-2 border-orange-200",children:[e.jsx("div",{className:"w-2 h-2 bg-orange-500 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"適切な技術判断をする力"})]}),e.jsxs("div",{className:"flex items-center p-3 bg-purple-50 rounded border-2 border-purple-200",children:[e.jsx("div",{className:"w-2 h-2 bg-purple-500 rounded-full mr-3"}),e.jsx("span",{className:"text-sm text-slate-700 font-medium",children:"エラーを読んで対処する力"})]})]})]})]})})}),e.jsxs(r,{type:"success",title:"学習の心構え",children:[e.jsx(s.p,{children:"プログラミングの知識は、AI時代においてより重要になります。それは「コードを書くため」ではなく、「AIと効果的にコミュニケーションするため」「適切な判断をするため」です。"}),e.jsx(s.p,{children:"手を動かして体験的に学んだ知識こそが、AI時代の最強の武器になります！"})]})]})]})}function J(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(S,{...d})}):S(d)}function a(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const U=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));function M(d){const s={h1:"h1",h2:"h2",li:"li",ul:"ul",...t(),...d.components},{Details:r,LinkCard:n}=s;return r||C("Details"),n||C("LinkCard"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"イントロダクション・環境設定"}),`
`,e.jsx(r,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Webアプリケーションの仕組みを理解する"}),`
`,e.jsx(s.li,{children:"環境構築を行う"}),`
`,e.jsx(s.li,{children:"プログラミング・AIとの向き合い方を理解する"}),`
`]})}),`
`,e.jsx(s.h2,{children:"Webアプリケーションの仕組み"}),`
`,e.jsx(n,{url:"https://yubase-inc.notion.site/Web-1f8d6b7390d2806d8915d161704830cb?source=copy_link"}),`
`,e.jsx(s.h2,{children:"環境構築"}),`
`,e.jsx(n,{url:"https://yubase-inc.notion.site/1f8d6b7390d280fb8637f0ec39332bda?source=copy_link"}),`
`,e.jsx(s.h2,{children:"プログラミング・AIとの向き合い方"}),`
`,e.jsx(n,{url:"https://yubase-inc.notion.site/AI-1f8d6b7390d280e59f05ec600831fa31?source=copy_link"})]})}function G(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(M,{...d})}):M(d)}function C(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const Q=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));function $(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,LinkCard:i,Mermaid:c}=s;return r||x("Callout"),n||x("Details"),l||x("Infographic"),i||x("LinkCard"),c||x("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#01 JavaScript - JavaScript入門・jQuery"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["JavaScriptの使い方を理解する",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"変数の宣言・計算"}),`
`,e.jsx(s.li,{children:"条件分岐"}),`
`,e.jsx(s.li,{children:"Math オブジェクト"}),`
`,e.jsx(s.li,{children:"DOM操作の基本"}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"jQueryの使い方を理解する"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsx(s.p,{children:"zipファイルをダウンロード後に展開し、VSCodeで開いてください！"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/js01.zip",children:"js01.zip"})]}),`
`,e.jsxs(s.li,{children:["課題ファイル: ",e.jsx(s.a,{href:"../../zip/js01-janken.zip",children:"js01-janken.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"JavaScriptとは何か？"}),`
`,e.jsxs(n,{summary:"JavaScriptとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["静的なHTMLページに",e.jsx(s.strong,{children:"動き"}),"や",e.jsx(s.strong,{children:"インタラクション"}),"を加えるプログラミング言語"]}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-lg mx-auto",children:[e.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center",children:e.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"HTML"}),e.jsx("div",{className:"text-sm text-slate-600",children:"構造"})]}),e.jsxs("div",{className:"text-center p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-12 h-12 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center",children:e.jsx("div",{className:"text-white font-bold text-sm",children:"{ }"})}),e.jsx("div",{className:"font-medium text-slate-800",children:"CSS"}),e.jsx("div",{className:"text-sm text-slate-600",children:"見た目"})]}),e.jsxs("div",{className:"text-center p-4 bg-red-50 rounded border-2 border-red-400",children:[e.jsx("div",{className:"w-12 h-12 bg-red-500 rounded mx-auto mb-2 flex items-center justify-center",children:e.jsx("div",{className:"text-white font-bold text-sm",children:"JS"})}),e.jsx("div",{className:"font-medium text-slate-800",children:"JavaScript"}),e.jsx("div",{className:"text-sm text-slate-600",children:"機能"})]})]})}),e.jsx(r,{type:"tip",title:"ブラウザで動作する最強言語、JavaScript！",children:e.jsxs(s.p,{children:["JavaScriptの最大の特徴は、",e.jsx(s.strong,{children:"ブラウザ上で直接動作する"}),"こと！",e.jsx(s.br,{}),`
`,"ブラウザには ",e.jsx(s.strong,{children:"JavaScriptエンジン"})," という「JSを実行する機能」が内蔵されているんです"]})})]}),`
`,e.jsx(n,{summary:"JavaScriptでできること",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ボタンをクリックしたときの処理"}),`
`,e.jsx(s.li,{children:"フォームの入力チェック"}),`
`,e.jsx(s.li,{children:"アニメーション効果"}),`
`,e.jsx(s.li,{children:"データの取得と表示"}),`
`,e.jsx(s.li,{children:"ゲームやアプリケーションの作成"}),`
`]})}),`
`,e.jsx(s.h2,{children:"JavaScript入門"}),`
`,e.jsxs(n,{summary:"JavaScriptの記述場所パターン",children:[e.jsx(s.h4,{children:"1. HTML直接パターン（インライン）"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLファイル内に直接JavaScriptを記述"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript練習</title>
</head>
<body>
    <h1>JavaScriptテスト</h1>
    
    <!-- HTML内に直接JavaScriptを記述 -->
    <script>
        alert("Hello World!");
        console.log("コンソールに表示されました");
    <\/script>
</body>
</html>
`})}),e.jsx(s.h4,{children:"2. 外部ファイル読み込みパターン"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"JavaScriptを別ファイル（.jsファイル）として作成"}),`
`,e.jsx(s.li,{children:"HTMLから読み込む"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"js/script.js"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// script.jsファイルの内容
alert("Hello World!");
console.log("外部ファイルから読み込まれました");
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"index.html"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript練習</title>
</head>
<body>
    <h1>JavaScriptテスト</h1>
    
    <!-- 外部のJavaScriptファイルを読み込み -->
    <script src="./js/script.js"><\/script>
</body>
</html>
`})}),e.jsx(r,{type:"info",title:"演習での記述方法について",children:e.jsxs(s.p,{children:["この教材の演習では、",e.jsx(s.strong,{children:"わかりやすさを重視してHTML直接パターン"}),"を使用します。1つのHTMLファイルで完結するため、初心者の方でも混乱せずに学習を進められます。",e.jsx(s.br,{}),`
`,"実際の開発現場では外部ファイル読み込みパターンがよく使われますが、まずは基本をしっかりと身につけましょう！"]})}),e.jsxs(r,{type:"tip",title:"JavaScriptの読み込み場所について",children:[e.jsx(s.p,{children:"JavaScriptはHTMLに対する指示（DOM操作）を含むことが多いため、読み込み場所に注意が必要です。"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"推奨される配置方法："})}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"</body>"}),"の直前に配置する"]})}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"defer"}),"属性を使用"]})," （",e.jsx(s.code,{children:'<script defer src="script.js"><\/script>'}),"）し、HTML解析完了後に実行させる"]}),`
`]}),e.jsx(s.p,{children:"これにより、「要素が見つからない」といったエラーを防げます！"})]})]}),`
`,e.jsxs(n,{summary:"まずは文字を表示してみよう",children:[e.jsx(s.p,{children:"プログラミングの第一歩は、文字を表示することから始まります。JavaScriptには2つの基本的な表示方法があります。"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ポップアップで表示
alert("Hello World!");

// 開発者ツールのコンソールに表示
console.log("Hello World!");
`})}),e.jsx(r,{type:"info",title:"以降は console.log() を使おう！",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"alert()"}),"はユーザーの操作を止めてしまうため、開発中は",e.jsx(s.code,{children:"console.log()"}),"を使うのが一般的です。コンソールは開発者だけが見る場所なので、デバッグ情報を自由に出力できます。"]})})]}),`
`,e.jsxs(n,{summary:"コメントの書き方",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"コードに説明を加えたいときに利用する"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 1行のコメント

/*
複数行に渡って
コメントを書く
*/
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ショートカットキー"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Windows: ",e.jsx(s.code,{children:"Ctrl"})," + ",e.jsx(s.code,{children:"/"})]}),`
`,e.jsxs(s.li,{children:["Mac: ",e.jsx(s.code,{children:"Cmd"})," + ",e.jsx(s.code,{children:"/"})]}),`
`]})]}),`
`,e.jsxs(n,{summary:"[補足] セミコロン( `;` ) の役割",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"式の終わりを示すもの"}),`
`,e.jsx(s.li,{children:"JavaScriptの場合はセミコロンがついていなくてもプログラムは動作するのでどちらでもOK"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// セミコロンありの例
console.log("Hello World!");
let name = "田中";

// セミコロンなしでも動作する
console.log("Hello World!")
let name = "田中"
`})})]}),`
`,e.jsxs(n,{summary:"[補足] ダブルクォート ( `\"` ) と シングルクォート ( `'` ) の違い",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"プログラムでは、文字や文字列（テキスト）をコンピューターに「これは文字だよ」と伝えるために、クォート（引用符）で囲む"}),`
`,e.jsxs(s.li,{children:["JSでは ",e.jsx(s.code,{children:'"'})," (ダブルクォート) と ",e.jsx(s.code,{children:"'"})," (シングルクォート) のどちらを使ってもOK"]}),`
`,e.jsxs(s.li,{children:["ただし、",e.jsx(s.strong,{children:"前後の記号は必ず一致"}),"させること！"]}),`
`,e.jsx(s.li,{children:"バッククォート（`）で囲ってもOK"}),`
`]}),e.jsx(r,{type:"success",title:"正しい書き方",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// OK: ダブルクォートで囲む
"hello world!"

// OK: シングルクォートで囲む
'hello world!'

// OK: バッククォートで囲む（テンプレートリテラル）
\`hello world!\`
`})})}),e.jsxs(r,{type:"error",title:"よくある間違い",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// NG: 最初が ", 最後が ' と一致していない
"hello world!'

`})}),e.jsx(s.p,{children:"前後の記号が一致していないため、エラーが発生"})]}),e.jsxs(r,{type:"note",title:"他の言語との違い",children:[e.jsxs(s.p,{children:["JavaScriptでは ",e.jsx(s.code,{children:'"'})," と ",e.jsx(s.code,{children:"'"})," を区別しませんが、他の言語では挙動が変わる場合があります！"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PHP"}),": ",e.jsx(s.code,{children:'"'})," のみ変数展開を実施する"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"C言語"}),": ",e.jsx(s.code,{children:"'"})," は文字、",e.jsx(s.code,{children:'"'})," は文字列に使用する"]}),`
`]})]})]}),`
`,e.jsx(s.h2,{children:"変数と定数"}),`
`,e.jsxs(n,{summary:"変数とは - データをしまう『箱』",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["プログラムで使うデータを一時的にしまっておくための",e.jsx(s.strong,{children:"箱"}),"のようなもの"]}),`
`,e.jsx(s.li,{children:"箱に名前を付けておくことで、中身を自由に取り出したり、入れ替えたりできる"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"text-center max-w-xl mx-auto",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/variable.png",alt:"変数の概念図：名前のついた箱にデータを入れるイメージ",className:"w-full rounded border border-slate-200"})}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsx(s.p,{children:"変数は「名前のついた箱」のようなもの。データを保存して、後で取り出すことができる"})})]})})]}),`
`,e.jsxs(n,{summary:"変数 `let`",children:[e.jsx(s.h4,{children:"基本的な使い方"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 変数の宣言と代入
let userName = "田中太郎";
let userAge = 25;

// 変数の中身を表示
console.log(userName); // "田中太郎"
console.log(userAge);  // 25

// 変数の中身を変更（再代入）
userAge = 26;
console.log(userAge);  // 26
`})}),e.jsx(r,{type:"tip",title:"letの由来",children:e.jsxs(s.p,{children:["英語の使役動詞「let」（〜させる）が由来です。  ",e.jsx(s.strong,{children:'Let userName be "田中太郎"'}),"（userName を 田中太郎 とする） ってことですね！"]})}),e.jsx(n,{summary:"`var` という記述を見かけたら...",children:e.jsxs(s.p,{children:["JavaScriptには",e.jsx(s.code,{children:"var"}),"という古い変数宣言もありますが、現在は",e.jsx(s.code,{children:"let"}),"を使うのが推奨されています。",e.jsx(s.code,{children:"let"}),"の方がスコープ（変数が使える範囲）が明確で、バグを防ぎやすいからです。詳しくは ES6文法を調べてみましょう！"]})}),e.jsx(s.h4,{children:"変数に入れられるもの"}),e.jsx(s.p,{children:"変数には様々な種類のデータを入れることができます。"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 文字列（String）
let message = "こんにちは";

// 数値（Number）
let price = 1500;

// 真偽値（Boolean）
let isStudent = true;

// 配列（Array）
let fruits = ["りんご", "バナナ", "オレンジ"];

// オブジェクト（Object）
let user = {
  name: "太郎",
  age: 25
};
`})})]}),`
`,e.jsxs(n,{summary:"定数 `const`",children:[e.jsx(s.h4,{children:"基本的な使い方"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 定数の宣言
const TAX_RATE = 10;

// 定数は再代入できない
// TAX_RATE = 5; // エラーが発生！
`})}),e.jsxs(r,{type:"tip",title:"let と const の使い分け",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"const"}),": 値が変わらないもの（税率、サイト名など）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"let"}),": 値が変わる可能性があるもの（カウンター、ユーザー入力など）"]}),`
`]}),e.jsxs(s.p,{children:["基本的には",e.jsx(s.code,{children:"const"}),"を使い、再代入が必要な場合のみ",e.jsx(s.code,{children:"let"}),"を使うのがベストプラクティスです。"]})]}),e.jsxs(n,{summary:"[補足] 配列やオブジェクトでのconstの動作",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["配列やオブジェクトを",e.jsx(s.code,{children:"const"}),"で宣言した場合、",e.jsx(s.strong,{children:"参照"}),"は変更できませんが、",e.jsx(s.strong,{children:"中身"}),"は変更可能"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const fruits = ["りんご", "バナナ"];

// 中身の変更は可能
fruits.push("オレンジ");
console.log(fruits); // ["りんご", "バナナ", "オレンジ"]

// 参照の変更は不可能
// fruits = ["ぶどう"]; // エラー！
`})})]})]}),`
`,e.jsxs(n,{summary:"変数名のつけ方",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["変数名は",e.jsx(s.strong,{children:"英語"}),"で、",e.jsx(s.strong,{children:"内容が分かりやすい名前"}),"をつけよう！"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 良い例
const userName = "太郎";
const totalPrice = 1500;
const isVisible = true;

// 悪い例
const x = "太郎";     // 何の値か不明
const price = 1500;   // 総額なのか単価なのか不明
const flag = true;    // 何のフラグか不明
`})}),e.jsxs(r,{type:"tip",title:"JSの変数名はキャメルケースで書こう！",children:[e.jsxs(s.p,{children:["JavaScriptでは、複数単語の変数名を書くときに「キャメルケース」を使います。",e.jsx(s.br,{}),`
`,"（例：",e.jsx(s.code,{children:"userName"}),", ",e.jsx(s.code,{children:"totalPrice"}),", ",e.jsx(s.code,{children:"isLoggedIn"}),"）",e.jsx(s.br,{}),`
`,"慣例なので必須ではありませんが、多くの開発者が使っているので合わせておきましょう！"]}),e.jsx(l,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"名前"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"記述方法"}),e.jsx("th",{className:"p-3 text-center font-medium text-slate-800 border border-slate-200",children:"イメージ"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"主な言語"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"備考"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200",children:"キャメルケース"}),e.jsx("td",{className:"p-3 font-mono text-slate-700 border border-slate-200",children:"camelCase"}),e.jsx("td",{className:"p-3 text-center border border-slate-200",children:e.jsx("img",{src:"../../images/js/name-camel.jpeg",alt:"ラクダ",className:"w-16 h-12 object-cover rounded mx-auto"})}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Java, JavaScript"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"JSのクラス名はパスカルケース"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200",children:"パスカルケース"}),e.jsx("td",{className:"p-3 font-mono text-slate-700 border border-slate-200",children:"PascalCase"}),e.jsx("td",{className:"p-3 text-center border border-slate-200",children:e.jsx("div",{className:"w-16 h-12 bg-slate-200 rounded mx-auto flex items-center justify-center text-slate-500 text-xs",children:"-"})}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Pascal"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"別名: アッパーキャメルケース"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200",children:"スネークケース"}),e.jsx("td",{className:"p-3 font-mono text-slate-700 border border-slate-200",children:"snake_case"}),e.jsx("td",{className:"p-3 text-center border border-slate-200",children:e.jsx("img",{src:"../../images/js/name-snake.jpeg",alt:"蛇",className:"w-16 h-12 object-cover rounded mx-auto"})}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Python"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"Python（大蛇）だからスネークケース"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-medium text-slate-800 border border-slate-200",children:"ケバブケース"}),e.jsx("td",{className:"p-3 font-mono text-slate-700 border border-slate-200",children:"kebab-case"}),e.jsx("td",{className:"p-3 text-center border border-slate-200",children:e.jsx("img",{src:"../../images/js/name-kebab.jpeg",alt:"ケバブ",className:"w-16 h-12 object-cover rounded mx-auto"})}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"HTML, CSS"}),e.jsxs("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:["Lispケースと呼ばれることも",e.jsx("br",{}),"JSでは使えない"]})]})]})]})})})]})]}),`
`,e.jsx(s.h2,{children:"計算"}),`
`,e.jsxs(n,{summary:"数値の計算",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"数学と同じような記号を使って計算ができる"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ---------------------
// 数値の計算
// ---------------------
let a = 5;
let b = 3;

console.log(a + b); // 足し算: 8
console.log(a - b); // 引き算: 2
console.log(a * b); // 掛け算: 15
console.log(a / b); // 割り算: 1.6666666666666667
console.log(a % b); // 余り: 2
`})}),e.jsxs(r,{type:"tip",title:"余り（%）の使い道",children:[e.jsxs(s.p,{children:["余り（",e.jsx(s.code,{children:"%"}),"）は意外と便利な演算子！ 例えばこんな使い方をします"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["偶数・奇数の判定（",e.jsx(s.code,{children:"数値 % 2"})," が0なら偶数、1なら奇数）"]}),`
`,e.jsx(s.li,{children:"時間計算（24時間を超えたら0時に戻るなど）"}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"文字列の結合",children:[e.jsxs(s.p,{children:["文字と文字をくっつけることを「文字列の結合」と言います。JavaScriptでは ",e.jsx(s.code,{children:"+"})," を使って文字を結合できます。"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ---------------------
// 文字列の結合
// ---------------------
let sei = "田中";
let mei = "太郎";
console.log(sei + mei); // "田中太郎"

// スペースを入れたい場合
console.log(sei + " " + mei); // "田中 太郎"

// 挨拶文を作る
let aisatsu = "こんにちは、" + sei + mei + "さん！";
console.log(aisatsu); // "こんにちは、田中太郎さん！"
`})}),e.jsxs(n,{summary:"[補足] テンプレートリテラル（バッククォート）での文字列結合",children:[e.jsxs(s.p,{children:["バッククォート（",e.jsx(s.code,{children:"`"}),"）を使うと、より読みやすく文字列を結合できます："]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`let sei = "田中";
let mei = "太郎";
let age = 25;

// 従来の方法
let message1 = "こんにちは、" + sei + mei + "さん（" + age + "歳）です。";

// テンプレートリテラル
let message2 = \`こんにちは、\${sei}\${mei}さん（\${age}歳）です。\`;

console.log(message1); // "こんにちは、田中太郎さん（25歳）です。"
console.log(message2); // "こんにちは、田中太郎さん（25歳）です。"
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"${}"})," の中に変数や式を書くことで、文字列の中に値を埋め込むことができます。"]})]})]}),`
`,e.jsx(s.h2,{children:"制御構文 - 条件分岐"}),`
`,e.jsxs(n,{summary:"制御構文とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"プログラムの実行順序を制御する特別な構文のこと"}),`
`,e.jsx(s.li,{children:"条件によって処理を分岐させたり、同じ処理を繰り返すことが可能"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 p-6 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 text-blue-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h4",{className:"text-lg font-semibold text-slate-800",children:"条件分岐系"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-700",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"bg-white px-2 py-1 rounded text-blue-600 font-mono",children:"if"}),e.jsx("span",{children:"条件によって処理を分岐"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"bg-white px-2 py-1 rounded text-blue-600 font-mono",children:"switch"}),e.jsx("span",{children:"複数の条件を効率的に分岐"})]})]})]}),e.jsxs("div",{className:"bg-slate-50 p-6 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 text-green-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("h4",{className:"text-lg font-semibold text-slate-800",children:"繰り返し系"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-700",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"bg-white px-2 py-1 rounded text-green-600 font-mono",children:"for"}),e.jsx("span",{children:"指定回数の繰り返し"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"bg-white px-2 py-1 rounded text-green-600 font-mono",children:"while"}),e.jsx("span",{children:"条件を満たす間の繰り返し"})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"bg-white px-2 py-1 rounded text-green-600 font-mono",children:"do...while"}),e.jsx("span",{children:"最低1回は実行する繰り返し"})]})]})]})]})}),e.jsx(r,{type:"info",title:"まずは...",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"if"}),"文から学んでいきましょう！"]})})]}),`
`,e.jsxs(n,{summary:"条件分岐とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"プログラムに「もし〜なら」という判断をさせる"}),`
`]}),e.jsx(s.p,{children:"例: 年齢によって成人か未成年かを判断する場合"}),e.jsx(c,{children:`
flowchart TD
  A["開始"] --> B{"18歳以上？"}
  B -->|はい| C["「成人です」と表示"]
  B -->|いいえ| D["「未成年です」と表示"]
  C --> E["終了"]
  D --> E

  style B fill:#e2e8f0
  style C fill:#dcfce7
  style D fill:#fef2f2
`})]}),`
`,`
`,e.jsxs(n,{summary:"if文の基本文法",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`if (条件式) {
  // 処理1
} else if (条件式) {
  // 処理2
} else {
  // 処理3
}
`})}),e.jsxs(n,{summary:"[補足] 波括弧の後にはセミコロンが不要！",children:[e.jsxs(s.p,{children:["JavaScriptでは、if文の波括弧",e.jsx(s.code,{children:"{}"}),"の後にセミコロン",e.jsx(s.code,{children:";"}),"は",e.jsx(s.strong,{children:"つけません"}),"。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"なぜセミコロンが不要なのか？"})}),e.jsx(s.p,{children:"JavaScriptには「式（Expression）」と「文（Statement）」という2つの概念があります："}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"式（Expression）"}),": 値を生成するもの → セミコロンが必要"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"文（Statement）"}),": 処理のステップを表すもの → セミコロンは不要"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"覚え方のコツ"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["波括弧",e.jsx(s.code,{children:"{}"}),"で終わる構文（if文、for文、関数定義など）→ セミコロン不要"]}),`
`,e.jsx(s.li,{children:"それ以外（変数宣言、関数呼び出しなど）→ セミコロンが必要"}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"`if`文（条件が真の時だけ実行）",children:[e.jsx(r,{type:"note",title:"採点システムを作ってみよう！",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"採点システムを作成したい"}),"と想定してif文を書いてみましょう！",e.jsx(s.br,{}),`
`,"まずは",e.jsx(s.strong,{children:"80点以上だったら合格である"}),"、という条件で分岐させてみましょう。"]})}),e.jsx(c,{children:`
flowchart TD
  A["開始"] --> B{"80点以上？"}
  B -->|はい| C["「合格です！」と表示"]
  B -->|いいえ| D["何も実行せず"]
  C --> E["終了"]
  D --> E
  
  style B fill:#e2e8f0
  style C fill:#dcfce7
  style D fill:#fef2f2
`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const score = 85;

if (score >= 80) {
  console.log("合格です！");
}
// 条件が真（score が 80以上）の場合のみ「合格です！」が表示される
// 条件が偽の場合は何も表示されない
`})}),e.jsx(r,{type:"info",title:"80点未満の場合は...？",children:e.jsx(s.p,{children:"80点未満の場合は何も表示されないことを確認しましょう！"})}),e.jsx(r,{type:"tip",title:">= とは？",children:e.jsxs(s.p,{children:["数学記号で言うところの ",e.jsx(s.code,{children:"≧"})," です。 ",e.jsx(s.code,{children:"≧"})," は特殊文字のため、横並びにして ",e.jsx(s.code,{children:">="})," と書きます。"]})})]}),`
`,e.jsxs(n,{summary:"`if`-`else`文（条件によって2つの処理を分岐）",children:[e.jsx(r,{type:"note",title:"不合格の場合も表示してみよう！",children:e.jsxs(s.p,{children:["さっきは不合格の場合は何も表示されませんでした。そこで、",e.jsx(s.strong,{children:"不合格の場合も「不合格」と表示してみましょう！"})]})}),e.jsx(c,{children:`
flowchart TD
  A["開始"] --> B{"80点以上？"}
  B -->|はい| C["「合格です！」と表示"]
  B -->|いいえ| D["「不合格です」と表示"]
  C --> E["終了"]
  D --> E
  
  style B fill:#e2e8f0
  style C fill:#dcfce7
  style D fill:#fef2f2
`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const score = 85;

if (score >= 80) {
  console.log("合格です！");
} else {
  console.log("不合格です");
}
// score が 80以上なら「合格です！」
// そうでなければ「不合格です」が表示される
`})})]}),`
`,e.jsxs(n,{summary:"`if`-`else if`-`else`文（複数の条件を順番にチェック）",children:[e.jsx(r,{type:"note",title:"さらに細かく条件を分けてみよう！",children:e.jsxs(s.p,{children:["さらに条件を追加して、",e.jsx(s.strong,{children:"60点以上80点未満だったら「合格までもう少し！」"}),"、という条件も追加してみましょう！"]})}),e.jsx(c,{children:`
flowchart TD
  A["開始"] --> B{"80点以上？"}
  B -->|はい| C["「合格です！」と表示"]
  B -->|いいえ| D{"60点以上？"}
  D -->|はい| E["「合格までもう少し！」と表示"]
  D -->|いいえ| F["「不合格」と表示"]
  C --> G["終了"]
  E --> G
  F --> G

  style B fill:#e2e8f0
  style D fill:#e2e8f0
  style C fill:#dcfce7
  style E fill:#fef3cd
  style F fill:#fef2f2
`}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const score = 85;

if (score >= 80) {
  console.log("合格です！");
} else if (score >= 60) {
  console.log("合格までもう少し！");
} else {
  console.log("不合格です");
}
`})}),e.jsx(r,{type:"tip",title:"条件チェックの順番",children:e.jsxs(s.p,{children:["条件は",e.jsx(s.strong,{children:"上から順番に"}),"チェックされます。最初に真になった条件の処理が実行され、その後の条件はチェックされません。"]})})]}),`
`,e.jsxs(n,{summary:"if文の活用例",children:[e.jsx(s.p,{children:"例: ユーザーの年齢で表示を変える"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ユーザーの年齢で表示を変える
const userAge = 20;

if (userAge >= 20) {
  console.log("成人です");
  console.log("すべてのコンテンツが利用できます");
} else if (userAge >= 13) {
  console.log("ティーンエイジャーです");
  console.log("一部のコンテンツが制限されます");
} else {
  console.log("子供です");
  console.log("キッズ向けコンテンツのみ利用できます");
}
`})}),e.jsx(s.p,{children:"例: 気温による服装提案"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 気温による服装提案
const temperature = 15;

if (temperature >= 25) {
  console.log("暑いです");
  console.log("半袖がおすすめです");
} else if (temperature >= 15) {
  console.log("過ごしやすい気温です");
  console.log("長袖がおすすめです");
} else {
  console.log("寒いです");
  console.log("コートを着ましょう");
}
`})})]}),`
`,e.jsxs(n,{summary:"比較演算子",children:[e.jsx(s.p,{children:"条件分岐で使う比較の記号を覚えましょう。"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const score = 100;

// 等しい
score == 100;   // true
score != 100;   // false（等しくない） ≠

// 大小比較
score < 100;    // false
score <= 100;   // true（以下） ≦
score > 100;    // false
score >= 100;   // true（以上） ≧

// 厳密な比較
score === 100;  // true（型も含めて等しい）
score !== 100;  // false（型も含めて等しくない） ≠
`})}),e.jsxs(r,{type:"warning",title:"== と === の違い",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`100 == "100"   // true（値が同じ）
100 === "100"  // false（型が違う）
`})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"==="}),"は型も含めて比較するため、より安全です。基本的には",e.jsx(s.code,{children:"==="}),"を使いましょう。"]})]})]}),`
`,e.jsx(n,{summary:"複数条件の組み合わせ",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const age = 25;
const hasLicense = true;

// AND条件（両方満たす）
if (age >= 18 && hasLicense) {
  console.log("運転できます");
}

// OR条件（どちらか一方を満たす）
const day = "土曜日";
if (day === "土曜日" || day === "日曜日") {
  console.log("週末です");
}
`})})}),`
`,e.jsx(s.h2,{children:"Mathオブジェクト"}),`
`,e.jsxs(n,{summary:"数学的な計算を行う",children:[e.jsx(r,{type:"info",title:"Mathオブジェクトとは？",children:e.jsxs(s.p,{children:["JavaScriptには、便利な機能をまとめた",e.jsx(s.strong,{children:"組み込みオブジェクト"}),"が用意されています。",e.jsx(s.br,{}),`
`,"そのひとつが ",e.jsx(s.code,{children:"Math"})," で、数学的な計算に役立つ機能がまとまっています。",e.jsx(s.br,{}),`
`,e.jsx(s.strong,{children:"「数学用の便利ツール箱」"})," と考えるとイメージしやすいですね！"]})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const num = 4.7;

// 切り捨て
console.log(Math.floor(num));  // 4

// 切り上げ
console.log(Math.ceil(num));   // 5

// 四捨五入
console.log(Math.round(num));  // 5

// ランダムな数（0以上1未満）
console.log(Math.random());    // 0.123456...（毎回違う値）
`})})]}),`
`,e.jsxs(n,{summary:"[演習] 0〜4の整数を生成しよう",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"課題"}),": ",e.jsx(s.code,{children:"Math.random()"}),"と",e.jsx(s.code,{children:"Math.floor()"}),"を使って、0, 1, 2, 3, 4のいずれかの整数をランダムに生成して",e.jsx(s.code,{children:"console.log()"}),"で表示してください。"]}),e.jsxs(n,{summary:"解答例",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 0, 1, 2, 3, 4 のいずれかの整数を生成
const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);
`})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Math.random()"})," → 0以上1未満の小数（例: 0.567）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"* 5"})," → 0以上5未満の小数（例: 2.835）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Math.floor()"})," → 切り捨てて0〜4の整数（例: 2）"]}),`
`]})]}),e.jsxs(r,{type:"tip",title:"おみくじアプリを作ってみよう！",children:[e.jsx(s.p,{children:"この0〜4の数字を使って、おみくじアプリを作ってみましょう！"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// おみくじアプリ概要 ver.1(console.log版) ---------------------------
// - おみくじの結果がconsoleに表示される
// - おみくじの結果は大吉、中吉、小吉、末吉、凶のいずれか
// - おみくじの結果はランダムに表示される
// --------------------------------------------------------------
`})})]})]}),`
`,e.jsx(s.h2,{children:"DOM操作入門"}),`
`,e.jsxs(n,{summary:"DOMとは何か？",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Document Object Model の略語"}),`
`,e.jsx(s.li,{children:"HTMLの要素をJavaScriptから操作するための仕組み"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`// JavaScriptの世界ではHTMLがこのように見えている

document
└── html
    ├── head
    │   ├── title
    │   ├── meta
    │   └── script
    └── body
        ├── h1 (id="title")
        ├── p (class="text")
        ├── div (class="container")
        │   ├── button (id="btn1")
        │   └── span (class="message")
        └── footer
`})})]}),`
`,e.jsx(n,{summary:"よく使うDOM操作",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 要素を取得
const element = document.querySelector('.my-class');
const allElements = document.querySelectorAll('.item');

// 要素の中身を変更
element.textContent = "新しいテキスト";
element.innerHTML = "<strong>太字のテキスト</strong>";

// スタイルを変更
element.style.color = "red";
element.style.fontSize = "20px";

// クラスを操作
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');
`})})}),`
`,e.jsxs(n,{summary:"イベントを設定する",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ボタンをクリックしたときの処理
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  console.log('ボタンがクリックされました！');
});
`})}),e.jsx(r,{type:"warning",title:"注意",children:e.jsxs(s.p,{children:["DOM操作のコードは、HTMLの要素が読み込まれた後に実行する必要があります。",e.jsx(s.code,{children:"<script>"}),"タグを",e.jsx(s.code,{children:"</body>"}),"の直前に置くか、",e.jsx(s.code,{children:"DOMContentLoaded"}),"イベントを使いましょう。"]})})]}),`
`,e.jsxs(n,{summary:"[演習]検証ツールを使ってサイトをハックしてみよう！",children:[e.jsx(r,{type:"info",title:"検証ツールを使ってサイトをハックしてみよう！",children:e.jsx(s.p,{children:"検証ツールを使うと、今見ているページに対して自分で書いたJavaScriptを直接実行できちゃいます！"})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["検証ツールの「Console」タブを開く",e.jsx(s.br,{}),`
`,"デベロッパーツール内のConsoleタブをクリック"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["上記コードをコピー&ペースト",e.jsx(s.br,{}),`
`,"JavaScriptコードをコンソールに貼り付け"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Enterキーで実行！"}),`
`]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`
// ページのタイトルを変更
document.title = "タイトルを変更！";

// 背景色を変更
document.body.style.backgroundColor = "lightblue";

// クリックした要素が消える機能
document.body.addEventListener('click', function(e) {
  e.target.style.display = 'none';
});
`})}),e.jsx(r,{type:"info",title:"変な表示になったらリロード！",children:e.jsx(s.p,{children:"リロードすると上記の変更が元に戻ります！JavaScriptがブラウザ上で実行される様子を楽しんでみよう♪"})})]}),`
`,e.jsx(s.h2,{children:"jQuery入門"}),`
`,e.jsxs(n,{summary:"jQueryとは",children:[e.jsx(i,{url:"https://jquery.com/"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"DOM操作を簡単に書けるようにしたJavaScriptライブラリ"}),`
`,e.jsx(s.li,{children:"アニメーションやイベント処理も簡単に書くことができる"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"純粋なJavaScript"})]}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsxs(s.p,{children:[e.jsx("code",{className:"bg-red-100 px-1 rounded text-xs",children:"document.querySelector('.box').style.display = 'none';"}),e.jsx(s.br,{}),`
`,"長くて覚えにくい..."]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"jQuery"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("code",{className:"bg-green-100 px-1 rounded text-xs",children:"$('.box').hide();"}),e.jsx(s.br,{}),`
`,"短くて直感的！"]})})]})]})}),e.jsx(r,{type:"info",title:"jQueryって今でも使うの？",children:e.jsxs(s.p,{children:["jQueryは成熟期を迎えている ",e.jsx(s.strong,{children:"まだまだ現役"})," の技術！DOM操作の基本を理解するのに最適なツールです"]})})]}),`
`,e.jsxs(n,{summary:"jQueryの読み込み方法",children:[e.jsx(s.h4,{children:"1. CDN"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"インターネット経由でjQueryを読み込む方法"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>jQuery練習</title>
    <!-- jQueryをCDNで読み込み -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
</head>
<body>
    <h1>jQueryテスト</h1>
    <button id="myButton">クリックしてね</button>
    
    <script>
        // jQueryが使用可能
        $('#myButton').click(function() {
            alert('jQueryが動いています！');
        });
    <\/script>
</body>
</html>
`})}),e.jsx(s.h4,{children:"2. ダウンロードして読み込み"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"jQueryファイルをダウンロードして、プロジェクトフォルダに保存する方法"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"フォルダ構成例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-plaintext",children:`project/
├── index.html
└── js/
    └── jquery-3.7.1.min.js
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"index.html"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>jQuery練習</title>
    <!-- ローカルのjQueryファイルを読み込み -->
    <script src="./js/jquery-3.7.1.min.js"><\/script>
</head>
<body>
    <h1>jQueryテスト</h1>
    <button id="myButton">クリックしてね</button>
    
    <script>
        // jQueryが使用可能
        $('#myButton').click(function() {
            alert('jQueryが動いています！');
        });
    <\/script>
</body>
</html>
`})}),e.jsxs(r,{type:"tip",title:"CDNと読み込み方法の選択",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CDN"}),": 簡単で最新版を利用可能。インターネット接続が必要"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ダウンロード"}),": オフライン環境でも動作。ファイル管理が必要"]}),`
`]}),e.jsx(s.p,{children:"はじめはCDNがおすすめです！"})]})]}),`
`,e.jsxs(n,{summary:"パターン１：「何を、どうする」",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「何を（セレクタ）、どうする（メソッド）」で整理することがポイント"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4 max-w-md mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-4 w-full",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 w-2/5",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-blue-50 rounded border border-blue-200 flex items-center justify-center",children:e.jsx("code",{className:"text-blue-600 font-mono text-lg font-bold",children:"$()"})}),e.jsx("div",{className:"font-medium text-slate-800",children:"何を"}),e.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"セレクタ"}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-blue-600 font-mono text-sm",children:"$('#myId')"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 w-2/5",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-green-50 rounded border border-green-200 flex items-center justify-center",children:e.jsx("div",{className:"w-8 h-8 text-green-600",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"どうする"}),e.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"メソッド"}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-green-600 font-mono text-sm",children:".hide()"})]})]}),e.jsxs("div",{className:"text-center w-full",children:[e.jsx("div",{className:"bg-white p-4 rounded border border-slate-200 max-w-md mx-auto",children:e.jsx("code",{className:"text-lg font-mono text-slate-800",children:"$('#myId').hide();"})}),e.jsx("div",{className:"text-sm text-slate-600 mt-2",children:"ID「myId」の要素を隠す"})]})]})}),e.jsxs(n,{summary:"セレクターの詳細",children:[e.jsx(s.p,{children:"jQueryのセレクターは、CSSセレクターと同じ書き方"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"#id"})," → ID"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:".class"})," → クラス"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"tag"})," → タグ名"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[attribute]"})," → 属性"]}),`
`]})]}),e.jsxs(n,{summary:"メソッドチェーン",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"メソッドを連続して書くことも可能"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`$('.box')
  .fadeIn()
  .addClass('active')
  .text('完了！');
`})})]})]}),`
`,e.jsxs(n,{summary:"パターン２：「何を、いつ、どうする」",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"イベント処理は「何を（セレクタ）、いつ（イベント）、どうする（メソッド）」の3要素で構成される"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4 max-w-xl mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center flex-wrap gap-2 w-full",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1 min-w-20",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-blue-50 rounded border border-blue-200 flex items-center justify-center",children:e.jsx("code",{className:"text-blue-600 font-mono text-lg font-bold",children:"$()"})}),e.jsx("div",{className:"font-medium text-slate-800",children:"何を"}),e.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"セレクタ"}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-blue-600 font-mono text-sm",children:"$('button')"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1 min-w-20",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-orange-50 rounded border border-orange-200 flex items-center justify-center",children:e.jsx("div",{className:"w-8 h-8 text-orange-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"いつ"}),e.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"イベント"}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-orange-600 font-mono text-sm",children:"click"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1 min-w-20",children:[e.jsx("div",{className:"w-16 h-16 mx-auto mb-2 bg-green-50 rounded border border-green-200 flex items-center justify-center",children:e.jsx("div",{className:"w-8 h-8 text-green-600",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"どうする"}),e.jsx("div",{className:"text-sm text-slate-600 mb-2",children:"メソッド"}),e.jsx("code",{className:"bg-white px-2 py-1 rounded text-green-600 font-mono text-sm",children:"alert()"})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"bg-white p-4 rounded border border-slate-200 flex justify-center",children:e.jsxs("code",{className:"text-lg font-mono text-slate-800 text-left mx-auto inline-block",children:["$('button').click(function() {",e.jsx("br",{}),"　　alert('押された！')",e.jsx("br",{}),"});"]})}),e.jsx("div",{className:"text-sm text-slate-600 mt-2 text-center",children:"ボタンがクリックされたら「押された！」とアラート表示"})]})]})})]}),`
`,e.jsxs(n,{summary:"jQueryの使い方例",children:[e.jsx(s.h4,{children:"要素の取得と操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// IDで要素を取得
$('#myId')

// クラスで要素を取得
$('.myClass')

// 要素の中身を変更（HTMLタグ付き）
$('#title').html('<strong>新しいタイトル</strong>');
$('#title').html('<img src="./img/title.png" alt="タイトル">');

// 要素の中身を変更（テキストのみ）
$('#message').text('こんにちは');
`})}),e.jsx(s.h4,{children:"アニメーション効果"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// フェードイン・フェードアウト
$('.box').fadeIn();
$('.box').fadeOut();

// スライド
$('.panel').slideDown();
$('.panel').slideUp();

// 表示・非表示
$('.element').show();
$('.element').hide();
`})}),e.jsx(s.h4,{children:"スタイルの変更"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// CSSスタイルを設定
$('.box').css('background-color', 'red');
$('.box').css('width', '200px');

// 複数のスタイルを一度に設定
$('.box').css({
  'background-color': 'blue',
  'width': '300px',
  'height': '100px'
});

// スタイルの値を取得
const color = $('.box').css('background-color');
`})}),e.jsx(s.h4,{children:"属性とフォーム操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 属性を設定・取得
$('img').attr('src', 'new-image.jpg');  // 画像を差し替え
$('a').attr('href', 'https://example.com');
const imageSrc = $('img').attr('src');  // 属性値を取得

// フォームの値を設定・取得
$('#name').val('田中太郎');  // input要素に値を設定
const userName = $('#name').val();  // input要素の値を取得

// チェックボックスの操作
$('#checkbox').prop('checked', true);  // チェックを入れる
const isChecked = $('#checkbox').prop('checked');  // チェック状態を取得
`})}),e.jsx(s.h4,{children:"イベント処理"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// クリックイベント
$('#button').on('click', function() {
  console.log('ボタンがクリックされました');
  $('.result').text('クリックされました！');
});

// マウスオーバー
$('.card').on('mouseenter', function() {
  $(this).addClass('hover');
});

$('.card').on('mouseleave', function() {
  $(this).removeClass('hover');
});

// フォーム送信時の処理
$('#form').on('submit', function(e) {
  e.preventDefault();  // デフォルトの送信を停止
  const inputValue = $('#input').val();
  alert('入力値: ' + inputValue);
});
`})})]}),`
`,`
`,e.jsxs(n,{summary:"よく使うメソッド",children:[e.jsx(s.h4,{children:"テキスト・HTML操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// テキストを取得・設定
$('#title').text();           // テキストを取得
$('#title').text('新しいタイトル'); // テキストを設定

// HTMLを取得・設定
$('#content').html();         // HTML内容を取得
$('#content').html('<p>新しい内容</p>'); // HTML内容を設定

// 内容を追加
$('#content').append('<p>内容を追加</p>'); // 内容を追加
`})}),e.jsx(s.h4,{children:"属性操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 属性を取得・設定
$('img').attr('src');         // src属性を取得
$('img').attr('src', 'new.jpg'); // src属性を設定

// 複数の属性を一度に設定
$('img').attr({
    'src': 'image.jpg',
    'alt': '画像の説明'
});
`})}),e.jsx(s.h4,{children:"CSS・スタイル操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// CSSプロパティを取得・設定
$('.box').css('color');       // 色を取得
$('.box').css('color', 'red'); // 色を設定

// 複数のCSSプロパティを一度に設定
$('.box').css({
    'color': 'blue',
    'font-size': '20px',
    'background-color': 'yellow'
});
`})}),e.jsx(s.h4,{children:"クラス操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// クラスを追加・削除・切り替え
$('.item').addClass('active');    // クラスを追加
$('.item').removeClass('active'); // クラスを削除
$('.item').toggleClass('active'); // クラスを切り替え
$('.item').hasClass('active');    // クラスがあるかチェック
`})}),e.jsx(s.h4,{children:"表示・非表示"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 要素の表示・非表示
$('.popup').show();          // 表示
$('.popup').hide();          // 非表示
$('.popup').toggle();        // 表示・非表示を切り替え

// アニメーション付きで表示・非表示
$('.popup').fadeIn();        // フェードイン
$('.popup').fadeOut();       // フェードアウト
$('.popup').slideDown();     // スライドダウン
$('.popup').slideUp();       // スライドアップ
`})}),e.jsx(s.h4,{children:"イベント処理"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// クリックイベント
$('#button').click(function() {
    alert('ボタンがクリックされました！');
});

// その他のイベント
$('#input').focus(function() {
    console.log('入力欄にフォーカスしました');
});

$('#input').blur(function() {
    console.log('入力欄からフォーカスが外れました');
});
`})}),e.jsx(s.h4,{children:"フォーム操作"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 入力値を取得・設定
$('#name').val();            // 入力値を取得
$('#name').val('山田太郎');   // 入力値を設定

// チェックボックス・ラジオボタン
$('#checkbox').prop('checked', true);  // チェックを付ける
$('#checkbox').prop('checked', false); // チェックを外す
`})}),e.jsx(r,{type:"tip",title:"メソッドはまだまだたくさん！",children:e.jsx(s.p,{children:"ここで紹介したのは、jQueryメソッドのほんの一部です。実際にはもっとたくさんの便利なメソッドが用意されています。どんどん使って試してみましょう！公式ドキュメントや検索で新しいメソッドを発見するのも楽しいですよ♪"})})]}),`
`,e.jsx(s.h2,{children:"エラー対応"}),`
`,e.jsxs(n,{summary:"エラーの声を聞こう！トラブルシューティング",children:[e.jsx(r,{type:"tip",title:"プログラミングのコツ",children:e.jsxs(s.p,{children:["プログラミングでエラーは日常茶飯事。大切なのは",e.jsx(s.strong,{children:"エラーが何を教えてくれているか"}),"を理解することです！"]})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"1. VSCodeの警告をチェック"}),e.jsx("div",{className:"text-sm text-slate-600 mt-1",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"text-red-600 font-medium",children:"赤い波線"}),`: 文法エラーやタイポ /
`,e.jsx("span",{className:"text-yellow-600 font-medium",children:"黄色い波線"}),`: 改善提案 /
`,e.jsx("span",{className:"text-blue-600 font-medium",children:"電球マーク"}),": 修正案"]})})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"2. ファイルを保存"}),e.jsx("div",{className:"text-sm text-slate-600 mt-1",children:e.jsxs(s.p,{children:[e.jsx("kbd",{className:"px-2 py-1 bg-slate-200 rounded text-xs",children:"Ctrl + S"})," でファイルを保存"]})})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"3. ブラウザのコンソールを確認"}),e.jsx("div",{className:"text-sm text-slate-600 mt-1",children:e.jsxs(s.p,{children:[e.jsx("kbd",{className:"px-2 py-1 bg-slate-200 rounded text-xs",children:"F12"}),` でデベロッパーツールを開く →
`,e.jsx("strong",{children:"Console"}),"タブでエラーの",e.jsx("strong",{children:"行番号"}),"と",e.jsx("strong",{children:"原因"}),"を確認"]})})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"4. 動作をチェック"}),e.jsx("div",{className:"text-sm text-slate-600 mt-1",children:e.jsx(s.p,{children:"期待した通りに動いていない場合は、コードのロジックを見直そう"})})]})]})]})})]}),`
`,e.jsxs(n,{summary:"よくあるエラー",children:[e.jsx(r,{type:"error",title:"Uncaught SyntaxError",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"原因"}),`: 文法エラー（括弧の閉じ忘れ、セミコロン忘れなど）
`,e.jsx(s.strong,{children:"対処"}),": エラーが示す行番号の前後を確認"]})}),e.jsx(r,{type:"error",title:"Uncaught ReferenceError",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"原因"}),`: 宣言していない変数を使用
`,e.jsx(s.strong,{children:"対処"}),": 変数名のスペルミス、宣言忘れを確認"]})}),e.jsx(r,{type:"error",title:"Uncaught TypeError",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"原因"}),`: 型が合わない操作（nullのプロパティにアクセスなど）
`,e.jsx(s.strong,{children:"対処"}),": 変数の中身をconsole.logで確認"]})})]})]})}function K(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx($,{...d})}):$(d)}function x(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const q=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));function E(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||o("Callout"),n||o("Details"),l||o("Infographic"),i||o("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#02 JavaScript - 配列・for文・localStorage"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["JavaScriptの文法を理解する",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"テンプレートリテラル"}),`
`,e.jsx(s.li,{children:"配列の使い方"}),`
`,e.jsx(s.li,{children:"for文（繰り返し処理）"}),`
`,e.jsx(s.li,{children:"localStorage（データ保存）"}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"メモ帳アプリを作成する"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsx(s.p,{children:"zipファイルをダウンロード後に展開し、VSCodeで開いてください！"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/js02.zip",children:"js02.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"テンプレートリテラル"}),`
`,e.jsxs(n,{summary:"テンプレートリテラルとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"文字列に変数を埋め込む便利な方法"}),`
`,e.jsx(s.li,{children:"ES6から追加された機能で、従来の文字列結合よりもスッキリとコードが書ける"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"従来の書き方"})]}),e.jsx("div",{className:"text-sm text-red-700 bg-red-100 p-3 rounded font-mono",children:"console.log('私の名前は' + name + 'です');"}),e.jsx("div",{className:"text-sm text-red-600 mt-2",children:"長くて読みにくい..."})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"テンプレートリテラル"})]}),e.jsx("div",{className:"text-sm text-green-700 bg-green-100 p-3 rounded font-mono",children:"console.log(`私の名前は${name}です`);"}),e.jsx("div",{className:"text-sm text-green-600 mt-2",children:"スッキリと読みやすい！"})]})]})})]}),`
`,e.jsxs(n,{summary:"基本的な使い方",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const name = 'ラッコ';
const age = 5;

// 従来の文字列結合
console.log('私の名前は' + name + 'で、年齢は' + age + '歳です');

// テンプレートリテラル
console.log(\`私の名前は\${name}で、年齢は\${age}歳です\`);
`})}),e.jsx(r,{type:"tip",title:"バッククォート（`）の入力方法",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"日本語配列キーボード"}),": ",e.jsx(s.code,{children:"Shift"})," + ",e.jsx(s.code,{children:"@"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"US配列キーボード"}),": ",e.jsx(s.code,{children:"alt(option)"})," + ",e.jsx(s.code,{children:"~"})]}),`
`]})})]}),`
`,e.jsx(s.h2,{children:"配列"}),`
`,e.jsxs(n,{summary:"配列とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"配列は複数の値を順番に格納できるデータ構造"}),`
`,e.jsx(s.li,{children:"一つの変数で多くのデータを管理できる"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"従来の方法で曜日を管理する場合："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 変数だけで曜日を作る場合（非効率）
let sunday = "日";
let monday = "月";
let tuesday = "火";
let wednesday = "水";
let thursday = "木";
let friday = "金";
let saturday = "土";
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"配列を使った効率的な方法："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// スッキリ！
let weekdays = ["日", "月", "火", "水", "木", "金", "土"];
`})}),e.jsx(l,{children:e.jsxs("div",{className:"text-center max-w-xl mx-auto",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/array.png",alt:"配列の概念図：引き出し付きの箱にデータを入れるイメージ",className:"w-full rounded border border-slate-200"})}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsx(s.p,{children:"各値には0から始まる番号（インデックス）が自動的に割り当てられる"})})]})})]}),`
`,e.jsxs(n,{summary:"配列の基本文法",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 配列の宣言
const fruits = ["りんご", "バナナ", "オレンジ"];

// 配列の中身を取り出す（インデックスは0から開始）
console.log(fruits[0]); // "りんご"
console.log(fruits[1]); // "バナナ"
console.log(fruits[2]); // "オレンジ"

// 配列の長さを取得
console.log(fruits.length); // 3

// 混在したデータ型も格納可能
const mixedArray = ["文字列", 123, true, null];
`})}),e.jsxs(r,{type:"warning",title:"インデックスは0から始まる",children:[e.jsxs(s.p,{children:["プログラミングでは配列のインデックス（番号）は",e.jsx(s.strong,{children:"0から始まります"}),"。これはメモリアドレスのオフセットを表しているためです。"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const colors = ["赤", "青", "緑"];
// インデックス:   0     1     2
console.log(colors[0]); // "赤"
console.log(colors[2]); // "緑"
console.log(colors[3]); // undefined（存在しない）
`})})]})]}),`
`,e.jsxs(n,{summary:"[演習] おみくじアプリを配列で作ってみよう",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// おみくじの結果を配列で管理
const omikuji = ["大吉", "中吉", "小吉", "末吉", "凶"];

// ランダムなインデックスを生成（0〜4）
const randomIndex = Math.floor(Math.random() * omikuji.length);

// 結果を表示
console.log(\`今日の運勢は\${omikuji[randomIndex]}です！\`);
`})}),e.jsx(r,{type:"tip",title:"配列の長さを使った動的な処理",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"omikuji.length"}),"を使うことで、配列の要素数が変わっても自動的に対応できます。これはプログラミングの重要なテクニックですね！"]})})]}),`
`,e.jsxs(n,{summary:"配列操作メソッド",children:[e.jsx(s.p,{children:"配列にはデータを追加・削除するための便利なメソッドが用意されています。"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const fruits = ["りんご", "バナナ"];

// 末尾に要素を追加
fruits.push("オレンジ");
console.log(fruits); // ["りんご", "バナナ", "オレンジ"]

// 先頭に要素を追加
fruits.unshift("いちご");
console.log(fruits); // ["いちご", "りんご", "バナナ", "オレンジ"]

// 末尾の要素を削除
const lastFruit = fruits.pop();
console.log(lastFruit); // "オレンジ"
console.log(fruits); // ["いちご", "りんご", "バナナ"]

// 先頭の要素を削除
const firstFruit = fruits.shift();
console.log(firstFruit); // "いちご"
console.log(fruits); // ["りんご", "バナナ"]
`})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"push() / unshift()"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素を配列に追加する（末尾/先頭）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 12H4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"pop() / shift()"}),e.jsx("div",{className:"text-sm text-slate-600",children:"要素を配列から削除し、その値を返す（末尾/先頭）"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"その他の代表的な配列操作メソッド",children:[e.jsx(s.h4,{children:"要素の検索・確認"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const numbers = [1, 2, 3, 4, 5];
const fruits = ["りんご", "バナナ", "オレンジ"];

// indexOf() - 要素のインデックスを取得（見つからない場合は-1）
console.log(fruits.indexOf("バナナ")); // 1
console.log(fruits.indexOf("ぶどう")); // -1

// includes() - 要素が含まれているかチェック
console.log(fruits.includes("りんご")); // true
console.log(fruits.includes("ぶどう")); // false

// find() - 条件に合う最初の要素を取得
const found = numbers.find(num => num > 3);
console.log(found); // 4
`})}),e.jsx(s.h4,{children:"配列の変形・フィルタリング"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const scores = [85, 92, 78, 96, 88];

// map() - 各要素を変換した新しい配列を作成
const doubled = scores.map(score => score * 2);
console.log(doubled); // [170, 184, 156, 192, 176]

// filter() - 条件に合う要素だけの新しい配列を作成
const highScores = scores.filter(score => score >= 90);
console.log(highScores); // [92, 96]

// sort() - 配列をソート（元の配列を変更）
const sortedScores = [...scores].sort((a, b) => b - a); // 降順
console.log(sortedScores); // [96, 92, 88, 85, 78]
`})}),e.jsx(s.h4,{children:"配列の結合・分割"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat() - 配列を結合した新しい配列を作成
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// slice() - 配列の一部を切り出した新しい配列を作成
const sliced = combined.slice(1, 4);
console.log(sliced); // [2, 3, 4]

// join() - 配列の要素を文字列として結合
const joined = arr1.join("-");
console.log(joined); // "1-2-3"
`})}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"検索・確認系"})]}),e.jsxs("div",{className:"text-sm text-blue-700",children:[e.jsx("div",{children:"• indexOf() - インデックス取得"}),e.jsx("div",{children:"• includes() - 存在確認"}),e.jsx("div",{children:"• find() - 条件検索"})]})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"変形・加工系"})]}),e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsx("div",{children:"• map() - 要素変換"}),e.jsx("div",{children:"• filter() - 条件フィルタ"}),e.jsx("div",{children:"• sort() - ソート"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-purple-800",children:"結合・分割系"})]}),e.jsxs("div",{className:"text-sm text-purple-700",children:[e.jsx("div",{children:"• concat() - 配列結合"}),e.jsx("div",{children:"• slice() - 部分切り出し"}),e.jsx("div",{children:"• join() - 文字列結合"})]})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"追加・削除系"})]}),e.jsxs("div",{className:"text-sm text-orange-700",children:[e.jsx("div",{children:"• push() / pop() - 末尾操作"}),e.jsx("div",{children:"• unshift() / shift() - 先頭操作"})]})]})]})})}),e.jsx(r,{type:"tip",title:"配列メソッドは実際に使いながら覚えよう！",children:e.jsxs(s.p,{children:["ここで紹介したのは配列操作の一部です。jQueryのメソッドと同じように、",e.jsx(s.strong,{children:"実際にコードを書きながら覚えていく"}),"のが一番効果的！  まずは",e.jsx(s.code,{children:"push()"}),"、",e.jsx(s.code,{children:"indexOf()"}),"、",e.jsx(s.code,{children:"includes()"}),"あたりから使ってみて、慣れてきたら",e.jsx(s.code,{children:"map()"}),"や",e.jsx(s.code,{children:"filter()"}),"にも挑戦してみましょう。"]})})]}),`
`,e.jsxs(n,{summary:"[補足] なぜconstで宣言した配列にpush()できるのか？",children:[e.jsxs(s.p,{children:[e.jsx(s.code,{children:"const"}),"の定義は ",e.jsx(s.strong,{children:"「再代入を禁止する」"})," ことです。配列の中身を変更することは再代入ではないため、",e.jsx(s.code,{children:"push()"}),"や",e.jsx(s.code,{children:"pop()"}),"などの操作が可能です。"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const arr = [1, 2, 3];

// ✅ 中身の変更は可能
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// ❌ 再代入は禁止
// arr = [4, 5, 6]; // TypeError: Assignment to constant variable.
`})}),e.jsx(r,{type:"info",title:"constの本当の意味",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"const"}),"は「値を変更できない」ではなく「参照を変更できない」という意味！配列やオブジェクトの場合、参照先（メモリ上のアドレス）は変わらないため、中身の変更は許可されているのです"]})})]}),`
`,e.jsx(s.h2,{children:"for文（繰り返し処理）"}),`
`,e.jsxs(n,{summary:"for文とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"指定した回数だけ処理を繰り返すための制御構文"}),`
`,e.jsx(s.li,{children:"同じ処理を何度も実行したい場合に使用"}),`
`]}),e.jsx(s.p,{children:"例: 5回繰り返し処理を行う場合"}),e.jsx(i,{children:`
flowchart TD
  A["開始"] --> B["初期値設定<br/>i = 0"]
  B --> C{"条件チェック<br/>i < 5"}
  C -->|真| D["処理実行<br/>console.log(i)"]
  D --> E["増減処理<br/>i++"]
  E --> C
  C -->|偽| F["終了"]
  
  style A fill:#e2e8f0
  style F fill:#e2e8f0
  style C fill:#fef3c7
  style D fill:#dcfce7
`})]}),`
`,e.jsxs(n,{summary:"基本的な文法",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// for文の基本構文
for (初期値; 条件; 増減処理) {
  // 繰り返し実行される処理
}

// 具体例：0から4まで表示
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4 が順番に表示される
}
`})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"初期値（let i = 0）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ループ開始時に一度だけ実行される"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"条件（i < 5）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ループを続けるかどうかを判定"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"増減処理（i++）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"各ループの最後に実行される"})]})]})]})}),e.jsxs(r,{type:"info",title:"i++の意味",children:[e.jsxs(s.p,{children:[e.jsx(s.code,{children:"i++"}),"は",e.jsx(s.code,{children:"i = i + 1"}),"と同じ。",e.jsx(s.br,{}),`
`,"以下の3つの書き方は同じ意味です！"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`i = i + 1;
i += 1;
i++;
`})})]}),e.jsxs(l,{children:[e.jsx("p",{className:"codepen","data-height":"300","data-default-tab":"html,result","data-slug-hash":"jEbdjjB","data-pen-title":"for文の理解","data-user":"cha1ra",style:{height:"300px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid",margin:"1em 0",padding:"1em"},children:e.jsxs("span",{children:["See the Pen ",e.jsx("a",{href:"https://codepen.io/cha1ra/pen/jEbdjjB",children:`
for文の理解`})," by cha1ra (",e.jsx("a",{href:"https://codepen.io/cha1ra",children:"@cha1ra"}),`)
on `,e.jsx("a",{href:"https://codepen.io",children:"CodePen"}),"."]})}),e.jsx("script",{async:!0,src:"https://public.codepenassets.com/embed/index.js"})]})]}),`
`,e.jsxs(n,{summary:"配列とfor文の組み合わせ",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"for文は配列の全要素を処理する際によく使用される"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const fruits = ["りんご", "バナナ", "オレンジ", "ぶどう"];

// 配列の全要素を表示
for (let i = 0; i < fruits.length; i++) {
  console.log(\`\${i}番目: \${fruits[i]}\`);
}
// 出力:
// 0番目: りんご
// 1番目: バナナ
// 2番目: オレンジ
// 3番目: ぶどう
`})}),e.jsx(r,{type:"tip",title:"配列の長さ（length）を活用",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"fruits.length"}),"を使うことで、配列の要素数が変わっても自動的に対応できますね！"]})})]}),`
`,e.jsxs(n,{summary:"モダンな配列処理：forEach",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["実際の開発では、従来のfor文よりも",e.jsx(s.code,{children:"forEach"}),"メソッドなどが利用される"]}),`
`,e.jsx(s.li,{children:"より直感的で読みやすいコードになる"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const fruits = ["りんご", "バナナ", "オレンジ"];

// 従来のfor文
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach（推奨）
fruits.forEach(function(fruit, index) {
  console.log(\`\${index}: \${fruit}\`);
});

// アロー関数を使ったより短い書き方
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});
`})})]}),`
`,e.jsxs(n,{summary:"[演習] 食べ物リストをfor文で表示してみよう！",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"HTML構造："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<ul id="food-options"></ul>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JavaScript実装（jQuery使用）"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 食べ物の選択肢データ
const foods = [
    'ラーメン',
    '寿司',
    'カレー',
    'ピザ',
    'ハンバーガー',
];

// for文でラジオボタンのHTMLを生成
let optionsHTML = '';
for (let i = 0; i < foods.length; i++) {
    optionsHTML += \`<input type="radio" name="food" value="\${foods[i]}">\${foods[i]}<br>\`;
}

// jQueryでHTMLを挿入
$('#food-options').html(optionsHTML);
`})}),e.jsx(r,{type:"info",title:"配列とfor文の基本パターン",children:e.jsxs(s.p,{children:["配列の要素数だけ繰り返し処理を行うのは、プログラミングの基本パターン！",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"i < todos.length"}),"で配列の長さまで繰り返し、インデックス",e.jsx(s.code,{children:"i"}),"は0から始まることがポイントです"]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"パターン2: forEachメソッドを使用"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`foods.forEach((food) => {
    optionsHTML += \`<input type="radio" name="food" value="\${food}">\${food}<br>\`;
});
$('#food-options').html(optionsHTML);
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"パターン3: appendメソッドを使用"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`foods.forEach((food) => {
    $('#food-options').append(\`<input type="radio" name="food" value="\${food}">\${food}<br>\`);
});
`})})]}),`
`,e.jsx(s.h2,{children:"localStorage"}),`
`,e.jsxs(n,{summary:"localStorageとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Webブラウザに",e.jsx(s.strong,{children:"データを永続的に保存"}),"できる仕組み"]}),`
`,e.jsx(s.li,{children:"ページを閉じたり、ブラウザを再起動してもデータが残り続ける"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4 max-w-xl mx-auto",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"データ保存"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["ユーザー設定",e.jsx("br",{}),"入力内容"]})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"永続保存"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["ページ更新後も",e.jsx("br",{}),"データが残る"]})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200 flex-1",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ブラウザ保存"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["サーバー不要で",e.jsx("br",{}),"ローカル管理"]})]})]})})]}),`
`,e.jsx(n,{summary:"localStorageが使われる場面",children:e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsx("div",{className:"font-medium text-blue-800",children:"ユーザー設定"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsx(s.p,{children:"テーマ（ダーク/ライト）、言語設定、フォントサイズなどの個人設定を保存"})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0H17M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"ショッピングカート"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsx(s.p,{children:"ECサイトで商品をカートに追加した状態を保持。ページを離れても商品が残る"})})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"フォーム下書き"})]}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsx(s.p,{children:"長いフォームの入力途中でページを離れても、入力内容が自動保存される"})})]}),e.jsxs("div",{className:"p-4 bg-purple-50 rounded border border-purple-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-purple-800",children:"閲覧履歴"})]}),e.jsx("div",{className:"text-sm text-purple-700",children:e.jsx(s.p,{children:"最近見た記事や商品の履歴を保存し、「最近見たアイテム」として表示"})})]})]})})}),`
`,e.jsx(n,{summary:"localStorageの特徴",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"永続化"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ブラウザを閉じてもデータが残る"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ドメイン単位"}),e.jsx("div",{className:"text-sm text-slate-600",children:"サイトごとに独立したストレージ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"容量制限"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ブラウザにより2M〜10M程度"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"キー・バリュー形式"}),e.jsx("div",{className:"text-sm text-slate-600",children:"文字列のペアでデータを保存"})]})]})]})})}),`
`,e.jsxs(n,{summary:"基本的な使い方",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// データの保存
localStorage.setItem('userName', '田中太郎');
localStorage.setItem('userAge', '25');

// データの取得
const name = localStorage.getItem('userName');
const age = localStorage.getItem('userAge');
console.log(name); // "田中太郎"
console.log(age);  // "25"

// データの削除
localStorage.removeItem('userName');

// 全データの削除
localStorage.clear();

// データの個数を取得
console.log(localStorage.length);

// インデックスでキーを取得
const firstKey = localStorage.key(0);
`})}),e.jsxs(r,{type:"warning",title:"文字列での保存",children:[e.jsxs(s.p,{children:["localStorageはすべてのデータを",e.jsx(s.strong,{children:"文字列として保存"}),"します。数値や真偽値も文字列として扱われるため、必要に応じて型変換が必要です！"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`localStorage.setItem('count', 123);
const count = localStorage.getItem('count');
console.log(typeof count); // "string"
console.log(count + 1);    // "1231" (文字列結合)

// 数値として使用する場合は変換が必要
const countNumber = Number(count);
console.log(countNumber + 1); // 124
`})})]})]}),`
`,e.jsxs(n,{summary:"[補足] localStorageの確認方法",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"開発者ツールでlocalStorageの中身を確認"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"開発者ツールを開く"}),e.jsx("div",{className:"text-sm text-slate-600",children:"F12キーまたは右クリック → 検証"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Applicationタブを選択"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Chrome/Edgeの場合（Firefoxは「ストレージ」タブ）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Local Storageを展開"}),e.jsx("div",{className:"text-sm text-slate-600",children:"現在のドメインのストレージ内容が表示される"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"[補足] JSONを使った複雑なデータの保存",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"オブジェクトや配列をlocalStorageに保存する場合は、JSON形式に変換して保存する"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// オブジェクトの保存
const user = {
  name: '田中太郎',
  age: 25,
  hobbies: ['読書', '映画鑑賞', 'プログラミング']
};

// JSON形式で保存
localStorage.setItem('user', JSON.stringify(user));

// 取得時にオブジェクトに戻す
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // "田中太郎"
console.log(savedUser.hobbies); // ['読書', '映画鑑賞', 'プログラミング']
`})}),e.jsxs(r,{type:"tip",title:"JSONの活用",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"JSON.stringify()"}),": オブジェクト → JSON文字列"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"JSON.parse()"}),": JSON文字列 → オブジェクト"]}),`
`]}),e.jsx(s.p,{children:"この組み合わせでほとんどのデータ構造をlocalStorageに保存できます！"})]})]}),`
`,e.jsx(s.h2,{children:"メモ帳アプリ作成"}),`
`,e.jsxs(n,{summary:"アプリの仕様と完成イメージ",children:[e.jsx(l,{children:e.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/mymemopad.png",alt:"メモ帳アプリの完成イメージ",className:"w-full rounded border border-slate-200"})}),e.jsx("div",{className:"text-sm text-slate-600",children:e.jsx(s.p,{children:"メモ帳アプリの完成イメージ"})})]})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"メモの保存"}),e.jsx("div",{className:"text-sm text-slate-600",children:"キーと内容を入力してlocalStorageに保存"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"メモの一覧表示"}),e.jsx("div",{className:"text-sm text-slate-600",children:"保存されたメモをテーブル形式で表示"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"全メモの削除"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ボタン一つで全てのメモを削除"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-purple-50 rounded border border-purple-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データの永続化"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ページを閉じても内容が保持される"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"[補足] `<table>`タグの使い方",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["HTMLの",e.jsx(s.code,{children:"<table>"}),"タグは、表形式のデータを表示するために使用する"]}),`
`]}),e.jsx(s.h4,{children:"基本的な構造"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<table>
    <thead>  <!-- テーブルのヘッダー部分 -->
        <tr>     <!-- 行（table row） -->
            <th>タイトル</th>  <!-- ヘッダーセル（table header） -->
            <th>メモ</th>
        </tr>
    </thead>
    <tbody>  <!-- テーブルの本体部分 -->
        <tr>
            <td>タイトル1</td>
            <td>メモ1</td>
        </tr>
        <tr>
            <td>タイトル2</td>
            <td>メモ2</td>
        </tr>
    </tbody>
</table>
`})}),e.jsx(s.h4,{children:"各要素の役割"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M3 14h18M3 6h18M3 18h18"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<table>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テーブル全体を囲む親要素"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<thead>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テーブルのヘッダー部分（列の見出し）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<tbody>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テーブルの本体部分（実際のデータ）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<tr>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テーブルの行（table row）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"<th> / <td>"}),e.jsx("div",{className:"text-sm text-slate-600",children:"セル（th=ヘッダーセル、td=データセル）"})]})]})]})})]}),`
`,e.jsx(n,{summary:"保存機能の実装",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`//1.Save クリックイベント
$('#save').on('click', function () {
    // #key, #memo から入力内容を取得
    const key = $('#key').val();
    const value = $('#memo').val();
    // 入力内容をlocalStorageに保存
    localStorage.setItem(key, value);
    // 一覧に追加するHTMLを生成
    const html = \`<tr><th>\${key}</th><td>\${value}</td></tr>\`;
    $('#list').append(html);
});
`})})}),`
`,e.jsxs(n,{summary:"全削除機能の実装",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`//2.clear クリックイベント
$('#clear').on('click', function () {
    // 全データを削除
    localStorage.clear();
    // 一覧を空にする
    $('#list').empty();
});
`})}),e.jsx(r,{type:"info",title:"jQueryでのDOM操作",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"$('#list').empty()"}),"はjQueryで要素の中身を空にするメソッドです！"]})})]}),`
`,e.jsxs(n,{summary:"ページ読み込み時の復元機能",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`//3.ページ読み込み：保存データ取得表示
// localStorageの全データを取得
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = \`<tr><th>\${key}</th><td>\${value}</td></tr>\`;
    $('#list').append(html);
}
`})}),e.jsx(r,{type:"success",title:"ページ読み込み時の自動復元",children:e.jsxs(s.p,{children:["jQueryを使わず、ページ読み込み時に直接実行されるコードです！",e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"for"}),"文でlocalStorageの全データを取得し、",e.jsx(s.code,{children:"$('#list').append(html)"}),"でテーブルに追加します"]})})]}),`
`,e.jsx(n,{summary:"完成形のJavaScriptコード",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`//1.Save クリックイベント
$('#save').on('click', function () {
    // #key, #memo から入力内容を取得
    const key = $('#key').val();
    const value = $('#memo').val();
    // 入力内容をlocalStorageに保存
    localStorage.setItem(key, value);
    // 一覧に追加するHTMLを生成
    const html = \`<tr><th>\${key}</th><td>\${value}</td></tr>\`;
    $('#list').append(html);
});

//2.clear クリックイベント
$('#clear').on('click', function () {
    // 全データを削除
    localStorage.clear();
    // 一覧を空にする
    $('#list').empty();
});

//3.ページ読み込み：保存データ取得表示
// localStorageの全データを取得
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const html = \`<tr><th>\${key}</th><td>\${value}</td></tr>\`;
    $('#list').append(html);
}
`})})})]})}function X(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(E,{...d})}):E(d)}function o(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));function _(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,LinkCard:i}=s;return r||h("Callout"),n||h("Details"),l||h("Infographic"),i||h("LinkCard"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#03 JavaScript - オブジェクト・Firebase"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"オブジェクトの概念と使い方を理解する"}),`
`,e.jsx(s.li,{children:"Firebaseを使った外部サービスへのデータ保存方法を体験する"}),`
`,e.jsx(s.li,{children:"チャットアプリの作成"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsx(s.p,{children:"zipファイルをダウンロード後に展開し、VSCodeで開いてください！"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/js03.zip",children:"js03.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"オブジェクト"}),`
`,e.jsxs(n,{summary:"オブジェクトとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"関連あるデータと機能をまとめて管理できるデータ構造"}),`
`,e.jsx(s.li,{children:"現実世界の「もの」をプログラムで表現するのに適している"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"配列だけでユーザー情報を管理する場合の問題："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 扱いづらい...
const name = "ラッコ";
const age = 5;
const region = "日本";

// 何番目に何の情報があるか覚えなければならない...
const user = ["ラッコ", 5, "日本"];
console.log(user[0]); // 名前？年齢？性別？
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"オブジェクトを使った解決法："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 何の情報かが一目でわかる！
const user = {
  name: "ラッコ",
  age: 5,
  region: "日本"
};
console.log(user.name); // "ラッコ" - 明らかに名前
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"配列での管理"})]}),e.jsxs("div",{className:"text-sm text-red-700",children:[e.jsx("code",{className:"bg-red-100 px-2 py-1 rounded font-mono",children:"user[0]"}),e.jsx("div",{className:"mt-1",children:"インデックス番号を覚える必要がある"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"オブジェクトでの管理"})]}),e.jsxs("div",{className:"text-sm text-green-700",children:[e.jsx("code",{className:"bg-green-100 px-2 py-1 rounded font-mono",children:"user.name"}),e.jsx("div",{className:"mt-1",children:"キー名で直感的にアクセス"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"基本的な文法",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// オブジェクトの宣言
const user = {
  name: "ラッコ",
  age: 5,
  region: "日本"
};

// プロパティの取得（ドット記法）
console.log(user.name); // "ラッコ"
console.log(user.age);  // 5

// プロパティの取得（ブラケット記法）
console.log(user["name"]); // "ラッコ"
console.log(user["region"]);  // "日本"

// プロパティの追加
user.hobby = "水泳";
console.log(user.hobby); // "水泳"

// プロパティの変更
user.age = 30;
console.log(user.age); // 30
`})}),e.jsxs(r,{type:"info",title:"ドット記法とブラケット記法の使い分け",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ドット記法"}),"（",e.jsx(s.code,{children:"user.name"}),"）: 一般的でシンプル"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ブラケット記法"}),"（",e.jsx(s.code,{children:'user["name"]'}),"）: 変数でキーを指定したい場合に便利"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const key = "name";
console.log(user[key]); // 変数keyの値"name"をキーとして使用
`})})]})]}),`
`,e.jsx(n,{summary:"オブジェクトに格納できるデータ",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const userData = {
  // 文字列
  name: "田中太郎",
  
  // 数値
  age: 25,
  
  // 真偽値
  isActive: true,
  
  // 配列
  hobbies: ["読書", "映画鑑賞", "プログラミング"],
  
  // オブジェクト（ネストしたオブジェクト）
  address: {
    prefecture: "東京都",
    city: "渋谷区"
  },
  
  // 関数（メソッド）
  greet: function() {
    return \`こんにちは、\${this.name}です！\`;
  }
};

// 使用例
console.log(userData.name);           // "田中太郎"
console.log(userData.hobbies[0]);     // "読書"
console.log(userData.address.city);  // "渋谷区"
console.log(userData.greet());       // "こんにちは、田中太郎です！"
`})})}),`
`,e.jsx(s.h2,{children:"配列とオブジェクトの組み合わせ"}),`
`,e.jsxs(n,{summary:"配列の中にオブジェクトを格納する",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"配列には数字や文字だけでなく、オブジェクトを格納できる"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ユーザーリストの管理例
const users = [
  { name: 'ラッコ', age: 5, region: '日本' },
  { name: 'アザラシ', age: 3, region: 'カナダ' },
  { name: 'オットセイ', age: 7, region: 'アメリカ' }
];
`})}),e.jsxs(r,{type:"tip",title:"実際のWebアプリケーションでの活用",children:[e.jsx(s.p,{children:"このような「オブジェクトの配列」は、実際のWebアプリケーションで頻繁に使用されます。"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ユーザー一覧の表示"}),`
`,e.jsx(s.li,{children:"商品リストの管理"}),`
`,e.jsx(s.li,{children:`投稿データの処理
など、様々な場面で活躍します。`}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"オブジェクトの配列へのアクセス方法",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"インデックスとプロパティ名を組み合わせて、配列内のオブジェクトのデータにアクセス"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 最初のユーザーの名前を取得
console.log(users[0].name);  // "ラッコ"

// 2番目のユーザーの年齢を取得
console.log(users[1].age);   // 3

// カナダ在住のユーザーの地域を取得
console.log(users[1].region); // "カナダ"

// 配列の長さを確認
console.log(users.length);   // 3
`})})]}),`
`,e.jsx(n,{summary:"配列メソッドとオブジェクトの組み合わせ",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:"// すべてのユーザー情報を表示\nusers.forEach((user) => {\n    $('#user-list').append(`<li>${user.name}  (${user.age}歳、${user.region}在住)</li>`);\n});\n"})})}),`
`,e.jsxs(n,{summary:"[演習] 配列・オブジェクトの情報取得に慣れよう！",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"以下の演習ツールを使って、配列とオブジェクトの組み合わせに慣れてみましょう！"}),`
`]}),e.jsx(i,{url:"https://yubase-corp.github.io/lesson-tools/array-object-game/index.html"})]}),`
`,e.jsx(s.h2,{children:"Firebase入門"}),`
`,e.jsxs(n,{summary:"Firebaseとは",children:[e.jsx(i,{url:"https://firebase.google.com/?hl=ja"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Googleが提供するBaaS（Backend as a Service）"}),`
`,e.jsx(s.li,{children:"Webサーバーやデータベースを自分で用意せずに、クラウド上のサービスを利用できる"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Realtime Database"}),e.jsx("div",{className:"text-sm text-slate-600",children:"リアルタイムでデータ同期（今回使用）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Authentication"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ユーザー認証・ログイン機能"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Cloud Storage"}),e.jsx("div",{className:"text-sm text-slate-600",children:"画像・動画ファイルの保存"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Hosting"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Webサイトの公開・ホスティング"})]})]})]})}),e.jsx(r,{type:"info",title:"今回利用するサービス",children:e.jsx(s.p,{children:"今回は Realtime Database を利用します！"})})]}),`
`,`
`,e.jsxs(n,{summary:"Firebaseの利用料金",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Firebaseは ",e.jsx(s.strong,{children:"Sparkプラン（無料）"})," と ",e.jsx(s.strong,{children:"Blazeプラン（従量課金）"})," の2つの料金体系がある"]}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-green-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-green-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"Spark プラン"}),e.jsx("div",{className:"text-green-600 font-semibold",children:"無料"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Realtime Database:"})," 1GB ストレージ、10GB/月 ダウンロード"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"同時接続:"})," 200K per database"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Authentication:"})," 無制限（電話認証は除く）"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Hosting:"})," 10GB ストレージ、360MB/日 転送量"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Cloud Functions:"})," 2百万回実行/月"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Cloud Storage:"})," 5GB ストレージ、1GB/日 ダウンロード"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Firestore:"})," 1GiB ストレージ、5万読取/日、2万書込/日"]})]})]}),e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-blue-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"Blaze プラン"}),e.jsx("div",{className:"text-blue-600 font-semibold",children:"従量課金"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Sparkプランの無料枠"})," + 超過分の従量課金"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Realtime Database:"})," $5/GB ストレージ、$1/GB ダウンロード"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Cloud Functions:"})," $0.40/百万回実行"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Hosting:"})," $0.026/GB ストレージ、$0.15/GB 転送"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"Cloud Storage:"})," $0.026/GB ストレージ、$0.12/GB ダウンロード"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"新規ユーザー特典:"})," $300のクレジット付与"]})]})]})]})}),e.jsx(r,{type:"tip",title:"学習には無料プランで十分！",children:e.jsxs(s.p,{children:["今回の授業や個人の学習・開発では、",e.jsx(s.strong,{children:"Spark プラン（無料）"})," で十分です！",e.jsx(s.br,{}),`
`,"小規模なアプリケーションであれば、無料枠内で収まることがほとんどです。"]})}),e.jsxs(r,{type:"warning",title:"最新の利用料金について",children:[e.jsxs(s.p,{children:["本資料の価格表は 2025年9月9日時点のものです。",e.jsx(s.br,{}),`
`,"最新の価格はこちらから確認できます。"]}),e.jsx(i,{url:"https://firebase.google.com/pricing?hl=ja"})]})]}),`
`,e.jsxs(n,{summary:"Firebaseプロジェクトの作成",children:[e.jsx(r,{type:"warning",title:"キャプチャ実施日について",children:e.jsxs(s.p,{children:["本資料のキャプチャは 2025年9月9日時点のものであり、デザインが変更になっている場合があります。",e.jsx(s.br,{}),`
`,"基本的な操作は大きく変わらないため、異なるデザインでも適宜読み替えて進めてください。"]})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://firebase.google.com/products/realtime-database?hl=ja",children:"Realtime Database"})," にアクセスし、「使ってみる」をクリック"]}),`
`]}),e.jsx(i,{url:"https://firebase.google.com/products/realtime-database?hl=ja"}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase01.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「Firebaseプロジェクトを設定して開始」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase02.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["プロジェクト名を入力（例：",e.jsx(s.code,{children:"my-chat"}),"）"]}),`
`,e.jsx(s.li,{children:"Firebase の規約に同意"}),`
`,e.jsx(s.li,{children:"デベロッパープログラムへの参加をオフ"}),`
`,e.jsx(s.li,{children:"上記を設定した上で「続行」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase03.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"AIアシスタンスを「オフ」に設定し、「続行」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase04.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Google Analyticsを「オフ」に設定し、「プロジェクト作成」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase05.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"プロジェクトが作成完了するまで待機"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase06.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"準備が完了したら「続行」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase07.png",className:"w-full rounded border border-slate-200"})})})})]}),`
`,e.jsxs(n,{summary:"Realtime Databaseの設定",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「データベースを作成」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase08.png",className:"w-full rounded border border-slate-200"})})})}),e.jsx(r,{type:"info",title:"Realtime Databaseが表示されていない場合",children:e.jsx(s.p,{children:"左サイドバーの「構築 > Realtime Database」を選択してください"})}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase09.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ロケーション：「米国」のまま「次へ」"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase10.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"セキュリティルール：「テストモード」を選択し、「有効にする」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase12.png",className:"w-full rounded border border-slate-200"})})})}),e.jsx(r,{type:"warning",title:"テストモードについて",children:e.jsxs(s.p,{children:["テストモードは",e.jsx(s.strong,{children:"全てのアクセスを許可する"}),"設定です。学習目的では便利ですが、本番環境では適切なセキュリティルールの設定が必要です。"]})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Realtime Database が有効になる"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase13.png",className:"w-full rounded border border-slate-200"})})})})]}),`
`,e.jsxs(n,{summary:"Webアプリを登録",children:[e.jsxs(r,{type:"info",title:"アプリの登録とは？",children:[e.jsxs(s.p,{children:["Firebaseでは、1つの",e.jsx(s.strong,{children:"プロジェクト"}),"の中に複数の",e.jsx(s.strong,{children:"アプリ"}),"を作成できます。"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"プロジェクト"}),": データベースやセキュリティルールなどを共有する大きな枠組み"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"アプリ"}),": Web、iOS、Androidなど、プラットフォーム別の個別アプリ"]}),`
`]}),e.jsx(s.p,{children:"例：「チャットサービス」プロジェクトの中に「Webアプリ」「iOSアプリ」「Androidアプリ」を作成し、同じデータベースを共有するといった使い方ができます。"})]}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"サイドバーから「プロジェクトの概要」（家のアイコン）をクリック"}),`
`,e.jsx(s.li,{children:"「アプリを追加」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase14.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Webを選択"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase15.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["アプリのニックネームを入力（例：",e.jsx(s.code,{children:"chat"}),"）"]}),`
`,e.jsx(s.li,{children:"「アプリを登録」をクリック"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase16.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<script>タグを使用する"})," を選択し、表示されたスクリプトをコピー"]}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase17.png",className:"w-full rounded border border-slate-200"})})})}),e.jsxs(r,{type:"tip",title:"再度スクリプトをコピーする場合",children:[e.jsxs(s.p,{children:[e.jsx(s.code,{children:"設定 > プロジェクトの設定"})," を選択し、 ",e.jsx(s.code,{children:"マイアプリ > ウェブアプリ"})," から作成したアプリを選択後 SDKの設定と構成で CDN を選択しましょう"]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase18.png",className:"w-full rounded border border-slate-200"})})})}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-2xl",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/firebase19.png",className:"w-full rounded border border-slate-200"})})})})]})]}),`
`,e.jsxs(n,{summary:"`firebaseConfig` の設定反映",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"// ★ firebaseConfigを設定する"})," の箇所に ",e.jsx(s.code,{children:"firebaseConfig"})," をコピーして貼り付け"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ----------------------------
// Firebase のメソッドを事前読み込み
// ----------------------------

// firebaseの初期化メソッドを読み込み
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
// firebase realtime database で使うことができるメソッドを読み込み
import { getDatabase, ref, push, onChildAdded, remove, onChildRemoved } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';


// ----------------------------
// Firebase 設定情報読み込み
// ----------------------------

// ★ firebaseConfigを設定する
const firebaseConfig = {
    apiKey: 'xxxxxxx',
    authDomain: 'xxxxxxx.firebaseapp.com',
    databaseURL: 'https://xxxxxxx-default-rtdb.firebaseio.com',
    projectId: 'xxxxxxx',
    storageBucket: 'xxxxxxx.firebasestorage.app',
    messagingSenderId: 'xxxxxxx',
    appId: '1:xxxxxxx:web:36702df923de45639b3252',
};
`})}),e.jsx(r,{type:"info",title:"importとは？",children:e.jsxs(s.p,{children:["ES6モジュールの",e.jsx(s.code,{children:"import"}),"文を使ってFirebaseの機能を読み込んでいます。必要な機能だけを選択的に読み込むことで、効率的にライブラリを使用できます。"]})}),e.jsx(r,{type:"error",title:"APIキーの取り扱い注意",children:e.jsxs(s.p,{children:["表示されるAPIキーなどの設定情報は ",e.jsx(s.strong,{children:"重要な情報"})," です！",e.jsx(s.br,{}),`
`,"GitHubなど公開リポジトリにはアップロードしないよう注意してください！!"]})})]}),`
`,e.jsx(s.h2,{children:"チャットアプリの実装"}),`
`,e.jsxs(n,{summary:"HTMLの基本構造",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>チャットアプリ</title>
    <!-- CSS読み込み -->
    <link rel="stylesheet" href="css/sample.css" />
    <!-- jQuery読み込み -->
    <script src="js/jquery-3.7.1.min.js"><\/script>
</head>
<body>
<main>
    <!-- 入力エリア -->
    <div class="input-section">
        <div class="name-input">
            <label for="name">お名前:</label>
            <input
                type="text"
                id="name"
                placeholder="あなたの名前を入力してください"
            />
        </div>
        <div class="message-input">
            <label for="message">メッセージ:</label>
            <textarea
                id="message"
                placeholder="メッセージを入力してください"
                rows="3"
            ></textarea>
        </div>
        <ul class="button-list">
            <li id="send-button">送信</li>
            <li id="clear-button">クリア</li>
        </ul>
    </div>

    <!-- チャット表示エリア -->
    <div class="chat-section">
        <h2>チャット履歴</h2>
        <div id="chat-display"></div>
    </div>
</main>
`})}),e.jsx(r,{type:"info",title:"HTMLの構造ポイント",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["名前入力フィールド: ",e.jsx(s.code,{children:'id="name"'})]}),`
`,e.jsxs(s.li,{children:["メッセージ入力フィールド: ",e.jsx(s.code,{children:'id="message"'})]}),`
`,e.jsxs(s.li,{children:["送信ボタン: ",e.jsx(s.code,{children:'id="send-button"'})]}),`
`,e.jsxs(s.li,{children:["チャット表示エリア: ",e.jsx(s.code,{children:'id="chat-display"'})]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"Firebase初期化とモジュール読み込み",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// import / export が使えるように module モードを利用する
<script type="module">

// Firebase のメソッドを事前読み込み
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
import { getDatabase, ref, push, onChildAdded, remove, onChildRemoved } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';

// Firebase 設定情報
const firebaseConfig = {
    apiKey: 'xxxxxxx',
    authDomain: 'xxxxxxx.firebaseapp.com',
    databaseURL: 'https://xxxxxxx-default-rtdb.firebaseio.com',
    projectId: 'xxxxxxx',
    storageBucket: 'xxxxxxx.firebasestorage.app',
    messagingSenderId: 'xxxxxxx',
    appId: '1:xxxxxxx:web:36702df923de45639b3252',
};

// Firebase / Firebase Realtime Database の初期化
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, 'messages');  // 'messages' パスへの参照を作成
`})}),e.jsx(r,{type:"info",title:"モジュールモードの重要性",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:'<script type="module">'}),"を使用することで、ES6のimport/export構文が使用できます。これにより、Firebase SDKを効率的に読み込めます。"]})})]}),`
`,e.jsxs(n,{summary:"メッセージ送信機能の実装",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 送信ボタンクリック時の処理
$('#send-button').on('click', function () {
    // 入力内容を取得
    const name = $('#name').val();
    const message = $('#message').val();

    // メッセージデータを作成
    const messageData = {
        name: name,
        message: message,
        createdAt: new Date().toLocaleString('ja-JP'),
    };

    // messages/{ユニークID} の配下にメッセージデータを送信
    const newMessageRef = push(messagesRef, messageData);
});
`})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"入力値を取得"}),e.jsx("div",{className:"text-sm text-slate-600",children:"name、messageフィールドから値を取得"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"メッセージオブジェクト作成"}),e.jsx("div",{className:"text-sm text-slate-600",children:"name、message、createdAtを含むオブジェクトを作成"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Firebaseに送信"}),e.jsx("div",{className:"text-sm text-slate-600",children:"push()でmessagesRefにデータを保存"})]})]})]})}),e.jsx(r,{type:"tip",title:"push()メソッドの便利さ",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"push(messagesRef, messageData)"}),"は一度にデータ追加と参照の作成を行います。自動でユニークIDが生成されるため、データの重複を防げます。"]})})]}),`
`,e.jsxs(n,{summary:"メッセージ受信・表示機能",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// メッセージ受信イベント
onChildAdded(messagesRef, function (data) {
    const messageData = data.val(); // メッセージデータを取得
    const key = data.key; // ユニークIDを取得
    
    const html = \`<p id="\${key}" class="message-item">\${messageData.name}: \${messageData.message} - \${messageData.createdAt}</p>\`;
    $('#chat-display').append(html); // #chat-display の最後に追加
});
`})}),e.jsxs(r,{type:"info",title:"onChildAddedの動作",children:[e.jsxs(s.p,{children:[e.jsx(s.code,{children:"onChildAdded"}),"は以下の2つのタイミングで実行されます："]}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"初回読み込み時"}),": 既存の全メッセージを順次取得"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"新しいメッセージ追加時"}),": リアルタイムで新着メッセージを受信"]}),`
`]}),e.jsx(s.p,{children:"これにより、ページを開いた瞬間に過去のメッセージが表示され、その後も新しいメッセージがリアルタイムで追加されます。"})]})]}),`
`,e.jsxs(n,{summary:"発展: メッセージ削除機能の実装",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// メッセージ削除ボタンクリック時の処理
$('body').on('click', '.message-item', function () {
    const isDelete = confirm('メッセージを削除しますか？');
    // はいがクリックされた場合
    if (isDelete) {
        const key = $(this).attr('id'); // クリックされた要素自体のid名（ユニークID）を取得
        const targetMessageRef = ref(db, \`messages/\${key}\`); // 削除対象のメッセージ参照を取得
        remove(targetMessageRef); // メッセージを削除
    }
});

// メッセージ削除時の処理
onChildRemoved(messagesRef, function (data) {
    const key = data.key; // ユニークIDを取得
    $(\`#\${key}\`).remove(); // メッセージの表示を削除
});
`})}),e.jsx(r,{type:"info",title:"イベント委譲の活用",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"$('body').on('click', '.message-item', function () {...})"}),"は",e.jsx(s.strong,{children:"イベント委譲"}),"という手法です。動的に追加される要素（メッセージ）に対してもクリックイベントが適用されます。"]})}),e.jsx(r,{type:"warning",title:"削除機能の注意点",children:e.jsx(s.p,{children:"この実装では誰でも他人のメッセージを削除できてしまいます。実際のアプリでは、メッセージの作成者のみが削除できるような制御が必要です。"})})]})]})}function Z(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(_,{...d})}):_(d)}function h(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));function P(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,LinkCard:i}=s;return r||j("Callout"),n||j("Details"),l||j("Infographic"),i||j("LinkCard"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#04 JavaScript - 関数・WebAPI"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"関数の概念と使い方を理解する"}),`
`,e.jsx(s.li,{children:"Web APIの基本的な仕組みを学ぶ"}),`
`,e.jsx(s.li,{children:"axiosを使ったAPI通信を体験する"}),`
`,e.jsx(s.li,{children:"実際のAPIを使ったアプリケーション開発"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsx(s.p,{children:"zipファイルをダウンロード後に展開し、VSCodeで開いてください！"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/js04.zip",children:"js04.zip"})]}),`
`,e.jsxs(s.li,{children:["課題ファイル: ",e.jsx(s.a,{href:"../../zip/js04-aiapp.zip",children:"js04-aiapp.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"関数"}),`
`,e.jsxs(n,{summary:"関数とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"よく使う処理や繰り返し利用するプログラムをひとまとめにしたもの"}),`
`,e.jsx(s.li,{children:"ひとまとめにした処理に名前をつけて、その名前を呼び出すことで実行できる"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"関数が発明される前："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 挨拶その1
console.log('こんにちは');
console.log('いい天気ですね');

// 挨拶その2
console.log('こんにちは');
console.log('いい天気ですね');
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"関数発明後："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`function greet() {
  console.log('こんにちは');
  console.log('いい天気ですね');
}

greet(); // 関数を呼び出し
greet(); // 何度でも使える！
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"関数なし"})]}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsxs(s.p,{children:["同じコードを何度も書く必要がある",e.jsx("br",{}),`
変更時に複数箇所を修正しなければならない`]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"関数あり"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:["一度作れば何度でも使える",e.jsx("br",{}),`
変更は関数内の1箇所だけでOK`]})})]})]})})]}),`
`,e.jsxs(n,{summary:"基本的な文法",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 基本形
function 関数名() {
  // 処理内容
}

// 具体例
function sayHello() {
  console.log('Hello World!');
}

// 関数の呼び出し
sayHello();
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"別の書き方（関数式）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const sayHello = function() {
  console.log('Hello World!');
};

sayHello();
`})}),e.jsx(r,{type:"info",title:"関数宣言と関数式の違い",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"関数宣言"}),"（",e.jsx(s.code,{children:"function sayHello() {}"}),"）: 巻き上げ（hoisting）が起こる"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"関数式"}),"（",e.jsx(s.code,{children:"const sayHello = function() {}"}),"）: より厳密で推奨される書き方"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"引数（パラメータ）を使った関数",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 引数を受け取る関数
function greet(name) {
  console.log(\`\${name}さん、こんにちは\`);
  console.log('いい天気ですね');
}

// 関数の呼び出し
greet('田中'); // "田中さん、こんにちは"
greet('佐藤'); // "佐藤さん、こんにちは"

// 複数の引数
function fullGreet(firstName, lastName) {
  console.log(\`\${firstName}\${lastName}さん、こんにちは\`);
}

fullGreet('太郎', '田中'); // "太郎田中さん、こんにちは"
`})}),e.jsx(r,{type:"tip",title:"引数の活用",children:e.jsx(s.p,{children:"引数を使うことで、同じ処理でも異なるデータを使って実行できます。これにより関数の再利用性が大幅に向上します！"})})]}),`
`,e.jsxs(n,{summary:"戻り値（return）を使った関数",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 値を返す関数
function add(a, b) {
  return a + b;
}

// 関数の結果を変数に保存
const result = add(5, 3);
console.log(result); // 8

// 直接使用
console.log(add(10, 20)); // 30
`})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"入力（引数）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"関数に渡すデータ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"処理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データを加工・計算"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"出力（戻り値）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"処理結果を返す"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"関数を作成するステップ",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. 日本語でアルゴリズムを考える"})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`消費税を計算したい
→ 商品価格 × 0.1 で計算
→ 結果を返す
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. 各手順を実装"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`function calculateTax(price) {
  const tax = price * 0.1;
  return tax;
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. 関数をテスト"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`console.log(calculateTax(1000)); // 100
console.log(calculateTax(500));  // 50
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. 関数を組み合わせて実装"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`function calculateTotal(price) {
  const tax = calculateTax(price);
  return price + tax;
}

console.log(calculateTotal(1000)); // 1100
`})}),e.jsx(r,{type:"tip",title:"関数作成のコツ",children:e.jsx(s.p,{children:"最初は小さな機能から始めて、徐々に組み合わせて複雑な処理を作りましょう。一つの関数は一つの責任だけを持つようにすると保守しやすくなります。"})})]}),`
`,e.jsxs(n,{summary:"関数とイベント処理の組み合わせ",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 関数を定義
function showMessage() {
  console.log("ボタンがクリックされました！");
  console.log("JS授業中です");
}

// イベントリスナーに関数を渡す
$("#button").on("click", showMessage); // ()をつけない！

// 従来の書き方と比較
$("#button").on("click", function() {
  console.log("ボタンがクリックされました！");
  console.log("JS授業中です");
});
`})}),e.jsxs(r,{type:"warning",title:"関数の呼び出し方に注意",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"showMessage()"}),": 関数を実行して、その結果を渡す"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"showMessage"}),": 関数自体を渡す（イベントリスナーで使用）"]}),`
`]}),e.jsx(s.p,{children:"イベントリスナーでは関数自体を渡す必要があります。"})]})]}),`
`,e.jsx(s.h2,{children:"Web API"}),`
`,e.jsxs(n,{summary:"Web APIとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["機能さえわかっていれば、 ",e.jsx(s.strong,{children:"中身の実際の動作はわからなくても外部から機能を呼び出すことができる仕組み"})," の総称"]}),`
`,e.jsx(s.li,{children:"API（Application Programming Interface）をWeb技術（HTTP/HTTPS通信）で実現したもの が Web API"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"text-center max-w-full mx-auto",children:e.jsx("div",{className:"mb-2",children:e.jsx("img",{src:"../../images/js/api-about.png",alt:"APIとは",className:"w-full rounded"})})})})]}),`
`,e.jsxs(n,{summary:"Web APIの利用方法",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Web APIの使い方には2つのパターンが存在する"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3 justify-center",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"ライブラリ方式（リモコン型）"})]}),e.jsx("div",{className:"mb-2 max-w-40 mx-auto rounded",children:e.jsx("img",{src:"../../images/js/api-2way-lib.png",alt:"APIの使い方は2パターンある",className:"w-full rounded"})}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"}),e.jsx("br",{}),`
・リモコンみたいにボタンを押すだけ`,e.jsx("br",{}),`
・すごく簡単で使いやすい`,e.jsx("br",{}),`
・ただし、種類ごとに使い方が違う`,e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," Firebase、Tone.js、Leaflet"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3 justify-center",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"HTTP/JSON方式（注文書型）"})]}),e.jsx("div",{className:"mb-2 max-w-40 mx-auto rounded",children:e.jsx("img",{src:"../../images/js/api-2way-json.png",alt:"APIの使い方は2パターンある",className:"w-full rounded"})}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"}),e.jsx("br",{}),`
・注文書を書いて送る感じ`,e.jsx("br",{}),`
・共通のルール（HTTP + JSON）`,e.jsx("br",{}),`
・一度覚えれば、どんなAPIにも応用可能`,e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," Google Books API、楽天API"]})})]})]})}),e.jsxs(r,{type:"note",title:"FirebaseもAPIだ！",children:[e.jsxs(s.p,{children:["前の授業でやったFirebaseも",e.jsx(s.strong,{children:"ライブラリ方式"}),"のAPIといえます！"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// Firebase - ライブラリ方式の典型例
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js';

const db = getDatabase();
const usersRef = ref(db, 'users');
push(usersRef, {
  name: '太郎',
  age: 25
});
`})}),e.jsxs(s.p,{children:["Firebaseは専用の関数（",e.jsx(s.code,{children:"getDatabase()"}),", ",e.jsx(s.code,{children:"ref()"}),", ",e.jsx(s.code,{children:"push()"}),"など）を使って簡単にデータベース操作ができましたよね。",e.jsx(s.br,{}),`
`,"これがまさにライブラリ方式です！"]})]})]}),`
`,e.jsx(n,{summary:"Web API活用のメリット",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"開発速度の向上"}),e.jsx("div",{className:"text-sm text-slate-600",children:"既存サービスを活用してMVP（最小価値製品）を爆速開発"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"コスト削減"}),e.jsx("div",{className:"text-sm text-slate-600",children:"複雑な機能を一から開発する必要がない"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"高品質なサービス"}),e.jsx("div",{className:"text-sm text-slate-600",children:"専門企業が提供する高性能・高信頼性のサービスを利用"})]})]})]})})}),`
`,e.jsxs(n,{summary:"[補足] 同期処理と非同期処理",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"API通信は「非同期処理」で行われる"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"同期処理のイメージ："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`console.log("1番目の処理");
console.log("2番目の処理"); // 1番目が終わってから実行
console.log("3番目の処理"); // 2番目が終わってから実行
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"非同期処理のイメージ："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`console.log("1番目の処理");
setTimeout(() => {
  console.log("2番目の処理（2秒後）");
}, 2000);
console.log("3番目の処理"); // 2番目を待たずに即座に実行
`})}),e.jsx(r,{type:"info",title:"非同期処理の重要性",children:e.jsxs(s.p,{children:["API通信は時間がかかるため、通信完了を待っている間に他の処理を実行できる非同期処理が重要です。",e.jsx(s.code,{children:".then()"}),"や",e.jsx(s.code,{children:"async/await"}),"を使って「通信が完了したら」の処理を書きます。"]})})]}),`
`,e.jsx(s.h2,{children:"Axios（HTTP通信ライブラリ）"}),`
`,e.jsxs(n,{summary:"Axiosとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ウェブサイトと他のWebサービス（API）との「通訳」のような役割"}),`
`,e.jsx(s.li,{children:"HTTPリクエストを簡単に送信できるJavaScriptライブラリ"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"導入方法："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
`})}),e.jsx(r,{type:"tip",title:"AxiosとjQueryの類似点",children:e.jsxs(s.p,{children:["jQueryと同様にCDNから読み込むだけで使用できます。Live ServerやHTTPサーバー上で動作させる必要があります（",e.jsx(s.code,{children:"file://"}),"では動作しません）。"]})})]}),`
`,e.jsxs(n,{summary:"GETリクエスト（データを取得）",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 基本的なGETリクエスト
axios.get('https://api.example.com/users')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log('エラーが発生しました：', error);
  });

// パラメータ付きのGETリクエスト
axios.get('https://api.example.com/search', {
  params: {
    keyword: '検索キーワード',
    limit: 10
  }
})
.then(function(response) {
  console.log(response.data);
});
`})}),e.jsx(r,{type:"info",title:"paramsとURLパラメータ",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"params"}),"オプションは ",e.jsx(s.code,{children:"?keyword=検索キーワード&limit=10"})," のようなURLパラメータを自動的に生成してくれます。手動でURLに追加する必要がありません。"]})})]}),`
`,e.jsxs(n,{summary:"POSTリクエスト（データを送信）",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// データを送信するPOSTリクエスト
axios.post('https://api.example.com/submit', {
  title: '新しい記事',
  content: 'これは新しい記事の内容です。',
  author: '投稿者名'
})
.then(function(response) {
  console.log('送信成功：', response.data);
})
.catch(function(error) {
  console.log('エラーが発生しました：', error);
});
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"GET"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"用途:"})," データを「取得」",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," 商品一覧、ユーザー情報の取得"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"POST"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"用途:"})," データを「送信」",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," フォーム送信、記事投稿"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"[補足] JSONとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"JavaScript Object Notation の略"}),`
`,e.jsx(s.li,{children:"データ交換フォーマットの一種"}),`
`,e.jsx(s.li,{children:"JavaScriptのオブジェクト記法をベースにした軽量なデータ形式"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// JSON例
{
  "name": "田中太郎",
  "age": 25,
  "hobbies": ["読書", "映画鑑賞"],
  "address": {
    "prefecture": "東京都",
    "city": "渋谷区"
  }
}
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JSONの特徴："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"人間にも読みやすい"}),`
`,e.jsx(s.li,{children:"多くのプログラミング言語でサポート"}),`
`,e.jsx(s.li,{children:"Web APIの標準的なデータ形式"}),`
`]})]}),`
`,e.jsx(s.h2,{children:"Gemini API を使ってみよう！"}),`
`,e.jsxs(n,{summary:"Geminiについて",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Googleが開発した大規模言語モデル（LLM）"}),`
`,e.jsx(s.li,{children:"テキスト生成、質問応答、要約、翻訳など多様なAI機能を提供"}),`
`,e.jsx(s.li,{children:"REST APIを通じてWebアプリケーションから利用可能"}),`
`]}),e.jsx(r,{type:"info",title:"AIで変わる業務スタイル",children:e.jsx(s.p,{children:"Gemini AIを活用することで、文書作成、データ分析、アイデア出しなどの日常業務を大幅に効率化できます。まさに「AIと協働する」新しい働き方の始まりです！"})})]}),`
`,`
`,e.jsxs(n,{summary:"Gemini APIの利用料金",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Gemini APIは ",e.jsx(s.strong,{children:"無料枠"})," と ",e.jsx(s.strong,{children:"従量課金プラン"})," の2つの料金体系がある"]}),`
`,e.jsx(s.li,{children:"無料枠の場合には、１分間のリクエスト回数制限がある"}),`
`]}),e.jsx(s.p,{children:"※ Gemini 2.5 Flash の場合の試算"}),e.jsx(l,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-green-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-green-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"無料枠"}),e.jsx("div",{className:"text-green-600 font-semibold",children:"Free Tier"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"リクエスト制限:"})," 10回/分、250回/日"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"トークン制限:"})," 25万トークン/分"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"用途:"})," 開発・学習・プロトタイプ"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"制約:"})," 商用利用に一部制限"]})]})]}),e.jsxs("div",{className:"bg-slate-50 rounded p-6 border-2 border-blue-200",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 rounded flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-lg text-slate-800",children:"従量課金プラン（Tier1）"}),e.jsx("div",{className:"text-blue-600 font-semibold",children:"Pay-as-you-go"})]})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsxs("div",{children:["• ",e.jsx("strong",{children:"リクエスト制限:"})," 1,000回/分、10,000回/日"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"トークン制限:"})," 100万トークン/分"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"入力料金:"})," $0.30/100万トークン（テキスト/画像/動画）"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"出力料金:"})," $2.50/100万トークン"]}),e.jsxs("div",{children:["• ",e.jsx("strong",{children:"用途:"})," 本番環境・商用利用"]})]})]})]})}),e.jsxs(r,{type:"warning",title:"最新の利用料金について",children:[e.jsxs(s.p,{children:["本資料の価格表は 2025年9月10日時点のものです。",e.jsx(s.br,{}),`
`,"最新の価格とレート制限はこちらから確認できます。"]}),e.jsx(i,{url:"https://ai.google.dev/pricing?hl=ja"}),e.jsx(i,{url:"https://ai.google.dev/gemini-api/docs/rate-limits?hl=ja#free-tier"})]})]}),`
`,e.jsxs(n,{summary:"APIキーの取得方法",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. Google AI Studioにアクセス"})}),e.jsx(i,{url:"https://aistudio.google.com/"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. アカウントでログイン"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Googleアカウントでサインイン"}),`
`,e.jsx(s.li,{children:"利用規約に同意"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. APIキーを生成"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「Get API key」をクリック"}),`
`,e.jsx(s.li,{children:"「Create API key」を選択"}),`
`,e.jsx(s.li,{children:"生成されたキーをコピーして保存"}),`
`]}),e.jsx(r,{type:"warning",title:"APIキーは絶対に秘密に保管！",children:e.jsx(s.p,{children:"APIキーは他人に知られると不正利用される可能性があります！絶対に安全な場所に保管してください。"})})]}),`
`,e.jsx(s.h2,{children:"チャットボットアプリの実装"}),`
`,e.jsxs(n,{summary:"axiosでGemini APIを叩いてみよう",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from "./js/config.js";

let chatHistory = [];

// メッセージ送信
$("#send").on("click", function () {
    const userMessage = $("#user-input").val(); // ユーザーメッセージを取得
    if (!userMessage) return; // ユーザーメッセージが空の場合は処理を終了
    
    $("#chat-area").append(\`<div class='message user'>👤 \${userMessage}</div>\`); // ユーザーメッセージを表示
    $("#user-input").val(""); // 入力欄をクリア

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$("#clear").on("click", function () {
    $("#chat-area").html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`); // 初期メッセージをセット
    chatHistory = []; // 会話履歴をクリア
});

// Gemini API呼び出し関数
function callGeminiAPI(message) {
    // Google AI Studio のAPIリファレンスを参考にURLを設定
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    // Gemini APIに渡すデータを作成
    const data = {
        contents: [
            {
                parts: [{ text: message }],
            },
        ],
    };
    
    // Gemini APIを呼び出し
    axios.post(\`\${url}?key=\${GEMINI_API_KEY}\`, data) // URL, データ, クエリパラメータでAPIキー
        .then(function (response) {
            // AIの回答を取得
            const aiResponse = response.data.candidates[0].content.parts[0].text;

            $("#chat-area").append(\`<div class='message ai'>🤖 \${aiResponse}</div>\`); // AIの回答を表示
        })
        .catch(function (error) {
            console.error("API Error:", error); // APIエラーを表示
            $("#chat-area").append(\`<div class="message ai">🤖 エラーが発生しました。API キーを確認してください。</div>\`);
        });
}
<\/script>
</body>
</html>
`})}),e.jsxs(n,{summary:"[補足] APIキーの管理方法",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"js/config.js ファイルを作成："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// js/config.js
export const GEMINI_API_KEY = "YOUR_API_KEY_HERE"; // 実際のAPIキーに置き換える
`})}),e.jsx(r,{type:"warning",title:"APIキーの取り扱い注意",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"APIキーは絶対に公開しないでください"}),`
`,e.jsxs(s.li,{children:["GitHubにアップする際は",e.jsx(s.code,{children:".gitignore"}),"に",e.jsx(s.code,{children:"js/config.js"}),"を追加"]}),`
`,e.jsx(s.li,{children:"本番環境では環境変数を使用しましょう"}),`
`]})})]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"1. ユーザー入力"}),e.jsx("div",{className:"text-sm text-slate-600",children:"テキストエリアからメッセージを取得"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"2. API呼び出し"}),e.jsx("div",{className:"text-sm text-slate-600",children:"axiosでGemini APIにリクエスト送信"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"3. レスポンス処理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"AIの回答を画面に表示"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"ライブラリでGemini APIを使ってみよう",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@google/genai"})," ライブラリを使うと、Gemini APIを簡単に使える"]}),`
`]}),e.jsx(r,{type:"tip",title:"ライブラリを使う利点",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"URLを覚えなくて良い"}),`
`,e.jsx(s.li,{children:"データ形式を気にしなくて良い"}),`
`,e.jsx(s.li,{children:"エラーハンドリングが簡単"}),`
`,e.jsx(s.li,{children:"最新のAPI仕様に自動対応"}),`
`]})}),e.jsx(s.p,{children:"同じチャット機能をライブラリで実装:"}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat - ライブラリ版</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット | ライブラリ版</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

// 🔥 @google/genai ライブラリを読み込む
import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai';

// @google/genai ライブラリを初期化
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

let chatHistory = [];

// メッセージ送信
$('#send').on('click', function () {
    const userMessage = $('#user-input').val();
    if (!userMessage) return;

    $('#chat-area').append(\`<div class='message user'>👤 \${userMessage}</div>\`);
    $('#user-input').val('');

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$('#clear').on('click', function () {
    $('#chat-area').html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`);
    chatHistory = [];
});

// Gemini API呼び出し関数
function callGeminiAPI(message) {

    // 🔥 @google/genai ライブラリを使用して Gemini API を呼び出す
    genAI.models
        .generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
        })
        .then(function (response) {
            const aiResponse = response.text; // 🔥 AIの回答を取得
            $('#chat-area').append(\`<div class='message ai'>🤖 \${aiResponse}</div>\`);
        })
        .catch(function (error) {
            console.error('API Error:', error);
            $('#chat-area').append(\`<div class="message ai">🤖 エラーが発生しました。API キーを確認してください。</div>\`);
        });
}
<\/script>
</body>
</html>
`})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"font-medium text-blue-800",children:"axios版（JSON型）"})}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-2",children:[e.jsx("div",{children:"✓ URLを自分で管理"}),e.jsx("div",{children:"✓ データ形式を理解が必要"}),e.jsx("div",{children:"✓ 細かい制御が可能"}),e.jsx("div",{children:"✗ 設定が複雑"})]})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"text-center mb-3",children:e.jsx("div",{className:"font-medium text-green-800",children:"ライブラリ版"})}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsx("div",{children:"✓ 設定が簡単"}),e.jsx("div",{children:"✓ URLを覚える必要なし"}),e.jsx("div",{children:"✓ 最新仕様に自動対応"}),e.jsx("div",{children:"✗ ライブラリの読み込みが必要"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"発展: ストリーミング読み込み",children:[e.jsx(r,{type:"info",title:"ストリーミングとは？",children:e.jsxs(s.p,{children:["通常のAPIは「全部考えてから一気に回答」ですが、ストリーミングは「考えながら順次表示」します。",e.jsx(s.br,{}),`
`,"ChatGPTのように文字が徐々に現れる感じです！"]})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Gemini Chat - ストリーミング版</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
<header>
    <h1>Gemini AI チャット | ストリーミング版</h1>
</header>
<main>
    <div id="chat-area">
        <div class="message ai">
            🤖 こんにちは！何でもお聞きください！
        </div>
    </div>
    <textarea
        id="user-input"
        placeholder="メッセージを入力..."
    ></textarea>
    <ul>
        <li id="send">送信</li>
        <li id="clear">クリア</li>
    </ul>
</main>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

// @google/genai ライブラリを読み込む
import { GoogleGenAI } from 'https://cdn.jsdelivr.net/npm/@google/genai';

// @google/genai ライブラリを初期化
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

let chatHistory = [];

// メッセージ送信
$('#send').on('click', function () {
    const userMessage = $('#user-input').val();
    if (!userMessage) return;

    $('#chat-area').append(\`<div class='message user'>👤 \${userMessage}</div>\`);
    $('#user-input').val('');

    // Gemini API を実行する関数を呼び出す
    callGeminiAPI(userMessage);
});

// チャットクリア
$('#clear').on('click', function () {
    $('#chat-area').html(\`<div class='message ai'>🤖 こんにちは！何でもお聞きください！</div>\`);
    chatHistory = [];
});

// Gemini API ストリーミング呼び出し関数
async function callGeminiAPI(message) {

    // AIメッセージの枠を先に作成
    const aiMessageId = \`ai-message-\${Date.now()}\`;
    $('#chat-area').append(
        \`<div class='message ai' id='\${aiMessageId}'>🤖 <span class="typing-indicator">考え中...</span></div>\`
    );

    try {
        // ストリーミングでレスポンスを取得
        const responseStream = await genAI.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents: message,
            config: { thinkingConfig: { thinkingBudget: 0 } } // ストリーミングをわかりやすくするために思考時間を0にする
        });

        // タイピングインジケーターを削除
        $(\`#\${aiMessageId} .typing-indicator\`).remove();

        let aiResponse = '';

        // ストリームからデータを逐次取得
        for await (const chunk of responseStream) {
            aiResponse += chunk.text;

            // リアルタイムでテキストを更新
            $(\`#\${aiMessageId}\`).html(
                \`🤖 \${aiResponse}<span class="cursor">|</span>\`
            );

            // チャットエリアを最下部にスクロール
            $('#chat-area').scrollTop(
                $('#chat-area')[0].scrollHeight
            );
        }

        // 最終的にカーソルを削除
        $(\`#\${aiMessageId} .cursor\`).remove();
    } catch (error) {
        console.error('API Error:', error);
        $(\`#\${aiMessageId}\`).html(
            \`🤖 エラーが発生しました。API キーを確認してください。\`
        );
    }
}
<\/script>
</body>
</html>
`})}),e.jsxs(n,{summary:"[補足] ストリーミングの仕組み",children:[e.jsx(s.p,{children:"ストリーミングでは以下のような処理が行われています："}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"メッセージ枠を先に作成"}),": 空のメッセージ枠を用意"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ストリーム開始"}),": ",e.jsx(s.code,{children:"generateContentStream"}),"でストリーミングを開始"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"逐次受信"}),": ",e.jsx(s.code,{children:"for await"}),"でチャンクごとにデータを受信"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"リアルタイム更新"}),": 受信したテキストを即座に表示"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"スクロール調整"}),": 新しいテキストが見えるように自動スクロール"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ストリーミングの核となる部分
for await (const chunk of responseStream) {
    aiResponse += chunk.text;  // 受信したテキストを追加
    
    // リアルタイムで画面を更新
    $(\`#\${aiMessageId}\`).html(\`🤖 \${aiResponse}<span class="cursor">|</span>\`);
    
    // 自動スクロール
    $('#chat-area').scrollTop($('#chat-area')[0].scrollHeight);
}
`})})]})]}),`
`,e.jsxs(n,{summary:"応用例：他のAPIとの組み合わせ",children:[e.jsxs(s.p,{children:["例: ",e.jsx(s.strong,{children:"位置情報API"}),"と",e.jsx(s.strong,{children:"Gemini API"}),"を組み合わせた観光ガイドアプリ"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>AI 観光ガイド</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>
    <!-- Bulma CSS -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <!-- Font Awesome for icons -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
</head>
<body>
<div class="container mt-5">
    <div class="columns is-centered">
        <div class="column is-8">
            <!-- Location Status -->
            <div
                class="notification is-primary is-light"
                id="location-info"
            >
                <p id="location-status">
                    <i class="fas fa-spinner fa-pulse"></i>
                    位置情報を取得中...
                </p>
            </div>

            <!-- Chat Area -->
            <div class="box">
                <div
                    id="chat-area"
                    style="
                        height: 400px;
                        overflow-y: auto;
                        padding: 1rem;
                    "
                >
                    <div class="message is-info">
                        <div class="message-body">
                            <i class="fas fa-robot"></i>
                            こんにちは！現在位置を取得して、おすすめの観光スポットをご案内します！
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button Area -->
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                    <button
                        class="button is-primary is-medium"
                        id="get-location"
                    >
                        <span class="icon">
                            <i class="fas fa-location-arrow"></i>
                        </span>
                        <span>現在位置で観光案内</span>
                    </button>
                </p>
            </div>
        </div>
    </div>
</div>

<script type="module">
// APIキーの情報を読み込む
import { GEMINI_API_KEY } from './js/config.js';

let currentLocation = null;

// 現在位置取得ボタン
$('#get-location').on('click', function () {
    if (currentLocation) {
        // 位置情報がある場合は観光案内を開始
        startTourGuide();
    } else {
        // 位置情報がない場合は取得してから観光案内
        getCurrentLocation(true);
    }
});

// 現在位置を取得する関数
function getCurrentLocation(startGuideAfter = false) {
    $('#location-info')
        .removeClass('is-primary is-success is-danger')
        .addClass('is-info');
    $('#location-status').html(
        '<i class="fas fa-spinner fa-pulse"></i> 位置情報を取得中...'
    );

    if (!navigator.geolocation) {
        $('#location-info')
            .removeClass('is-info')
            .addClass('is-danger');
        $('#location-status').html(
            '<i class="fas fa-times"></i> お使いのブラウザは位置情報に対応していません'
        );
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function (position) {
            // 位置情報取得成功
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            currentLocation = { lat, lng };

            $('#location-info')
                .removeClass('is-info')
                .addClass('is-success');
            $('#location-status').html(
                \`<i class="fas fa-map-marker-alt"></i> 現在位置: 緯度 \${lat.toFixed(4)}, 経度 \${lng.toFixed(4)}\`
            );

            // ボタンが押された場合のみ観光案内を開始
            if (startGuideAfter) {
                startTourGuide();
            }
        },
        function (error) {
            // 位置情報取得失敗
            $('#location-info')
                .removeClass('is-info')
                .addClass('is-danger');
            $('#location-status').html(
                '<i class="fas fa-exclamation-triangle"></i> 位置情報の取得に失敗しました'
            );
        }
    );
}

// 観光案内を開始する関数
function startTourGuide() {
    if (!currentLocation) {
        alert('位置情報が取得できていません');
        return;
    }

    const locationPrompt = \`
        現在位置の緯度経度情報: \${currentLocation.lat}, \${currentLocation.lng}

        この位置周辺のおすすめ観光スポットを教えてください。以下の形式で回答してお願いします：

        🏛️ **観光スポット名**
        - 📍 場所・アクセス方法
        - ⏰ 営業時間・料金
        - 🌟 おすすめポイント
        - 📸 見どころ

        できれば3-5箇所程度、徒歩や電車でアクセスしやすい場所を中心に紹介してください。
        地元の人しか知らない穴場スポットがあれば、それも含めてください！
    \`;

    $('#chat-area').append(\`
        <div class="message is-warning">
            <div class="message-body">
                <i class="fas fa-location-arrow"></i> 現在位置での観光案内をお願いします
            </div>
        </div>
    \`);

    callGeminiAPI(locationPrompt);
}

// Gemini API呼び出し関数
function callGeminiAPI(message) {
    const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=\${GEMINI_API_KEY}\`;

    // ローディング表示
    $('#chat-area').append(\`
        <div class="message is-info">
            <div class="message-body">
                <i class="fas fa-spinner fa-pulse"></i> 観光情報を検索中...
            </div>
        </div>
    \`);

    axios
        .post(url, {
            contents: [
                {
                    parts: [{ text: message }],
                },
            ],
        })
        .then(function (response) {
            // ローディングメッセージを削除
            $('#chat-area .message:last').remove();

            const aiResponse =
                response.data.candidates[0].content.parts[0].text;
            $('#chat-area').append(\`
                <div class="message is-success">
                    <div class="message-body">
                        <i class="fas fa-robot"></i> \${aiResponse.replace(/\\n/g, '<br>')}
                    </div>
                </div>
            \`);
            $('#chat-area').scrollTop(
                $('#chat-area')[0].scrollHeight
            );
        })
        .catch(function (error) {
            // ローディングメッセージを削除
            $('#chat-area .message:last').remove();

            console.error('API Error:', error);
            $('#chat-area').append(\`
                <div class="message is-danger">
                    <div class="message-body">
                        <i class="fas fa-exclamation-triangle"></i> エラーが発生しました。API キーを確認してください。
                    </div>
                </div>
            \`);
        });
}

// ページ読み込み時に位置情報取得を開始（観光案内は手動）
$(document).ready(function () {
    // 自動で位置情報取得を開始（観光案内はしない）
    setTimeout(() => getCurrentLocation(false), 1000);
});
<\/script>
</body>
</html>
`})}),e.jsx(r,{type:"success",title:"複数のAPIを組み合わせる利点",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"位置情報API"}),": ユーザーの現在位置を取得"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gemini API"}),": その位置に基づいた観光情報を生成"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"結果"}),": パーソナライズされた観光ガイドアプリの完成！"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"[補足]セキュリティについて",children:[e.jsxs(s.p,{children:["今回の例では",e.jsx(s.strong,{children:"フロントエンドで直接APIを叩いて"}),"いますが、これは",e.jsx(s.strong,{children:"学習・内部利用"}),"に限定してください！"]}),e.jsx(r,{type:"warning",title:"フロントエンドでのAPI利用の注意点",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"APIキーがブラウザに露出してしまう"}),`
`,e.jsx(s.li,{children:"悪意のあるユーザーがAPIキーを盗む可能性"}),`
`,e.jsx(s.li,{children:"一般公開するアプリでは絶対に避ける"}),`
`]})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"学習・内部利用"})]}),e.jsxs("div",{className:"text-sm text-green-700 space-y-2",children:[e.jsx("div",{children:"✓ 個人の学習用途"}),e.jsx("div",{children:"✓ 社内ツール"}),e.jsx("div",{children:"✓ プロトタイプ作成"}),e.jsx("div",{children:"✓ 限定された環境"})]})]}),e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"一般公開アプリ"})]}),e.jsxs("div",{className:"text-sm text-red-700 space-y-2",children:[e.jsx("div",{children:"✗ Webサイトの公開"}),e.jsx("div",{children:"✗ モバイルアプリ配布"}),e.jsx("div",{children:"✗ 不特定多数の利用"}),e.jsx("div",{children:"✗ 商用サービス"})]})]})]})}),e.jsx(s.h3,{children:"一般公開する場合の正しい方法"}),e.jsxs(s.p,{children:["一般公開するアプリを作る場合は、",e.jsx(s.strong,{children:"バックエンド"}),"でAPIを呼び出しましょう："]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ❌ フロントエンドで直接API呼び出し（公開アプリでは危険）
const response = await axios.post(geminiUrl, data, {
    headers: { 'x-goog-api-key': GEMINI_API_KEY }  // APIキーが露出！
});

// ✅ バックエンドを経由してAPI呼び出し（安全）
const response = await axios.post('/api/chat', {  // 自分のサーバーに送信
    message: userMessage
});
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"バックエンドの例（Node.js/Express）:"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// server.js
app.post('/api/chat', async (req, res) => {
    try {
        // サーバー側でGemini APIを呼び出し
        const geminiResponse = await axios.post(geminiUrl, {
            contents: [{ parts: [{ text: req.body.message }] }]
        }, {
            headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY }  // 環境変数で管理
        });
        
        res.json({ response: geminiResponse.data });
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});
`})}),e.jsx(r,{type:"info",title:"まとめ",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"学習段階"}),": フロントエンドで直接APIを使ってOK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"本格運用"}),": バックエンドでAPIを呼び出してセキュリティを確保"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"APIキー"}),": 常に安全に管理し、絶対に公開しない"]}),`
`]})})]})]})}function se(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(P,{...d})}):P(d)}function j(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));function A(d){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||m("Callout"),n||m("Details"),l||m("Infographic"),i||m("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#01 PHP - サーバーサイド入門"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"XAMPPでローカル開発環境を構築する"}),`
`,e.jsx(s.li,{children:"PHPの文法を理解する"}),`
`,e.jsx(s.li,{children:"フォームデータの送受信を体験する"}),`
`,e.jsx(s.li,{children:"ファイル操作方法に触れる"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsxs(s.p,{children:["zipファイルをダウンロード後に展開しておいてください！",e.jsx(s.br,{}),`
`,"その後の作業（ファイル配置や動作確認）は講義でお伝えします"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/php01.zip",children:"php01.zip"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"XAMPP環境構築"}),`
`,e.jsxs(n,{summary:"XAMPPとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"複数のサーバー関連ソフトウェアを一括でインストール・管理できるパッケージ"}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"略語"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"名称"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"役割"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-bold text-blue-600 border border-slate-200",children:"X"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Cross-Platform"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"Windows、Mac、Linux対応"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-bold text-blue-600 border border-slate-200",children:"A"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Apache"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"Webサーバーソフトウェア"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-bold text-blue-600 border border-slate-200",children:"M"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"MySQL（MariaDB）"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"データベース管理システム"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-bold text-blue-600 border border-slate-200",children:"P"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"PHP"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"サーバーサイドスクリプト言語"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-bold text-blue-600 border border-slate-200",children:"P"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"Perl"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"汎用プログラミング言語"})]})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"XAMPPのメリット："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"簡単インストール"}),": 複数のソフトウェアを一括で導入"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ローカル環境"}),": インターネット不要で開発・テスト可能"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"学習に最適"}),": 初心者でも手軽に環境構築"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"プロトタイピング"}),": 迅速な開発とテストが可能"]}),`
`]})]}),`
`,e.jsx(n,{summary:"なぜXAMPPが必要なのか？",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["PHPは",e.jsx(s.strong,{children:"サーバー上で動作"}),"し、",e.jsx(s.strong,{children:"データベース"}),"にアクセスする必要がある"]}),`
`,e.jsx(s.li,{children:"通常のPC環境にはサーバーやデータベースが存在しない"}),`
`,e.jsx(s.li,{children:"XAMPPを使ってローカルにサーバー環境を再現する"}),`
`]})}),`
`,e.jsxs(n,{summary:"参考: JavaScriptとPHPの実行フローの違い",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"JavaScript（クライアントサイド）の流れ："})}),e.jsx(i,{children:`
sequenceDiagram
  participant User as ユーザー
  participant Browser as ブラウザ
  participant Server as サーバー

  User->>Browser: ページを開く
  Browser->>Server: HTMLとCSSをリクエスト
  Server->>Browser: HTMLとCSSを返す
  Browser->>Server: JavaScriptをリクエスト
  Server->>Browser: JavaScriptを返す
  Browser->>Browser: JavaScriptを実行
  Browser->>Browser: ページを更新
  Browser->>User: ページを表示
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"PHP（サーバーサイド）の流れ："})}),e.jsx(i,{children:`
sequenceDiagram
  participant User as ユーザー
  participant Browser as ブラウザ
  participant Server as サーバー
  participant DB as データベース

  User->>Browser: ページをリクエスト
  Browser->>Server: リクエストを送信
  Server->>Server: PHPスクリプトを実行
  Server->>DB: データをリクエスト
  DB->>Server: データを返す
  Server->>Server: HTMLを作成
  Server->>Browser: HTMLを返す
  Browser->>User: ページを表示
`}),e.jsxs(r,{type:"info",title:"重要な違い",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"JavaScript"}),": ブラウザが解釈・実行（クライアント側）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PHP"}),": サーバーが解釈・実行してからHTMLとしてブラウザに送信"]}),`
`]}),e.jsx(s.p,{children:"PHPで作成されたコードは、ユーザーには見えません！"})]})]}),`
`,e.jsxs(n,{summary:"XAMPPのダウンロード",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"公式サイトからダウンロード："})}),e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.apachefriends.org/jp/download.html",children:"XAMPP公式ダウンロードページ"})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Windows版"}),e.jsx("div",{className:"text-sm text-slate-600",children:"「XAMPP for Windows」をクリックしてダウンロード"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"Mac版"}),e.jsx("div",{className:"text-sm text-slate-600",children:"「XAMPP for OS X」をクリックしてダウンロード"})]})]})]})}),e.jsx(r,{type:"info",title:"PHPバージョンについて",children:e.jsxs(s.p,{children:["複数のバージョンが表示されますが、特にこだわりがなければ",e.jsx(s.strong,{children:"最新版"}),"をダウンロードしてください。授業ではPHP 8.2系を使用します。"]})})]}),`
`,e.jsxs(n,{summary:"XAMPPのインストール手順",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Windows版のインストール："}),`
`,e.jsx(s.a,{href:"https://youtu.be/UoqnHREAoV0",children:"XAMPPインストール手順（Windows）"})]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"インストーラーを実行"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["ダウンロードした ",e.jsx(s.code,{children:".exe"})," ファイルをダブルクリック"]})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"コンポーネント選択"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Apache、MySQL、PHP、phpMyAdmin にチェックが入っていることを確認"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 font-bold",children:"3"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"インストール先を指定"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["デフォルト（",e.jsx(s.code,{children:"C:\\xampp"}),"）のままでOK"]})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 font-bold",children:"4"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"インストール完了"}),e.jsx("div",{className:"text-sm text-slate-600",children:"「Finish」をクリックしてXAMPPコントロールパネルを起動"})]})]})]})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Mac版のインストール："}),`
`,e.jsx(s.a,{href:"https://youtu.be/GZccPLRtMPY",children:"XAMPPインストール手順（Mac）"})]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full mr-3 font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"DMGファイルを開く"}),e.jsxs("div",{className:"text-sm text-slate-600",children:["ダウンロードした ",e.jsx(s.code,{children:".dmg"})," ファイルをダブルクリック"]})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full mr-3 font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"アプリケーションにドラッグ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"XAMPPアイコンをApplicationsフォルダにドラッグ＆ドロップ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full mr-3 font-bold",children:"3"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"セキュリティ許可"}),e.jsx("div",{className:"text-sm text-slate-600",children:"初回起動時に「システム環境設定」→「セキュリティ」で許可が必要"})]})]})]})}),e.jsx(r,{type:"warning",title:"インストール時の注意",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ウイルス対策ソフト"}),": 一時的に無効化が必要な場合があります"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"管理者権限"}),": インストールには管理者権限が必要です"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ファイアウォール"}),": Apacheの通信を許可するダイアログが表示されたら「許可」を選択"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"XAMPPの起動方法",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"Windows の場合："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3 font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"XAMPPコントロールパネルを起動"}),e.jsx("div",{className:"text-sm text-slate-600",children:"スタートメニューから「XAMPP Control Panel」を検索して起動"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3 font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ApacheとMySQLを起動"}),e.jsx("div",{className:"text-sm text-slate-600",children:"それぞれの行の「Start」ボタンをクリック"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"起動成功の確認"}),e.jsxs("div",{className:"text-sm text-green-700",children:["Apache と MySQL の背景が",e.jsx("strong",{children:"緑色"}),"になっていればOK"]})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"Mac の場合："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full mr-3 font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"XAMPP.appを起動"}),e.jsx("div",{className:"text-sm text-slate-600",children:"アプリケーションフォルダから「XAMPP」を起動"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full mr-3 font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"サービスを起動"}),e.jsx("div",{className:"text-sm text-slate-600",children:"「Manage Servers」タブで Apache と MySQL を選択し「Start」"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"起動成功の確認"}),e.jsxs("div",{className:"text-sm text-green-700",children:["ステータスが「",e.jsx("strong",{children:"Running"}),"」になっていればOK"]})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"動作確認："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ブラウザで ",e.jsx(s.code,{children:"http://localhost/"})," にアクセスして、XAMPPのダッシュボードが表示されれば成功！"]}),`
`]}),e.jsx(r,{type:"info",title:"ポートが使用中の場合",children:e.jsx(s.p,{children:"「Port 80 is already in use」というエラーが出た場合は、Skypeや他のWebサーバーが同じポートを使用している可能性があります。それらのアプリを終了してから再度起動してください。"})})]}),`
`,e.jsxs(n,{summary:"htdocsフォルダの場所と使い方",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["PHPファイルは",e.jsx(s.strong,{children:"htdocs"}),"フォルダに配置する"]}),`
`,e.jsx(s.li,{children:"このフォルダがWebサーバーの公開ディレクトリ（ドキュメントルート）になる"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ファイル配置場所："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"Windows"})]}),e.jsx("div",{className:"text-sm text-blue-700 font-mono bg-blue-100 p-2 rounded",children:e.jsx(s.p,{children:"C:\\xampp\\htdocs\\"})})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"Mac"})]}),e.jsx("div",{className:"text-sm text-slate-700 font-mono bg-slate-100 p-2 rounded",children:e.jsx(s.p,{children:"/Applications/XAMPP/htdocs/"})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"アクセスURLの対応："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"ファイルの場所"}),e.jsx(s.th,{children:"ブラウザでのURL"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"htdocs/index.php"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"http://localhost/index.php"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"htdocs/php01/index.php"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"http://localhost/php01/index.php"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"htdocs/php01/post.php"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"http://localhost/php01/post.php"})})]})]})]})]}),`
`,e.jsx(s.h2,{children:"授業前準備"}),`
`,e.jsxs(r,{type:"tip",title:"受講前の準備",children:[e.jsx(s.p,{children:"PHPを受講する際は、以下の手順を実施してください"}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"XAMPP起動"}),": Apache と MySQL を開始"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ファイル配置"}),": ",e.jsx(s.code,{children:"htdocs/"})," ディレクトリに展開した ",e.jsx(s.code,{children:"php01"}),"フォルダを配置"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ブラウザアクセス"}),": ",e.jsx(s.code,{children:"http://localhost/php01/"})," でアクセス確認"]}),`
`]}),e.jsx(s.p,{children:"※ 受講後は XAMPP のコントロールパネルから Apache と MySQL を停止してください。"})]}),`
`,e.jsxs(r,{type:"warning",title:"Macユーザーの権限エラー対応",children:[e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Error: EACCES: permission denied"})," が出た場合："]}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"php01"})," フォルダを右クリック"]}),`
`,e.jsx(s.li,{children:"「情報を見る」を選択"}),`
`,e.jsx(s.li,{children:"共有とアクセス権で、自分のユーザー、admin、everyone を「読み/書き」に変更"}),`
`,e.jsx(s.li,{children:"鍵マークをクリックして管理者権限で変更"}),`
`]})]}),`
`,e.jsx(s.h2,{children:"PHPとは何か？"}),`
`,e.jsxs(n,{summary:"PHPでできること",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["PHPは",e.jsx(s.strong,{children:"サーバーサイド"}),"で動作するプログラミング言語"]}),`
`,e.jsx(s.li,{children:"JavaScriptとは動作する場所が異なる"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"クライアントサイド（JavaScript）"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"実行場所:"})," ブラウザ",e.jsx("br",{}),`
`,e.jsx("strong",{children:"役割:"})," ユーザーインターフェース、アニメーション",e.jsx("br",{}),`
`,e.jsx("strong",{children:"制限:"})," ファイル保存、データベース接続不可"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"サーバーサイド（PHP）"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"実行場所:"})," サーバー",e.jsx("br",{}),`
`,e.jsx("strong",{children:"役割:"})," データ処理、ファイル操作、DB連携",e.jsx("br",{}),`
`,e.jsx("strong",{children:"利点:"})," セキュアな処理、永続的なデータ保存"]})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"具体的な活用例："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"CMS・ブログシステム"}),e.jsx("div",{className:"text-sm text-slate-600",children:"WordPress（世界シェア40%超）、記事管理システム"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ECサイト・オンラインショップ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"EC-CUBE、ショッピングカート、決済システム"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"SNS・コミュニティサイト"}),e.jsx("div",{className:"text-sm text-slate-600",children:"初期Facebook、ぐるナビ、会員制サイト"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データ処理・管理システム"}),e.jsx("div",{className:"text-sm text-slate-600",children:"顧客管理、在庫管理、データベース連携"})]})]})]})})]}),`
`,e.jsx(s.h2,{children:"初めてのPHP"}),`
`,e.jsxs(n,{summary:"PHPの基本構文",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"最初のPHPプログラム："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
echo "Hello, PHP!";
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"HTMLと組み合わせ："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<h1>今年は <?php echo 2025 ?> 年です</h1>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"HTMLをPHPから出力："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php echo "<h2>PHPから生成されたHTML</h2>" ?>
`})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"PHPタグ"}),e.jsxs("div",{className:"text-sm text-slate-600",children:[e.jsx(s.code,{children:"<?php"})," で開始、",e.jsx(s.code,{children:"?>"})," で終了"]})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"echo文"}),e.jsx("div",{className:"text-sm text-slate-600",children:"文字列やHTMLを出力する"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"HTMLとの混在"}),e.jsx("div",{className:"text-sm text-slate-600",children:"HTMLの中にPHPを埋め込み可能"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"エラー表示の設定",children:[e.jsx(s.p,{children:"開発時にエラーメッセージを表示するための設定："}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
ini_set('display_errors', 'On');    // エラーを表示させる
error_reporting(E_ALL);              // 全てのレベルのエラーを表示
?>
`})}),e.jsxs(r,{type:"warning",title:"本番環境での注意",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"本番環境では絶対に使用しないでください！"})}),e.jsx(s.p,{children:"エラーメッセージにはシステムの内部情報が含まれる可能性があり、セキュリティリスクとなります。開発環境でのみ使用しましょう。"})]}),e.jsxs(n,{summary:"XAMPPでデフォルトエラー表示を設定する方法",children:[e.jsx(s.p,{children:"毎回設定するのが面倒な場合は、XAMPPの設定でデフォルトでエラー表示をオンにできます。"}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"手順："})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"XAMPPコントロールパネルを開く"})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"php.iniを開く"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Apacheの行にある「Config」ボタンをクリック"}),`
`,e.jsx(s.li,{children:"「PHP (php.ini)」を選択"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"display_errorsを検索して変更"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Ctrl + F"}),"（Mac: ",e.jsx(s.code,{children:"Cmd + F"}),"）で検索"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"display_errors"})," を検索"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"display_errors = Off"})," を ",e.jsx(s.code,{children:"display_errors = On"})," に変更"]}),`
`]}),`
`]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ini",children:`; 変更前
display_errors = Off

; 変更後
display_errors = On
`})}),e.jsxs(s.ol,{start:"4",children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"ファイルを保存"}),"（",e.jsx(s.code,{children:"Ctrl + S"})," / ",e.jsx(s.code,{children:"Cmd + S"}),"）"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Apacheを再起動"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"XAMPPコントロールパネルでApacheの「Stop」→「Start」をクリック"}),`
`]}),`
`]}),`
`]}),e.jsx(r,{type:"warning",title:"注意",children:e.jsx(s.p,{children:"php.iniの変更後は必ずApacheを再起動してください。再起動しないと設定が反映されません。"})})]})]}),`
`,e.jsx(s.h2,{children:"PHP文法"}),`
`,e.jsxs(n,{summary:"変数の宣言・代入",children:[e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// 変数を用意
$name = "どんぶラッコ";
$birthMonth = 1;
$isStudent = true;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JavaScriptとの比較："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("div",{className:"text-lg font-bold",children:"JS"})}),e.jsx("div",{className:"font-medium text-blue-800",children:"JavaScript"})]}),e.jsx("div",{className:"text-sm text-blue-700 bg-blue-100 p-3 rounded font-mono",children:e.jsxs(s.p,{children:['const name = "どんぶラッコ";',e.jsx("br",{}),`
let birthMonth = 1;`]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("div",{className:"text-lg font-bold",children:"PHP"})}),e.jsx("div",{className:"font-medium text-green-800",children:"PHP"})]}),e.jsx("div",{className:"text-sm text-green-700 bg-green-100 p-3 rounded font-mono",children:e.jsxs(s.p,{children:['$name = "どんぶラッコ";',e.jsx("br",{}),`
$birthMonth = 1;`]})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"PHPの変数の特徴："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"$変数名"})," の形式で宣言"]}),`
`,e.jsx(s.li,{children:"事前宣言不要（いきなり使用可能）"}),`
`,e.jsxs(s.li,{children:["変数名は英数字とアンダースコア（",e.jsx(s.code,{children:"_"}),"）のみ使用可能"]}),`
`]})]}),`
`,e.jsxs(n,{summary:"変数の表示（var_dump / echo）",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["変数の中身を確認するには、",e.jsx(s.code,{children:"var_dump()"})," と ",e.jsx(s.code,{children:"echo"})," の2つの方法が存在する"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"var_dump() - デバッグ用"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["変数の ",e.jsx(s.strong,{children:"値と型（データ型）"})," を両方表示する"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
$birthMonth = 1;
$isStudent = true;

var_dump($name);      // string(18) "どんぶラッコ"
var_dump($birthMonth);       // int(1)
var_dump($isStudent); // bool(true)
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"echo - 出力用"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["値を",e.jsx(s.strong,{children:"そのまま文字列として表示"}),"する"]}),`
`,e.jsx(s.li,{children:"HTMLへの出力に使う"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
$birthMonth = 1;

echo $name;           // どんぶラッコ
echo $birthMonth;            // 1
?>
`})}),e.jsx(r,{type:"info",title:"var_dumpとechoの使い分け",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"var_dump()"}),": 変数の中身をデバッグしたい時（型も確認できる）"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"echo"}),": 画面に値を表示したい時（HTMLへの出力）"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["開発中は ",e.jsx(s.code,{children:"var_dump()"})," で変数の状態を確認し、完成したら ",e.jsx(s.code,{children:"echo"})," で表示するのが一般的"]}),`
`]}),`
`]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JavaScriptとの比較："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("div",{className:"text-lg font-bold",children:"JS"})}),e.jsx("div",{className:"font-medium text-blue-800",children:"JavaScript"})]}),e.jsx("div",{className:"text-sm text-blue-700 bg-blue-100 p-3 rounded font-mono",children:e.jsxs(s.p,{children:["console.log(name);",e.jsx("br",{}),`
// デバッグ出力`]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("div",{className:"text-lg font-bold",children:"PHP"})}),e.jsx("div",{className:"font-medium text-green-800",children:"PHP"})]}),e.jsx("div",{className:"text-sm text-green-700 bg-green-100 p-3 rounded font-mono",children:e.jsxs(s.p,{children:["var_dump($name);",e.jsx("br",{}),`
// デバッグ出力（型も表示）`]})})]})]})})]}),`
`,e.jsxs(n,{summary:"文字列の結合",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本的な結合（ドット演算子）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
echo "私の名前は" . $name . "です";
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ダブルクォーテーションを使った変数展開："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
echo "私の名前は $name です";           // 変数が展開される
echo "私の名前は{$name}です";         // より明確な記法
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"シングルクォーテーションの場合："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
echo '私の名前は $name です';         // $nameがそのまま表示される
?>
`})}),e.jsxs(r,{type:"info",title:"クォーテーションの使い分け",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["ダブルクォーテーション（",e.jsx(s.code,{children:'"'}),"）"]}),": 変数が展開される"]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["シングルクォーテーション（",e.jsx(s.code,{children:"'"}),"）"]}),": 変数は展開されず、文字列として扱われる"]}),`
`]}),e.jsx(s.p,{children:"処理速度はシングルクォーテーションの方がわずかに高速ですが、実用上の差はほとんどありません。"})]}),e.jsx(s.p,{children:e.jsxs(s.strong,{children:["結合演算子（",e.jsx(s.code,{children:".="}),"）："]})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = "どんぶラッコ";
$message = "私の名前は";
$message .= $name;           // JavaScriptの += に相当
$message .= "です";
echo $message;
?>
`})})]}),`
`,e.jsxs(n,{summary:"配列の作成と操作",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本的な配列："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$fruits = ["りんご", "バナナ", "オレンジ"];
echo $fruits[0];  // "りんご"
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"配列への要素追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$numbers = [1, 2, 3];
$numbers[] = 4;              // 末尾に追加
$numbers[] = 5;
echo "<pre>";
var_dump($numbers);          // 配列の中身を確認
echo "</pre>";
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"従来の配列宣言（array関数）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$fruits = array("りんご", "バナナ", "オレンジ");  // PHP 5.4以前の書き方
?>
`})}),e.jsx(n,{summary:"[補足] []とarray()の違い",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"[]"}),": PHP 5.4以降で利用可能な短縮記法"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"array()"}),": 従来からある言語構造"]}),`
`,e.jsx(s.li,{children:"実行速度に差はなし"}),`
`,e.jsxs(s.li,{children:["現在は ",e.jsx(s.code,{children:"[]"})," が推奨される書き方"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"条件分岐・繰り返し・関数",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"PHPの基本制御構文はJavaScriptとほぼ同じ！"}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 条件分岐
$age = 25;
if ($age >= 20) {
    echo "成人です";
} else {
    echo "未成年です";
}

// 繰り返し
for ($i = 0; $i < 5; $i++) {
    echo $i . "<br>";
}

// 関数
function greet($name) {
    return "こんにちは、" . $name . "さん！";
}

echo greet("田中");
?>
`})}),e.jsxs(r,{type:"warning",title:"ES6文法は使用不可",children:[e.jsx(s.p,{children:"PHPでは以下のES6（モダンJavaScript）文法は使用できません："}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["アロー関数（",e.jsx(s.code,{children:"() => {}"}),"）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"forEach"}),"、",e.jsx(s.code,{children:"map"}),"、",e.jsx(s.code,{children:"filter"}),"等の配列メソッド"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"const"}),"、",e.jsx(s.code,{children:"let"}),"キーワード"]}),`
`,e.jsxs(s.li,{children:["テンプレートリテラル（",e.jsx(s.code,{children:"`${}`"}),"）"]}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"便利な組み込み関数",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"ランダム数生成："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$randomNumber = rand(1, 10);  // 1〜10のランダムな整数
echo $randomNumber;
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"文字列分割："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$text = "りんご,バナナ,オレンジ";
$fruits = explode(",", $text);  // カンマで分割
var_dump($fruits);
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"日付・時刻："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$now = date("Y年m月d日 H:i:s");
echo $now;

$timestamp = date("YmdHis");    // 20251201143000 のような形式
echo $timestamp;
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"当たり外れアプリの例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$results = ["大吉", "中吉", "小吉", "凶"];
$randomIndex = rand(0, 3);      // 0〜3のランダム
echo $results[$randomIndex];
?>
`})})]}),`
`,e.jsx(s.h2,{children:"HTMLフォーム操作"}),`
`,e.jsxs(n,{summary:"フォームタグとHTTPメソッド",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本的なフォーム："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form action="process.php" method="post">
    お名前: <input type="text" name="name">
    Email: <input type="email" name="email">
    <input type="submit" value="送信">
</form>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"フォーム属性の説明："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"action"}),": フォームデータの送信先URL"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"method"}),": HTTPメソッド（",e.jsx(s.code,{children:"get"})," または ",e.jsx(s.code,{children:"post"}),"）"]}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"GET メソッド"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"})," URLにデータが表示される",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," 検索、データ取得",e.jsx("br",{}),`
`,e.jsx("strong",{children:"性質:"})," べき等（何度実行しても同じ結果）",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," ",e.jsx(s.code,{children:"?name=田中&email=test@example.com"})]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"POST メソッド"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"})," リクエスト本文に送信",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," データ登録、更新、削除",e.jsx("br",{}),`
`,e.jsx("strong",{children:"性質:"})," 実行のたびに処理が行われる",e.jsx("br",{}),`
`,e.jsx("strong",{children:"利点:"})," セキュアで大量データ送信可能"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"GETデータの受信",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"GET方式のフォーム："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form action="get_confirm.php" method="get">
    お名前: <input type="text" name="name">
    Email: <input type="text" name="email">
    <input type="submit" value="送信">
</form>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"PHPでGETデータを取得："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// get_confirm.php
$name = $_GET["name"];
$email = $_GET["email"];
?>

<!DOCTYPE html>
<html>
<head>
    <title>確認画面</title>
</head>
<body>
    <h1>送信内容確認</h1>
    <ul>
        <li>お名前: <?= $name ?></li>
        <li>Email: <?= $email ?></li>
    </ul>
</body>
</html>
`})}),e.jsx(r,{type:"info",title:"<?= の省略記法",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"<?= $name ?>"})," は ",e.jsx(s.code,{children:"<?php echo $name ?>"})," の短縮形です。よく使用されるため覚えておきましょう。"]})})]}),`
`,e.jsxs(n,{summary:"POSTデータの受信",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"POST方式のフォーム："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form action="post_confirm.php" method="post">
    お名前: <input type="text" name="name">
    Email: <input type="text" name="email">
    <input type="submit" value="送信">
</form>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"PHPでPOSTデータを取得："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// post_confirm.php
$name = $_POST["name"];
$email = $_POST["email"];
?>

<!DOCTYPE html>
<html>
<head>
    <title>送信完了</title>
</head>
<body>
    <h1>お問い合わせを受け付けました</h1>
    <div>
        <p><strong>お名前:</strong> <?= $name ?></p>
        <p><strong>Email:</strong> <?= $email ?></p>
    </div>
</body>
</html>
`})})]}),`
`,e.jsxs(n,{summary:"XSS（クロスサイトスクリプティング）対策",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"XSSの危険性を体験："})}),e.jsx(s.p,{children:"以下のHTMLタグやJavaScriptをフォームに入力してみましょう："}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<h1>見出しの送信</h1>
<script>alert("XSS攻撃成功！")<\/script>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"問題が発生する理由："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ユーザーの入力をそのままHTMLとして出力すると、HTMLタグやスクリプトが実行される"}),`
`,e.jsx(s.li,{children:"悪意あるスクリプトが実行される可能性がある"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"対策：htmlspecialchars()関数"})}),e.jsxs(s.p,{children:[e.jsx(s.code,{children:"post_confirm_xss.php"}),"では、",e.jsx(s.code,{children:"htmlspecialchars()"}),"関数を使ってユーザー入力をエスケープしています："]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
$name = $_POST["name"];
$email = $_POST["email"];
?>

<li>お名前: <?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?></li>
<li>メール: <?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?></li>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"htmlspecialchars()の役割："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"HTMLの特殊文字をエスケープして、安全に表示する"}),`
`,e.jsx(s.li,{children:"第1引数：エスケープする文字列"}),`
`,e.jsxs(s.li,{children:["第2引数：",e.jsx(s.code,{children:"ENT_QUOTES"})," - シングルクォートとダブルクォートの両方をエスケープ"]}),`
`,e.jsxs(s.li,{children:["第3引数：",e.jsx(s.code,{children:"'UTF-8'"})," - 文字エンコーディングを指定"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"エスケープされる文字："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"<"})," → ",e.jsx(s.code,{children:"&lt;"})," （HTMLタグの開始記号）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:">"})," → ",e.jsx(s.code,{children:"&gt;"})," （HTMLタグの終了記号）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:'"'})," → ",e.jsx(s.code,{children:"&quot;"})," （ダブルクォート）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"'"})," → ",e.jsx(s.code,{children:"&#039;"})," （シングルクォート、ENT_QUOTES使用時）"]}),`
`]}),e.jsxs(s.p,{children:["これにより、",e.jsx(s.code,{children:'<script>alert("XSS")<\/script>'}),"のような入力も、そのままテキストとして表示され、実行されなくなります。"]}),e.jsxs(r,{type:"warning",title:"セキュリティは最重要",children:[e.jsx(s.p,{children:e.jsxs(s.strong,{children:["ユーザーからの入力は必ず",e.jsx(s.code,{children:"htmlspecialchars()"}),"でエスケープしましょう！"]})}),e.jsxs(s.p,{children:["データベースに保存する前ではなく、",e.jsx(s.strong,{children:"HTMLに出力する直前"}),"でエスケープすることが重要です。"]})]})]}),`
`,e.jsx(s.h2,{children:"ファイル操作"}),`
`,e.jsxs(n,{summary:"ファイル操作の基本",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["PHPの大きな特徴の一つが、",e.jsx(s.strong,{children:"サーバー上のファイルを読み書きできる"}),"こと"]}),`
`,e.jsx(s.li,{children:"これによりデータの永続化が可能になる"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4",children:e.jsx("div",{className:"w-8 h-8 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})})}),e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"CSVファイルを擬似データベースとして活用"}),e.jsx("div",{className:"text-sm text-slate-600 max-w-md mx-auto",children:e.jsxs(s.p,{children:["データベースを使わずに、CSVファイルで",e.jsx("br",{}),"データの読み書きを体験してみよう！"]})})]})})]}),`
`,e.jsxs(n,{summary:"ファイルへの書き込み",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本的なファイル書き込み："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 現在の日時を文字列として作成
$currentTime = date("Y-m-d H:i:s");

// ファイルを開く（'a'は追記モード）
$file = fopen("data/data.txt", "a");

// ファイルに書き込み
fwrite($file, $currentTime . "\\n");

// ファイルを閉じる
fclose($file);

echo "データを書き込みました！";
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ファイルモードの種類："})}),e.jsx(l,{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"モード"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"説明"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"用途"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:'"r"'}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"読み取り専用"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"ファイルの内容を読む"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:'"w"'}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"書き込み専用（上書き）"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"ファイルを新規作成・上書き"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:'"a"'}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"書き込み専用（追記）"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"ファイルの末尾に追加"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:'"r+"'}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"読み書き"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"既存ファイルの読み書き"})]})]})]})})})]}),`
`,e.jsxs(n,{summary:"フォームデータをファイルに保存",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"フォームからのデータ書き込み："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// write.php
if ($_POST) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $timestamp = date("Y-m-d H:i:s");
    
    // CSVフォーマットでデータを作成
    $csvData = $timestamp . "," . $name . "," . $email . "\\n";
    
    // ファイルに書き込み
    $file = fopen("data/data.csv", "a");
    fwrite($file, $csvData);
    fclose($file);
    
    echo "データを保存しました！";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>データ登録</title>
</head>
<body>
    <h1>お客様情報登録</h1>
    <form action="write.php" method="post">
        お名前: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" value="登録">
    </form>
</body>
</html>
`})}),e.jsxs(r,{type:"tip",title:"CSVフォーマット",children:[e.jsx(s.p,{children:"CSV（Comma Separated Values）は、データをカンマで区切って保存する形式です："}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`2025-01-15 14:30:25,田中太郎,tanaka@example.com
2025-01-15 14:35:12,佐藤花子,sato@example.com
`})}),e.jsx(s.p,{children:"ExcelやGoogleスプレッドシートでも開ける汎用的な形式です。"})]})]}),`
`,e.jsxs(n,{summary:"ファイルからの読み込み",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"ファイル内容の表示："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// read.php
echo "<h1>登録データ一覧</h1>";

// ファイルが存在するかチェック
if (file_exists("data/data.csv")) {
    $file = fopen("data/data.csv", "r");
    
    echo "<table border='1'>";
    echo "<tr><th>登録日時</th><th>お名前</th><th>Email</th></tr>";
    
    // ファイルを1行ずつ読み込み
    while ($line = fgets($file)) {
        $line = trim($line);  // 改行文字を除去
        if ($line !== "") {
            $data = explode(",", $line);  // カンマで分割
            echo "<tr>";
            echo "<td>" . htmlspecialchars($data[0]) . "</td>";
            echo "<td>" . htmlspecialchars($data[1]) . "</td>";
            echo "<td>" . htmlspecialchars($data[2]) . "</td>";
            echo "</tr>";
        }
    }
    
    echo "</table>";
    fclose($file);
} else {
    echo "<p>データがまだ登録されていません。</p>";
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"より見やすい表示："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// データ読み込みと表示
if (file_exists("data/data.csv")) {
    $file = fopen("data/data.csv", "r");
    $dataList = [];
    
    while ($line = fgets($file)) {
        $line = trim($line);
        if ($line !== "") {
            $dataList[] = explode(",", $line);
        }
    }
    fclose($file);
    
    // データが存在する場合
    if (!empty($dataList)) {
        echo "<style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            tr:nth-child(even) { background-color: #f9f9f9; }
        </style>";
        
        echo "<table>";
        echo "<tr><th>No.</th><th>登録日時</th><th>お名前</th><th>Email</th></tr>";
        
        foreach ($dataList as $index => $data) {
            echo "<tr>";
            echo "<td>" . ($index + 1) . "</td>";
            echo "<td>" . htmlspecialchars($data[0]) . "</td>";
            echo "<td>" . htmlspecialchars($data[1]) . "</td>";
            echo "<td>" . htmlspecialchars($data[2]) . "</td>";
            echo "</tr>";
        }
        
        echo "</table>";
        echo "<p>総登録件数: " . count($dataList) . "件</p>";
    }
}
?>
`})})]}),`
`,e.jsxs(n,{summary:"[補足] ファイル操作の実用例",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"ログファイルの作成："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
function writeLog($message) {
    $timestamp = date("Y-m-d H:i:s");
    $logEntry = "[{$timestamp}] {$message}\\n";
    
    $file = fopen("logs/app.log", "a");
    fwrite($file, $logEntry);
    fclose($file);
}

// 使用例
writeLog("ユーザーがログインしました: " . $_POST['username']);
writeLog("データが更新されました");
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"設定ファイルの読み込み："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// config.txt の内容
// site_name=マイサイト
// max_upload_size=5MB
// admin_email=admin@example.com

function loadConfig($filename) {
    $config = [];
    $file = fopen($filename, "r");
    
    while ($line = fgets($file)) {
        $line = trim($line);
        if ($line && strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $config[trim($key)] = trim($value);
        }
    }
    
    fclose($file);
    return $config;
}

$config = loadConfig("config.txt");
echo $config['site_name'];  // "マイサイト"
?>
`})})]}),`
`,e.jsx(s.h2,{children:"まとめ"}),`
`,e.jsx(n,{summary:"今回学んだこと",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"サーバーサイドプログラミング"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ブラウザではなくサーバーで実行される処理"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"XAMPP環境構築"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ローカルでのWebサーバー・データベース環境"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"PHP文法"}),e.jsx("div",{className:"text-sm text-slate-600",children:"変数、配列、関数の基本的な使い方"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"フォーム処理・ファイル操作"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データの送受信と永続化"})]})]})]})})})]})}function re(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(A,{...d})}):A(d)}function m(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const le=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));function T(d){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||p("Callout"),n||p("Details"),l||p("Infographic"),i||p("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#02 PHP - データベース連携（CRUD完全版）"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"SQLの基本文法（INSERT、SELECT、UPDATE、DELETE）を習得する"}),`
`,e.jsxs(s.li,{children:["PHPからデータベースの",e.jsx(s.strong,{children:"CRUD操作"}),"ができるようになる"]}),`
`,e.jsx(s.li,{children:"SQLインジェクション対策と関数化で安全なコードを書けるようになる"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsxs(s.p,{children:["zipファイルをダウンロード後に展開し、XAMPPの",e.jsx(s.code,{children:"htdocs"}),"フォルダに配置してください！"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/php02.zip",children:"php02.zip"})]}),`
`]})]}),`
`,e.jsxs(n,{summary:"授業前準備",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. XAMPP起動"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": Apache と MySQL が緑色になっていればOK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),': MySQL Database と Apache Web Server が "Running" になっていればOK']}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. ファイル配置"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": ",e.jsx(s.code,{children:"C:/XAMPP/htdocs/php02/"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),": ",e.jsx(s.code,{children:"/Applications/XAMPP/htdocs/php02/"})]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. 動作確認"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"http://localhost/php02/"})," にアクセス"]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"データベースとSQLの基礎"}),`
`,e.jsxs(n,{summary:"データベースとは何か？",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"データベース（DB）"})," とは、「ある特定の条件に沿ってデータを集めたもの」です。"]}),e.jsx(r,{type:"warning",title:"重要なポイント",children:e.jsx(s.p,{children:`単にデータを集めた"だけ"ではデータベースではない！
データを効率的に管理・検索・更新できる仕組みが必要`})}),e.jsxs(l,{children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"text-center p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-green-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"Create"}),e.jsx("div",{className:"text-xs text-green-700",children:"新規作成"})]}),e.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-blue-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"Read"}),e.jsx("div",{className:"text-xs text-blue-700",children:"検索・取得"})]}),e.jsxs("div",{className:"text-center p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-orange-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"Update"}),e.jsx("div",{className:"text-xs text-orange-700",children:"更新・編集"})]}),e.jsxs("div",{className:"text-center p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-red-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"Delete"}),e.jsx("div",{className:"text-xs text-red-700",children:"削除"})]})]}),e.jsx("div",{className:"text-center mt-4 text-sm text-slate-600",children:e.jsx(s.p,{children:"データベースはこの4つの操作（CRUD）でデータを管理する"})})]})]}),`
`,e.jsxs(n,{summary:"リレーショナルデータベース（RDB）とは",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"リレーショナルデータベース"}),"は、データを",e.jsx(s.strong,{children:"表（テーブル）の形式"}),"で管理する方式"]}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"bg-slate-50 p-4 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"データベースの構造"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse bg-white",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-blue-100",children:[e.jsx("th",{className:"border border-slate-300 p-2 text-sm font-medium",children:"ID"}),e.jsx("th",{className:"border border-slate-300 p-2 text-sm font-medium",children:"名前"}),e.jsx("th",{className:"border border-slate-300 p-2 text-sm font-medium",children:"メール"}),e.jsx("th",{className:"border border-slate-300 p-2 text-sm font-medium",children:"登録日"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"1"}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"田中太郎"}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:e.jsx(s.a,{href:"mailto:tanaka@example.com",children:"tanaka@example.com"})}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"2025-01-15"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"2"}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"佐藤花子"}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:e.jsx(s.a,{href:"mailto:sato@example.com",children:"sato@example.com"})}),e.jsx("td",{className:"border border-slate-300 p-2 text-sm",children:"2025-01-16"})]})]})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium text-blue-700",children:"縦方向（列・フィールド）"}),e.jsx("div",{className:"text-slate-600",children:"ID、名前、メールなどの項目"})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{className:"font-medium text-green-700",children:"横方向（行・レコード）"}),e.jsx("div",{className:"text-slate-600",children:"1人分のデータセット"})]})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本用語："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"テーブル"}),": データを格納する表"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"行（レコード）"}),": 1件分のデータ（横方向）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"列（フィールド）"}),": データの項目（縦方向）"]}),`
`]})]}),`
`,e.jsxs(n,{summary:"データベース管理システム（DBMS）",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"DBMS（Database Management System）"})," は、データベースを操作・管理するためのシステム"]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"利用者（PHPアプリケーション）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"SQL文でデータベースに命令を送信"})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"w-6 h-6 text-slate-400",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})}),e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"DBMS（MySQL/MariaDB）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"SQL文を解釈してデータベースを操作"})]})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"w-6 h-6 text-slate-400",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データベース"}),e.jsx("div",{className:"text-sm text-slate-600",children:"実際のデータが保存される場所"})]})]})]})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"RDBMS（Relational Database Management System）"})," は、リレーショナルデータベース専用の管理システム"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"MySQL/MariaDBについて："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"MySQL"}),": 世界で最も人気のあるRDBMSの一つ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"MariaDB"}),": MySQLから派生した互換性のあるRDBMS"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"XAMPP"}),": MariaDBがプリインストール（MySQLとほぼ同じ操作感）"]}),`
`]})]}),`
`,e.jsxs(n,{summary:"SQLとは",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"SQL（Structured Query Language）"})," は、RDBMSを操作するための専用言語"]}),e.jsx(i,{children:`
graph LR
  A[利用者] -->|SQL文| B[RDBMS]
  B -->|SQL実行| C[データベース]
  C -->|結果| B
  B -->|結果| A
  
  style A fill:#e2e8f0
  style B fill:#fef3c7
  style C fill:#dcfce7
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"SQLでできること："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CREATE"}),": データベース・テーブルの作成"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"INSERT"}),": データの登録"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SELECT"}),": データの取得・検索"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"UPDATE"}),": データの更新"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DELETE"}),": データの削除"]}),`
`]}),e.jsx(r,{type:"info",title:"標準化された言語",children:e.jsx(s.p,{children:"SQLは国際標準（ISO）として規格化されているため、MySQL、PostgreSQL、SQLiteなど、どのRDBMSでも基本的な文法は共通"})})]}),`
`,e.jsx(s.h2,{children:"今回作るシステムの概要"}),`
`,e.jsxs(n,{summary:"アンケートフォームを作ろう",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["今回は ",e.jsx(s.strong,{children:"アンケートフォーム"})," システムを作りながら、データベース操作（CRUD）を学ぶ"]}),`
`]}),e.jsx(r,{type:"info",title:"アンケートフォームの機能",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["ユーザーからの回答を ",e.jsx(s.strong,{children:"保存"}),"（Create）"]}),`
`,e.jsxs(s.li,{children:["回答一覧を ",e.jsx(s.strong,{children:"表示"}),"（Read）"]}),`
`,e.jsxs(s.li,{children:["回答内容を ",e.jsx(s.strong,{children:"編集"}),"（Update）"]}),`
`,e.jsxs(s.li,{children:["不要な回答を ",e.jsx(s.strong,{children:"削除"}),"（Delete）"]}),`
`]})}),e.jsx(i,{children:`
flowchart LR
  subgraph "ユーザー操作"
      A[フォーム入力] --> B[送信]
      C[一覧表示] --> D[詳細確認]
      D --> E[編集]
      D --> F[削除]
  end
  
  subgraph "PHPファイル"
      G[insert.php]
      H[select.php]
      I[detail.php]
      J[update.php]
      K[delete.php]
  end
  
  subgraph "データベース"
      L[(MySQL)]
  end
  
  B --> G --> L
  C --> H --> L
  D --> I --> L
  E --> J --> L
  F --> K --> L
`})]}),`
`,e.jsxs(n,{summary:"CRUDとは？",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"データベース操作の基本となる4つの機能の頭文字をとった言葉"}),`
`]}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"操作"}),e.jsx(s.th,{children:"意味"}),e.jsx(s.th,{children:"SQL文"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"C"}),"reate"]}),e.jsx(s.td,{children:"データの新規作成"}),e.jsx(s.td,{children:"INSERT"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"R"}),"ead"]}),e.jsx(s.td,{children:"データの読み取り・検索"}),e.jsx(s.td,{children:"SELECT"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"U"}),"pdate"]}),e.jsx(s.td,{children:"データの更新・編集"}),e.jsx(s.td,{children:"UPDATE"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"D"}),"elete"]}),e.jsx(s.td,{children:"データの削除"}),e.jsx(s.td,{children:"DELETE"})]})]})]}),e.jsx(r,{type:"info",title:"Webアプリの基本",children:e.jsx(s.p,{children:"ほとんどのWebアプリケーション（SNS、ECサイト、ブログなど）はこのCRUD操作の組み合わせで成り立っています！"})})]}),`
`,e.jsx(s.h2,{children:"phpMyAdminとデータベース作成"}),`
`,e.jsxs(n,{summary:"phpMyAdminとは",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"phpMyAdmin"})," は、WebブラウザからMySQLを操作・管理できるWebアプリケーション"]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"通常の操作（コマンドライン）"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"方法:"})," ターミナルでSQL文を直接実行",e.jsx("br",{}),`
`,e.jsx("strong",{children:"難易度:"})," 高い",e.jsx("br",{}),`
`,e.jsx("strong",{children:"対象:"})," 上級者向け"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"phpMyAdmin（GUI）"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"方法:"})," Webブラウザの操作画面",e.jsx("br",{}),`
`,e.jsx("strong",{children:"難易度:"})," 低い",e.jsx("br",{}),`
`,e.jsx("strong",{children:"対象:"})," 初心者にも優しい"]})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"アクセス方法："})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"http://localhost/dashboard/"})," → phpMyAdminをクリック"]}),`
`,e.jsxs(s.li,{children:["直接アクセス: ",e.jsx(s.code,{children:"http://localhost/phpmyadmin/"})]}),`
`]}),e.jsx(r,{type:"tip",title:"日本語設定",children:e.jsx(s.p,{children:"英語表示の場合は、Language設定から「日本語 - Japanese」を選択"})})]}),`
`,e.jsxs(n,{summary:"今回作成するデータベース構造",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"アンケートシステム用のデータベースを作成します："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"データベース設計"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsx("div",{children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"データベース名:"})," ",e.jsx(s.code,{children:"gs_db"})]})}),e.jsx("div",{children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"テーブル名:"})," ",e.jsx(s.code,{children:"gs_an_table"})]})})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-100",children:[e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"フィールド名"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"データ型"}),e.jsx("th",{className:"p-3 text-left font-medium text-slate-800 border border-slate-200",children:"役割"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:"id"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"int(12) AUTO_INCREMENT PRIMARY_KEY"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"一意のID（自動採番）"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:"name"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"varchar(64)"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"回答者の名前"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:"email"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"varchar(256)"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"メールアドレス"})]}),e.jsxs("tr",{className:"bg-slate-50",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:"naiyou"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"text"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"アンケート内容"})]}),e.jsxs("tr",{className:"bg-white",children:[e.jsx("td",{className:"p-3 font-mono text-blue-600 border border-slate-200",children:"indate"}),e.jsx("td",{className:"p-3 text-slate-700 border border-slate-200",children:"datetime"}),e.jsx("td",{className:"p-3 text-sm text-slate-600 border border-slate-200",children:"登録日時"})]})]})]})})]})})]}),`
`,e.jsxs(n,{summary:"データベースの作成手順",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. データベース作成："})}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"phpMyAdminにアクセス"}),`
`,e.jsx(s.li,{children:"左サイドバーの「新規作成」をクリック"}),`
`,e.jsxs(s.li,{children:["以下の設定でデータベースを作成：",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"データベース名"}),": ",e.jsx(s.code,{children:"gs_db"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"照合順序"}),": ",e.jsx(s.code,{children:"utf8mb4_unicode_ci"})]}),`
`]}),`
`]}),`
`]}),e.jsx(r,{type:"warning",title:"注意点",children:e.jsxs(s.p,{children:["データベース名 ",e.jsx(s.code,{children:"gs_db"}),` の後ろに半角スペースが入らないよう注意！
過去にスペースが原因で動作しないケースがありました`]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. テーブル作成："})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"gs_db"})," データベースが選択されていることを確認"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"以下を入力して「作成」をクリック："}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"テーブル名"}),": ",e.jsx(s.code,{children:"gs_an_table"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"カラム数"}),": ",e.jsx(s.code,{children:"5"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"各カラムの詳細設定："}),`
`]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- SQL文で表現すると以下のようになります
CREATE TABLE gs_an_table (
    id int(12) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name varchar(64) NOT NULL,
    email varchar(256) NOT NULL,
    naiyou text DEFAULT NULL,
    indate datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`})})]}),`
`,e.jsxs(n,{summary:"照合順序（Collation）について",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"照合順序"}),"は、データの並び替えや比較のルールを決める設定"]}),e.jsx(l,{children:e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"主要な照合順序の比較"}),e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"p-2 bg-blue-50 rounded border-2 border-blue-400",children:[e.jsx("div",{className:"font-medium text-blue-800",children:"utf8mb4_general_ci（phpMyAdminのデフォルト）"}),e.jsx("div",{className:"text-blue-700",children:"A = a（区別しない）、🍣 = 🍺（区別しない）、は ≠ ぱ ≠ ば（区別する）"})]}),e.jsxs("div",{className:"p-2 bg-green-50 rounded",children:[e.jsx("div",{className:"font-medium text-green-800",children:"utf8mb4_unicode_ci"}),e.jsx("div",{className:"text-green-700",children:"A = a（区別しない）、🍣 = 🍺（区別しない）、は = ぱ = ば（区別しない）"})]}),e.jsxs("div",{className:"p-2 bg-orange-50 rounded",children:[e.jsx("div",{className:"font-medium text-orange-800",children:"utf8mb4_unicode_520_ci"}),e.jsx("div",{className:"text-orange-700",children:"A = a（区別しない）、🍣 ≠ 🍺（区別する）、は = ぱ = ば（区別しない）"})]}),e.jsxs("div",{className:"p-2 bg-red-50 rounded",children:[e.jsx("div",{className:"font-medium text-red-800",children:"utf8mb4_bin"}),e.jsx("div",{className:"text-red-700",children:"A ≠ a（区別する）、🍣 ≠ 🍺（区別する）、は ≠ ぱ ≠ ば（区別する）"})]})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"用語解説："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"utf8 vs utf8mb4"}),": 最大バイト数の違い（3バイト vs 4バイト）",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"utf8mb4は絵文字や特殊文字も表現可能"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ci (Case Insensitive)"}),": 大文字小文字を区別しない"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"bin (Binary)"}),": バイナリ比較（完全一致のみ）"]}),`
`]}),e.jsx(r,{type:"tip",title:"推奨設定",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"utf8mb4_general_ci"}),`（phpMyAdminのデフォルト）で問題ありません。
日本語の処理が適切で、絵文字にも対応しています。`]})})]}),`
`,e.jsx(s.h2,{children:"CREATE（データ登録）処理"}),`
`,e.jsxs(n,{summary:"SQLの基本ルール",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"コメントの書き方："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- これはコメントです
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"文字列の書き方："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- シングルクォーテーション（'）を使用
INSERT INTO users (name) VALUES ('田中太郎');
`})}),e.jsxs(r,{type:"warning",title:"クォーテーションの使い分け",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SQL"}),": シングルクォーテーション（",e.jsx(s.code,{children:"'"}),"）を使用"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PHP"}),": ダブルクォーテーション（",e.jsx(s.code,{children:'"'}),"）またはシングルクォーテーション（",e.jsx(s.code,{children:"'"}),"）"]}),`
`]}),e.jsx(s.p,{children:"混同しないよう注意！"})]})]}),`
`,e.jsxs(n,{summary:"INSERT（データ登録）",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本構文："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`INSERT INTO テーブル名 (カラムA, カラムB, ...) VALUES (値1, 値2, ...);
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実際の例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`INSERT INTO gs_an_table(name, email, naiyou, indate) 
VALUES ('どんぶラッコ', 'rakko@example.com', '内容テスト', sysdate());
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ポイント："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"id"})," は ",e.jsx(s.code,{children:"AUTO_INCREMENT"})," なので指定不要（自動で連番が振られる）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"sysdate()"})," は現在時刻を取得するSQL関数"]}),`
`,e.jsx(s.li,{children:"複数のデータを一度に登録することも可能"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-3",children:"INSERTの流れ"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-blue-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"1."})," テーブル名を指定（gs_an_table）"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"2."})," 挿入するカラムを指定（name, email, naiyou, indate）"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-orange-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"3."})," 対応する値を指定（VALUES以下）"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-purple-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"4."})," 実行されてデータがテーブルに追加される"]})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"複数データの登録："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`INSERT INTO gs_an_table(name, email, naiyou, indate) VALUES 
('田中太郎', 'tanaka@example.com', 'とても良いサービスです', sysdate()),
('佐藤花子', 'sato@example.com', '改善の余地があります', sysdate()),
('山田次郎', 'yamada@example.com', '満足しています', sysdate());
`})})]}),`
`,e.jsx(s.h2,{children:"READ（データ取得）処理"}),`
`,e.jsxs(n,{summary:"SELECT（データ取得）",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本構文："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`SELECT カラム名 FROM テーブル名;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"様々な取得方法："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 全件・全カラム取得
SELECT * FROM gs_an_table;

-- 特定カラムのみ取得
SELECT name FROM gs_an_table;
SELECT name, email FROM gs_an_table;

-- 条件指定
SELECT * FROM gs_an_table WHERE id = 1;
SELECT * FROM gs_an_table WHERE name = 'どんぶラッコ';
`})}),e.jsx(r,{type:"info",title:"*（アスタリスク）の意味",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"*"})," は「全てのカラム」を意味する。開発時は便利だが、本番環境では必要なカラムのみ指定することでパフォーマンスが向上する"]})})]}),`
`,e.jsxs(n,{summary:"条件指定・検索（WHERE句）",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"比較演算子："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 数値比較
SELECT * FROM gs_an_table WHERE id = 1;       -- 等しい
SELECT * FROM gs_an_table WHERE id >= 3;      -- 以上
SELECT * FROM gs_an_table WHERE id < 5;       -- 未満
SELECT * FROM gs_an_table WHERE id != 2;      -- 等しくない
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"論理演算子："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- AND（かつ）
SELECT * FROM gs_an_table WHERE id >= 1 AND id <= 3;

-- OR（または）
SELECT * FROM gs_an_table WHERE id = 1 OR id = 5;

-- NOT（否定）
SELECT * FROM gs_an_table WHERE NOT name = 'どんぶラッコ';
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"あいまい検索（LIKE句）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 前方一致：「2022-06」で始まる
SELECT * FROM gs_an_table WHERE indate LIKE '2022-06%';

-- 後方一致：「@gmail.com」で終わる  
SELECT * FROM gs_an_table WHERE email LIKE '%@gmail.com';

-- 部分一致：「@」を含む
SELECT * FROM gs_an_table WHERE email LIKE '%@%';

-- 特定文字数：「田中」の後に1文字
SELECT * FROM gs_an_table WHERE name LIKE '田中_';
`})}),e.jsx(l,{children:e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800",children:"LIKE演算子のワイルドカード"}),e.jsxs("div",{className:"mt-2 space-y-1 text-sm text-blue-700",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"%"})," : 0文字以上の任意の文字列"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"_"})," : 1文字の任意の文字"]})]})]})})})]}),`
`,e.jsxs(n,{summary:"ソート・制限（ORDER BY・LIMIT）",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"ソート（ORDER BY）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 昇順（ASC）- 小さい順
SELECT * FROM gs_an_table ORDER BY id ASC;

-- 降順（DESC）- 大きい順  
SELECT * FROM gs_an_table ORDER BY id DESC;

-- 複数カラムでソート
SELECT * FROM gs_an_table ORDER BY indate DESC, name ASC;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"取得件数制限（LIMIT）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 最新5件取得
SELECT * FROM gs_an_table ORDER BY indate DESC LIMIT 5;

-- 3番目から5件取得（ページネーション）
SELECT * FROM gs_an_table ORDER BY id ASC LIMIT 2, 5;
`})}),e.jsx(i,{children:`
graph LR
  A[全データ] -->|ORDER BY| B[ソート済み]
  B -->|LIMIT| C[制限された結果]
  
  style A fill:#e2e8f0
  style B fill:#fef3c7
  style C fill:#dcfce7
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実用例（最新投稿の取得）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- ブログの最新記事10件
SELECT * FROM articles 
ORDER BY created_at DESC 
LIMIT 10;

-- ランキング上位3位
SELECT * FROM scores 
ORDER BY score DESC 
LIMIT 3;
`})})]}),`
`,e.jsx(s.h2,{children:"共通関数ファイル（funcs.php）の作成"}),`
`,e.jsxs(n,{summary:"なぜ関数を外部ファイルに切り出すのか？",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"複数のページで同じ処理（DB接続など）を使いたい場合、毎回同じコードを書くのは非効率"}),`
`,e.jsx(s.li,{children:"外部ファイルに関数をまとめて、各ページで読み込む方法を学ぶ"}),`
`]}),e.jsx(r,{type:"info",title:"includeの役割",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:'include("ファイル名")'})," を使うと、別ファイルのコードを読み込んで使えるようになる"]})}),e.jsx(i,{children:`
flowchart LR
  A[funcs.php] -->|include| B[index.php]
  A -->|include| C[select.php]
  A -->|include| D[detail.php]
  A -->|include| E[その他のページ]
`})]}),`
`,e.jsxs(n,{summary:"funcs.phpを作成する",children:[e.jsxs(s.p,{children:["まず、共通で使う関数をまとめた ",e.jsx(s.code,{children:"funcs.php"})," を作成する"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// ===========================================
// 共通関数ファイル（funcs.php）
// ===========================================
// このファイルには、複数のページで使用する
// 共通の関数をまとめています。
// 各ページで include("funcs.php"); として読み込みます。
// ===========================================


// -----------------------------------------
// XSS対策用のエスケープ関数
// -----------------------------------------
// 使用場所: HTMLに値を出力する全ての箇所
// 目的: <script>などの悪意あるコードを無効化
// -----------------------------------------
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}


// -----------------------------------------
// データベース接続関数
// -----------------------------------------
// 戻り値: PDOオブジェクト
// 目的: DB接続処理を1箇所にまとめて保守性向上
// -----------------------------------------
function db_conn() {
    try {
        // -----------------------------------------
        // ローカル環境（XAMPP/MAMP）の設定
        // -----------------------------------------
        $db_name = "gs_db";      // データベース名
        $db_id   = "root";       // ユーザー名
        $db_pw   = "";           // パスワード（XAMPPは空、MAMPは"root"）
        $db_host = "localhost";  // ホスト名

        // -----------------------------------------
        // 本番環境の設定（さくらサーバーなど）
        // localhost以外の場合に切り替わる
        // -----------------------------------------
        if ($_SERVER["HTTP_HOST"] != 'localhost') {
            $db_name = "";       // 本番環境のDB名
            $db_id   = "";       // 本番環境のユーザー名
            $db_pw   = "";       // 本番環境のパスワード
            $db_host = "";       // 本番環境のホスト名
        }

        // -----------------------------------------
        // PDOでデータベースに接続
        // -----------------------------------------
        return new PDO(
            'mysql:dbname=' . $db_name . ';charset=utf8;host=' . $db_host,
            $db_id,
            $db_pw
        );

    } catch (PDOException $e) {
        // 接続エラーの場合はメッセージを表示して終了
        exit('DB Connection Error: ' . $e->getMessage());
    }
}


// -----------------------------------------
// SQLエラー表示関数
// -----------------------------------------
// 引数: $stmt - PDOStatementオブジェクト
// 目的: SQLエラー処理を統一化
// -----------------------------------------
function sql_error($stmt) {
    $error = $stmt->errorInfo();
    exit("SQL Error: " . $error[2]);
}


// -----------------------------------------
// リダイレクト関数
// -----------------------------------------
// 引数: $file_name - リダイレクト先のファイル名
// 目的: ページ遷移処理を統一化
// -----------------------------------------
function redirect($file_name) {
    header("Location: " . $file_name);
    exit();
}
`})}),e.jsx(r,{type:"tip",title:"funcs.phpに含まれる関数",children:e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"関数名"}),e.jsx(s.th,{children:"役割"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"h($str)"})}),e.jsx(s.td,{children:"XSS対策（HTMLエスケープ）"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"db_conn()"})}),e.jsx(s.td,{children:"データベース接続"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"sql_error($stmt)"})}),e.jsx(s.td,{children:"SQLエラー表示"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"redirect($file_name)"})}),e.jsx(s.td,{children:"ページ遷移"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"funcs.phpの読み込み方",children:[e.jsxs(s.p,{children:["他のPHPファイルで ",e.jsx(s.code,{children:"funcs.php"})," を使うには、ファイルの先頭で読み込む"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// funcs.phpを読み込む
include("funcs.php");

// これでfuncs.php内の関数が使えるようになる
$pdo = db_conn();  // データベース接続
`})}),e.jsx(r,{type:"warning",title:"読み込み位置に注意",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:'include("funcs.php");'})," は必ず ",e.jsx(s.strong,{children:"ファイルの先頭"}),"（他の処理より前）に書く"]})}),e.jsx(r,{type:"tip",title:"次のステップ",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"funcs.php"})," が準備できたら、実際に ",e.jsx(s.code,{children:"insert.php"}),` で使ってみよう！
この後のセクションで、データベースへの登録処理を実装していきます。`]})})]}),`
`,e.jsx(s.h2,{children:"PDOによるデータベース接続"}),`
`,e.jsxs(n,{summary:"PDOとは",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"PDO（PHP Data Objects）"})," は、PHPからデータベースに接続するためのクラス"]}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800",children:"1. 接続"}),e.jsx("div",{className:"text-sm text-blue-700",children:"データベースへの接続を確立"})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800",children:"2. 実行"}),e.jsx("div",{className:"text-sm text-green-700",children:"SQL文を安全に実行"})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"font-medium text-orange-800",children:"3. 結果"}),e.jsx("div",{className:"text-sm text-orange-700",children:"データの取得・操作結果を返却"})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"PDOの利点："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"セキュリティ"}),": SQLインジェクション対策"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"汎用性"}),": 複数のデータベース（MySQL、PostgreSQL、SQLiteなど）に対応"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"オブジェクト指向"}),": クラスベースの操作"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本的な使い方："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// PDOインスタンスの作成
$pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost', 'root', '');
`})})]}),`
`,e.jsxs(n,{summary:"データ登録機能の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. フォーム（index.php）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<form method="post" action="insert.php">
    <label for="name">お名前:</label>
    <input type="text" name="name" id="name" required>
    
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
    
    <label for="naiyou">ご意見:</label>
    <textarea name="naiyou" id="naiyou" required></textarea>
    
    <input type="submit" value="送信">
</form>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. 登録処理（insert.php）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 1. POSTデータ取得
$name = $_POST['name'];
$email = $_POST['email'];
$naiyou = $_POST['naiyou'];

// 2. データベース接続
try {
    // XAMPP環境での接続設定
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost', 'root', '');
} catch (PDOException $e) {
    exit('DBConnection Error:' . $e->getMessage());
}

// 3. SQL文の準備と実行
$sql = "INSERT INTO gs_an_table(name, email, naiyou, indate) VALUES(:name, :email, :naiyou, sysdate())";
$stmt = $pdo->prepare($sql);

// パラメータバインド（セキュリティ対策）
$stmt->bindValue(':name', $name, PDO::PARAM_STR);
$stmt->bindValue(':email', $email, PDO::PARAM_STR);
$stmt->bindValue(':naiyou', $naiyou, PDO::PARAM_STR);

$status = $stmt->execute();

// 4. 処理結果の判定
if ($status == false) {
    // エラー処理
    $error = $stmt->errorInfo();
    exit("SQL_Error:" . $error[2]);
} else {
    // 成功時はリダイレクト
    header("Location: index.php");
    exit();
}
?>
`})}),e.jsxs(r,{type:"info",title:"パスワード設定について",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"XAMPP"}),": パスワードは空文字（''）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"MAMP"}),": パスワードは 'root'"]}),`
`]}),e.jsx(s.p,{children:"環境に応じて適切な設定を使用する"})]})]}),`
`,e.jsxs(n,{summary:"データ一覧表示機能の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"select.php（一覧表示）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
require_once('funcs.php'); // XSS対策関数を読み込み

// 1. データベース接続
try {
    $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost', 'root', '');
} catch (PDOException $e) {
    exit('DBConnection Error:' . $e->getMessage());
}

// 2. データ取得SQL実行
$sql = "SELECT * FROM gs_an_table ORDER BY indate DESC";
$stmt = $pdo->prepare($sql);
$status = $stmt->execute();

// 3. データ表示の準備
$view = "";
if ($status == false) {
    // エラー処理
    $error = $stmt->errorInfo();
    exit("SQL_Error:" . $error[2]);
} else {
    // データの取得と表示用HTML生成
    while ($res = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $view .= '<div class="record">';
        $view .= '<h3>' . h($res['name']) . '</h3>';
        $view .= '<p>Email: ' . h($res['email']) . '</p>';
        $view .= '<p>内容: ' . h($res['naiyou']) . '</p>';
        $view .= '<p>投稿日: ' . h($res['indate']) . '</p>';
        $view .= '</div>';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>アンケート結果一覧</title>
    <style>
        .record { 
            border: 1px solid #ddd; 
            margin: 10px; 
            padding: 15px; 
            border-radius: 5px; 
        }
    </style>
</head>
<body>
    <h1>アンケート結果一覧</h1>
    <div class="container">
        <?= $view ?>
    </div>
    <a href="index.php">新規登録</a>
</body>
</html>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"重要なポイント："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"FETCH_ASSOC"}),e.jsx("div",{className:"text-sm text-slate-600",children:"連想配列でデータを取得（カラム名で指定可能）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"while文でループ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"取得したデータの件数分だけ自動でループ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"h()関数でXSS対策"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ユーザー入力データを安全に表示"})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"funcs.php（共通関数）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
function h($value) {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
`})})]}),`
`,e.jsx(s.h2,{children:"セキュリティ対策"}),`
`,e.jsxs(n,{summary:"SQLインジェクションとは",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"SQLインジェクション"})," は、悪意あるSQL文を注入してデータベースを不正操作する攻撃手法"]}),e.jsxs(r,{type:"error",title:"非常に危険な脆弱性",children:[e.jsx(s.p,{children:"SQLインジェクションが成功すると："}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"全データの漏洩・削除"}),`
`,e.jsx(s.li,{children:"管理者権限の取得"}),`
`,e.jsx(s.li,{children:`システム全体の乗っ取り
など、致命的な被害を受ける可能性がある`}),`
`]})]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"危険なコード例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// 危険！bindを使わない方法
$id = $_POST['id'];
$sql = "SELECT * FROM gs_an_table WHERE id=" . $id;
$stmt = $pdo->prepare($sql);
$status = $stmt->execute();
`})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"攻撃例："}),`
フォームに `,e.jsx(s.code,{children:"1 OR 'a' = 'a'"})," と入力すると："]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`SELECT * FROM gs_an_table WHERE id=1 OR 'a' = 'a'
`})}),e.jsx(s.p,{children:"この条件式は常に真になるため、全てのデータが取得されてしまう"}),e.jsx(i,{children:`
graph TD
  A[悪意あるユーザー] -->|"1 OR 'a' = 'a'"| B[フォーム入力]
  B --> C[PHP処理]
  C -->|危険なSQL生成| D[データベース]
  D -->|全データ流出| E[攻撃成功]
  
  style A fill:#fef2f2
  style E fill:#fef2f2
  style D fill:#fef3c7
`})]}),`
`,e.jsxs(n,{summary:"bindValue()による対策",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"安全なコード（推奨）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// bindValueを使用
$id = $_POST['id'];
$sql = "SELECT * FROM gs_an_table WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"bindValue()の仕組み："})}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-3",children:"プリペアドステートメントの動作"}),e.jsxs("div",{className:"space-y-2 text-sm text-green-700",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"1."})," SQL文をテンプレートとして準備（プレースホルダー :id を使用）"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"2."})," パラメータを安全な形式に変換"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"3."})," SQL文の構造を変更せずに値のみを挿入"]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-4 h-4 bg-green-500 rounded-full mr-3"}),e.jsxs("div",{children:[e.jsx("strong",{children:"4."})," 悪意あるSQL文が実行されることを防ぐ"]})]})]})]})})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"パラメータの種類："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// 文字列
$stmt->bindValue(':name', $name, PDO::PARAM_STR);

// 整数
$stmt->bindValue(':id', $id, PDO::PARAM_INT);

// 真偽値
$stmt->bindValue(':is_active', $isActive, PDO::PARAM_BOOL);

// NULL値
$stmt->bindValue(':comment', $comment, PDO::PARAM_NULL);
`})}),e.jsxs(r,{type:"success",title:"必ず守るべきルール",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"ユーザーからの入力を含むSQL文では、必ずbindValue()を使用する！"})}),e.jsx(s.p,{children:"これは絶対に守るべきセキュリティの基本"})]})]}),`
`,e.jsxs(n,{summary:"SQLインジェクション攻撃の実例と対策",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"攻撃シナリオの検証："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// 検証用コード（学習目的のみ・本番では使用禁止）
<?php
$view = '';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id = $_POST['id'];
    
    try {
        $pdo = new PDO('mysql:dbname=gs_db;charset=utf8;host=localhost', 'root', '');
    } catch (PDOException $e) {
        exit('DBConnection Error:' . $e->getMessage());
    }
    
    // ❌ 危険な方法
    $sql = "SELECT * FROM gs_an_table WHERE id=" . $id;
    echo "実行されるSQL: " . $sql . "<br><br>";
    
    $stmt = $pdo->prepare($sql);
    $status = $stmt->execute();
    
    if ($status == false) {
        $error = $stmt->errorInfo();
        exit("SQL_Error:" . $error[2]);
    } else {
        while ($res = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $view .= '<p>ID: ' . $res['id'] . ', 名前: ' . $res['name'] . '</p>';
        }
    }
}
?>

<form method="post">
    ID: <input type="text" name="id" placeholder="1 OR 'a' = 'a' を試してみてください">
    <input type="submit" value="検索">
</form>

<div>
    <h3>結果:</h3>
    <?= $view ?>
</div>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"対策版（安全なコード）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`// ✅ 安全な方法
$sql = "SELECT * FROM gs_an_table WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"検証結果の比較："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"危険なコード"})]}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"入力:"})," ",e.jsx(s.code,{children:"1 OR 'a' = 'a'"}),e.jsx("br",{}),`
`,e.jsx("strong",{children:"結果:"})," 全てのデータが取得される",e.jsx("br",{}),`
`,e.jsx("strong",{children:"リスク:"})," データ漏洩、不正操作"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"安全なコード"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"入力:"})," ",e.jsx(s.code,{children:"1 OR 'a' = 'a'"}),e.jsx("br",{}),`
`,e.jsx("strong",{children:"結果:"})," エラーまたは該当なし",e.jsx("br",{}),`
`,e.jsx("strong",{children:"利点:"})," 攻撃を無効化"]})})]})]})})]}),`
`,e.jsx(s.h2,{children:"UPDATE（データ更新）処理"}),`
`,e.jsxs(n,{summary:"更新処理の流れ",children:[e.jsx(s.p,{children:"データの更新は以下の手順で行う："}),e.jsx(i,{children:`
graph LR
  A[一覧画面] -->|編集リンク| B[詳細・編集画面]
  B -->|フォーム送信| C[更新処理]
  C -->|完了| D[一覧画面]
  
  style A fill:#e2e8f0
  style B fill:#fef3c7
  style C fill:#dcfce7
  style D fill:#e2e8f0
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"各ステップの詳細："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"一覧画面（select.php）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"編集リンクにIDパラメータを付与"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"詳細画面（detail.php）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"IDでデータ取得し、フォームに表示"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"更新処理（update.php）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"UPDATE SQLでデータベースを更新"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"UPDATE SQL文の基本",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本構文："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`UPDATE テーブル名 SET 列名1=値1, 列名2=値2, ... WHERE id=対象のID
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"具体例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`UPDATE gs_an_table 
SET name='田中太郎', email='tanaka@example.com', naiyou='更新されました' 
WHERE id=1;
`})}),e.jsxs(r,{type:"error",title:"WHERE句を忘れるな！",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"WHERE句を書き忘れると、テーブルの全データが更新されてしまう！"})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- ❌ 危険！全データが更新される
UPDATE gs_an_table SET name='全員の名前が変わる';

-- ✅ 安全！特定のIDのみ更新
UPDATE gs_an_table SET name='田中太郎' WHERE id=1;
`})}),e.jsx(s.p,{children:"この原則はDELETE文でも同様。必ずWHERE句で対象を限定する"})]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"UPDATEとINSERTの違い："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"INSERT（新規作成）"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"目的:"})," 新しいレコードを追加",e.jsx("br",{}),`
`,e.jsx("strong",{children:"条件:"})," WHERE句不要",e.jsx("br",{}),`
`,e.jsx("strong",{children:"結果:"})," レコード数が増える"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"UPDATE（更新）"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"目的:"})," 既存レコードを変更",e.jsx("br",{}),`
`,e.jsx("strong",{children:"条件:"})," WHERE句必須",e.jsx("br",{}),`
`,e.jsx("strong",{children:"結果:"})," レコード数は変わらない"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"select.php に編集リンクを追加",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"一覧画面に編集リンクを追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
include("funcs.php");
$pdo = db_conn();

$stmt = $pdo->prepare("SELECT * FROM gs_an_table ORDER BY indate DESC");
$status = $stmt->execute();

$view = "";
if ($status == false) {
    sql_error($stmt);
} else {
    while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // 編集リンクを追加（IDをGETパラメータで渡す）
        $view .= '<div class="record">';
        $view .= '<a href="detail.php?id=' . h($r["id"]) . '">';
        $view .= h($r["id"]) . " | " . h($r["name"]) . " | " . h($r["email"]);
        $view .= '</a>';
        $view .= '</div>';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>アンケート一覧</title>
    <style>
        .record { 
            border: 1px solid #ddd; 
            padding: 10px; 
            margin: 5px; 
            border-radius: 3px; 
        }
        .record a { 
            text-decoration: none; 
            color: #333; 
        }
        .record:hover { 
            background-color: #f0f0f0; 
        }
    </style>
</head>
<body>
    <h1>アンケート一覧</h1>
    <?= $view ?>
    <a href="index.php">新規登録</a>
</body>
</html>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"重要なポイント："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"?id="})," でIDパラメータをURL に付与"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"h()"})," 関数でIDも必ずエスケープ"]}),`
`,e.jsx(s.li,{children:"CSSでホバー効果を追加して視認性向上"}),`
`]})]}),`
`,e.jsxs(n,{summary:"detail.php（詳細・編集画面）の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"IDでデータを取得してフォームに表示："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// IDパラメータの取得
$id = $_GET["id"];

include("funcs.php");
$pdo = db_conn();

// 特定IDのデータを取得
$stmt = $pdo->prepare("SELECT * FROM gs_an_table WHERE id=:id");
$stmt->bindValue(":id", $id, PDO::PARAM_INT);
$status = $stmt->execute();

if ($status == false) {
    sql_error($stmt);
} else {
    $row = $stmt->fetch(); // 1件のみ取得
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>アンケート編集</title>
    <style>
        .form-group { margin: 15px 0; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], textarea { 
            width: 100%; 
            padding: 8px; 
            border: 1px solid #ddd; 
            border-radius: 4px; 
        }
        textarea { height: 100px; resize: vertical; }
        input[type="submit"] { 
            background: #007cba; 
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 4px; 
            cursor: pointer; 
        }
        input[type="submit"]:hover { background: #005a87; }
    </style>
</head>
<body>
    <h1>アンケート編集</h1>
    
    <form method="POST" action="update.php">
        <div class="form-group">
            <label for="name">名前:</label>
            <input type="text" name="name" id="name" value="<?= $row["name"] ?>" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" value="<?= $row["email"] ?>" required>
        </div>
        
        <div class="form-group">
            <label for="naiyou">内容:</label>
            <textarea name="naiyou" id="naiyou" required><?= $row["naiyou"] ?></textarea>
        </div>
        
        <!-- 隠しフィールドでIDを送信 -->
        <input type="hidden" name="id" value="<?= $row["id"] ?>">
        
        <input type="submit" value="更新">
        <a href="select.php">一覧に戻る</a>
    </form>
</body>
</html>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"重要なポイント："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"fetch() vs fetch_all()"}),e.jsx("div",{className:"text-sm text-slate-600",children:"1件のみの場合は fetch() を使用"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"hidden フィールド"}),e.jsx("div",{className:"text-sm text-slate-600",children:"IDをフォームで見えないように送信"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"value属性での初期値設定"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データベースから取得した値を初期値として表示"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"update.php（更新処理）の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"更新処理の実装："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 1. POSTデータ取得
$name   = $_POST["name"];
$email  = $_POST["email"];
$naiyou = $_POST["naiyou"];
$id     = $_POST["id"];  // 隠しフィールドから取得

// 2. DB接続
include("funcs.php");
$pdo = db_conn();

// 3. UPDATE SQL実行
$sql = "UPDATE gs_an_table SET name=:name, email=:email, naiyou=:naiyou WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':name',   $name,   PDO::PARAM_STR);
$stmt->bindValue(':email',  $email,  PDO::PARAM_STR);
$stmt->bindValue(':naiyou', $naiyou, PDO::PARAM_STR);
$stmt->bindValue(':id',     $id,     PDO::PARAM_INT);
$status = $stmt->execute();

// 4. 結果判定
if ($status == false) {
    sql_error($stmt);
} else {
    redirect("select.php");
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"UPDATE処理の特徴："})}),e.jsx(i,{children:`
graph TD
  A[フォームデータ受信] --> B[データ検証]
  B --> C[UPDATE SQL準備]
  C --> D[パラメータバインド]
  D --> E[SQL実行]
  E --> F{成功？}
  F -->|OK| G[一覧画面へリダイレクト]
  F -->|Error| H[エラー表示]
  
  style A fill:#e2e8f0
  style C fill:#fef3c7
  style G fill:#dcfce7
  style H fill:#fef2f2
`}),e.jsxs(r,{type:"info",title:"bindValueのデータ型指定",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PDO::PARAM_STR"}),": 文字列型（name, email, naiyou）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PDO::PARAM_INT"}),": 整数型（id）"]}),`
`]}),e.jsx(s.p,{children:"適切な型指定により、SQLインジェクション対策がより強固になる"})]})]}),`
`,e.jsx(s.h2,{children:"DELETE（データ削除）処理"}),`
`,e.jsxs(n,{summary:"削除処理の流れ",children:[e.jsx(s.p,{children:"データの削除は以下の手順で行う："}),e.jsx(i,{children:`
graph LR
  A[一覧画面] -->|削除リンク| B[削除処理]
  B -->|完了| C[一覧画面]
  
  style A fill:#e2e8f0
  style B fill:#fef2f2
  style C fill:#e2e8f0
`}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"GET パラメータ"}),": IDをURLで受け取り"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"即座にリダイレクト"}),": 削除後は一覧画面へ"]}),`
`]}),e.jsxs(r,{type:"warning",title:"削除処理の注意点",children:[e.jsx(s.p,{children:"今回は学習用のシンプルな実装ですが、実際のアプリケーションでは："}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"確認ダイアログ"}),": 「本当に削除しますか？」"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"論理削除"}),": データを完全に削除せず、フラグで管理"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"権限チェック"}),": 削除権限があるユーザーかチェック"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"関連データの処理"}),": 外部キー制約への対応"]}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"DELETE SQL文の基本",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本構文："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`DELETE FROM テーブル名 WHERE id=対象のID
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"具体例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`DELETE FROM gs_an_table WHERE id=1;
`})}),e.jsxs(r,{type:"error",title:"WHERE句は絶対に忘れるな！",children:[e.jsxs(s.p,{children:["UPDATEと同様、",e.jsx(s.strong,{children:"WHERE句を忘れると全データが削除"}),"される！"]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- NG: 全データが削除される
DELETE FROM gs_an_table;

-- OK: 特定のIDのみ削除
DELETE FROM gs_an_table WHERE id=1;
`})}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"復旧不可能"}),"なため、DELETE文は特に慎重に実行する"]})]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"DELETEとUPDATEの使い分け："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"物理削除（DELETE）"})]}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"})," データが完全に消失",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," テストデータ、一時データ",e.jsx("br",{}),`
`,e.jsx("strong",{children:"リスク:"})," 復旧不可能",e.jsx("br",{}),`
`,e.jsx("strong",{children:"パフォーマンス:"})," 高速"]})})]}),e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"論理削除（UPDATE）"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"特徴:"})," 削除フラグで管理",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," 重要な業務データ",e.jsx("br",{}),`
`,e.jsx("strong",{children:"利点:"})," 復旧可能、履歴保持",e.jsx("br",{}),`
`,e.jsx("strong",{children:"例:"})," deleted_at カラムに削除日時"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"select.php に削除リンクを追加",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"一覧画面に削除リンクを追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
include("funcs.php");
$pdo = db_conn();

$stmt = $pdo->prepare("SELECT * FROM gs_an_table ORDER BY indate DESC");
$status = $stmt->execute();

$view = "";
if ($status == false) {
    sql_error($stmt);
} else {
    while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $view .= '<div class="record">';
        
        // 編集リンク
        $view .= '<a href="detail.php?id=' . h($r["id"]) . '" class="edit-link">';
        $view .= h($r["id"]) . " | " . h($r["name"]) . " | " . h($r["email"]);
        $view .= '</a>';
        
        // 削除リンク
        $view .= '<a href="delete.php?id=' . h($r["id"]) . '" class="delete-link" ';
        $view .= 'onclick="return confirm(\\'本当に削除しますか？\\')">';
        $view .= '[削除]';
        $view .= '</a>';
        
        $view .= '</div>';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>アンケート一覧</title>
    <style>
        .record { 
            border: 1px solid #ddd; 
            padding: 10px; 
            margin: 5px; 
            border-radius: 3px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
        }
        .edit-link { 
            text-decoration: none; 
            color: #333; 
            flex-grow: 1; 
        }
        .delete-link { 
            color: #d32f2f; 
            text-decoration: none; 
            padding: 5px 10px; 
            border: 1px solid #d32f2f; 
            border-radius: 3px; 
            font-size: 12px; 
        }
        .delete-link:hover { 
            background-color: #d32f2f; 
            color: white; 
        }
        .record:hover { 
            background-color: #f0f0f0; 
        }
    </style>
</head>
<body>
    <h1>アンケート一覧</h1>
    <?= $view ?>
    <a href="index.php">新規登録</a>
</body>
</html>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"改善点："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"確認ダイアログ"}),": ",e.jsx(s.code,{children:'onclick="return confirm()"'})," で削除前確認"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"視覚的区別"}),": 削除リンクを赤色で表示"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"レイアウト"}),": flexboxで編集・削除リンクを整列"]}),`
`]})]}),`
`,e.jsxs(n,{summary:"delete.php（削除処理）の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"削除処理の実装："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 1. GETパラメータでIDを取得
$id = $_GET["id"];

// 入力値検証
if (!isset($id) || !is_numeric($id)) {
    exit("不正なIDです");
}

// 2. DB接続
include("funcs.php");
$pdo = db_conn();

// 3. DELETE SQL実行
$sql = "DELETE FROM gs_an_table WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();

// 4. 結果判定
if ($status == false) {
    sql_error($stmt);
} else {
    redirect("select.php");
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セキュリティ対策の追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// より堅牢な削除処理
$id = $_GET["id"];

// 入力値検証
if (!isset($id) || !is_numeric($id) || $id <= 0) {
    exit("不正なIDです");
}

include("funcs.php");
$pdo = db_conn();

// 削除前に対象データの存在確認
$check_sql = "SELECT COUNT(*) FROM gs_an_table WHERE id=:id";
$check_stmt = $pdo->prepare($check_sql);
$check_stmt->bindValue(':id', $id, PDO::PARAM_INT);
$check_stmt->execute();
$count = $check_stmt->fetchColumn();

if ($count == 0) {
    exit("削除対象のデータが見つかりません");
}

// 削除実行
$sql = "DELETE FROM gs_an_table WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$status = $stmt->execute();

if ($status == false) {
    sql_error($stmt);
} else {
    redirect("select.php");
}
?>
`})}),e.jsx(r,{type:"tip",title:"実際の削除処理でよく使われる手法",children:e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"1. 二段階認証"}),`: 確認画面 → 削除実行
`,e.jsx(s.strong,{children:"2. CSRF対策"}),`: ワンタイムトークンの使用
`,e.jsx(s.strong,{children:"3. ログ記録"}),`: 削除操作の履歴を保存
`,e.jsx(s.strong,{children:"4. バックアップ"}),`: 削除前にデータを別テーブルに保存
`,e.jsx(s.strong,{children:"5. 権限チェック"}),": ユーザーが削除権限を持っているか確認"]})})]}),`
`,e.jsx(s.h2,{children:"CRUD完成！ファイル構成"}),`
`,e.jsxs(n,{summary:"CRUDアプリケーションの完成",children:[e.jsx(s.p,{children:"これでCRUD（Create, Read, Update, Delete）の全機能が完成！"}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200 text-center",children:[e.jsx("div",{className:"w-8 h-8 text-blue-600 mx-auto mb-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"Create"}),e.jsx("div",{className:"text-sm text-blue-700",children:"新規登録"}),e.jsx("div",{className:"text-xs text-blue-600",children:"INSERT"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200 text-center",children:[e.jsx("div",{className:"w-8 h-8 text-green-600 mx-auto mb-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"Read"}),e.jsx("div",{className:"text-sm text-green-700",children:"一覧・詳細"}),e.jsx("div",{className:"text-xs text-green-600",children:"SELECT"})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200 text-center",children:[e.jsx("div",{className:"w-8 h-8 text-orange-600 mx-auto mb-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"Update"}),e.jsx("div",{className:"text-sm text-orange-700",children:"編集・更新"}),e.jsx("div",{className:"text-xs text-orange-600",children:"UPDATE"})]}),e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200 text-center",children:[e.jsx("div",{className:"w-8 h-8 text-red-600 mx-auto mb-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"Delete"}),e.jsx("div",{className:"text-sm text-red-700",children:"削除"}),e.jsx("div",{className:"text-xs text-red-600",children:"DELETE"})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ファイル構成の確認："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"index.php"}),": 新規登録フォーム（Create）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"insert.php"}),": 登録処理（Create）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"select.php"}),": 一覧表示（Read）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"detail.php"}),": 詳細・編集フォーム（Read & Update Form）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"update.php"}),": 更新処理（Update）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"delete.php"}),": 削除処理（Delete）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"funcs.php"}),": 共通関数群"]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"まとめ"}),`
`,e.jsx(n,{summary:"今回学んだこと",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データベースの基本概念"}),e.jsx("div",{className:"text-sm text-slate-600",children:"RDB、テーブル、RDBMS、SQLの関係性"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"SQL基本文法（CRUD）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"INSERT、SELECT、UPDATE、DELETE、WHERE、ORDER BY"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"PDOによるDB接続"}),e.jsx("div",{className:"text-sm text-slate-600",children:"PHP からデータベースへの安全な接続方法"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"セキュリティ対策"}),e.jsx("div",{className:"text-sm text-slate-600",children:"SQLインジェクション対策（bindValue必須）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"関数化によるコード改善"}),e.jsx("div",{className:"text-sm text-slate-600",children:"db_conn(), sql_error(), redirect() で再利用性向上"})]})]})]})})})]})}function de(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(T,{...d})}):T(d)}function p(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const ie=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));function I(d){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||u("Callout"),n||u("Details"),l||u("Infographic"),i||u("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#03 PHP - ユーザ管理"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"セッションとログイン認証の仕組みを理解する"}),`
`,e.jsx(s.li,{children:"ハッシュ化によるパスワード保護を実装する"}),`
`,e.jsx(s.li,{children:"実用的なユーザー認証システムを構築する"}),`
`,e.jsx(s.li,{children:"セキュリティ意識を高め、安全なWebアプリケーション開発を身につける"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsxs(s.p,{children:["zipファイルをダウンロード後に展開し、XAMPPの",e.jsx(s.code,{children:"htdocs"}),"フォルダに配置してください！"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/php03.zip",children:"php03.zip"})]}),`
`]})]}),`
`,e.jsxs(n,{summary:"授業前準備",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. XAMPP起動"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": Apache と MySQL が緑色になっていればOK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),': MySQL Database と Apache Web Server が "Running" になっていればOK']}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. ファイル配置"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": ",e.jsx(s.code,{children:"C:/XAMPP/htdocs/php03/"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),": ",e.jsx(s.code,{children:"/Applications/XAMPP/htdocs/php03/"})]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. 動作確認"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"http://localhost/php03/"})," にアクセス"]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"セッション（SESSION）の基礎"}),`
`,e.jsxs(n,{summary:"セッションとは何か？",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"セッション"}),"とは、ユーザーがWebサイトにアクセスしてから離脱するまでの一連の期間のこと"]}),`
`]}),e.jsx(r,{type:"info",title:"HTTPの根本的な問題",children:e.jsxs(s.p,{children:["HTTPは",e.jsx(s.strong,{children:"ステートレス"}),"なプロトコルのため、各リクエストが独立していて、サーバーは前回のやりとりを覚えていません。"]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ステートレスの問題を体感してみましょう："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"1. ログインページにアクセス"}),e.jsx("div",{className:"text-sm text-slate-600",children:"サーバー: 「はじめまして！」"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"2. ログイン処理を送信"}),e.jsx("div",{className:"text-sm text-slate-600",children:"サーバー: 「はじめまして！（誰だっけ？）」"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"3. 商品ページにアクセス"}),e.jsx("div",{className:"text-sm text-slate-600",children:"サーバー: 「はじめまして！（また知らない人だ）」"})]})]})]})}),e.jsx(s.p,{children:"これでは毎回ログインが必要になってしまいます！"})]}),`
`,e.jsxs(n,{summary:"セッションとCookieの仕組み",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"セッション"}),"と",e.jsx(s.strong,{children:"Cookie"}),"を組み合わせることで、サーバー側でユーザー情報を管理できる"]}),`
`]}),e.jsx(l,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"Cookie（クッキー）"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"役割:"})," セッションIDを保存・送信",e.jsx("br",{}),`
`,e.jsx("strong",{children:"保存場所:"})," ブラウザ",e.jsx("br",{}),`
`,e.jsx("strong",{children:"容量:"})," 最大4KB程度",e.jsx("br",{}),`
`,e.jsx("strong",{children:"内容:"})," セッションIDのみ（データは含まない）"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"セッション"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"役割:"})," ユーザー情報を管理",e.jsx("br",{}),`
`,e.jsx("strong",{children:"保存場所:"})," サーバー",e.jsx("br",{}),`
`,e.jsx("strong",{children:"容量:"})," 制限なし",e.jsx("br",{}),`
`,e.jsx("strong",{children:"内容:"})," ユーザーID、権限、設定等"]})})]})]})})}),e.jsx(r,{type:"info",title:"重要なポイント",children:e.jsx(s.p,{children:"Cookieには「セッションID」だけが保存され、実際のデータはサーバー側にあります。これにより、セキュリティを保ちながら状態を管理できます。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッション管理のフロー："})}),e.jsx(i,{children:`
sequenceDiagram
  participant C as ユーザー・ブラウザ
  participant S as Webサーバー
  
  Note over C,S: 初回接続時のやり取り
  
  C->>S: 1. Webサーバーに接続を要求
  
  Note right of S: Cookieを自動生成<br/>セッションIDと紐づけ
  
  S->>C: 2. Cookie（セッションID）を送信
  
  Note over C,S: 以降のやり取り
  
  Note left of C: ブラウザ内に<br/>Cookie保存済み
  
  C->>S: 3. Cookie付きでリクエスト送信
  
  Note right of S: Cookieからセッション情報を<br/>特定・復元
  
  S->>C: 4. ユーザー情報に基づいた<br/>適切なレスポンスを送信
`})]}),`
`,e.jsxs(n,{summary:"LocalStorageとの違い",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"LocalStorageとセッションの違いは...？"}),`
`]}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"LocalStorage"})]}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"実行場所:"})," ブラウザ（クライアントサイド）",e.jsx("br",{}),`
`,e.jsx("strong",{children:"データ保存:"})," ブラウザ内",e.jsx("br",{}),`
`,e.jsx("strong",{children:"セキュリティ:"})," JavaScriptから読み取り可能",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," 設定、一時的なデータ保存"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"PHP セッション"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"実行場所:"})," サーバー（サーバーサイド）",e.jsx("br",{}),`
`,e.jsx("strong",{children:"データ保存:"})," サーバー内",e.jsx("br",{}),`
`,e.jsx("strong",{children:"セキュリティ:"})," サーバー側で管理、高セキュリティ",e.jsx("br",{}),`
`,e.jsx("strong",{children:"用途:"})," ユーザー認証、機密情報管理"]})})]})]})}),e.jsx(r,{type:"tip",title:"使い分けの指針",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"LocalStorage"}),": ユーザー設定、フォーム入力の一時保存"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"セッション"}),": ログイン状態、権限管理、機密情報"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"セッションの基本操作",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッションIDの取得と確認："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// session01.php
// セッション開始
session_start();

// セッションIDを取得
$sid = session_id();
echo "セッションID: " . $sid;
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッションに変数を格納："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// セッションに値を保存
$_SESSION["name"] = "どんぶラッコ";
$_SESSION["age"] = 29;
$_SESSION["login_time"] = date("Y-m-d H:i:s");

echo "セッションにデータを保存しました";
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"別のページでセッションデータを取得："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// session02.php
session_start();

// セッションからデータを取得
$name = $_SESSION["name"];
$age = $_SESSION["age"];
$login_time = $_SESSION["login_time"];

echo "名前: " . $name . "<br>";
echo "年齢: " . $age . "<br>";
echo "ログイン時刻: " . $login_time;
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッションの保存場所確認："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"http://localhost/dashboard/phpinfo.php"})," にアクセスして ",e.jsx(s.code,{children:"session.save_path"})," を確認"]}),`
`]}),e.jsx(r,{type:"info",title:"セッションファイルの場所",children:e.jsx(s.p,{children:"セッションデータは実際のファイルとしてサーバーに保存されます。セッションIDに対応するファイル名で管理されています。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッションIDの再発行（セキュリティ対策）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// セッション固定攻撃を防ぐため、ログイン時にIDを再発行
session_regenerate_id(true); // trueで古いセッションファイルを削除
?>
`})})]}),`
`,e.jsx(s.h2,{children:"ユーザー認証システムの実装"}),`
`,e.jsxs(n,{summary:"認証システムの全体像",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"今回実装する認証システムの流れは..."}),`
`]}),e.jsx(i,{children:`
graph TD
  A[ログインページ] -->|ID・パスワード入力| B[ログイン処理]
  B -->|認証成功| C[セッション作成]
  B -->|認証失敗| A
  C --> D[保護されたページ]
  D -->|セッションチェック| E{ログイン済み？}
  E -->|YES| F[コンテンツ表示]
  E -->|NO| G[ログインページへリダイレクト]
  D -->|ログアウト| H[セッション破棄]
  H --> A
  
  style A fill:#e2e8f0
  style C fill:#dcfce7
  style F fill:#dcfce7
  style G fill:#fef2f2
  style H fill:#fef3c7
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"認証システムの特徴："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ログイン処理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データベースでユーザー情報を照合"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"2"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"セッション管理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ログイン状態をセッションで保持"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"3"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"アクセス制御"}),e.jsx("div",{className:"text-sm text-slate-600",children:"未ログインユーザーを保護"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"4"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"権限管理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"管理者・一般ユーザーの区別"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"ログイン処理の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"login_act.php（ログイン認証処理）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
session_start();
include("funcs.php");

// 1. POSTデータ取得
$lid = $_POST["lid"];  // ログインID
$lpw = $_POST["lpw"];  // ログインパスワード

// 2. DB接続
$pdo = db_conn();

// 3. データ登録SQL作成（最初は平文パスワードで確認）
$stmt = $pdo->prepare("SELECT * FROM gs_user_table WHERE lid = :lid AND lpw = :lpw");
$stmt->bindValue(':lid', $lid, PDO::PARAM_STR);
$stmt->bindValue(':lpw', $lpw, PDO::PARAM_STR);
$status = $stmt->execute();

// 4. SQL実行時にエラーがある場合の処理
if ($status == false) {
    sql_error($stmt);
}

// 5. 抽出データ数を取得
$val = $stmt->fetch();

// 6. 該当レコードがあればSESSIONに値を代入
if ($val['id'] != "") {
    // Login成功時
    $_SESSION['chk_ssid']  = session_id();
    $_SESSION['kanri_flg'] = $val['kanri_flg'];
    $_SESSION['name']      = $val['name'];
    $_SESSION['user_id']   = $val['id'];
    
    // セッションIDを再発行（セキュリティ対策）
    session_regenerate_id(true);
    $_SESSION['chk_ssid'] = session_id();
    
    redirect('select.php');
} else {
    // Login失敗時
    redirect('login.php');
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"重要なポイント："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"chk_ssid"}),e.jsx("div",{className:"text-sm text-slate-600",children:"セッションIDを保存してログイン状態を確認"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"kanri_flg"}),e.jsx("div",{className:"text-sm text-slate-600",children:"管理者権限フラグ（0=一般、1=管理者）"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"session_regenerate_id()"}),e.jsx("div",{className:"text-sm text-slate-600",children:"セッション固定攻撃を防ぐためIDを再発行"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"ログイン状態チェック関数の作成",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"funcs.php にセッションチェック関数を追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// 既存の関数に追加

// セッションチェック関数
function sschk() {
    if (!isset($_SESSION['chk_ssid']) || $_SESSION['chk_ssid'] != session_id()) {
        exit('LOGIN ERROR');
    } else {
        // セッションIDを再生成（セキュリティ強化）
        session_regenerate_id(true);
        $_SESSION['chk_ssid'] = session_id();
    }
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"保護したいページでセッションチェック："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// select.php の先頭に追加
session_start();
include("funcs.php");

// ログイン状態をチェック
sschk();

// 以下、既存のコード...
?>
`})}),e.jsx(r,{type:"warning",title:"すべての保護ページで実装必須",children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"detail.php"}),"、",e.jsx(s.code,{children:"update.php"}),"、",e.jsx(s.code,{children:"delete.php"})," など、ログインが必要なすべてのページで同様にセッションチェックを実装してください。"]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セッションチェックの動作："})}),e.jsx(i,{children:`
graph TD
  A[ページアクセス] --> B[session_start]
  B --> C[sschk関数実行]
  C --> D{セッションID一致？}
  D -->|YES| E[ID再生成]
  E --> F[ページ表示]
  D -->|NO| G[LOGIN ERROR]
  
  style F fill:#dcfce7
  style G fill:#fef2f2
`})]}),`
`,e.jsxs(n,{summary:"ログアウト処理の実装",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"logout.php（ログアウト処理）："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
session_start();
include("funcs.php");

// セッションの中身をすべて削除
$_SESSION = array();

// セッションクッキーの削除
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// セッション破棄
session_destroy();

// ログインページにリダイレクト
redirect('login.php');
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ナビゲーションにログアウトリンクを追加："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<!-- select.php のヘッダー部分 -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="select.php">データ一覧</a>
      </div>
      <div class="navbar-header">
        <a class="navbar-brand" href="index.php">新規登録</a>
      </div>
      <div class="navbar-header">
        <a class="navbar-brand" href="logout.php">ログアウト</a>
      </div>
      <div class="navbar-text">
        ようこそ、<?= h($_SESSION['name']) ?>さん
        <?= $_SESSION['kanri_flg'] == 1 ? '（管理者）' : '（一般ユーザー）' ?>
      </div>
    </div>
  </nav>
</header>
`})}),e.jsxs(r,{type:"success",title:"完全なログアウト処理",children:[e.jsx(s.p,{children:"上記のコードは以下を実行します："}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"セッションデータの削除"}),`
`,e.jsx(s.li,{children:"セッションクッキーの削除"}),`
`,e.jsx(s.li,{children:"セッション自体の破棄"}),`
`,e.jsx(s.li,{children:"ログインページへのリダイレクト"}),`
`]})]})]}),`
`,e.jsx(s.h2,{children:"パスワードハッシュ化"}),`
`,e.jsxs(n,{summary:"なぜハッシュ化が必要なのか？",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"平文パスワードの危険性："})}),e.jsx(r,{type:"danger",title:"絶対にやってはいけないこと",children:e.jsx(s.p,{children:"パスワードを平文（そのまま）でデータベースに保存すること！"})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("div",{className:"font-medium text-red-800",children:"平文パスワードの問題"})]}),e.jsx("div",{className:"text-sm text-red-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"データ漏洩時:"})," パスワードがそのまま露出",e.jsx("br",{}),`
`,e.jsx("strong",{children:"内部犯行:"})," 管理者がパスワードを知ることができる",e.jsx("br",{}),`
`,e.jsx("strong",{children:"ログ出力:"})," 誤ってパスワードがログに記録される",e.jsx("br",{}),`
`,e.jsx("strong",{children:"他サービス:"})," 同じパスワードを使い回されている場合の被害拡大"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"ハッシュ化の利点"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"不可逆性:"})," ハッシュから元パスワードを復元不可",e.jsx("br",{}),`
`,e.jsx("strong",{children:"セキュア:"})," データ漏洩時もパスワードは保護される",e.jsx("br",{}),`
`,e.jsx("strong",{children:"検証可能:"})," 入力パスワードとの照合が可能",e.jsx("br",{}),`
`,e.jsx("strong",{children:"業界標準:"})," すべてのWebサービスで採用"]})})]})]})})]}),`
`,e.jsxs(n,{summary:"PHPでのパスワードハッシュ化",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"パスワードハッシュ化の基本："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// hash.php
$password = "test123";

// パスワードをハッシュ化
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
echo "ハッシュ化されたパスワード: " . $hashed_password . "<br>";

// パスワード検証
$is_valid = password_verify("test123", $hashed_password);
var_dump($is_valid); // bool(true)

// 間違ったパスワードで検証
$is_invalid = password_verify("wrong", $hashed_password);
var_dump($is_invalid); // bool(false)
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実行結果例："})}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`ハッシュ化されたパスワード: $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
bool(true)
bool(false)
`})}),e.jsx(r,{type:"info",title:"ハッシュの特徴",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"同じパスワードでも実行するたびに異なるハッシュが生成される"}),`
`,e.jsx(s.li,{children:"これは「ソルト」という仕組みによるもの"}),`
`,e.jsxs(s.li,{children:["しかし ",e.jsx(s.code,{children:"password_verify()"})," で正しく検証できる"]}),`
`]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"データベースのパスワードを更新："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// パスワードハッシュ化用スクリプト
$passwords = [
    'admin@example.com' => 'admin123',
    'user@example.com' => 'user123'
];

include("funcs.php");
$pdo = db_conn();

foreach ($passwords as $lid => $plain_password) {
    $hashed_password = password_hash($plain_password, PASSWORD_DEFAULT);
    
    $sql = "UPDATE gs_user_table SET lpw = :lpw WHERE lid = :lid";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':lpw', $hashed_password, PDO::PARAM_STR);
    $stmt->bindValue(':lid', $lid, PDO::PARAM_STR);
    $stmt->execute();
    
    echo $lid . " のパスワードを更新しました<br>";
}
?>
`})})]}),`
`,e.jsxs(n,{summary:"認証処理の改良",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"login_act.php をハッシュ化対応に修正："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
session_start();
include("funcs.php");

// 1. POSTデータ取得
$lid = $_POST["lid"];
$lpw = $_POST["lpw"];

// 2. DB接続
$pdo = db_conn();

// 3. ログインIDのみで検索（パスワードは後で検証）
$stmt = $pdo->prepare("SELECT * FROM gs_user_table WHERE lid = :lid");
$stmt->bindValue(':lid', $lid, PDO::PARAM_STR);
$status = $stmt->execute();

if ($status == false) {
    sql_error($stmt);
}

// 4. ユーザー情報を取得
$val = $stmt->fetch();

// 5. パスワード検証
if ($val && password_verify($lpw, $val["lpw"])) {
    // ログイン成功
    $_SESSION['chk_ssid']  = session_id();
    $_SESSION['kanri_flg'] = $val['kanri_flg'];
    $_SESSION['name']      = $val['name'];
    $_SESSION['user_id']   = $val['id'];
    
    // セキュリティ情報を記録
    $_SESSION['ip_address'] = $_SERVER['REMOTE_ADDR'];
    $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
    $_SESSION['login_time'] = time();
    $_SESSION['last_activity'] = time();
    
    // セッションIDを再生成
    session_regenerate_id(true);
    $_SESSION['chk_ssid'] = session_id();
    
    redirect('select.php');
} else {
    // ログイン失敗
    redirect('login.php');
}
?>
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"セキュアな認証フローの完成："})}),e.jsx(i,{children:`
graph TD
  A[ログインフォーム送信] --> B[ログインIDでユーザー検索]
  B --> C{ユーザー存在？}
  C -->|NO| D[ログイン失敗]
  C -->|YES| E[password_verify実行]
  E --> F{パスワード一致？}
  F -->|NO| D
  F -->|YES| G[セッション作成]
  G --> H[セキュリティ情報記録]
  H --> I[セッションID再生成]
  I --> J[保護ページへリダイレクト]
  
  style D fill:#fef2f2
  style J fill:#dcfce7
`}),e.jsxs(r,{type:"success",title:"セキュアな認証システム完成",children:[e.jsx(s.p,{children:"これで以下の要素を含む、実用レベルの認証システムが完成しました："}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"ハッシュ化されたパスワード"}),`
`,e.jsx(s.li,{children:"セッション管理"}),`
`,e.jsx(s.li,{children:"セッションハイジャック対策"}),`
`,e.jsx(s.li,{children:"適切なアクセス制御"}),`
`,e.jsx(s.li,{children:"権限管理"}),`
`]})]})]}),`
`,e.jsx(s.h2,{children:"権限管理とアクセス制御"}),`
`,e.jsxs(n,{summary:"管理者・一般ユーザーの区別",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"権限による表示内容の変更："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-php",children:`<?php
// select.php での権限チェック
session_start();
include("funcs.php");
sschk();

$pdo = db_conn();
$stmt = $pdo->prepare("SELECT * FROM gs_an_table ORDER BY indate DESC");
$status = $stmt->execute();

$view = "";
if ($status == false) {
    sql_error($stmt);
} else {
    while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $view .= '<div class="record">';
        
        // 編集リンク（全ユーザー）
        $view .= '<a href="detail.php?id=' . h($r["id"]) . '" class="edit-link">';
        $view .= h($r["name"]) . " | " . h($r["email"]) . " | " . h($r["indate"]);
        $view .= '</a>';
        
        // 削除リンク（管理者のみ）
        if ($_SESSION['kanri_flg'] == 1) {
            $view .= '<a href="delete.php?id=' . h($r["id"]) . '" class="delete-link" ';
            $view .= 'onclick="return confirm(\\'本当に削除しますか？\\')">';
            $view .= '[削除]';
            $view .= '</a>';
        }
        
        $view .= '</div>';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>データ一覧</title>
    <style>
        .admin-only { 
            background-color: #fff3cd; 
            border: 1px solid #ffeaa7; 
            padding: 10px; 
            margin: 10px 0; 
        }
        .record { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 10px; 
            border: 1px solid #ddd; 
            margin: 5px 0; 
        }
        .delete-link { 
            color: #d32f2f; 
            text-decoration: none; 
            padding: 5px 10px; 
            border: 1px solid #d32f2f; 
            border-radius: 3px; 
        }
    </style>
</head>
<body>
    <h1>データ一覧</h1>
    
    <!-- 権限表示 -->
    <div class="user-info">
        ようこそ、<?= h($_SESSION['name']) ?>さん
        <?php if ($_SESSION['kanri_flg'] == 1): ?>
            <span class="admin-badge">管理者</span>
        <?php else: ?>
            <span class="user-badge">一般ユーザー</span>
        <?php endif; ?>
    </div>
    
    <!-- 管理者限定機能 -->
    <?php if ($_SESSION['kanri_flg'] == 1): ?>
        <div class="admin-only">
            <h3>管理者機能</h3>
            <ul>
                <li><a href="user_management.php">ユーザー管理</a></li>
                <li><a href="system_settings.php">システム設定</a></li>
                <li><a href="backup.php">データバックアップ</a></li>
            </ul>
        </div>
    <?php endif; ?>
    
    <!-- データ一覧 -->
    <?= $view ?>
    
    <div class="actions">
        <a href="index.php">新規登録</a> | 
        <a href="logout.php">ログアウト</a>
    </div>
</body>
</html>
`})}),e.jsx(r,{type:"tip",title:"権限管理のベストプラクティス",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"最小権限の原則"}),": ユーザーには必要最小限の権限のみ付与"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"明確な権限表示"}),": 現在の権限レベルを画面に表示"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"サーバーサイドでの制御"}),": JavaScriptでの権限制御は不十分"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ログ記録"}),": 重要な操作はログに記録"]}),`
`]})})]}),`
`,e.jsx(s.h2,{children:"まとめ・次のステップ"}),`
`,e.jsx(n,{summary:"今回学んだこと",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"セッション管理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ユーザー状態の保持とHTTPステートレス問題の解決"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.5-1.5a3 3 0 11-6 0 3 3 0 016 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ユーザー認証"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ログイン・ログアウト・権限管理の完全実装"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"セキュリティ対策"}),e.jsx("div",{className:"text-sm text-slate-600",children:"パスワードハッシュ化とセッション固定攻撃対策"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"権限管理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"管理者・一般ユーザーの適切な機能制限"})]})]})]})})})]})}function te(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(I,{...d})}):I(d)}function u(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const ce=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));function D(d){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||g("Callout"),n||g("Details"),l||g("Infographic"),i||g("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"#04 PHP - データベース設計基礎"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"データモデリング、ER図、正規化の基礎を理解し、適切なテーブル設計ができるようになる"}),`
`,e.jsx(s.li,{children:"INNER JOINを使って、複数テーブルからデータを取得できるようになる"}),`
`]})}),`
`,e.jsxs(r,{type:"note",title:"配布コード",children:[e.jsxs(s.p,{children:["zipファイルをダウンロード後に展開し、XAMPPの",e.jsx(s.code,{children:"htdocs"}),"フォルダに配置してください！"]}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["講義内資料: ",e.jsx(s.a,{href:"../../zip/php04.zip",children:"php04.zip"})]}),`
`]})]}),`
`,e.jsxs(n,{summary:"授業前準備",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. XAMPP起動"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": Apache と MySQL が緑色になっていればOK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),': MySQL Database と Apache Web Server が "Running" になっていればOK']}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. ファイル配置"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Windows"}),": ",e.jsx(s.code,{children:"C:/XAMPP/htdocs/php04/"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mac"}),": ",e.jsx(s.code,{children:"/Applications/XAMPP/htdocs/php04/"})]}),`
`]})]}),`
`,e.jsx(s.h2,{children:"draw.io（diagrams.net）の準備"}),`
`,e.jsxs(n,{summary:"draw.ioとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"draw.io"}),"（diagrams.net）は、無料で使える多機能なダイアグラム作成ツール"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"作成できる図の種類："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"フローチャート"}),`
`,e.jsx(s.li,{children:"プロセス図"}),`
`,e.jsx(s.li,{children:"組織図"}),`
`,e.jsx(s.li,{children:"UML図"}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"ER図（エンティティ・リレーションシップ図）"})}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"利用方法："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Webベースで利用可能"}),`
`,e.jsx(s.li,{children:"デスクトップアプリケーション"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Visual Studio Code の拡張機能"}),"（今回はこれを使用）"]}),`
`]})]}),`
`,e.jsx(n,{summary:"主なER図作成サービスとその比較",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-2",children:"draw.io / diagrams.net"}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"利点:"})," 無料でアクセスしやすく、直感的な操作が可能。豊富なテンプレートとクラウド統合機能",e.jsx("br",{}),`
`,e.jsx("strong",{children:"欠点:"})," 専門的なデータモデリング機能には限りがある"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"Lucidchart"}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"利点:"})," 直感的なインターフェースと豊富な機能。リアルタイムでの共同編集",e.jsx("br",{}),`
`,e.jsx("strong",{children:"欠点:"})," 無料版には機能制限があり、フル機能には有料プランが必要"]})})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"font-medium text-orange-800 mb-2",children:"Microsoft Visio"}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"利点:"})," 複雑な図の作成に対応し、業界標準のツールとしての信頼性が高い",e.jsx("br",{}),`
`,e.jsx("strong",{children:"欠点:"})," Microsoft製品との統合に重点"]})})]})]})})}),`
`,e.jsxs(n,{summary:"VSCodeへの拡張機能のインストール",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. VSCode拡張機能マーケットプレイスにアクセス"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"VSCodeの拡張機能タブから「Draw.io Integration」を検索してインストール"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. 新しいER図の作成"})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["VSCodeで新しいファイルを作成し、ファイルの拡張子を ",e.jsx(s.code,{children:".drawio"})," または ",e.jsx(s.code,{children:".dio"})," に設定"]}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{children:`例: database-design.drawio
`})}),e.jsx(s.p,{children:"ファイルを保存すると、draw.ioのエディタが自動的に開く"}),e.jsx(r,{type:"tip",title:"テーマカラーの変更",children:e.jsx(s.p,{children:"画面右下の「Theme: XXX」を押下することで色を変更することができます。お好みのテーマを選択してください。"})})]}),`
`,e.jsx(s.h2,{children:"データモデリングの基礎"}),`
`,e.jsxs(n,{summary:"データモデリングの必要性",children:[e.jsx(s.p,{children:"データモデリングを行う理由は..."}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データ整合性の確保"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データ間の正確な関係を定義し、データの一貫性と正確性を保証する"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"効率的なデータアクセス"}),e.jsx("div",{className:"text-sm text-slate-600",children:"適切に構造化されたデータモデルを通じて、データの検索、更新、削除が効率的に実施"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsxs("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"複雑なデータ関係の可視化"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ER図などのデータモデリングツールを使用して、複雑なデータの関係性を明確に理解し、可視化"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"エンティティとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"エンティティ"}),"はデータベースで管理される情報の単位"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例：学校のデータベースの場合のエンティティ"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"「生徒」「先生」「授業」...など"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"各エンティティは属性を持つ："})}),e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-3",children:"「生徒」エンティティの属性例"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"名前"}),e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"学年"}),e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"クラス"}),e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"学籍番号"}),e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"生年月日"}),e.jsx("div",{className:"p-2 bg-white rounded border border-blue-100 text-center text-sm",children:"..."})]})]})}),e.jsx(r,{type:"tip",title:"ポイント",children:e.jsx(s.p,{children:"エンティティは「テーブル」として実装され、属性は「カラム（列）」として実装されます。"})})]}),`
`,e.jsxs(n,{summary:"リレーションシップとは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"リレーションシップ"}),"はエンティティ間の関連性を示す"]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"例："})," 「生徒」は「授業」に「参加する」というリレーションシップがある"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"リレーションシップの種類"})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1:1"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"一対一（One-to-One）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"1つのレコードが別のテーブルの1つのレコードとだけ関連"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"1:N"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"一対多（One-to-Many）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"1つのレコードが別のテーブルの複数レコードと関連"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("div",{className:"text-lg font-bold",children:"N:M"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"多対多（Many-to-Many）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"複数のレコードが別のテーブルの複数レコードと関連"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"キーの概念（プライマリキー・外部キー）",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"プライマリキー（主キー / PK）"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"各エンティティ内のレコードを一意に識別するためのキー"}),`
`,e.jsx(s.li,{children:"値の重複や変更が許容されない"}),`
`]}),e.jsx(i,{children:`
erDiagram
  students {
      int id PK "プライマリキー"
      varchar name
  }
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"外部キー（FK）"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"異なるエンティティ間のリレーションシップを表現するためのキー"}),`
`,e.jsx(s.li,{children:"他のテーブルのプライマリキーを参照する"}),`
`]}),e.jsx(i,{children:`
erDiagram
  courses {
      int id PK "プライマリキー"
      varchar name
      int instructor_id FK "外部キー"
  }

  instructors {
      int id PK "プライマリキー"
      varchar name
  }

  courses }o--|| instructors : "担当"
`}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"courses.instructor_id"}),"（外部キー）が ",e.jsx(s.code,{children:"instructors.id"}),"（プライマリキー）を参照"]}),`
`,e.jsx(s.li,{children:"これにより「どのコースをどの講師が担当しているか」を表現"}),`
`]})]}),`
`,e.jsxs(n,{summary:"ER図とは",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ER図"}),"（Entity Relationship Diagram）は、エンティティ・リレーションシップ図のこと"]}),`
`,e.jsx(s.li,{children:"エンティティ間の関連性やキーの概念を視覚的に表現した図"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ER図の構成要素"})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"エンティティ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"四角形で表され、エンティティ名が記載される"})]}),e.jsxs("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"リレーションシップ"}),e.jsx("div",{className:"text-sm text-slate-600",children:"線でエンティティ間を結び、関連性の種類を示す"})]}),e.jsxs("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"属性"}),e.jsx("div",{className:"text-sm text-slate-600",children:"エンティティに紐づく情報（カラム）"})]}),e.jsxs("div",{className:"p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"キー"}),e.jsx("div",{className:"text-sm text-slate-600",children:"PK（主キー）、FK（外部キー）を明示する"})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ER図の例：授業と生徒の管理システム"})}),e.jsx(i,{children:`
erDiagram
  students {
      int id PK
      varchar name
      int grade
      varchar class
  }

  teachers {
      int id PK
      varchar name
      varchar subject
  }

  classes {
      int id PK
      varchar class_name
      int teacher_id FK
  }

  enrollments {
      int id PK
      int student_id FK
      int class_id FK
      date enrollment_date
  }

  students ||--o{ enrollments : "受講"
  classes ||--o{ enrollments : "開講"
  teachers ||--o{ classes : "担当"
`})]}),`
`,e.jsx(s.h2,{children:"ER図作成演習"}),`
`,e.jsxs(n,{summary:"draw.ioでのER図作図手順",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"1. ER図の要素追加"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"左側メニューの「その他の要素」を押下し、「ソフトウェア > ER」にチェックを入れて「適用」を押下"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"2. エンティティの作図"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"必要な形状をクリックし、ドラッグ&ドロップでキャンバスに配置"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"3. エンティティの編集"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"形状をダブルクリックしてテキストを編集"}),`
`,e.jsx(s.li,{children:"フィールドを追加したい場合は、挿入したいフィールドを選択後、「フォーマット > 配置 > テーブル」内にあるアイコンを押下"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"4. リレーションの作図"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"エンティティを未選択状態でカーソルを乗せると青い矢印が表示される"}),`
`,e.jsx(s.li,{children:"エンティティ間をドラッグして線を引く"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"5. リレーションの編集"})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"リレーションを選択状態にすると「フォーマット > スタイル」より編集が可能"}),`
`]}),e.jsx(r,{type:"tip",title:"よく使うアイコン",children:e.jsx(s.p,{children:"下段アイコンの「線の形状」「始点の形状」「終点の形状」をよく使います。リレーションの種類（1:1、1:N、N:M）に応じて適切な形状を選択しましょう。"})})]}),`
`,e.jsx(s.h2,{children:"正規化"}),`
`,e.jsxs(n,{summary:"正規化とは",children:[e.jsx(r,{type:"info",title:"正規化の本質",children:e.jsxs(s.p,{children:["正規化とは、",e.jsx(s.strong,{children:"データの重複を排除し、データの整合性を保つ"}),"ためのデータベース設計手法です。"]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"正規化のポイント："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"1つの情報は1箇所に"}),e.jsx("div",{className:"text-sm text-slate-600",children:"同じ情報を複数箇所に持たせない"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4s-8 1.79-8 4z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"目的ごとにテーブルを分ける"}),e.jsx("div",{className:"text-sm text-slate-600",children:"学生情報、コース情報、受講情報...など"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"テーブル同士を関連付ける"}),e.jsx("div",{className:"text-sm text-slate-600",children:"外部キーでテーブル間の関係を表現"})]})]})]})}),e.jsx(r,{type:"tip",title:"正規化 → 複数テーブルの連携へ",children:e.jsxs(s.p,{children:["正規化によってデータを複数のテーブルに分割するため、",e.jsx(s.strong,{children:"関連するデータを取得するにはテーブル同士を連携（JOIN）する必要があります"}),"。JOINの詳細は後半で学びます。"]})})]}),`
`,e.jsxs(n,{summary:"正規化のプロセス",children:[e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"正規化は段階的に行われ、各段階でより適切なデータ設計になる"}),`
`]}),e.jsx(i,{children:`
graph LR
  A["非正規形"] --> B["第1正規形<br/>(1NF)"]
  B --> C["第2正規形<br/>(2NF)"]
  C --> D["第3正規形<br/>(3NF)"]
  
  style A fill:#fef2f2
  style B fill:#fef3c7
  style C fill:#ecfdf5
  style D fill:#dcfce7
`}),e.jsx(r,{type:"tip",title:"実務での正規化",children:e.jsx(s.p,{children:"一般的なWebアプリケーション開発では、第3正規形（3NF）まで正規化すれば十分です。それ以上の正規化（BCNF、4NF、5NF）は特殊なケースでのみ必要になります。"})})]}),`
`,e.jsxs(n,{summary:"第1正規化（1NF）の詳細",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"説明："}),`
テーブル内の各カラムに原子値（これ以上分割できない値）のみが含まれ、各カラムの値が一意のデータ型を持つこと。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"噛み砕いた説明："}),`
各マス（セル）には `,e.jsx(s.strong,{children:"1つの情報だけ"})," を入れる。リストや複数の値を1つのマスに入れない。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"font-medium text-red-800 mb-2",children:"非正規化（NG）"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-red-100",children:[e.jsx("th",{className:"p-2 border",children:"生徒名"}),e.jsx("th",{className:"p-2 border",children:"クラブ活動"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"田中太郎"}),e.jsx("td",{className:"p-2 border text-red-600",children:"サッカー部, テニス部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"佐藤花子"}),e.jsx("td",{className:"p-2 border text-red-600",children:"吹奏楽部, 美術部, 文芸部"})]})]})]})}),e.jsx("div",{className:"text-xs text-red-600 mt-2",children:"問題: 1つのセルに複数の値が入っている"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"第1正規形（OK）"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("th",{className:"p-2 border",children:"生徒名"}),e.jsx("th",{className:"p-2 border",children:"クラブ活動"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"田中太郎"}),e.jsx("td",{className:"p-2 border",children:"サッカー部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"田中太郎"}),e.jsx("td",{className:"p-2 border",children:"テニス部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"佐藤花子"}),e.jsx("td",{className:"p-2 border",children:"吹奏楽部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"佐藤花子"}),e.jsx("td",{className:"p-2 border",children:"美術部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"佐藤花子"}),e.jsx("td",{className:"p-2 border",children:"文芸部"})]})]})]})}),e.jsx("div",{className:"text-xs text-green-600 mt-2",children:"改善: 各セルに1つの値のみ"})]})]})})]}),`
`,e.jsxs(n,{summary:"第2正規化（2NF）の詳細",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"説明："}),`
1NFを満たし、全ての非キーカラムがプライマリキー全体に完全に依存している（部分的依存がない）こと。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"噛み砕いた説明："}),`
テーブルが複数の情報を混在させず、`,e.jsx(s.strong,{children:"情報ごとにテーブルを分ける"}),"。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"font-medium text-red-800 mb-2",children:"非2NF（NG）"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-red-100",children:[e.jsx("th",{className:"p-2 border",children:"学生ID"}),e.jsx("th",{className:"p-2 border",children:"科目ID"}),e.jsx("th",{className:"p-2 border",children:"科目名"}),e.jsx("th",{className:"p-2 border",children:"成績"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"S001"}),e.jsx("td",{className:"p-2 border",children:"C001"}),e.jsx("td",{className:"p-2 border text-red-600",children:"数学"}),e.jsx("td",{className:"p-2 border",children:"85"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"S001"}),e.jsx("td",{className:"p-2 border",children:"C002"}),e.jsx("td",{className:"p-2 border text-red-600",children:"英語"}),e.jsx("td",{className:"p-2 border",children:"90"})]})]})]})}),e.jsx("div",{className:"text-xs text-red-600 mt-2",children:"問題: 科目名は科目IDにのみ依存（部分依存）"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"第2正規形（OK）- テーブルを分割"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium mb-1",children:"成績テーブル"}),e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("th",{className:"p-1 border text-xs",children:"学生ID"}),e.jsx("th",{className:"p-1 border text-xs",children:"科目ID"}),e.jsx("th",{className:"p-1 border text-xs",children:"成績"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"S001"}),e.jsx("td",{className:"p-1 border text-xs",children:"C001"}),e.jsx("td",{className:"p-1 border text-xs",children:"85"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"S001"}),e.jsx("td",{className:"p-1 border text-xs",children:"C002"}),e.jsx("td",{className:"p-1 border text-xs",children:"90"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium mb-1",children:"科目テーブル"}),e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("th",{className:"p-1 border text-xs",children:"科目ID"}),e.jsx("th",{className:"p-1 border text-xs",children:"科目名"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"C001"}),e.jsx("td",{className:"p-1 border text-xs",children:"数学"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"C002"}),e.jsx("td",{className:"p-1 border text-xs",children:"英語"})]})]})]})]})]})]})]})})]}),`
`,e.jsxs(n,{summary:"第3正規化（3NF）の詳細",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"説明："}),`
2NFを満たし、全ての非キーカラムが他の非キーカラムに依存していない（推移的関数従属がない）こと。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"噛み砕いた説明："}),`
情報が他の情報に `,e.jsx(s.strong,{children:"間接的に依存しないようにする"}),"。"]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"例："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-red-50 rounded border border-red-200",children:[e.jsx("div",{className:"font-medium text-red-800 mb-2",children:"非3NF（NG）"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-red-100",children:[e.jsx("th",{className:"p-2 border",children:"教師ID"}),e.jsx("th",{className:"p-2 border",children:"教師名"}),e.jsx("th",{className:"p-2 border",children:"学部ID"}),e.jsx("th",{className:"p-2 border",children:"学部名"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"T001"}),e.jsx("td",{className:"p-2 border",children:"山田先生"}),e.jsx("td",{className:"p-2 border",children:"D01"}),e.jsx("td",{className:"p-2 border text-red-600",children:"理学部"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-2 border",children:"T002"}),e.jsx("td",{className:"p-2 border",children:"佐藤先生"}),e.jsx("td",{className:"p-2 border",children:"D01"}),e.jsx("td",{className:"p-2 border text-red-600",children:"理学部"})]})]})]})}),e.jsx("div",{className:"text-xs text-red-600 mt-2",children:"問題: 学部名は学部IDに依存（推移的依存: 教師ID → 学部ID → 学部名）"})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"第3正規形（OK）- テーブルを分割"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium mb-1",children:"教師テーブル"}),e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("th",{className:"p-1 border text-xs",children:"教師ID"}),e.jsx("th",{className:"p-1 border text-xs",children:"教師名"}),e.jsx("th",{className:"p-1 border text-xs",children:"学部ID"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"T001"}),e.jsx("td",{className:"p-1 border text-xs",children:"山田先生"}),e.jsx("td",{className:"p-1 border text-xs",children:"D01"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"T002"}),e.jsx("td",{className:"p-1 border text-xs",children:"佐藤先生"}),e.jsx("td",{className:"p-1 border text-xs",children:"D01"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium mb-1",children:"学部テーブル"}),e.jsxs("table",{className:"text-sm w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("th",{className:"p-1 border text-xs",children:"学部ID"}),e.jsx("th",{className:"p-1 border text-xs",children:"学部名"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"p-1 border text-xs",children:"D01"}),e.jsx("td",{className:"p-1 border text-xs",children:"理学部"})]})})]})]})]})]})]})})]}),`
`,e.jsxs(n,{summary:"[演習] 非正規系データの正規化",children:[e.jsx(r,{type:"warning",title:"課題",children:e.jsx(s.p,{children:"ある会社の社員管理システムで使われているデータがあります。サンプルデータを参考に、draw.io で正規化されたER図を作成してください。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"サンプルデータ："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"社員ID"}),e.jsx(s.th,{children:"社員名"}),e.jsx(s.th,{children:"部署名"}),e.jsx(s.th,{children:"オフィス所在地"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:"営業部"}),e.jsx(s.td,{children:"東京"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"2"}),e.jsx(s.td,{children:"佐藤花子"}),e.jsx(s.td,{children:"営業部"}),e.jsx(s.td,{children:"東京"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"3"}),e.jsx(s.td,{children:"鈴木一郎"}),e.jsx(s.td,{children:"開発部"}),e.jsx(s.td,{children:"大阪"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"4"}),e.jsx(s.td,{children:"山田次郎"}),e.jsx(s.td,{children:"開発部"}),e.jsx(s.td,{children:"大阪"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"5"}),e.jsx(s.td,{children:"高橋美咲"}),e.jsx(s.td,{children:"人事部"}),e.jsx(s.td,{children:"東京"})]})]})]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ヒント："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"部署名とオフィス所在地の関係に注目しよう"}),`
`,e.jsx(s.li,{children:"同じ情報が繰り返されている箇所はどこ？"}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"条件："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"リレーション / キー の記載はなくて良い"}),`
`,e.jsx(s.li,{children:"日本語での記載で良い"}),`
`]}),e.jsxs(r,{type:"tip",title:"追加チャレンジ",children:[e.jsx(s.p,{children:"課題が終わったら以下にもチャレンジしてみよう！"}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"テーブル名 / カラム名 を英単語にしてみよう"}),`
`,e.jsx(s.li,{children:"キー（PK / FK）を割り振ってみよう"}),`
`,e.jsx(s.li,{children:"リレーションを定義してみよう"}),`
`]})]}),e.jsxs(n,{summary:"[回答例] 演習が完了してから見てください",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"正規化のポイント："})}),e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"第2正規形（2NF）"}),": 部署情報を別テーブルに分離"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"第3正規形（3NF）"}),": オフィス所在地は部署に依存（推移的依存）なので、オフィステーブルに分離"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"正規化後のテーブル構成（日本語版）："})}),e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-2",children:"社員テーブル"}),e.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[e.jsx("div",{children:"社員ID（PK）"}),e.jsx("div",{children:"社員名"}),e.jsx("div",{children:"部署ID（FK）"})]})]}),e.jsxs("div",{className:"p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"部署テーブル"}),e.jsxs("div",{className:"text-sm text-green-700 space-y-1",children:[e.jsx("div",{children:"部署ID（PK）"}),e.jsx("div",{children:"部署名"}),e.jsx("div",{children:"オフィスID（FK）"})]})]}),e.jsxs("div",{className:"p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"font-medium text-orange-800 mb-2",children:"オフィステーブル"}),e.jsxs("div",{className:"text-sm text-orange-700 space-y-1",children:[e.jsx("div",{children:"オフィスID（PK）"}),e.jsx("div",{children:"所在地"})]})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"ER図（英語版 + キー + リレーション）："})}),e.jsx(i,{children:`
erDiagram
  employees {
      int id PK
      varchar name
      int department_id FK
  }

  departments {
      int id PK
      varchar name
      int office_id FK
  }

  offices {
      int id PK
      varchar location
  }

  employees }o--|| departments : "所属"
  departments }o--|| offices : "配置"
`}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"リレーションの解説："})}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"社員 → 部署"}),": 多対1（複数の社員が1つの部署に所属）"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"部署 → オフィス"}),": 多対1（複数の部署が1つのオフィスに配置）"]}),`
`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"正規化によって解決された問題："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"部署名やオフィス所在地の重複がなくなった"}),`
`,e.jsx(s.li,{children:"部署の所在地を変更する場合、オフィステーブルの1行を更新するだけでOK"}),`
`]})]})]}),`
`,e.jsx(s.h2,{children:"リレーション"}),`
`,e.jsxs(n,{summary:"1対1（One-to-One）リレーション",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"解説："}),`
一つのレコードが別のテーブルのただ一つのレコードとだけ関連づけられる関係。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"定義方法："}),`
主キーを外部キーとして別のテーブルに設定する。`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実例："})}),e.jsx(i,{children:`
erDiagram
  users {
      int user_id PK
      varchar username
      varchar email
  }

  user_profiles {
      int profile_id PK
      int user_id FK
      varchar address
      date birthday
      varchar phone
  }

  users ||--|| user_profiles : "has"
`}),e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"font-medium text-blue-800 mb-2",children:"1対1リレーションの使用例"}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"ユーザー"})," と ",e.jsx("strong",{children:"ユーザープロフィール"}),e.jsx("br",{}),`
1人のユーザーには1つのプロフィールが対応し、1つのプロフィールは1人のユーザーにのみ属する`]})})]})}),e.jsx(r,{type:"tip",title:"1対1リレーションを使う場面",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"テーブルを機能的に分割したい場合"}),`
`,e.jsx(s.li,{children:"アクセス頻度の異なるデータを分離したい場合"}),`
`,e.jsx(s.li,{children:"セキュリティ上の理由でデータを分離したい場合"}),`
`]})})]}),`
`,e.jsxs(n,{summary:"1対多（One-to-Many）リレーション",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"解説："}),`
一つのレコードが別のテーブルの複数のレコードと関連づけられる関係。最も一般的なリレーションタイプです。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"定義方法："}),`
"多" 側のテーブルに "一" 側のテーブルの主キーを外部キーとして設定する。`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実例："})}),e.jsx(i,{children:`
erDiagram
  departments {
      int dept_id PK
      varchar dept_name
  }

  employees {
      int emp_id PK
      varchar emp_name
      int dept_id FK
  }

  departments ||--o{ employees : "所属"
`}),e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"font-medium text-green-800 mb-2",children:"1対多リレーションの使用例"}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"部署"})," と ",e.jsx("strong",{children:"社員"}),e.jsx("br",{}),`
1つの部署には複数の社員が所属できるが、1人の社員は1つの部署にのみ所属する`]})})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"その他の例："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"顧客 と 注文（1人の顧客は複数の注文を行える）"}),`
`,e.jsx(s.li,{children:"カテゴリ と 商品（1つのカテゴリには複数の商品が属する）"}),`
`,e.jsx(s.li,{children:"著者 と 記事（1人の著者は複数の記事を執筆できる）"}),`
`]})]}),`
`,e.jsxs(n,{summary:"多対多（Many-to-Many）リレーション",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"解説："}),`
複数のレコードが別のテーブルの複数のレコードと関連づけられる関係。この関係を直接的に表現することはできないため、`,e.jsx(s.strong,{children:"中間テーブル"}),"を用いて関連づけます。"]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"中間テーブルとは："}),`
二つのテーブル間の多対多の関係を管理するために使用されるテーブル。各レコードは、関連する二つのテーブルのレコード間のリンクを表します。`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"定義方法："}),`
中間テーブルには、関連する二つのテーブルの主キーを外部キーとして含める。これらの外部キーの組み合わせが中間テーブルのユニークキーまたはプライマリキーになります。`]}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実例："})}),e.jsx(i,{children:`
erDiagram
  students {
      int student_id PK
      varchar name
  }

  courses {
      int course_id PK
      varchar course_name
  }

  enrollments {
      int enrollment_id PK
      int student_id FK
      int course_id FK
      date enrolled_at
  }

  students ||--o{ enrollments : "受講"
  courses ||--o{ enrollments : "開講"
`}),e.jsx(l,{children:e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"font-medium text-orange-800 mb-2",children:"多対多リレーションの使用例"}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"生徒"})," と ",e.jsx("strong",{children:"授業"}),e.jsx("br",{}),`
1人の生徒は複数の授業を受講でき、1つの授業には複数の生徒が参加できる`,e.jsx("br",{}),`
→ `,e.jsx("strong",{children:"中間テーブル（enrollments）"})," で関係を管理"]})})]})}),e.jsx(r,{type:"warning",title:"中間テーブルの重要性",children:e.jsx(s.p,{children:"多対多リレーションは必ず中間テーブルを使って実装します。中間テーブルには追加情報（例：登録日、ステータスなど）を持たせることもできます。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"その他の例："})}),e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"商品 と タグ（1つの商品に複数のタグ、1つのタグは複数の商品に付与）"}),`
`,e.jsx(s.li,{children:"ユーザー と ロール（1人のユーザーに複数のロール、1つのロールは複数のユーザーに割当）"}),`
`]})]}),`
`,e.jsx(s.h2,{children:"JOIN（結合）の基本概念"}),`
`,e.jsxs(n,{summary:"JOINとは何か？",children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"JOIN"}),"とは、複数のテーブルを結合してデータを取得するSQL文です。正規化によって分割されたテーブルから、関連するデータを一緒に取得するために使用します。"]}),e.jsx(r,{type:"info",title:"重要なポイント",children:e.jsx(s.p,{children:"外部キー制約がなくてもJOINは実行できますが、制約があった方が安全で信頼できるデータベースになります。JOINは「接着剤」、外部キー制約は「品質管理」の役割です。"})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"JOINと外部キー制約の関係："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"項目"}),e.jsx(s.th,{children:"外部キー制約あり"}),e.jsx(s.th,{children:"外部キー制約なし"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"JOINの実行"})}),e.jsx(s.td,{children:"✅ できる"}),e.jsx(s.td,{children:"✅ できる"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"データ整合性"})}),e.jsx(s.td,{children:"✅ 保証される"}),e.jsx(s.td,{children:"❌ 保証されない"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"不正データの挿入"})}),e.jsx(s.td,{children:"❌ 防げる"}),e.jsx(s.td,{children:"✅ 可能（危険）"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"参照先の削除"})}),e.jsx(s.td,{children:"❌ 防げる"}),e.jsx(s.td,{children:"✅ 可能（危険）"})]})]})]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 外部キー制約がなくても、この書き方でJOINできる
SELECT s.name, c.name
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id  -- 制約なしでもOK
INNER JOIN courses c ON e.course_id = c.id;   -- 制約なしでもOK
`})})]}),`
`,e.jsxs(n,{summary:"JOINの種類と使い分け",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"主要なJOIN種類："})}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"INNER JOIN（内部結合）★★★★★"})]}),e.jsx("div",{className:"text-sm text-blue-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"動作："})," 両方のテーブルに一致するデータがある場合のみ結果に表示",e.jsx("br",{}),`
`,e.jsx("strong",{children:"使用場面："})," 関連があるデータのみ取得したい場合（最も使用頻度が高い）"]})})]}),e.jsxs("div",{className:"p-4 bg-green-50 rounded border border-green-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 11l5-5m0 0l5 5m-5-5v12"})})}),e.jsx("div",{className:"font-medium text-green-800",children:"LEFT JOIN（左外部結合）★★★☆☆"})]}),e.jsx("div",{className:"text-sm text-green-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"動作："})," 左側（FROM句）のテーブルのデータを全て表示、右側に一致するデータがない場合はNULL",e.jsx("br",{}),`
`,e.jsx("strong",{children:"使用場面："})," 左側テーブルの全データ + 関連データを取得したい場合"]})})]}),e.jsxs("div",{className:"p-4 bg-orange-50 rounded border border-orange-200",children:[e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-2",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 13l-5 5m0 0l-5-5m5 5V6"})})}),e.jsx("div",{className:"font-medium text-orange-800",children:"RIGHT JOIN（右外部結合）★☆☆☆☆"})]}),e.jsx("div",{className:"text-sm text-orange-700",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"動作："})," 右側（JOIN句）のテーブルのデータを全て表示",e.jsx("br",{}),`
`,e.jsx("strong",{children:"使用頻度："})," 実務ではあまり使われない（LEFT JOINで代用可能）"]})})]})]})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"基本構文："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- INNER JOIN（内部結合）の基本構文
SELECT 列名
FROM テーブル1
INNER JOIN テーブル2 ON テーブル1.列 = テーブル2.列;

-- LEFT JOIN（左外部結合）の基本構文
SELECT 列名
FROM テーブル1
LEFT JOIN テーブル2 ON テーブル1.列 = テーブル2.列;
`})})]}),`
`,e.jsx(s.h2,{children:"INNER JOINの実践演習"}),`
`,e.jsxs(n,{summary:"演習準備：サンプルデータの投入",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"データベースとテーブルの作成："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- **************************************************
-- データベースの作成
-- **************************************************
CREATE DATABASE IF NOT EXISTS join_sample CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE join_sample;

-- **************************************************
-- テーブルの作成
-- **************************************************

-- 学生テーブル
CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL,
    phone VARCHAR(32)
);

-- 講師テーブル
CREATE TABLE IF NOT EXISTS instructors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL
);

-- コーステーブル
CREATE TABLE IF NOT EXISTS courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    instructor_id INT NOT NULL,
    fee INT NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructors(id)
);

-- 受講テーブル（学生とコースの関連）
CREATE TABLE IF NOT EXISTS enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- **************************************************
-- ダミーデータの投入
-- **************************************************

-- 学生データ
INSERT INTO students (name, email, phone) VALUES 
('田中太郎', 'tanaka@example.com', '090-1234-5678'),
('佐藤花子', 'sato@example.com', '080-9876-5432'),
('鈴木一郎', 'suzuki@example.com', '070-1111-2222');

-- 講師データ
INSERT INTO instructors (name, email) VALUES 
('佐藤先生', 'sato@school.com'),
('田中先生', 'tanaka@school.com');

-- コースデータ
INSERT INTO courses (name, instructor_id, fee) VALUES 
('PHP基礎', 1, 50000),
('JavaScript基礎', 2, 45000),
('React応用', 1, 60000);

-- 受講データ
INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES 
(1, 1, '2024-01-15'),  -- 田中太郎がPHP基礎を受講
(2, 2, '2024-01-16'),  -- 佐藤花子がJavaScript基礎を受講
(1, 3, '2024-01-17'),  -- 田中太郎がReact応用を受講
(3, 1, '2024-01-18'),  -- 鈴木一郎がPHP基礎を受講
(1, 2, '2024-01-20');  -- 田中太郎がJavaScript基礎を受講
`})})]}),`
`,e.jsxs(n,{summary:"演習1: コースと講師を結合して表示",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"段階的にJOINを理解しましょう："})}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"まずはcoursesテーブル単体から情報を取得"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- coursesテーブルの基本情報を確認
SELECT 
    name AS コース名,
    fee AS 受講料,
    instructor_id AS 担当講師ID
FROM courses;
`})}),e.jsxs(s.ol,{start:"2",children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"INNER JOINでinstructorsと結合"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- コース名と担当講師名を一緒に表示
SELECT
    c.name AS コース名,
    c.fee AS 受講料,
    i.name AS 担当講師
FROM courses c
INNER JOIN instructors i ON c.instructor_id = i.id;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実行結果："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"コース名"}),e.jsx(s.th,{children:"受講料"}),e.jsx(s.th,{children:"担当講師"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"PHP基礎"}),e.jsx(s.td,{children:"50000"}),e.jsx(s.td,{children:"佐藤先生"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"JavaScript基礎"}),e.jsx(s.td,{children:"45000"}),e.jsx(s.td,{children:"田中先生"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"React応用"}),e.jsx(s.td,{children:"60000"}),e.jsx(s.td,{children:"佐藤先生"})]})]})]}),e.jsx(r,{type:"tip",title:"エイリアス（AS）の重要性",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"AS"}),"を使って列名を分かりやすくする"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"courses c"}),"のようにテーブル名も短縮できる"]}),`
`,e.jsx(s.li,{children:"複数テーブルの同名列を区別するために必須"}),`
`]})})]}),`
`,e.jsxs(n,{summary:"演習2: 学生と受講コースを結合して表示",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"3つのテーブルをJOINする手順："})}),e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"enrollmentsテーブルから基本情報を確認"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 受講テーブル単体の情報を確認
SELECT 
    id,
    student_id,
    course_id,
    enrollment_date
FROM enrollments
ORDER BY enrollment_date;
`})}),e.jsxs(s.ol,{start:"2",children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"studentsテーブルと結合"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 学生情報を結合
SELECT 
    e.id,
    s.name AS 学生名,
    e.course_id,
    e.enrollment_date
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id
ORDER BY e.enrollment_date;
`})}),e.jsxs(s.ol,{start:"3",children:[`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"coursesテーブルも結合"})}),`
`]}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 学生名と受講コース名を一緒に表示
SELECT
    s.name AS 学生名,
    s.email AS メールアドレス,
    c.name AS 受講コース,
    e.enrollment_date AS 受講開始日
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id
INNER JOIN courses c ON e.course_id = c.id
ORDER BY e.enrollment_date;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実行結果："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"学生名"}),e.jsx(s.th,{children:"メールアドレス"}),e.jsx(s.th,{children:"受講コース"}),e.jsx(s.th,{children:"受講開始日"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"mailto:tanaka@example.com",children:"tanaka@example.com"})}),e.jsx(s.td,{children:"PHP基礎"}),e.jsx(s.td,{children:"2024-01-15"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"佐藤花子"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"mailto:sato@example.com",children:"sato@example.com"})}),e.jsx(s.td,{children:"JavaScript基礎"}),e.jsx(s.td,{children:"2024-01-16"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"mailto:tanaka@example.com",children:"tanaka@example.com"})}),e.jsx(s.td,{children:"React応用"}),e.jsx(s.td,{children:"2024-01-17"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"鈴木一郎"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"mailto:suzuki@example.com",children:"suzuki@example.com"})}),e.jsx(s.td,{children:"PHP基礎"}),e.jsx(s.td,{children:"2024-01-18"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"mailto:tanaka@example.com",children:"tanaka@example.com"})}),e.jsx(s.td,{children:"JavaScript基礎"}),e.jsx(s.td,{children:"2024-01-20"})]})]})]})]}),`
`,e.jsxs(n,{summary:"演習3: 4つのテーブルをすべてJOIN",children:[e.jsx(s.p,{children:e.jsx(s.strong,{children:"すべての情報を統合して表示："})}),e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sql",children:`-- 受講に関する全ての情報を表示
SELECT
    s.name AS 学生名,
    c.name AS コース名,
    i.name AS 担当講師,
    c.fee AS 受講料,
    e.enrollment_date AS 受講開始日
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id
INNER JOIN courses c ON e.course_id = c.id
INNER JOIN instructors i ON c.instructor_id = i.id
ORDER BY e.enrollment_date;
`})}),e.jsx(s.p,{children:e.jsx(s.strong,{children:"実行結果："})}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"学生名"}),e.jsx(s.th,{children:"コース名"}),e.jsx(s.th,{children:"担当講師"}),e.jsx(s.th,{children:"受講料"}),e.jsx(s.th,{children:"受講開始日"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:"PHP基礎"}),e.jsx(s.td,{children:"佐藤先生"}),e.jsx(s.td,{children:"50000"}),e.jsx(s.td,{children:"2024-01-15"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"佐藤花子"}),e.jsx(s.td,{children:"JavaScript基礎"}),e.jsx(s.td,{children:"田中先生"}),e.jsx(s.td,{children:"45000"}),e.jsx(s.td,{children:"2024-01-16"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:"React応用"}),e.jsx(s.td,{children:"佐藤先生"}),e.jsx(s.td,{children:"60000"}),e.jsx(s.td,{children:"2024-01-17"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"鈴木一郎"}),e.jsx(s.td,{children:"PHP基礎"}),e.jsx(s.td,{children:"佐藤先生"}),e.jsx(s.td,{children:"50000"}),e.jsx(s.td,{children:"2024-01-18"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"田中太郎"}),e.jsx(s.td,{children:"JavaScript基礎"}),e.jsx(s.td,{children:"田中先生"}),e.jsx(s.td,{children:"45000"}),e.jsx(s.td,{children:"2024-01-20"})]})]})]}),e.jsx(r,{type:"success",title:"複数テーブルJOINの成功",children:e.jsx(s.p,{children:"4つのテーブルから関連するすべての情報を1つのクエリで取得できました！これが正規化とJOINの力です。"})})]}),`
`,e.jsx(s.h2,{children:"まとめ"}),`
`,e.jsx(n,{summary:"今回学んだ重要なポイント",children:e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データモデリング"}),e.jsx("div",{className:"text-sm text-slate-600",children:"エンティティとリレーションシップでデータを整理する基本概念"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ER図"}),e.jsx("div",{className:"text-sm text-slate-600",children:"draw.ioを使ったER図の作成方法とテーブル設計の可視化"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4s-8 1.79-8 4z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"正規化（1NF〜3NF）"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データの重複を排除し、整合性の高いテーブル設計"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-purple-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"リレーション"}),e.jsx("div",{className:"text-sm text-slate-600",children:"1対1、1対多、多対多の関係性と中間テーブルの活用"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-red-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"INNER JOIN"}),e.jsx("div",{className:"text-sm text-slate-600",children:"正規化されたテーブルからデータを結合して取得する方法"})]})]})]})})})]})}function ae(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(D,{...d})}):D(d)}function g(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const xe=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));function H(d){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components},{Callout:r,Details:n,Infographic:l,Mermaid:i}=s;return r||v("Callout"),n||v("Details"),l||v("Infographic"),i||v("Mermaid"),e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Webアプリケーション入門"}),`
`,e.jsx(s.p,{children:"これから皆さんはWebアプリケーションの仕組みを学習していきます。Webアプリとは何か？を整理した上で学習を始めましょう！"}),`
`,e.jsx(n,{summary:"今回のゴール",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Webアプリケーションとは何かを理解する"}),`
`,e.jsx(s.li,{children:"ネイティブアプリとの違いを把握する"}),`
`,e.jsx(s.li,{children:"Webアプリを取り巻く技術スタックを知る"}),`
`,e.jsx(s.li,{children:"フロントエンド技術の基本構成を理解する"}),`
`,e.jsx(s.li,{children:"学習のロードマップを確認する"}),`
`,e.jsx(s.li,{children:"Webアプリの動作フローを理解する"}),`
`]})}),`
`,e.jsx(s.h2,{children:"Webアプリケーションとは何か？"}),`
`,e.jsxs(n,{summary:"Webアプリケーションの定義",children:[e.jsxs(s.p,{children:["Webアプリケーションとは、",e.jsx(s.strong,{children:"Webブラウザ上で動作するアプリケーション"}),"のことです。"]}),e.jsxs(s.p,{children:["具体的には、",e.jsx(s.code,{children:"https://www.yahoo.co.jp"})," のように ",e.jsx(s.code,{children:"http://"})," or ",e.jsx(s.code,{children:"https://"})," から始まる文字列（URL）をブラウザに入力することで表示されるアプリケーションを指します。"]}),e.jsxs(r,{type:"info",title:"身近なWebアプリケーションの例",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gmail"}),": メール管理"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Google Maps"}),": 地図・ナビゲーション"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"YouTube"}),": 動画視聴・投稿"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Twitter"}),": SNS"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Amazon"}),": ECサイト"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Notion"}),": メモ・タスク管理"]}),`
`]}),e.jsx(s.p,{children:"これらはすべてブラウザ上で動作する「Webアプリケーション」です！"})]}),e.jsx(s.h3,{children:"Webアプリの基本的な仕組み"}),e.jsx(i,{children:`
sequenceDiagram
  participant User as ユーザー
  participant Browser as ブラウザ
  participant Server as Webサーバー
  participant DB as データベース
  
  User->>Browser: URLを入力
  Browser->>Server: HTTPリクエスト送信
  Server->>DB: データ取得要求
  DB-->>Server: データ返却
  Server-->>Browser: HTML/CSS/JS返却
  Browser-->>User: Webページ表示
  
  Note over User,DB: この一連の流れがWebアプリの基本動作
`}),e.jsx(r,{type:"tip",title:"リクエストとレスポンス",children:e.jsxs(s.p,{children:["Webアプリは「",e.jsx(s.strong,{children:"リクエスト（要求）"}),"」と「",e.jsx(s.strong,{children:"レスポンス（応答）"}),"」のやり取りで動作しています。ユーザーがボタンをクリックしたり、フォームに入力するたびに、この流れが発生しています。"]})})]}),`
`,e.jsxs(n,{summary:"[補足] Webとは",children:[e.jsx(s.p,{children:"**World Wide Web（WWW）**の略で、インターネット上で利用される情報の配信システムの一つです。"}),e.jsx(s.p,{children:"ハイパーテキスト（HTML）を基盤として、文書や画像、動画などの情報を相互にリンクして閲覧できるシステムです。"}),e.jsx(s.h3,{children:"Webの歴史"}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1989年"}),": ティム・バーナーズ=リーがWWWを発明"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1993年"}),": 最初のWebブラウザ「Mosaic」が登場"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1995年"}),": JavaScriptが開発される"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"2000年代"}),": Ajax技術により動的なWebアプリが実現"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"2010年代"}),": HTML5、CSS3により表現力が大幅向上"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"現在"}),": PWA（Progressive Web Apps）でネイティブアプリに近い体験を提供"]}),`
`]}),e.jsx(r,{type:"note",children:e.jsx(s.p,{children:"わずか30年程度でWebは大きく進化し、今では私たちの生活に欠かせないものになりました。"})})]}),`
`,e.jsx(s.h2,{children:"Webアプリとネイティブアプリの違い"}),`
`,e.jsxs(n,{summary:"Webアプリとネイティブアプリの特徴比較",children:[e.jsx(l,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-blue-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})})}),e.jsx("div",{className:"font-medium text-blue-800",children:"Webアプリ"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-blue-700",children:[e.jsx("div",{children:"• インストール不要"}),e.jsx("div",{children:"• OS依存しない"}),e.jsx("div",{children:"• Webブラウザで動作"}),e.jsx("div",{children:"• インターネット経由でアクセス"}),e.jsx("div",{children:"• 開発期間が比較的短い"})]})]}),e.jsxs("div",{className:"p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-8 h-8 text-slate-600 mr-3",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"ネイティブアプリ"})]}),e.jsxs("div",{className:"space-y-2 text-sm text-slate-600",children:[e.jsx("div",{children:"• インストール必要"}),e.jsx("div",{children:"• OS依存する"}),e.jsx("div",{children:"• 特定プラットフォームで動作"}),e.jsx("div",{children:"• 端末内にインストールしてアクセス"}),e.jsx("div",{children:"• 開発期間が長い"})]})]})]})}),e.jsx(s.h3,{children:"詳細な比較表"}),e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"項目"}),e.jsx(s.th,{children:"Webアプリ"}),e.jsx(s.th,{children:"ネイティブアプリ"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"配布方法"})}),e.jsx(s.td,{children:"URLアクセス"}),e.jsx(s.td,{children:"アプリストア"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"アップデート"})}),e.jsx(s.td,{children:"サーバー側で即座に反映"}),e.jsx(s.td,{children:"ユーザーが手動でアップデート"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"オフライン動作"})}),e.jsx(s.td,{children:"限定的（PWAで改善）"}),e.jsx(s.td,{children:"完全対応"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"デバイス機能"})}),e.jsx(s.td,{children:"制限あり"}),e.jsx(s.td,{children:"フルアクセス"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"パフォーマンス"})}),e.jsx(s.td,{children:"ブラウザに依存"}),e.jsx(s.td,{children:"最適化済み"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"開発コスト"})}),e.jsx(s.td,{children:"低い（一つのコードベース）"}),e.jsx(s.td,{children:"高い（プラットフォームごと）"})]})]})]}),e.jsx(r,{type:"tip",title:"どちらを選ぶべき？",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Webアプリ"}),": プロトタイプ作成、素早いリリース、幅広いユーザーにアクセスしたい場合"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ネイティブアプリ"}),": 高いパフォーマンス、デバイス固有機能、リッチなUXが必要な場合"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"[補足] ネイティブアプリとは",children:[e.jsx(s.p,{children:"特定のプラットフォーム（iOS、Androidなど）に最適化されたアプリケーションのことです。"}),e.jsx(s.p,{children:"ネイティブアプリは、プラットフォームのAPIやツールキットを活用することができ、高速かつ効率的な処理が可能です。"}),e.jsx(s.h3,{children:"ネイティブアプリの開発方法"}),e.jsx(i,{children:`
graph TD
  A[ネイティブアプリ開発] --> B[iOS開発]
  A --> C[Android開発]
  A --> D[クロスプラットフォーム開発]
  
  B --> B1[Swift/Objective-C]
  B --> B2[Xcode]
  B --> B3[App Store]
  
  C --> C1[Java/Kotlin]
  C --> C2[Android Studio]
  C --> C3[Google Play]
  
  D --> D1[React Native]
  D --> D2[Flutter]
  D --> D3[Xamarin]
  
  style A fill:#e2e8f0
  style B fill:#dcfce7
  style C fill:#fef2f2
  style D fill:#fef3cd
`}),e.jsx(r,{type:"note",children:e.jsx(s.p,{children:"クロスプラットフォーム開発により、一つのコードで複数のプラットフォームに対応できるようになってきています。"})})]}),`
`,e.jsxs(n,{summary:"なぜWebアプリが学習に最適なのか？",children:[e.jsx(r,{type:"success",title:"学習の入り口として最適な理由",children:e.jsx(s.p,{children:"Webアプリは開発期間を短くリリースすることができるので、プログラミング学習の入口として最適です。また、MVP（Minimum Viable Product）をリリースすることにも適しています。"})}),e.jsx(s.h3,{children:"学習者にとってのメリ"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"即座に結果が見える"}),e.jsx("div",{className:"text-sm text-green-700",children:"ブラウザですぐに動作確認ができ、モチベーションを維持しやすい"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"学習リソースが豊富"}),e.jsx("div",{className:"text-sm text-green-700",children:"HTML/CSS/JavaScriptの学習教材やチュートリアルが充実している"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"作品を簡単にシェア"}),e.jsx("div",{className:"text-sm text-green-700",children:"URLを共有するだけで他の人に見てもらえる"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"低コストで始められる"}),e.jsx("div",{className:"text-sm text-green-700",children:"無料のエディターとブラウザがあれば開発を始められる"})]})]})]})}),e.jsx(s.h3,{children:"学習の進行フロー"}),e.jsx(i,{children:`
flowchart TD
  A[HTML基礎] --> B[CSS基礎]
  B --> C[JavaScript基礎]
  C --> D[DOM操作]
  D --> E[イベント処理]
  E --> F[Ajax/API]
  F --> G[フレームワーク学習]
  G --> H[実践プロジェクト]
  
  A1[構造を作る] --> A
  B1[見た目を整える] --> B
  C1[動的な機能を追加] --> C
  D1[要素を操作する] --> D
  E1[ユーザーとの対話] --> E
  F1[サーバーとの通信] --> F
  G1[効率的な開発] --> G
  H1[ポートフォリオ作成] --> H
  
  style A fill:#e2e8f0
  style B fill:#fef3cd
  style C fill:#dcfce7
  style H fill:#fef2f2
`})]}),`
`,e.jsx(s.h2,{children:"Webアプリケーションを取り巻く技術"}),`
`,e.jsxs(n,{summary:"Webアプリの全体構成",children:[e.jsx(l,{children:e.jsxs("div",{className:"flex justify-around items-center flex-wrap gap-4",children:[e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"フロントエンド"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ユーザーが触れる部分"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"バックエンド"}),e.jsx("div",{className:"text-sm text-slate-600",children:"サーバー側の処理"})]}),e.jsx("div",{className:"text-slate-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsxs("div",{className:"text-center p-4 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-8 h-8 mx-auto mb-2 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"})})}),e.jsx("div",{className:"font-medium text-slate-800",children:"データベース"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データの保存・管理"})]})]})}),e.jsx(s.h3,{children:"Webアプリの技術スタック全体像"}),e.jsx(i,{children:`
graph TB
  subgraph "クライアント側（ブラウザ）"
      A[HTML] --> D[DOM]
      B[CSS] --> D
      C[JavaScript] --> D
      D --> E[ユーザーインターフェース]
  end
  
  subgraph "通信"
      F[HTTP/HTTPS]
      G[API/REST]
      H[WebSocket]
  end
  
  subgraph "サーバー側"
      I[Webサーバー]
      J[アプリケーションサーバー]
      K[データベースサーバー]
  end
  
  subgraph "開発・運用"
      L[バージョン管理]
      M[CI/CD]
      N[クラウドサービス]
  end
  
  E -.-> F
  F -.-> I
  I --> J
  J --> K
  
  style A fill:#e2e8f0
  style B fill:#fef3cd
  style C fill:#dcfce7
  style I fill:#fef2f2
`}),e.jsxs(r,{type:"info",title:"技術の役割分担",children:[e.jsx(s.p,{children:"各技術が協力してWebアプリケーションを構成しています："}),e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"フロントエンド"}),": ユーザーが直接触れる部分"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"バックエンド"}),": データ処理やビジネスロジック"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"データベース"}),": 情報の永続化"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"インフラ"}),": アプリケーションの実行環境"]}),`
`]})]})]}),`
`,e.jsxs(n,{summary:"フロントエンド技術の詳細",children:[e.jsx(s.h3,{children:"フロントエンド技術の構成要素"}),e.jsx(i,{children:`
graph TD
  A[フロントエンド] --> B[HTML]
  A --> C[CSS]
  A --> D[JavaScript]
  
  B --> B1[セマンティックHTML]
  B --> B2[アクセシビリティ]
  B --> B3[SEO対応]
  
  C --> C1[レスポンシブデザイン]
  C --> C2[アニメーション]
  C --> C3[プリプロセッサ]
  
  D --> D1[DOM操作]
  D --> D2[イベント処理]
  D --> D3[Ajax通信]
  D --> D4[フレームワーク]
  
  D4 --> D4a[React]
  D4 --> D4b[Vue.js]
  D4 --> D4c[Angular]
  
  style A fill:#e2e8f0
  style B fill:#dcfce7
  style C fill:#fef3cd
  style D fill:#fef2f2
`}),e.jsx(s.h3,{children:"フロントエンド開発の進化"}),e.jsx(r,{type:"note",title:"フロントエンド技術の変遷",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1990年代"}),": 静的なHTMLページ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"2000年代"}),": CSS + JavaScript でリッチな表現"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"2010年代"}),": jQuery、Ajax で動的なWebアプリ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"2015年〜"}),": React、Vue.js等のフレームワーク時代"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"現在"}),": TypeScript、PWA、SSR等のモダン技術"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"バックエンド技術の詳細",children:[e.jsx(s.h3,{children:"バックエンドの主要技術"}),e.jsx(i,{children:`
graph TD
  A[バックエンド] --> B[プログラミング言語]
  A --> C[フレームワーク]
  A --> D[データベース]
  A --> E[インフラ]
  
  B --> B1[JavaScript/Node.js]
  B --> B2[Python]
  B --> B3[PHP]
  B --> B4[Java]
  B --> B5[Ruby]
  
  C --> C1[Express.js]
  C --> C2[Django/Flask]
  C --> C3[Laravel]
  C --> C4[Spring Boot]
  C --> C5[Ruby on Rails]
  
  D --> D1[MySQL]
  D --> D2[PostgreSQL]
  D --> D3[MongoDB]
  D --> D4[Redis]
  
  E --> E1[AWS/GCP/Azure]
  E --> E2[Docker]
  E --> E3[Kubernetes]
  
  style A fill:#e2e8f0
  style B fill:#dcfce7
  style C fill:#fef3cd
  style D fill:#fef2f2
  style E fill:#f3e8ff
`}),e.jsx(s.h3,{children:"バックエンドの役割"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"データ処理"}),e.jsx("div",{className:"text-sm text-slate-600",children:"データベースとの連携、データの検証・変換"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"認証・認可"}),e.jsx("div",{className:"text-sm text-slate-600",children:"ユーザー認証、権限管理、セキュリティ"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"ビジネスロジック"}),e.jsx("div",{className:"text-sm text-slate-600",children:"アプリケーション固有の処理、計算"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-slate-50 rounded border border-slate-200",children:[e.jsx("div",{className:"w-6 h-6 text-slate-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-slate-800",children:"API提供"}),e.jsx("div",{className:"text-sm text-slate-600",children:"フロントエンドとの通信インターフェース"})]})]})]})})]}),`
`,e.jsxs(n,{summary:"フロントエンド技術の詳細理解",children:[e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("div",{className:"w-8 h-8 text-blue-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-blue-800",children:"HTML（構造）"}),e.jsx("div",{className:"text-sm text-blue-700",children:"Webページの骨組み・構造を作る言語"}),e.jsx("div",{className:"text-xs text-blue-600 mt-1",children:"例：見出し、段落、リスト、画像など"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-orange-50 rounded border border-orange-200",children:[e.jsx("div",{className:"w-8 h-8 text-orange-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-2 2H9"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-orange-800",children:"CSS（見た目）"}),e.jsx("div",{className:"text-sm text-orange-700",children:"Webページのデザイン・レイアウトを調整する言語"}),e.jsx("div",{className:"text-xs text-orange-600 mt-1",children:"例：色、フォント、配置、アニメーションなど"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-8 h-8 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"JavaScript（動作）"}),e.jsx("div",{className:"text-sm text-green-700",children:"Webページに動きやインタラクションを追加する言語"}),e.jsx("div",{className:"text-xs text-green-600 mt-1",children:"例：ボタンクリック、フォーム処理、データ通信など"})]})]})]})}),e.jsx(r,{type:"info",title:"3つの言語の役割分担",children:e.jsxs(s.p,{children:["フロントエンド開発では、",e.jsx(s.strong,{children:"HTML、CSS、JavaScript"}),"がそれぞれ異なる役割を担っています。この3つを組み合わせることで、美しく機能的なWebアプリケーションを作ることができます。"]})}),e.jsx(s.h3,{children:"フロントエンド技術の連携フロー"}),e.jsx(i,{children:`
sequenceDiagram
  participant User as ユーザー
  participant HTML as HTML
  participant CSS as CSS
  participant JS as JavaScript
  participant Server as サーバー
  
  User->>HTML: ページ読み込み
  HTML->>CSS: スタイル適用依頼
  CSS-->>HTML: 見た目を調整
  HTML-->>User: 初期画面表示
  
  User->>JS: ボタンクリック
  JS->>HTML: DOM要素を操作
  JS->>CSS: 動的スタイル変更
  JS->>Server: データ取得要求
  Server-->>JS: JSON データ返却
  JS->>HTML: 画面更新
  HTML-->>User: 結果表示
  
  Note over User,Server: 各技術が協力してリッチな体験を提供
`}),e.jsx(s.h3,{children:"各技術の詳細な学習項目"}),e.jsx(n,{summary:"HTML学習項目",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本構造"}),": DOCTYPE、html、head、body"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"セマンティック要素"}),": header、nav、main、section、article、footer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"フォーム要素"}),": input、select、textarea、button"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"アクセシビリティ"}),": aria属性、alt属性、ラベル関連付け"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SEO対策"}),": メタタグ、構造化データ"]}),`
`]})}),e.jsx(n,{summary:"CSS学習項目",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本スタイル"}),": 色、フォント、サイズ、余白"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"レイアウト"}),": Flexbox、CSS Grid、ポジショニング"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"レスポンシブデザイン"}),": メディアクエリ、可変単位"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"アニメーション"}),": transition、animation、transform"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"プリプロセッサ"}),": Sass、Less、Stylus"]}),`
`]})}),e.jsx(n,{summary:"JavaScript学習項目",children:e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本文法"}),": 変数、関数、条件分岐、ループ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DOM操作"}),": 要素の取得・変更・追加・削除"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"イベント処理"}),": クリック、キーボード、マウス操作"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"非同期処理"}),": Promise、async/await、fetch"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"モダン文法"}),": アロー関数、分割代入、テンプレートリテラル"]}),`
`]})})]}),`
`,e.jsxs(n,{summary:"演習：HTML/CSS/JavaScriptを触ってみよう",children:[e.jsx(s.p,{children:"実際にコードを書いて動作を確認してみましょう！"}),e.jsx(r,{type:"tip",title:"CodePenで実践",children:e.jsx(s.p,{children:"以下のリンクにアクセスして、HTML、CSS、JavaScriptがどのように連携して動作するかを体験してみてください。"})}),e.jsx(s.p,{children:e.jsx(s.a,{href:"https://codepen.io/cha1ra/pen/ogjzJxv",children:"https://codepen.io/cha1ra/pen/ogjzJxv"})}),e.jsxs(l,{children:[e.jsx("p",{className:"codepen","data-height":"300","data-default-tab":"html,result","data-slug-hash":"ogjzJxv","data-pen-title":"HTML, CSS, JavaScript の役割 - v2","data-user":"cha1ra",style:{height:"300px",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid",margin:"1em 0",padding:"1em"},children:e.jsxs("span",{children:["See the Pen ",e.jsx("a",{href:"https://codepen.io/cha1ra/pen/ogjzJxv",children:`
HTML, CSS, JavaScript の役割 - v2`})," by cha1ra (",e.jsx("a",{href:"https://codepen.io/cha1ra",children:"@cha1ra"}),`)
on `,e.jsx("a",{href:"https://codepen.io",children:"CodePen"}),"."]})}),e.jsx("script",{async:!0,src:"https://public.codepenassets.com/embed/index.js"})]}),e.jsx(s.h3,{children:"演習の流れ"}),e.jsx(i,{children:`
flowchart TD
  A[CodePenにアクセス] --> B[HTML部分を確認]
  B --> C[CSS部分を確認]
  C --> D[JavaScript部分を確認]
  D --> E[コードを改変してみる]
  E --> F[結果を確認]
  F --> G[さらに実験してみる]
  
  E1[ボタンの色を変更] --> E
  E2[新しいボタンを追加] --> E
  E3[アニメーション追加] --> E
  
  style A fill:#e2e8f0
  style F fill:#dcfce7
  style G fill:#fef3cd
`}),e.jsx(s.h3,{children:"具体的な実験例"}),e.jsx(n,{summary:"HTML部分を改変してみよう",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 新しいボタンを追加してみる -->
<button id="changeColor">色を変える</button>
<button id="changeText">テキストを変える</button>
<button id="addElement">要素を追加</button>

<!-- 新しい要素を追加 -->
<div id="message">ここにメッセージが表示されます</div>
`})})}),e.jsx(n,{summary:"CSS部分を改変してみよう",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`/* ボタンのスタイルを変更 */
button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
  padding: 12px 24px;
  margin: 8px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* メッセージエリアのスタイル */
#message {
  background-color: #f0f8ff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  border-left: 5px solid #007acc;
}
`})})}),e.jsx(n,{summary:"JavaScript部分を改変してみよう",children:e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// 色を変えるボタンの機能
document.getElementById('changeColor').addEventListener('click', function() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// テキストを変えるボタンの機能
document.getElementById('changeText').addEventListener('click', function() {
  const messages = ['こんにちは！', 'Hello!', '你好！', 'Bonjour!', 'Hola!'];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').textContent = randomMessage;
});

// 要素を追加するボタンの機能
document.getElementById('addElement').addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = '新しい要素が追加されました！ ' + new Date().toLocaleTimeString();
  newElement.style.color = '#007acc';
  document.body.appendChild(newElement);
});
`})})}),e.jsx(r,{type:"success",title:"実験してみよう！",children:e.jsx(s.p,{children:"上記のコードをCodePenに貼り付けて、どのような動作をするか確認してみてください。そして、自分なりにアレンジを加えてみましょう！"})}),e.jsxs(n,{summary:"[補足] CodePenとは",children:[e.jsx(s.p,{children:"CodePenは、ブラウザ上でHTML、CSS、JavaScriptを書いて動作を確認できるオンラインエディタです。"}),e.jsx(s.h3,{children:"CodePenの特徴"}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"即座に実行"}),e.jsx("div",{className:"text-sm text-green-700",children:"コードを書いたその瞬間に結果が表示される"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"簡単な共有"}),e.jsx("div",{className:"text-sm text-green-700",children:"URLを共有するだけで他の人に見てもらえる"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"学習リソース"}),e.jsx("div",{className:"text-sm text-green-700",children:"他の人のコードを参考にして学習できる"})]})]}),e.jsxs("div",{className:"flex items-start p-3 bg-green-50 rounded border border-green-200",children:[e.jsx("div",{className:"w-6 h-6 text-green-600 mr-3 mt-0.5",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-green-800",children:"無料で利用"}),e.jsx("div",{className:"text-sm text-green-700",children:"アカウント登録不要で、基本機能はすべて無料"})]})]})]})}),e.jsx(s.p,{children:"学習初期段階では、環境構築の手間なく気軽にコードを試せるため非常に便利です。"})]})]}),`
`,e.jsxs(n,{summary:"学習のロードマップ",children:[e.jsx(l,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-center mb-6",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4",children:e.jsx("div",{className:"w-8 h-8 text-slate-600",children:e.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})})}),e.jsx("div",{className:"font-medium text-slate-800 mb-2",children:"Webアプリ開発の学習順序"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold",children:"1"}),e.jsx("div",{className:"font-medium text-slate-800",children:"HTML"}),e.jsx("div",{className:"text-sm text-slate-600",children:"基本構造"})]}),e.jsx("div",{className:"text-slate-400 px-2",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold",children:"2"}),e.jsx("div",{className:"font-medium text-slate-800",children:"CSS"}),e.jsx("div",{className:"text-sm text-slate-600",children:"デザイン"})]}),e.jsx("div",{className:"text-slate-400 px-2",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold",children:"3"}),e.jsx("div",{className:"font-medium text-slate-800",children:"JavaScript"}),e.jsx("div",{className:"text-sm text-slate-600",children:"動的機能"})]}),e.jsx("div",{className:"text-slate-400 px-2",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold",children:"4"}),e.jsx("div",{className:"font-medium text-slate-800",children:"統合"}),e.jsx("div",{className:"text-sm text-slate-600",children:"Webアプリ"})]})]})]})}),e.jsx(s.h3,{children:"詳細な学習フロー"}),e.jsx(i,{children:`
graph TD
  A[Webアプリ学習開始] --> B[Phase 1: HTML基礎]
  B --> C[Phase 2: CSS基礎]
  C --> D[Phase 3: JavaScript基礎]
  D --> E[Phase 4: 統合・実践]
  
  B --> B1[基本タグの理解]
  B --> B2[セマンティックHTML]
  B --> B3[フォーム作成]
  
  C --> C1[基本スタイリング]
  C --> C2[レイアウト技法]
  C --> C3[レスポンシブデザイン]
  
  D --> D1[基本文法・DOM操作]
  D --> D2[イベント処理]
  D --> D3[Ajax・API連携]
  
  E --> E1[ポートフォリオサイト]
  E --> E2[ToDoアプリ]
  E --> E3[チャットアプリ]
  
  style A fill:#e2e8f0
  style B fill:#dcfce7
  style C fill:#fef3cd
  style D fill:#fef2f2
  style E fill:#f3e8ff
`}),e.jsxs(n,{summary:"学習の進め方のコツ",children:[e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"段階的に学習"}),"：一度にすべてを覚えようとせず、一つずつ確実にマスターしていく"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"実際に手を動かす"}),"：読むだけでなく、必ずコードを書いて動作を確認する"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"小さなプロジェクトから始める"}),"：複雑なものを作る前に、シンプルなページから作成する"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"継続的な練習"}),"：毎日少しずつでも良いので継続して学習する"]}),`
`]}),e.jsx(r,{type:"warning",title:"学習時の注意点",children:e.jsx(s.p,{children:"最初は覚えることが多く感じるかもしれませんが、焦らず一歩ずつ進めていきましょう。完璧を目指すよりも、まずは「動くもの」を作ることを優先してください。"})})]}),e.jsx(s.h3,{children:"各段階での目標設定"}),e.jsxs(n,{summary:"Phase 1: HTML基礎の目標",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本構造の理解"}),": DOCTYPE、html、head、body"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"よく使うタグの習得"}),": h1-h6、p、div、span、a、img"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"リスト作成"}),": ul、ol、li"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"テーブル作成"}),": table、tr、td、th"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"フォーム作成"}),": form、input、textarea、button"]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"成果物"}),": 自己紹介ページを作成"]})]}),e.jsxs(n,{summary:"Phase 2: CSS基礎の目標",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本スタイリング"}),": 色、フォント、サイズ、余白"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ボックスモデルの理解"}),": margin、padding、border"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"レイアウト"}),": display、position、float"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flexbox"}),": 効率的なレイアウト手法"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"レスポンシブデザイン"}),": メディアクエリ"]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"成果物"}),": 美しいランディングページを作成"]})]}),e.jsxs(n,{summary:"Phase 3: JavaScript基礎の目標",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"基本文法"}),": 変数、関数、条件分岐、ループ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DOM操作"}),": 要素の取得・変更・追加・削除"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"イベント処理"}),": クリック、入力、マウス操作"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"データ操作"}),": 配列、オブジェクト、JSON"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"非同期処理"}),": fetch、Promise、async/await"]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"成果物"}),": インタラクティブなToDoアプリを作成"]})]}),e.jsxs(n,{summary:"Phase 4: 統合・実践の目標",children:[e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"API連携"}),": 外部サービスとの通信"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"状態管理"}),": データの整合性を保つ"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"エラーハンドリング"}),": 適切なエラー処理"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"パフォーマンス"}),": 最適化の基本"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"デプロイ"}),": 実際に公開する"]}),`
`]}),e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"成果物"}),": 完全なWebアプリケーションを作成・公開"]})]})]}),`
`,e.jsx(s.h2,{children:"まとめ・次のステップ"}),`
`,e.jsx(r,{type:"success",title:"この章で学んだこと",children:e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Webアプリケーションはブラウザ上で動作するアプリケーション"}),`
`,e.jsx(s.li,{children:"ネイティブアプリと比べて開発期間が短く、学習に適している"}),`
`,e.jsx(s.li,{children:"フロントエンド技術は HTML、CSS、JavaScript の3つが基本"}),`
`,e.jsx(s.li,{children:"段階的に学習することで確実にスキルアップできる"}),`
`]})}),`
`,e.jsx(s.p,{children:"次の章からは、実際にHTML、CSS、JavaScriptを一つずつ学習していきます。Webアプリケーション開発の楽しさを一緒に体験していきましょう！"}),`
`,e.jsx(n,{summary:"次に学ぶべきトピック",children:e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"HTML基礎"}),"：Webページの構造を作る"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CSS基礎"}),"：見た目を美しくデザインする"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"JavaScript基礎"}),"：動的な機能を実装する"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"実践プロジェクト"}),"：学んだ技術を組み合わせてWebアプリを作成する"]}),`
`]})})]})}function oe(d={}){const{wrapper:s}={...t(),...d.components};return s?e.jsx(s,{...d,children:e.jsx(H,{...d})}):H(d)}function v(d,s){throw new Error("Expected component `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}const he=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"})),f=Object.assign({"../lessons/css.mdx":W,"../lessons/github.mdx":z,"../lessons/html.mdx":F,"../lessons/introduction-ai.mdx":U,"../lessons/introduction.mdx":Q,"../lessons/js01-変数・計算・条件分岐.mdx":q,"../lessons/js02-配列・for文・localStorage.mdx":Y,"../lessons/js03-firebase.mdx":ee,"../lessons/js04-API.mdx":ne,"../lessons/php01-環境設定とPHPの基礎.mdx":le,"../lessons/php02-データベース連携（CRUD）.mdx":ie,"../lessons/php03-ユーザ管理.mdx":ce,"../lessons/php04-データベース設計基礎.mdx":xe,"../lessons/webapp.mdx":he});function je(){var s;const d=[];for(const r in f){const n=f[r],l=r.replace("../lessons/","").replace(/\.mdx$/,""),i=((s=n.frontmatter)==null?void 0:s.title)||l;d.push({slug:l,title:i})}return d.sort((r,n)=>r.slug.localeCompare(n.slug))}async function ue(){const{publicSlugs:d}=await B(async()=>{const{publicSlugs:n}=await import("./public-lessons-B2ilRkP2.js");return{publicSlugs:n}},[]),s=je(),r=[];for(const n of d){const l=s.find(i=>i.slug===n);l&&r.push(l)}return r}function ge(d){const s=`../lessons/${d}.mdx`,r=f[s];return r?r.default:null}export{ge as a,ue as b,je as g};
