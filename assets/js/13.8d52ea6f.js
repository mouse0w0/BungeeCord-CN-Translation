(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{460:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"聊天组件-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聊天组件-api"}},[s._v("#")]),s._v(" 聊天组件 API")]),s._v(" "),a("p",[s._v("使用 BungeeCord 聊天 API 构建消息。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ci.md-5.net/job/BungeeCord/ws/chat/target/apidocs/overview-summary.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chat API Javadoc"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),a("p",[s._v("最简单的组件是 TextComponent（文本组件），在 BungeeCord 的使用方法如下:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("player"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者你想在 Spigot 中使用:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("player"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("spigot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这是一个简单的消息，没有格式和颜色。")]),s._v(" "),a("h2",{attrs:{id:"颜色与格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色与格式"}},[s._v("#")]),s._v(" 颜色与格式")]),s._v(" "),a("p",[s._v("每个组件都支持如下功能:")]),s._v(" "),a("ul",[a("li",[s._v("颜色（Color）")]),s._v(" "),a("li",[s._v("粗体（Bold）")]),s._v(" "),a("li",[s._v("斜体（Italic）")]),s._v(" "),a("li",[s._v("下划线（Underline）")]),s._v(" "),a("li",[s._v("删除线（Strikethrough）")]),s._v(" "),a("li",[s._v("乱码（Obfuscate）")]),s._v(" "),a("li",[s._v("事件（Events）（在下文中会详细介绍）")])]),s._v(" "),a("p",[s._v("举个例子:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RED "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v('这将显示 "Hello World"（红色，加粗）. 任何格式和事件也应用于子组件，除非子组件覆盖设置。例如:')]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RED "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setBold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),s._v(" world "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BLUE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addExtra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" world "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addExtra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v('将会显示 "Hello world!"（全文为粗体，"Hello"和"!"为红色，"world"为蓝色）')]),s._v(" "),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[s._v("#")]),s._v(" 事件")]),s._v(" "),a("p",[s._v('事件允许当文本被操作（点击或鼠标悬浮）时执行动作。目前 Minecraft 仅支持两个事件，分别是 HoverEvent（鼠标悬浮事件）和 ClickEvent（点击事件）。两个事件都有一个动作（当事件发生之后执行什么）和一个数值（这个动作的参数）。例如，如果一个点击事件的动作是 OPEN_URL（打开URL），那么它的值必须是一个有效的URL，例如"http://spigotmc.org"。')]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Click me"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setClickEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClickEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClickEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OPEN_URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://spigotmc.org"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHoverEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HoverEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HoverEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SHOW_TEXT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ComponentBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Goto the Spigot website!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("spigot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"客户端翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端翻译"}},[s._v("#")]),s._v(" 客户端翻译")]),s._v(" "),a("p",[s._v("TranslatableComponent（可翻译组件）可以用来发送翻译键（key）让客户端翻译，这意味着你只能使用 Minecraft 提供的文本（"),a("a",{attrs:{href:"https://github.com/SpigotMC/BungeeCord/blob/master/chat/src/main/resources/mojang-translations/en_US.properties",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里查看"),a("OutboundLink")],1),s._v("），除非使用一个资源包来添加更多文本。一些支持参数的翻译的参数可以是TranslatableComponent（或者只是 TextComponent）。")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TranslatableComponent")]),s._v(" giveMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TranslatableComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commands.give.success"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TranslatableComponent")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TranslatableComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item.swordDiamond.name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nitem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GOLD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngiveMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngiveMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"32"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Thinkofdeath"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nusername"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AQUA "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngiveMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" giveMessage "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v('以上的代码在客户端使用的语言为en_US（美式英语）时将会显示"Given Diamond Sword * 32 to Thinkofdeath"， 但如果客户端使用的语言为zh_CN（简体中文）时将会显示"成功将 钻石剑 * 32 给予 Thinkofdeath"。')]),s._v(" "),a("h2",{attrs:{id:"组件建造者-component-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件建造者-component-builder"}},[s._v("#")]),s._v(" 组件建造者（Component Builder）")]),s._v(" "),a("p",[s._v("简单的消息可以使用 ComponentBuilder（组件建造者）节省很多工作。ComponentBuilder 是一个链式结构的对象，允许快速创建消息。例如：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("player"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ComponentBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RED "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BLUE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"!"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChatColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RED "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('这将显示 "Hello world!"')]),s._v(" "),a("h2",{attrs:{id:"常见的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的问题"}},[s._v("#")]),s._v(" 常见的问题")]),s._v(" "),a("p",[s._v("直接创建"),a("code",[s._v("BaseComponent")]),s._v("实例是没用的（例如 "),a("code",[s._v("player.sendMessage( new BaseComponent(){} );")]),s._v("），应使用"),a("code",[s._v("TextComponent")]),s._v("或"),a("code",[s._v("TranslatableComponent")]),s._v("。"),a("br"),s._v("\n使用旧版的颜色代码（例如 "),a("code",[s._v('player.sendMessage( new TextComponent( ChatColor.RED + ":-(" ) );')]),s._v("）将会不能很好的显示甚至导致客户端异常。使用"),a("code",[s._v("TextComponent.fromLegacyText()")]),s._v("方法将旧格式转换为新格式")]),s._v(" "),a("h2",{attrs:{id:"动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动作"}},[s._v("#")]),s._v(" 动作")]),s._v(" "),a("p",[s._v("所有的 ClickEvent（点击事件） 和 HoverEvent（悬浮事件）的动作如下所示：")]),s._v(" "),a("h3",{attrs:{id:"点击事件动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击事件动作"}},[s._v("#")]),s._v(" 点击事件动作")]),s._v(" "),a("p",[s._v("当用户点击消息时，这些动作将会执行：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OPEN_URL "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在用户的浏览器打开指定URL")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OPEN_FILE "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在用户的电脑打开指定文件")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RUN_COMMAND "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//让用户运行指令")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SUGGEST_COMMAND "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在用户的输入框设置文字")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CHANGE_PAGE "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//改变书本的页码")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"悬浮事件动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悬浮事件动作"}},[s._v("#")]),s._v(" 悬浮事件动作")]),s._v(" "),a("p",[s._v("当用户鼠标指针悬浮在消息上时，这些动作将会执行：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SHOW_TEXT "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//显示一个文本")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SHOW_ACHIEVEMENT "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//显示一个成就及其介绍")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SHOW_ITEM "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//显示一个物品的名字和其他信息")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SHOW_ENTITY "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//显示一个实体的名字，ID和其他信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);