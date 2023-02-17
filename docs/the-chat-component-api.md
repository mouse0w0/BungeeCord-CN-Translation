---
article: false
---
# 聊天组件 API
使用 BungeeCord 聊天 API 构建消息。

[Chat API Javadoc](https://ci.md-5.net/job/BungeeCord/ws/chat/target/apidocs/overview-summary.html)

## 基础
最简单的组件是 TextComponent（文本组件），在 BungeeCord 的使用方法如下:
```java
player.sendMessage( new TextComponent( "Hello world" ) );
```
或者你想在 Spigot 中使用:
```java
player.spigot().sendMessage( new TextComponent( "Hello world" ) );
```
这是一个简单的消息，没有格式和颜色。

## 颜色与格式
每个组件都支持如下功能:
- 颜色（Color）
- 粗体（Bold）
- 斜体（Italic）
- 下划线（Underline）
- 删除线（Strikethrough）
- 乱码（Obfuscate）
- 事件（Events）（在下文中会详细介绍）

举个例子:
```java
TextComponent message = new TextComponent( "Hello world" );
message.setColor( ChatColor.RED );
message.setBold( true );
player.sendMessage( message );
```
这将显示 "Hello World"（红色，加粗）. 任何格式和事件也应用于子组件，除非子组件覆盖设置。例如:
```java
TextComponent message = new TextComponent( "Hello " );
message.setColor( ChatColor.RED );
message.setBold( true );
TextComponent world = new TextComponent( "world" );
world.setColor( ChatColor.BLUE );
message.addExtra( world );
message.addExtra( "!" );
player.sendMessage( message );
```
将会显示 "Hello world!"（全文为粗体，"Hello"和"!"为红色，"world"为蓝色）

## 事件
事件允许当文本被操作（点击或鼠标悬浮）时执行动作。目前 Minecraft 仅支持两个事件，分别是 HoverEvent（鼠标悬浮事件）和 ClickEvent（点击事件）。两个事件都有一个动作（当事件发生之后执行什么）和一个数值（这个动作的参数）。例如，如果一个点击事件的动作是 OPEN_URL（打开URL），那么它的值必须是一个有效的URL，例如"http://spigotmc.org"。
```java
TextComponent message = new TextComponent( "Click me" );
message.setClickEvent( new ClickEvent( ClickEvent.Action.OPEN_URL, "http://spigotmc.org" ) );
message.setHoverEvent( new HoverEvent( HoverEvent.Action.SHOW_TEXT, new ComponentBuilder("Goto the Spigot website!").create() ) );
player.spigot().sendMessage( message );
```

## 客户端翻译
TranslatableComponent（可翻译组件）可以用来发送翻译键（key）让客户端翻译，这意味着你只能使用 Minecraft 提供的文本（[这里查看](https://github.com/SpigotMC/BungeeCord/blob/master/chat/src/main/resources/mojang-translations/en_US.properties)），除非使用一个资源包来添加更多文本。一些支持参数的翻译的参数可以是TranslatableComponent（或者只是 TextComponent）。
```java
TranslatableComponent giveMessage = new TranslatableComponent( "commands.give.success" );
TranslatableComponent item = new TranslatableComponent( "item.swordDiamond.name" );
item.setColor( ChatColor.GOLD );
giveMessage.addWith( item );
giveMessage.addWith( "32" );
TextComponent username = new TextComponent( "Thinkofdeath" );
username.setColor( ChatColor.AQUA );
giveMessage.addWith( username );
player.sendMessage( giveMessage );
```
以上的代码在客户端使用的语言为en_US（美式英语）时将会显示"Given Diamond Sword * 32 to Thinkofdeath"， 但如果客户端使用的语言为zh_CN（简体中文）时将会显示"成功将 钻石剑 * 32 给予 Thinkofdeath"。

## 组件建造者（Component Builder）
简单的消息可以使用 ComponentBuilder（组件建造者）节省很多工作。ComponentBuilder 是一个链式结构的对象，允许快速创建消息。例如：
```java
player.sendMessage( new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true ).append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create() );
```
这将显示 "Hello world!"

## 常见的问题
直接创建`BaseComponent`实例是没用的（例如 `player.sendMessage( new BaseComponent(){} );`），应使用`TextComponent`或`TranslatableComponent`。     
使用旧版的颜色代码（例如 `player.sendMessage( new TextComponent( ChatColor.RED + ":-(" ) );`）将会不能很好的显示甚至导致客户端异常。使用`TextComponent.fromLegacyText()`方法将旧格式转换为新格式

## 动作
所有的 ClickEvent（点击事件） 和 HoverEvent（悬浮事件）的动作如下所示：

### 点击事件动作
当用户点击消息时，这些动作将会执行：
```java
Action.OPEN_URL //在用户的浏览器打开指定URL

Action.OPEN_FILE //在用户的电脑打开指定文件

Action.RUN_COMMAND //让用户运行指令

Action.SUGGEST_COMMAND //在用户的输入框设置文字

Action.CHANGE_PAGE //改变书本的页码
```
### 悬浮事件动作
当用户鼠标指针悬浮在消息上时，这些动作将会执行：
```java
Action.SHOW_TEXT //显示一个文本

Action.SHOW_ACHIEVEMENT //显示一个成就及其介绍

Action.SHOW_ITEM //显示一个物品的名字和其他信息

Action.SHOW_ENTITY //显示一个实体的名字，ID和其他信息
```