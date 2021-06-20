# vue-pets
基于Vue2.x，vue-cli，vue-router，axios，mint-ui，包含猫咪、犬类、爬行动物、小动物、水族类等宠物的生活习性、喂养方法、价格、祖籍、体态特点和图片等信息。

mint-ui按需引入，修改了babel.config.js。

### 运行
克隆仓库后，切换到仓库的根目录，执行以下命令：
>npm install --save

>npm run serve
### 展示效果
默认路由为'/',为搜索界面：

![image](https://user-images.githubusercontent.com/49555245/122667769-23034700-d1e7-11eb-8fd6-ef93ff72bd91.png)

输入关键字搜索，跳转到'/results'路由：

![image](https://user-images.githubusercontent.com/49555245/122667896-ed129280-d1e7-11eb-8301-ed51d85ef299.png)

搜索结果为空时：

![image](https://user-images.githubusercontent.com/49555245/122667962-48448500-d1e8-11eb-910d-9dacb3bcb8e7.png)

点击右侧的...按钮，可以按分类进行展示，此时路由跳转到'/types':

![image](https://user-images.githubusercontent.com/49555245/122667981-614d3600-d1e8-11eb-9381-ff0757fefa07.png)

再次点击任意一种分类，路由到'/types/:id'，id为分类:

![image](https://user-images.githubusercontent.com/49555245/122668019-ad987600-d1e8-11eb-9861-caef2fcf28a0.png)

### 使用了mint-ui中的InfiniteScroll，当路由在'/types/:id/’中时，滑动到底部会再次加载（请求并显示）5条数据。

