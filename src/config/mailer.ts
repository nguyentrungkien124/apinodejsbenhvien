import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Tải các biến môi trường từ file .env

export const sendEmail = async (to: string, subject: string, text: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Hoặc dịch vụ email bạn muốn sử dụng
        auth: {
            user: process.env.EMAIL_USER, // Địa chỉ email của bạn từ biến môi trường
            pass: process.env.EMAIL_PASS  // Mật khẩu email của bạn từ biến môi trường
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sử dụng địa chỉ email từ biến môi trường
        to: to,
        subject: subject,
        text: text
    };

    return transporter.sendMail(mailOptions);
};
