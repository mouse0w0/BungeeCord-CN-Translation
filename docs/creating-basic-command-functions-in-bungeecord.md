---
article: false
---
# 在 BungeeCord 中创建基本的指令

BungeeCord 提供一个命令接口，类似于 Bukkit。本篇教程中，我们将创建一个简单的 "Hello World" 指令。

## 创建指令

创建一个名为 HelloWorldCommand 的类。这个类应该继承 Command。你的IDE应该会自动补全代码，现在我们需要实现构造方法和 execute() 方法。我们首先实现构造方法，然后再实现 execute() 方法。

## 构造方法

Command 类有两个构造方法：一个简单的只有指令名的构造方法，和一个额外添加了权限和别名的构造方法。我们现在使用第一个。添加以下代码到你的类中：
```
  public HelloWorldCommand() {
      super("helloworld");
  }
```
这将创建一个指令，使用 /helloworld 来执行指令。

## 执行方法

现在我们可以为指令添加实际的功能了。添加以下代码到你的类中：
```
  @Override
  public void execute(CommandSender commandSender, String[] strings) {
      commandSender.sendMessage(new ComponentBuilder("Hello world!").color(ChatColor.GREEN).create());
  }
```
当玩家执行 /helloworld 指令时，消息 "Hello world!" (绿色)将会被发送给玩家。

## 注册指令

添加以下代码到 onEnable() 方法：
```
getProxy().getPluginManager().registerCommand(this, new HelloWorldCommand());
```
现在你已经创建了你自己的指令。与 Bukkit 不同的是，BungeeCord 不要求将指令添加至 plugin.yml。