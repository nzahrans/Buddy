# Gunakan Node.js sebagai base image
FROM node:16

# Tentukan working directory dalam container
WORKDIR /usr/src/app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh source code ke dalam container
COPY . .

# Ekspose port yang digunakan aplikasi (default Express biasanya 8080)
EXPOSE 3000

# Tentukan command untuk menjalankan aplikasi
CMD ["node", "server.js"]
