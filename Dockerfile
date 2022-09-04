# 代表基于哪个镜像
FROM node:alpine

# 创建镜像时，执行命令：创建文件夹
RUN mkdir -p /code/dashboard

# 复制文件：复制当前项目的所有文件
COPY . /code/dashboard

# 切换路径：
WORKDIR /code/dashboard

# 创建镜像时，执行命令：安装依赖
RUN npm ci --legacy-peer-deps

# 暴露端口：8080
EXPOSE 8080

# 容器启动后，执行npm run serve
CMD [ "npm", "run", "serve" ]