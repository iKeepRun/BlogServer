# Express Blog 博客系统

这是一个基于Express.js框架开发的个人博客系统，提供了完整的博客功能，包括文章管理、用户认证、评论系统等。

## 功能特性

- 用户认证与授权
- 文章发布与管理
- 评论系统
- 文章分类
- 用户个人中心
- 文章搜索功能
- 响应式设计

## 技术栈

- 后端框架：Express.js
- 数据库：MySQL
- 缓存：Redis
- 模板引擎：Jade
- 会话管理：express-session
- 安全防护：XSS防护
- 开发工具：Nodemon（开发环境）

## 项目结构

```
express_blog/
├── bin/                # 启动脚本
├── conf/              # 配置文件
├── controller/        # 控制器
├── db/                # 数据库相关
├── log/               # 日志文件
├── model/             # 数据模型
├── public/            # 静态资源
├── routes/            # 路由配置
├── views/             # 视图模板
├── app.js             # 应用入口
└── package.json       # 项目依赖
```

## 安装说明

1. 克隆项目
```bash
git clone [项目地址]
cd express_blog
```

2. 安装依赖
```bash
npm install
```

3. 配置数据库
- 创建MySQL数据库
- 在conf目录下配置数据库连接信息

4. 启动项目
```bash
# 开发环境
npm run dev

# 生产环境
npm start
```

## 使用说明

1. 访问地址：http://localhost:3000
2. 默认管理员账号：admin
3. 默认管理员密码：admin123

## 开发环境要求

- Node.js >= 12.x
- MySQL >= 5.7
- Redis >= 4.0

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进项目。

## 许可证

MIT License 