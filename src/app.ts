  import express from 'express';
  import router from './routes';
  import cors from 'cors';
  import { createServer } from 'http'; // Tạo HTTP server
  import { Server } from 'socket.io'; // Import Socket.IO

  const app = express();
  const PORT = 9999;

  // Cấu hình body-parser và CORS
  var bodyParser = require('body-parser');
  app.use(cors());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // Tích hợp Router
  app.use('/api/', router);

  // Tạo HTTP server từ Express
  const server = createServer(app);

  // Khởi tạo Socket.IO và kết nối với HTTP server
  const io = new Server(server, {
    cors: {
      origin: '*', // Cho phép mọi nguồn, có thể tùy chỉnh theo nhu cầu
      methods: ['GET', 'POST']
    }
  });

  // Xử lý sự kiện khi client kết nối
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Xử lý sự kiện khi client ngắt kết nối
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  // Khởi chạy HTTP server
  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });

  // Cung cấp Socket.IO cho các phần khác
  export { io };
