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
    methods: ['GET', 'POST'],
  },
});

// Lưu trữ socketId theo bác sĩ
const doctorSockets: { [key: string]: string } = {};

// Xử lý sự kiện khi client kết nối
// Xử lý sự kiện khi client kết nối
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // Xử lý sự kiện bác sĩ đăng nhập và tham gia room
 socket.on('join_room', (data) => {
  const { bac_si_id } = data;
  console.log(`Doctor ${bac_si_id} joined room`);
  doctorSockets[bac_si_id] = socket.id;
  socket.join(`doctor_${bac_si_id}`);
});

  // Xử lý sự kiện khi client ngắt kết nối
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    for (const bac_si_id in doctorSockets) {
      if (doctorSockets[bac_si_id] === socket.id) {
        delete doctorSockets[bac_si_id];
      }
    }
  });
});

// API phát thông báo "Bạn có phiếu khám mới"
app.post('/api/phieu-kham', (req, res) => {
  const { bac_si_id } = req.body; // Nhận thông tin bác sĩ từ client
  if (!bac_si_id) {
    return res.status(400).json({ message: 'Thiếu thông tin bác sĩ' });
  }
  const roomName = `doctor_${bac_si_id}`;
  io.to(roomName).emit('newNotification', {
    message: 'Bạn có phiếu khám mới',
  });

  // Gửi thông báo đến room của bác sĩ
  
  // Trả về phản hồi thành công
  res.status(200).json({ message: 'Thông báo đã được gửi' });
});


// Khởi chạy HTTP server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Cung cấp Socket.IO cho các phần khác
export { io };
