(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{317:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return d}));var o=n(318),r=n(0),l=Object(r.g)("v-card__actions"),c=Object(r.g)("v-card__subtitle"),h=Object(r.g)("v-card__text"),d=Object(r.g)("v-card__title");o.a},318:function(t,e,n){"use strict";n(10),n(8),n(7),n(4),n(9);var o=n(2),r=(n(12),n(320),n(143)),l=n(1),c=(n(98),n(321),n(145)),h=n(21),d=n(70),m=n(144),f=n(13),k=n(0),v=n(5);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w=Object(v.a)(h.a,Object(d.b)(["absolute","fixed","top","bottom"]),m.a,f.a).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(k.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(k.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(t,this.isReversed?"right":"left",Object(k.f)(this.normalizedValue,"%")),Object(o.a)(t,"width",Object(k.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(k.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(k.k)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(k.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),B=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),j=n(65);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(v.a)(B,j.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return O(O({"v-card":!0},j.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=O({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=B.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},320:function(t,e,n){},321:function(t,e,n){},322:function(t,e,n){},326:function(t,e,n){"use strict";n(141);var o=n(142);e.a=Object(o.a)("layout")},328:function(t,e,n){"use strict";var o=n(322);n.n(o).a},339:function(t,e,n){"use strict";n.r(e);var o={computed:{about_md:function(){switch(this.$i18n.locale){case"ja":return'<section><h1>フブキボタン - 白上フブキのボイスボタン</h1>\n<p><img src="https://img.shields.io/github/package-json/v/oruyanke/fubuki-button" alt="Version">\n<img src="https://img.shields.io/github/workflow/status/oruyanke/fubuki-button/FBK-BTN-NG-CI" alt="Build">\n<img src="https://img.shields.io/github/last-commit/oruyanke/fubuki-button" alt="Last Commit">\n<img src="https://img.shields.io/github/stars/oruyanke/fubuki-button" alt="Starts"></p>\n<p>README: <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.md">中文</a> | <strong>日本語</strong> | <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.EN.md">English</a></p>\n<blockquote>\n<p>新しい白上フブキのボイスボタン。私たちの目標は白上フブキの総合的なファンサイトを作ることです。</p>\n</blockquote>\n<p>ホームページ <a href="https://fubuki.moe">https://fubuki.moe</a></p>\n<p>関連リンク:</p>\n<ul>\n<li><a href="https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg">白上フブキのYouTubeチャンネル</a></li>\n<li><a href="https://space.bilibili.com/332704117">白上フブキのBilibiliチャンネル</a></li>\n<li><a href="https://twitter.com/shirakamifubuki">白上フブキのTwitter</a></li>\n</ul>\n<h2>計画中の機能</h2>\n<ul>\n<li>fubukitap(<a href="https://aidn.jp/mikutap/">mikutap</a> に類似)</li>\n<li>生放送や動画のカレンダーを表示</li>\n<li>フブキのスタンプ/ミーム</li>\n<li>YouTube/Bilibiliのデータを表示</li>\n</ul>\n<h2>このプロジェクトへの貢献(コントリビュート)</h2>\n<p>GitHubの開発に直接参加する方法が分からない場合は、素材や意見を直接以下のメールアドレスに送信してください。(<a href="mailto:voice@fubuki.moe">voice@fubuki.moe</a>)。またメールの中にタイトル、内容及びあなたのID（Bilibili、Twitterやその他）を記述してください。そうすることで私達は下のコントリビューターリストにあなたの名前を掲載することができます。</p>\n<p>もしくは素材や意見をGitHubの<a href="https://github.com/copperion/fubuki-button/issues">Issues</a> ページに送ることもできます。メールの場合と同じようにタイトルと内容を記述してください。</p>\n<p>もしGitHubでの開発方法を知っている場合は、プロジェクトをフォークして変更してください。変更が完了したら、プルリクエストしてください。各項目の編集に関しては以下に記述されています。</p>\n<h3>音声の追加または修正</h3>\n<p>音声データはmp3のビットレート128Kbpsで統一し、<code>static/voices/</code>に保存してください。対応するURLは<code>/voices/</code>に入れてください。</p>\n<p>すべての音声データのメタデータは<code>assets/voices.json</code>に追加または修正をしてください。</p>\n<p>音声を変更する場合は変更後に変更前のファイルを削除してください。音声ファイルは，必ず過去を含め現在のファイル名と同じものであってはなりません。</p>\n<h3>翻訳</h3>\n<p>日本語と英語への翻訳が必要です！</p>\n<p>ボタンなどのテキストの翻訳は <code>assets/locales/</code> 内に各言語に対応した3つの.jsonファイルがあります。</p>\n<p>音声のタイトルテキストファイルは <code>aseets/voices.json</code> 内にあります。</p>\n<h2>ローカルでのデプロイ</h2>\n<p>ローカル開発環境をデプロイする\nこのサイトはVue + NuxtJS + Vuetifyを使用して開発しています。</p>\n<p>ローカル開発環境をデプロイするためには、まず最新版のNodeとYarnをインストールしてください。その後、以下の手順に従ってください。</p>\n<ol>\n<li>コードをforkしてクローンする。</li>\n<li>コードディレクトリに移動し、yarnを実行して依存関係をインストールする。</li>\n<li><code>yarn dev</code>を実行し、<code>localhost:3000</code>でローカル開発サーバーを起動する。ローカル開発サーバーでは、変更した結果をすぐに反映させることが可能です。</li>\n<li>デプロイ用ファイルをコンパイルするためには、<code>yarn generae</code>を実行して<code>dist</code>ディレクトリを生成してください。このサイトは完全に静的なので、distディレクトリ全体を直接デプロイすることができます。</li>\n</ol>\n<h2>コントリビューター</h2>\n<p>開発:</p>\n<ul>\n<li><a href="https://github.com/lonelyion">孤独のイオン</a></li>\n<li><a href="https://github.com/Morxi">Asrui Morus</a></li>\n</ul>\n<p>オーディオクリップ：</p>\n<ul>\n<li>Bilibili <a href="https://space.bilibili.com/7564991">孤单离子</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/22311554">清流ht</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/1592713">绯月天则</a></li>\n<li>Bilibili <a href="https://m.bilibili.com/space/356250024">hanyuu</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/378488520">蓝颜知渡</a></li>\n</ul>\n<p>翻訳：</p>\n<ul>\n<li>GitHub <a href="https://github.com/dakuamsu">Dakumasu</a></li>\n<li>GitHub <a href="https://github.com/Yourein">Yourein</a></li>\n<li>Twitter <a href="https://twitter.com/nekoy0212anagi">nekoy0212anagi</a></li>\n<li>GitHub <a href="https://github.com/ShirakamiEmmmer">Emmmer</a></li>\n</ul>\n<p>特別協力：</p>\n<ul>\n<li><a href="https://vtbmusic.com/">VTuber Music</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/431210892/">吹雪的猫咪茶铺</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/487763794">白上吹雪周报</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/45070033">戌神沁音的手指面包店</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/2613724">亡音ちゃん</a></li>\n<li>そして、GitHubでこのプロジェクトに参加した以下の人々</li>\n</ul>\n<p><a href="https://github.com/oruyanke/fubuki-button/graphs/contributors"><img src="https://contributors-img.web.app/image?repo=oruyanke/fubuki-button" alt="GitHub Contributors"></a></p>\n<h2>LICENCE</h2>\n<p>プログラム： <a href="https://github.com/oruyanke/fubuki-button/blob/master/LICENSE">MIT License</a></p>\n<p>音声: <a href="https://www.hololive.tv/terms">Hololive 二次创作条款</a></p>\n<p>このプロジェクトはファンによるもので、Hololive公式は一切関係ありません</p>\n<h2>サポート</h2>\n<h3>BroswerStack</h3>\n<p>Proudly using BrowserStack.</p>\n<p><a href="https://www.browserstack.com/"><img src="https://i.loli.net/2017/09/27/59cbc16b0f8b4.png" alt=""></a></p>\n<blockquote>\n<p><strong>BrowserStack</strong> is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.</p>\n</blockquote>\n<h3>Vercel</h3>\n<p>Powered by Vercel.</p>\n<p><a href="https://www.vercel.com/?utm_source=fubuki-button"><img src="https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png" alt="vercel.png"></a></p>\n<blockquote>\n<p><strong>​Vercel</strong> is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.</p>\n</blockquote>\n</section>\n';case"en":return'<section><h1>Fubuki-Button - Shirakami Fubuki\'s Voice Button</h1>\n<p><img src="https://img.shields.io/github/package-json/v/oruyanke/fubuki-button" alt="Version">\n<img src="https://img.shields.io/github/workflow/status/oruyanke/fubuki-button/FBK-BTN-NG-CI" alt="Build">\n<img src="https://img.shields.io/github/last-commit/oruyanke/fubuki-button" alt="Last Commit">\n<img src="https://img.shields.io/github/stars/oruyanke/fubuki-button" alt="Starts"></p>\n<p>README: <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.md">中文</a> | <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.JA.md">日本語</a> | <strong>English</strong></p>\n<blockquote>\n<p>Brand new voice buttons for Shirakami Fubuki, we are aimming at building a comprehensive project related to Shirakami Fubuki.</p>\n</blockquote>\n<p>Project Homepage: <a href="https://fubuki.moe">https://fubuki.moe</a></p>\n<p>Related Links:</p>\n<ul>\n<li><a href="https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg">Shirakami Fubuki\'s Youtube Channel</a></li>\n<li><a href="https://space.bilibili.com/332704117">Shirakami Fubuki\'s Bilibili Channel</a></li>\n<li><a href="https://twitter.com/shirakamifubuki">Shirakami Fubuki\'s Twitter</a></li>\n</ul>\n<h2>Planning to do</h2>\n<ul>\n<li>fubukitap(Similar to <a href="https://aidn.jp/mikutap/">mikutap</a>)</li>\n<li>Calender of lives / activities</li>\n<li>Memes for Fubuki</li>\n<li>Data visualization of Youtube / Bilibili</li>\n</ul>\n<h2>Contributing</h2>\n<p>If you don\'t know how to participate on GitHub, you can directly send voice clips or suggestions to <a href="mailto:voice@fubuki.moe">voice@fubuki.moe</a> with title, content and your social ID(Twitter, Bilibili or so on). We will add your ID to the contributors list below.</p>\n<p>Also you can submit <a href="https://github.com/copperion/fubuki-button/issues">Issues</a> to upload audio clips.</p>\n<p>If you can do some programming, just fork this repository and modify it. After you have done, just open a Pull Request. For detailed information, please read below.</p>\n<h3>Add or modify voice</h3>\n<p>Voice is always in mp3 format with 128Kbps bitrate and stored in <code>static/voices/</code>. The corresponding URL is <code>/voices/</code>.</p>\n<p>All voice meta data is stored in <code>assets/voices.json</code>. To add or modify these voices, you need to modify this file accordingly.</p>\n<p>If you want to modify existed voice clips, I suggest deleting the origin file and name a new filename to avoid browers\' cache problem.</p>\n<h3>Participate in translation</h3>\n<p>Please help us translate to English and Japanese!</p>\n<p>The language files for the main program are in three json files named the language name in <code>assets/locales/</code>.</p>\n<p>The language files for voices are in <code>assets/voices.json</code>.</p>\n<h2>Deploying a local development environment</h2>\n<p>This site is developed using Vue + NuxtJS + Vuetify.</p>\n<p>To deploy a local development environment, first install the latest version of Node and Yarn. Then follow these steps:</p>\n<ol>\n<li>\n<p>Fork and clone the code.</p>\n</li>\n<li>\n<p>Go to the code directory and run <code>yarn</code> to install dependencies.</p>\n</li>\n<li>\n<p>Run <code>yarn dev</code> to start local developemnt server at <code>localhost:3000</code>. The local development server can immediately reflect the results of your modification.</p>\n</li>\n<li>\n<p>To compile the files for deployment, run <code>yarn generate</code>, which will generate the <code>dist</code> directory. This site is completely static, you can directly deploy the entire <code>dist</code> directory.</p>\n</li>\n</ol>\n<h2>Contributors</h2>\n<p>Development:</p>\n<ul>\n<li><a href="https://github.com/lonelyion">Lonely Ion</a></li>\n<li><a href="https://github.com/Morxi">Asrui Morus</a></li>\n</ul>\n<p>Audio Editors:</p>\n<ul>\n<li>Bilibili <a href="https://space.bilibili.com/7564991">孤单离子</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/22311554">清流ht</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/1592713">绯月天则</a></li>\n<li>Bilibili <a href="https://m.bilibili.com/space/356250024">hanyuu</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/378488520">蓝颜知渡</a></li>\n</ul>\n<p>Translation:</p>\n<ul>\n<li>GitHub <a href="https://github.com/dakuamsu">Dakumasu</a></li>\n<li>GitHub <a href="https://github.com/Yourein">Yourein</a></li>\n<li>Twitter <a href="https://twitter.com/nekoy0212anagi">nekoy0212anagi</a></li>\n<li>GitHub <a href="https://github.com/ShirakamiEmmmer">Emmmer</a></li>\n</ul>\n<p>Special Thanks to:</p>\n<ul>\n<li><a href="https://vtbmusic.com/">VTuber Music</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/431210892/">吹雪的猫咪茶铺</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/487763794">白上吹雪周报</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/45070033">戌神沁音的手指面包店</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/2613724">亡音ちゃん</a></li>\n<li>And those who contributed to this project on GitHub</li>\n</ul>\n<p><a href="https://github.com/oruyanke/fubuki-button/graphs/contributors"><img src="https://contributors-img.web.app/image?repo=oruyanke/fubuki-button" alt="GitHub Contributors"></a></p>\n<h2>LICENCE</h2>\n<p>Audio: According to the <a href="https://www.hololive.tv/terms">Hololive Secondary Creation Terms</a> (Japanese only).</p>\n<p>Other parts: <a href="https://github.com/oruyanke/fubuki-button/blob/master/LICENSE">MIT License</a></p>\n<p>This project is a work of enthusiasts and is not related to the Hololive official.</p>\n<h2>支持</h2>\n<h3>BroswerStack</h3>\n<p>Proudly using BrowserStack.</p>\n<p><a href="https://www.browserstack.com/"><img src="https://i.loli.net/2017/09/27/59cbc16b0f8b4.png" alt=""></a></p>\n<blockquote>\n<p><strong>BrowserStack</strong> is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.</p>\n</blockquote>\n<h3>Vercel</h3>\n<p>Powered by Vercel.</p>\n<p><a href="https://www.vercel.com/?utm_source=fubuki-button"><img src="https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png" alt="vercel.png"></a></p>\n<blockquote>\n<p><strong>​Vercel</strong> is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.</p>\n</blockquote>\n</section>\n';default:return'<section><h1>狐按钮 / FUBUKI-BUTTON</h1>\n<p><img src="https://img.shields.io/github/package-json/v/oruyanke/fubuki-button" alt="Version">\n<img src="https://img.shields.io/github/workflow/status/oruyanke/fubuki-button/FBK-BTN-NG-CI" alt="Build">\n<img src="https://img.shields.io/github/last-commit/oruyanke/fubuki-button" alt="Last Commit">\n<img src="https://img.shields.io/github/stars/oruyanke/fubuki-button" alt="Starts"></p>\n<p>README: <strong>中文</strong> | <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.JA.md">日本語</a> | <a href="https://github.com/oruyanke/fubuki-button/blob/master/README.EN.md">English</a></p>\n<blockquote>\n<p>全新的白上吹雪语音按钮，目标是打造一个整合白上吹雪各个方面的应援项目</p>\n</blockquote>\n<p>项目地址： <a href="https://fubuki.moe">https://fubuki.moe</a></p>\n<p>相关链接:</p>\n<ul>\n<li><a href="https://www.youtube.com/channel/UCdn5BQ06XqgXoAxIhbqw5Rg">白上吹雪的 YouTube 频道</a></li>\n<li><a href="https://space.bilibili.com/332704117">白上吹雪的 Bilibili 频道</a></li>\n<li><a href="https://twitter.com/shirakamifubuki">白上吹雪的 Twitter</a></li>\n</ul>\n<h2>计划中的特性</h2>\n<ul>\n<li>fubukitap(类似<a href="https://aidn.jp/mikutap/">mikutap</a>)</li>\n<li>直播/活动日历</li>\n<li>吹雪表情包合集/搜索</li>\n<li>YouTube/Bilibili数据可视化</li>\n</ul>\n<h2>参与完善本项目</h2>\n<p>如果您不知道如何直接参与GitHub开发，可以直接将素材或意见建议发送到<a href="mailto:voice@fubuki.moe">voice@fubuki.moe</a>，带上标题、内容以及您的ID（Bilibili、Twitter等均可），贡献者名单将会有您的名字。</p>\n<p>当然您也可以发在 <a href="https://github.com/copperion/fubuki-button/issues">Issues</a> ，同样也请带上标题和内容。</p>\n<p>如果您可以进行开发，那么请Fork本项目进行修改，完成修改后在本项目中发起一个Pull Request，详细说明如下：</p>\n<h3>添加或修改音频</h3>\n<p>音频文件为mp3格式，码率128Kbps，储存在<code>static/voices/</code>目录下，对应的URL为<code>/voices/</code>。</p>\n<p>所有的音频信息都存储在<code>assets/voices.json</code>中，要添加或修改音频，你同样需要修改这个文件中对应的内容。</p>\n<p>如果需要对现有音频进行修改，建议将原音频文件删除，重新命名一个新文件，这样可以避免浏览器缓存问题。</p>\n<h3>参与翻译</h3>\n<p>请帮助进行日语和英语的翻译！</p>\n<p>网页的翻译在<code>assets/locales/</code>中的以三个语音命名的json文件中，音频信息的翻译在<code>assets/voices.json</code>中对应的字段。</p>\n<h3>参与网页开发</h3>\n<p>本项目使用Vue + NuxtJS + Vuetify框架进行开发，要部署本地开发环境，请先安装最新版的Node与Yarn包管理器。</p>\n<ol>\n<li>Fork 并 Clone 代码到本地</li>\n<li>进入代码目录，运行<code>yarn</code>以安装依赖项目</li>\n<li>开启本地开发服务器，运行<code>yarn dev</code>，这将会在<code>localhost:3000</code>启动，在代码修改过程中，本地开发服务器可以即时反映修改的结果。</li>\n<li>要编译可供部署的文件，请运行<code>yarn generate</code>，这将会在<code>dist</code>目录下生成可以直接部署到静态网站托管（GitHub Pages等）的文件。</li>\n</ol>\n<h2>贡献者</h2>\n<p>开发：</p>\n<ul>\n<li>GitHub <a href="https://github.com/lonelyion">孤单离子</a></li>\n<li>GitHub <a href="https://github.com/Morxi">Asrui Morus</a></li>\n</ul>\n<p>音频剪辑：</p>\n<ul>\n<li>Bilibili <a href="https://space.bilibili.com/7564991">孤单离子</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/22311554">清流ht</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/1592713">绯月天则</a></li>\n<li>Bilibili <a href="https://m.bilibili.com/space/356250024">hanyuu</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/378488520">蓝颜知渡</a></li>\n</ul>\n<p>翻译：</p>\n<ul>\n<li>GitHub <a href="https://github.com/dakuamsu">Dakumasu</a></li>\n<li>GitHub <a href="https://github.com/Yourein">Yourein</a></li>\n<li>Twitter <a href="https://twitter.com/nekoy0212anagi">nekoy0212anagi</a></li>\n<li>GitHub <a href="https://github.com/ShirakamiEmmmer">Emmmer</a></li>\n</ul>\n<p>特别感谢：</p>\n<ul>\n<li><a href="https://vtbmusic.com/">VTuber Music</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/431210892">吹雪的猫咪茶铺</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/487763794">白上吹雪周报</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/45070033">戌神沁音的手指面包店</a></li>\n<li>Bilibili <a href="https://space.bilibili.com/2613724">亡音ちゃん</a></li>\n<li>以及以下在GitHub参与过项目的各位</li>\n</ul>\n<p><a href="https://github.com/oruyanke/fubuki-button/graphs/contributors"><img src="https://contributors-img.web.app/image?repo=oruyanke/fubuki-button" alt="GitHub Contributors"></a></p>\n<h2>协议</h2>\n<p>音频部分: <a href="https://www.hololive.tv/terms">Hololive 二次创作条款</a> (只有日语).</p>\n<p>其他部分：<a href="https://github.com/oruyanke/fubuki-button/blob/master/LICENSE">MIT License</a></p>\n<p>本项目为爱好者作品，和 Hololive 官方没有关联</p>\n<h2>支持</h2>\n<h3>BroswerStack</h3>\n<p>Proudly using BrowserStack.</p>\n<p><a href="https://www.browserstack.com/"><img src="https://i.loli.net/2017/09/27/59cbc16b0f8b4.png" alt=""></a></p>\n<blockquote>\n<p><strong>BrowserStack</strong> is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.</p>\n</blockquote>\n<h3>Vercel</h3>\n<p>Powered by Vercel.</p>\n<p><a href="https://www.vercel.com/?utm_source=fubuki-button"><img src="https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png" alt="vercel.png"></a></p>\n<blockquote>\n<p><strong>​Vercel</strong> is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.</p>\n</blockquote>\n</section>\n'}}},head:function(){return{title:this.$t("site.about")+" - "+this.$t("site.title"),link:[{rel:"canonical",href:"https://fubuki.moe/about"}]}}},r=(n(328),n(50)),l=n(97),c=n.n(l),h=n(318),d=n(317),m=n(326),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{column:"","justify-center":"","align-center":"",app:""}},[e("v-card",{staticClass:"readme-card"},[e("v-card-text",[e("div",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.about_md)}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:h.a,VCardText:d.b,VLayout:m.a})}}]);