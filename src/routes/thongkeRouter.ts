import { Router } from "express";
import { container } from "tsyringe";
import { ThongkeController } from "../controllers/thongkeController";

const thongkeRouter = Router();
const thongkeController = container.resolve(ThongkeController);

// thongkeRouter.get('/getspbanchay',thongkeController.getThongkespbanchay.bind(thongkeController));
thongkeRouter.post('/ThongKeLichKhamTheoBacSi',thongkeController.ThongKeLichKhamTheoBacSi.bind(thongkeController));
// thongkeRouter.get('/getspmoi',thongkeController.getThongkespmoinhap.bind(thongkeController));
export default thongkeRouter;