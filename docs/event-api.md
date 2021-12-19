---
article: false
---
# BungeeCord 事件 API

BungeeCord 有着丰富的事件（Event） API，类似于Bukkit的事件系统，但有些不同。本篇教程将介绍如何创建一个监听器（Listener）和新的事件（Event）。

## 创建你的监听器

要使用 BungeeCord 的事件系统，需要在你的项目中创建一个新的类。你可以为这个类取任何你喜欢的名字，但在本教程中我们暂且取名为"Events.java"。

如果你创建了一个你希望作为监听器的类，你就必须实现 BungeeCord 中的 Listener 类。代码看起来应该是这样的: 
```java
public class Events implements Listener
```

如果你在你的类中实现了 Listener，你就可以在启动监听所有的 BungeeCord 事件([点击查看所有事件列表](http://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/package-frame.html))。

举个例子，我们使用 BungeeCord 的 PostLoginEvent（登录后事件）。让我们来添加我们的第一个监听器吧:
```java
public class Events implements Listener {

    @EventHandler
    public void onPostLogin(PostLoginEvent event) {
    }

}
```
PostLoginEvent（登录后事件）发生在每一次玩家（ProxiedPlayer）成功地通过身份验证并即将连接到一个服务器时。在我们的监听器中，我们可以发送一条信息告诉当前在线的所有玩家，有一个玩家加入了Bungee群组，例如:
```java
public class Events implements Listener {

    @EventHandler
    public void onPostLogin(PostLoginEvent event) {
        for (ProxiedPlayer player : ProxyServer.getInstance().getPlayers()) {
            player.sendMessage(new TextComponent(event.getPlayer().getName() + " has joined the network."));
        }
    }

}
```
当你完成了你的监听器类，你必须在你的插件主类注册该监听器。举个例子:
```java
public class Main extends Plugin {
    @Override
    public void onEnable() {
        getProxy().getPluginManager().registerListener(this, new Events());//注册监听器
    }
}
```
确保使用完整的事件列表，以便你可以和插件进行适当的交互。

## 创建你的事件

要创建一个自定义的 BungeeCord 事件，需要创建一个类。我们可以命名为 MyAwesomeEvent，但是你可以给它取任何名字，这个类应该继承 Event。接下来添加一些属性来方便你的监听器使用。作为例子，我们将创建这个类:

```java
public class MyAwesomeEvent extends Event {
  private final String message;

  public MyAwesomeEvent(String message) {
    this.message = message;
  }

  public String getMessage() {
    return message;
  }
}
```
接下来发出事件，这很简单:

```java
getProxy().getPluginManager().callEvent(new MyAwesomeEvent("I'm awesome!"));
```
你现在可以使用上一节中的监听器监听 MyAwesomeEvent 了。