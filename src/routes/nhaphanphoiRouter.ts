import { Router } from 'express';
import { container } from 'tsyringe';
import { NhaPhanPhoiController } from '../controllers/nhaphanphoiController';
import { UploadMultiService } from '../services/upload-multiService';
import nhomThietBiRouter from './nhomthietbiRouter';
const nhaPhanPhoiRouter = Router();
const uploadMultiService = container.resolve(UploadMultiService);
const nhaPhanPhoiController = container.resolve(NhaPhanPhoiController);
nhaPhanPhoiRouter.get('/getall', nhaPhanPhoiController.getNhaPhanPhoiAll.bind(nhaPhanPhoiController));
nhaPhanPhoiRouter.post('/themnhaphanphoi',uploadMultiService.multerMultiUpload,nhaPhanPhoiController.createNhaPhanPhoi.bind(nhaPhanPhoiController));
nhaPhanPhoiRouter.put('/suanhaphanphoi',uploadMultiService.multerMultiUpload,nhaPhanPhoiController.updateNhaPhanPhoi.bind(nhaPhanPhoiController));
nhaPhanPhoiRouter.delete('/xoanhaphanphoi/:id',nhaPhanPhoiController.deleteNhaPhanPhoi.bind(nhaPhanPhoiController));
nhaPhanPhoiRouter.get('/getnhaphanphoibyid/:id',nhaPhanPhoiController.getNhaPhanPhoiByID.bind(nhaPhanPhoiController));
export default nhaPhanPhoiRouter;   