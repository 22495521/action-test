# 使用官方 Node.js 鏡像作為基礎鏡像
FROM node:18-alpine

# 設置工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製應用程序代碼
COPY . .

# 曝露應用運行的端口
EXPOSE 3000

# 定義啟動命令
CMD ["npm", "start"]
