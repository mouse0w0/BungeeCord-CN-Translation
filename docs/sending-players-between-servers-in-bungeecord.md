---
article: false
---
# BungeeCord 在服务器之间传送玩家
建议您阅读如何创建基本指令的教程，如果您还没有阅读它的话。

本篇教程中我们将创建一个简单的指令来使玩家连接
到其他服务器。在教程中我们使用 Hub 作为我们将要连接的服务器。

## 创建指令

首先，创建一个指令并在主类注册它：
```java
public class CommandHub extends Command{
    public CommandHub(){
        super("hub","permission.hub",new String[0]);
    }
    public void execute(CommandSender sender, String[] args){

    }
}
```
 
如果你不需要有一个指令，就不必有权限。    

你需要在你的 BungeeCord 配置文件给予你 permission.hub 权限才能执行这个指令。
```java
public void onEnable(){
        getProxy().getPluginManager().registerCommand(this, new CommandHub());
    }
```
## 检查是否是一个玩家

我们不想在 CommandSender 转换为 ProxiedPlayer 时收到错误，因此我们需要检查指令是否是由玩家发出：

```java
public void execute(CommandSender sender, String[] args){
        if(sender instanceof ProxiedPlayer){
                ProxiedPlayer player = (ProxiedPlayer) sender;
        }else{
            sender.sendMessage(new ComponentBuilder("This command can only be run by a player!").color(ChatColor.RED).create());
        }
    }
```
## 检查玩家是否已经连接

在 'if' 语句中，我们需要检查玩家是否已经连接到服务器，否则命令将无法运行。

```java
if(!player.getServer().getInfo().getName().equalsIgnoreCase("hub")){
}else{
        player.sendMessage(new ComponentBuilder("You are already connected to the Hub!").color(ChatColor.RED).create());
}
```

## 传送玩家

我们需要声明一个 ServerInfo 类型的变量来选择目标服务器，然后使用变量来改变玩家所在的服务器
 （放在if语句内）：

```java
ServerInfo target = ProxyServer.getInstance().getServerInfo("Hub");
player.connect(target);
```