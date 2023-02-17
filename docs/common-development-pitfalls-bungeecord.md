---
article: false
---
# 常见的 BungeeCord 开发问题

本篇教程是关于 BungeeCord 插件开发时常见的问题以及如何解决它们。

## 创建新线程

创建新的线程 （例如，创建 Thread（线程），Timer（定时器），Executor（执行器）） 在#948及其以上版本是不被鼓励的，并且在未来的版本将被禁止。

推荐的解决方案是使用 BungeeCord 的线程调度器（Scheduler）：
```java
  getProxy().getScheduler().runAsync(this, new Runnable() {
    @Override
    public void run() {

    }
  });
```
如果你需要获得一个 [Future](http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html)，包装 Callable/Runnable 在一个 [FutureTask](http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/FutureTask.html) 中。

当你不能使用 BungeeCord 线程调度器来运行异步任务的情况下，你有以下两个选择：

1. 如果（外部）API 有能力提供一个 Executor 或 ExecutorService，那么提供它在你的
Plugin.getExecutorService()。

2. 在异步任务中创建对象。

## 阻塞 I/O 线程

在 BungeeCord 中，绝大多数事件和指令都运行在网络I/O线程（network I/O threads）。由于 BungeeCord 的特性（在所有线程有着高复用率），执行阻塞操作（例如I/O操作，获取远端URL内容，查询数据库...）将会降低性能。

通常来说：
1. **总是异步运行可导致阻塞的任务。** 如果你不知道什么操作可导致阻塞，绝大多数情况下访问外部资源（例如硬盘，或者数据库）是可导致阻塞的。

2. **不要延迟事件或命令处理使其超过所需时间。** 如果你需要延迟处理一个事件并且它继承 [AsyncEvent](http://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/AsyncEvent.html)，使用它的 registerIntent()（在事件处理器中开始处理异步事件）和 completeIntent()（结束任务，该方法应在异步任务中调用）`（译者注：该方法通知事件处理器当前异步任务完成，继续处理该事件）`方法。**你应该异步运行可导致阻塞的任务**，但是，这将允许事件被延迟处理，且当所有的异步操作完成时继续。

## 尝试混用 Bukkit 和 BungeeCord API
BungeeCord 不包括 Bukkit API，即使包括 Bukkit API 也是没用的，它不能操作后端的 Bukkit 服务器。此外：Spigot 也不包括 BungeeCord API，即使包括也是没用的，它也不能操作你的 BungeeCord。

注意 BungeeCord 的聊天组件API（Chat Component API） 是包括在 Spigot 内的，然而这个API与 BungeeCord 是分离的。