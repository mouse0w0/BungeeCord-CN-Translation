---
article: false
---
# BungeeCord 插件消息频道

本教程讲解 Bukkit 和 BungeeCord 的插件消息频道（Plugin Messaging Channel）的使用。该频道允许 BungeeCord 和其他服务器的插件通过连接该频道进行交流。    

## 插件消息（Plugin message）是什么?
插件消息被实现后，服务端插件可以发送任何数据到客户端模组。在此之前，我们需要自行实现自定义的数据包，但问题是，Minecraft 客户端无法读取服务器自定义的数据包，而导致出现一些意义不明的错误，并与服务器断开连接。为了修复这个问题，Mojang 实现了 "自定义插件消息包（Custom Plugin Message Packets）"      

一个插件消息数据包（Plugin Message Packet）的结构是这样的：     
包含一个插件消息需要使用的频道（Channel）的名称（在 BungeeCord 里也叫标签（tag））。在[这里](http://wiki.vg/Protocol#Plugin_Message)了解更多信息

## BungeeCord 插件频道
BungeeCord 暴露了一个叫 "BungeeCord" 的插件频道在后端/Bukkit 服务器。你需要使用 DataInputStream 和 DataOutputStream 类来处理你需要发送（接收）的字节数组（byte[]）。为了方便起见，我们使用 Google 的 Guava 的 ByteArrayDataInput 和 ByteArrayDataOutput 类，因为这不会抛出 IOException 。    

使用 BungeeCord 插件频道之前，你需要在 Bukkit 的 Messenger 注册它。通俗的说，你需要告诉 Bukkit "嘿，我想使用这个频道。"我们也需要告诉 Bukkit 当它收到来自频道 "BungeeCord" 的消息时调用的方法。这是一个简单的插件例子:

```java
public class MyPlugin extends JavaPlugin implements PluginMessageListener {
  @Override
  public void onEnable() {
    this.getServer().getMessenger().registerOutgoingPluginChannel(this, "BungeeCord");
    this.getServer().getMessenger().registerIncomingPluginChannel(this, "BungeeCord", this);
  }

  @Override
  public void onPluginMessageReceived(String channel, Player player, byte[] message) {
    if (!channel.equals("BungeeCord")) {
      return;
    }
    ByteArrayDataInput in = ByteStreams.newDataInput(message);
    String subchannel = in.readUTF();
    if (subchannel.equals("SomeSubChannel")) {
      // 使用下文中的"返回（Response）"一节的代码进行读取
      // 数据处理
    }
  }
}
```
 
发送插件消息是非常简单的:
```java
  ByteArrayDataOutput out = ByteStreams.newDataOutput();
  out.writeUTF("Subchannel");
  out.writeUTF("Argument");

  // 如果你不关心玩家是谁，可以使用下面的代码
  // Player player = Iterables.getFirst(Bukkit.getOnlinePlayers(), null);
  // 或者，你希望指定一个玩家接收消息
  Player player = Bukkit.getPlayerExact("Example");

  player.sendPluginMessage(this, "BungeeCord", out.toByteArray());
```
注意，你不能直接在玩家加入事件（PlayerJoinEvent）发送插件消息。你必须有一点延迟。

## BungeeCord 频道约定
### 连接到服务器（Connect）
使一个玩家连接到指定服务器.

#### 参数 （Arguments）
- （String）你希望连接到的服务器名称，必须要在 BungeeCord 的配置文件（config.yml）内设置。

#### 接收者（Receiver）
你希望传送的玩家

#### 发送例子
```java
out.writeUTF("Connect");
out.writeUTF("pvp");
```
#### 返回（Response）
无

### 使玩家连接到服务器（ConnectOther）
使一个指定玩家连接到指定服务器

#### 参数

- （String）你希望传送的玩家名称
- （String）你希望连接到的服务器名称，必须要在 BungeeCord 的配置文件（config.yml）内设置。

#### 接收者
任何玩家

#### 发送例子
```java
out.writeUTF("ConnectOther");
out.writeUTF("roblabla");
out.writeUTF("pvp");
```
#### 返回
无

### 获取玩家IP（IP）
获取玩家的真实IP

#### 参数
无

#### 接收者
你希望获取IP的玩家

#### 例子
```java
out.writeUTF("IP");
```

#### 返回
```java
String ip = in.readUTF();
int port = in.readInt();
```

### 获取玩家数量（PlayerCount）
获取某个服务器或者所有服务器的玩家数量

#### 参数
- （String） 你希望获取玩家数量的服务器名称，如果你希望获取所有服务器的玩家数量，使用 "ALL"

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("PlayerCount");
out.writeUTF("pvp");
```

#### 返回
```java
String server = in.readUTF(); // 服务器的名称，如给定的参数所示
int playercount = in.readInt();
```

### 获取玩家列表（PlayerList）
获取某个服务器或者所有服务器的玩家名称

#### 参数
- （String） 你希望获取玩家名称的服务器名词，如果你希望获取全部服务器的玩家名称，使用 "ALL"

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("PlayerList");
out.writeUTF("pvp");
```
#### 返回
```java
String server = in.readUTF(); // 你想要获取玩家列表的服务器的名称，如给定的参数所示
String[] playerList = in.readUTF().split(", ");
```

### 获取所有服务器名称（GetServers）
获取所有服务器的名称, 必须要在 BungeeCord 的配置文件（config.yml）内设置

#### 参数
无

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("GetServers");
```

#### 返回
```java
String[] serverList = in.readUTF().split(", ");
```

### 发送消息（Message）
向指定玩家发送一个消息（比如聊天消息）

#### 参数
- （String）需要发送消息的玩家名称
- （String）需要发送的消息内容

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("Message");
out.writeUTF("roblabla");
out.writeUTF(ChatColor.RED + "Congrats, you just won 1$!");
```
#### 返回
无

### 获取服务器名称（GetServer）
获得当前服务器名称，必须在 BungeeCord 的配置文件（config.yml）内设置

#### 参数
无

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("GetServer");
```

#### 返回
```java
String servername = in.readUTF();
```

### 发送自定义插件消息（Forward）
发送一个自定义插件消息（Custom plugin message）到指定服务器。这是最有效的方式之一。    
记住，发送和接受服务器都必须至少有一个玩家在线。

#### 参数
- （String）接受插件消息的服务器名, "ALL" 表示发送到所有服务器（除了发送插件消息的服务器）,  "ONLINE" 表示发送到每一个在线的服务器（除了发送插件消息的服务器）
- （String）插件使用的子频道（Subchannel）名称
- （Short）插件消息的数组长度
- （Byte[]）需要发送的插件消息

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("Forward"); // 这样写BungeeCord就知道要转发它
out.writeUTF("ALL");
out.writeUTF("MyChannel"); // 用于检查这是否是你的数据的频道名称

ByteArrayOutputStream msgbytes = new ByteArrayOutputStream();
DataOutputStream msgout = new DataOutputStream(msgbytes);
msgout.writeUTF("Some kind of data here"); // 你可以用msgout发送任何你想发送的数据
msgout.writeShort(123);

out.writeShort(msgbytes.toByteArray().length);
out.write(msgbytes.toByteArray());
```

#### 返回
```java
String subChannel = in.readUTF();
short len = in.readShort();
byte[] msgbytes = new byte[len];
in.readFully(msgbytes);

DataInputStream msgin = new DataInputStream(new ByteArrayInputStream(msgbytes));
String somedata = msgin.readUTF(); // 以与写入数据相同的顺序读取数据
short somenumber = msgin.readShort();
```

### 发送自定义插件消息到玩家（ForwardToPlayer）
发送自定义插件消息（Custom plugin message）到指定玩家

#### 参数
- （String）接受消息的玩家名称
- （String）插件使用的子频道（Subchannel）名称
- （Short）插件消息的数组长度
- （Byte[]）需要发送的插件消息

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("ForwardToPlayer");
out.writeUTF("md_5");
out.writeUTF("MyChannel");

ByteArrayOutputStream msgbytes = new ByteArrayOutputStream();
DataOutputStream msgout = new DataOutputStream(msgbytes);
msgout.writeUTF("Some kind of data here");
msgout.writeShort(123);

out.writeShort(msgbytes.toByteArray().length);
out.write(msgbytes.toByteArray());
```

#### 返回
```java
String subChannel = in.readUTF();
short len = in.readShort();
byte[] msgbytes = new byte[len];
in.readFully(msgbytes);

DataInputStream msgin = new DataInputStream(new ByteArrayInputStream(msgbytes));
String somedata = msgin.readUTF(); // 以与写入数据相同的顺序读取数据
short somenumber = msgin.readShort();
```

### 获取玩家的UUID（UUID）
获取该玩家的UUID

#### 参数
无

#### 接收者
需要获取UUID的玩家

#### 例子
```java
out.writeUTF("UUID");
```

#### 返回
```java
String uuid = in.readUTF();
```

### 获取指定玩家的UUID（UUIDOther）
获取指定玩家的UUID

#### 参数
- （String）你需要获取UUID的玩家的名称

#### 接收者
发送者（译注：原文如此，可能是任何玩家）

#### 例子
```java
out.writeUTF("UUIDOther");
out.writeUTF("Notch");
```

#### 返回
```java
String playerName = in.readUTF();
String uuid = in.readUTF();
```

### 获取服务器IP（ServerIP）
获取指定服务器在群组中的IP

#### 参数
- （String） 需要获取IP的服务器名称

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("ServerIP");
out.writeUTF("lobby");
```

#### 返回
```java
String serverName = in.readUTF();
String ip = in.readUTF();
int port = in.readUnsignedShort();
```

### 踢出玩家（KickPlayer）
从整个服务器踢出玩家

#### 参数
- （String）玩家名
- （String）踢出玩家的理由

#### 接收者
任何玩家

#### 例子
```java
out.writeUTF("KickPlayer");
out.writeUTF("Notch");
out.writeUTF("You were kicked from the server");
```

#### 返回
无