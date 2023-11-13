# Intent

Intent 是 android 程序中个组件之间进行交互的一种重要方式，可以指明当前组件想要执行的动作还可以在不同组件之间传递数据。
Intent 可以分为显式 Intent 和隐式 Intent。
每个 Intent 中只能指定一个 action，但能指定多个 category。
隐式 Intent 不仅可以启动自己程序内的 activity 还能启动其他程序的 activity。

数据传递`intent.putExtra`和`startActivityForResult`。

# Activity 的生命周期

Android 使用任务（task）管理 activity，一个任务就是一组存放在栈里的 activity 的集合，这个栈也被称作返回栈。启动一个新的 activity 会在返回栈中入栈，并处于栈顶的位置。按下 Back 键或调用 finish（）方法去销毁一个 activity 时，处于栈顶的 activity 就会出栈。

activity 状态：运行态（在返回栈的栈顶），暂停态（不在栈顶但可见），停止态（不在栈顶且完全不可见），销毁态（从返回栈中移除）

activity 生存期：onCreate(第一次创建)，onStart(不可见 -> 可见)，onResume(栈顶运行态，准备好交互)，onPause（启动或恢复其他 activity），onStop(完全不可见)，onDestroy(销毁前)，onRestart(停止态变运行态)

> Activity 从返回栈中移除主要有以下几种情况：
> 
> - 当用户按下返回键或者 Activity 调用 finish() 方法时，当前 Activity 会结束并从返回栈中移除。
> - 当 Activity 设置了 android:noHistory="true" 属性时，用户一旦离开该 Activity，它就会立即结束并从返回栈中移除。
> - 当系统内存不足，需要释放资源时，系统可能会杀掉一些后台的 Activity，这些 Activity 也会从返回栈中移除。
> - 当 Activity 设置了 singleTop、singleTask 或 singleInstance 启动模式，并且要启动的 Activity 已经在返回栈顶或者已经存在于返回栈中时，系统不会创建新的 Activity 实例，而是复用已有的实例，并调用其 onNewIntent() 方法，这种情况下，虽然 Activity 没有被移除，但是它的状态已经被刷新了。
> - 当任务栈因为用户的操作或者系统的需要被清空时，其中的 Activity 也会被从返回栈中移除。




