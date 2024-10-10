import { Router } from 'express';
import 'reflect-metadata';
import baivietRouter from './baivietRouter';
import userRouter from './userRouter';
import { authenticate } from '../middlewares/authMiddleware';
import nhomBaiVietRouter from './nhombaivietRouter';
import nhomThietBiRouter from './nhomthietbiRouter';
import trangThietBiRouter from './thietbiRouter';
import goikhamRouter from './goikhamRouter';
import chiTietGoiKhamRouter from './chitietgoikhamRouter';
import nhaPhanPhoiRouter from './nhaphanphoiRouter';
import khoRouter from './khoRouter';
import khoaRouter from './khoaRouter';
import chuyenMonRouter from './chuyenmonRouter';
import bacsiRouter from './bacsiRouter';
import datLichRouter from './datlichRouter';

const router = Router();
router.use('/nhombaiviet',nhomBaiVietRouter)
router.use('/baiviet',baivietRouter);
router.use('/nhomthietbi',nhomThietBiRouter)
router.use('/user', userRouter);
router.use('/trangthietbi',trangThietBiRouter);
router.use('/goikham',goikhamRouter);
router.use('/chitietgoikham',chiTietGoiKhamRouter);
router.use('/nhaphanphoi',nhaPhanPhoiRouter);
router.use('/kho',khoRouter);
router.use('/khoa',khoaRouter);
router.use('/chuyenmon',chuyenMonRouter);
router.use('/bacsi',bacsiRouter);
router.use('/datlich',datLichRouter);
export default router;
