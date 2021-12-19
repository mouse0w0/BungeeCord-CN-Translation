---
article: false
---
# BungeeCord 配置 API
BungeeCord 包含一个简单的配置 API，支持 YAML 文件。

## 载入配置文件
不像 Bukkit 你可以使用 YamlConfiguration.loadConfiguration() 来载入配置文件。BungeeCord API 需要获取一个配置文件提供器。YAML 提供器叫做 YamlConfiguration。你不能自己创建这个类的实例，你必须从  ConfigurationProvider 获取它。

```java
Configuration configuration = ConfigurationProvider.getProvider(YamlConfiguration.class).load(new File(getDataFolder(), "config.yml"));
```
跟Bukkit不同的是，这个方法在不能读入文件时会抛出 IOException，因此你需要第一时间创建文件。

## 使用 Configuration 实例
使用 Configuration 实例应该是非常简单的。最常用的部分API已经实现，例如 getString。

## 保存配置文件
如果你知道怎么载入配置文件，这应该是无用的： 
```java
ConfigurationProvider.getProvider(YamlConfiguration.class).save(configuration, new File(getDataFolder(), "config.yml"));
```

## 一些不提供的功能
### 保存默认配置文件
这是很简单的，代码如下：

```java
            if (!getDataFolder().exists())
                getDataFolder().mkdir();

            File file = new File(getDataFolder(), "config.yml");

         
            if (!file.exists()) {
                try (InputStream in = getResourceAsStream("config.yml")) {
                    Files.copy(in, file.toPath());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
```
 
### 重载配置文件
再加载一次配置文件。