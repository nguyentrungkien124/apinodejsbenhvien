-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: banhang
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitiet_hoa_don`
--

DROP TABLE IF EXISTS `chitiet_hoa_don`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiet_hoa_don` (
  `ma_chitiet` int NOT NULL AUTO_INCREMENT,
  `hoadon_id` int NOT NULL,
  `ma_sp` int NOT NULL,
  `so_luong` double NOT NULL,
  `don_gia` double NOT NULL,
  PRIMARY KEY (`ma_chitiet`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiet_hoa_don`
--

LOCK TABLES `chitiet_hoa_don` WRITE;
/*!40000 ALTER TABLE `chitiet_hoa_don` DISABLE KEYS */;
INSERT INTO `chitiet_hoa_don` VALUES (3,9,123,22,44);
/*!40000 ALTER TABLE `chitiet_hoa_don` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danh_muc`
--

DROP TABLE IF EXISTS `danh_muc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danh_muc` (
  `danh_muc_id` int NOT NULL AUTO_INCREMENT,
  `ten_danh_muc` varchar(100) DEFAULT NULL,
  `ghi_chu` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`danh_muc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danh_muc`
--

LOCK TABLES `danh_muc` WRITE;
/*!40000 ALTER TABLE `danh_muc` DISABLE KEYS */;
INSERT INTO `danh_muc` VALUES (2,'8888888','aa'),(3,'Mục 3','mm');
/*!40000 ALTER TABLE `danh_muc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoa_don`
--

DROP TABLE IF EXISTS `hoa_don`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoa_don` (
  `hoadon_id` int NOT NULL AUTO_INCREMENT,
  `ten_khach` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`hoadon_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoa_don`
--

LOCK TABLES `hoa_don` WRITE;
/*!40000 ALTER TABLE `hoa_don` DISABLE KEYS */;
INSERT INTO `hoa_don` VALUES (9,'Nguyễn Văn Anh');
/*!40000 ALTER TABLE `hoa_don` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `menu_id` int NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(150) DEFAULT NULL,
  `menu_url` varchar(100) DEFAULT NULL,
  `ghi_chu` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Trang chủ','/',NULL),(2,'Giới thiệu','/gioithieu',NULL),(3,'Bộ môn','/bomon',NULL),(4,'Trung tâm','/trungtam',NULL);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tintuc`
--

DROP TABLE IF EXISTS `tintuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tintuc` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anh` varchar(150) NOT NULL,
  `tieude` varchar(1500) NOT NULL,
  `tomtat` varchar(3000) NOT NULL,
  `noidung` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tintuc`
--

LOCK TABLES `tintuc` WRITE;
/*!40000 ALTER TABLE `tintuc` DISABLE KEYS */;
INSERT INTO `tintuc` VALUES (1,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(2,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(3,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(4,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(5,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(6,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(7,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(8,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(9,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(10,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(11,'images/anh1.jpg','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ','Mẫu giấy chứng nhận quyền sử dụng đất mới đảm bảo mỹ quan, bảo mật, góp phần hiện đại hóa ngành quản lý đất đai, theo Bộ Tài nguyên và Môi trường.','Bộ Tài nguyên và Môi trường lý giải vì sao đề xuất thay mẫu sổ đỏ'),(12,'images/anh2.jpg','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương','Ngày 16/5, Bộ Chính trị giao nhiệm vụ cho ông Lê Minh Hưng, Chánh Văn phòng Trung ương Đảng, đồng thời đảm nhiệm chức Trưởng Ban Tổ chức Trung ương.','Ông Lê Minh Hưng làm Trưởng Ban Tổ chức Trung ương'),(13,'anh1','Tiêu đề 1','tóm tắ 1','Nội dung 1');
/*!40000 ALTER TABLE `tintuc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `hoten` varchar(150) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `anh` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Nguyễn Hữu Đông','dongnh','123',NULL),(6,'Nguyễn Thị Thanh Huệ','huentt','12345','uploads\\2024-04-06\\z4886118850497-7231c2dc2db9e8d-5812-1989-1705391111-934368915.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'banhang'
--

--
-- Dumping routines for database 'banhang'
--
/*!50003 DROP PROCEDURE IF EXISTS `DeleteDanhMuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteDanhMuc`(IN p_danh_muc_id int)
BEGIN 	 
	delete from danh_muc where danh_muc_id = p_danh_muc_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDanhMucAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDanhMucAll`( )
BEGIN 
  SELECT *
  FROM menus  ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDanhMucById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDanhMucById`(
IN p_danh_muc_id int 
)
BEGIN 
  SELECT *
  FROM danh_muc 
  WHERE  danh_muc_id = p_danh_muc_id;  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetMenuAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetMenuAll`( )
BEGIN 
  SELECT *
  FROM menus  ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTintucAll` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTintucAll`( )
BEGIN 
  SELECT *
  FROM tintuc  limit 4 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTinTucById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTinTucById`(
IN p_id int 
)
BEGIN 
  SELECT *
  FROM tintuc 
  WHERE  id = p_id;  
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserByAccount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserByAccount`(
IN p_username VARCHAR(50),
IN p_password VARCHAR(50)
)
BEGIN 
  SELECT *
  FROM user 
  WHERE  username = p_username  and  password = p_password;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertHoaDon` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertHoaDon`(IN p_ten_khach varchar(150),  
                                                        IN p_list_json_chitiet_hoadon json)
BEGIN 	 
	declare p_hoadon_id int;
	INSERT INTO hoa_don (
		ten_khach 
	) VALUES (
		p_ten_khach
	);             
	set p_hoadon_id = (SELECT LAST_INSERT_ID());
	if p_list_json_chitiet_hoadon is not null then		 
		DROP TABLE IF EXISTS Results;
		CREATE TEMPORARY TABLE Results AS
		SELECT   
			JSON_VALUE(p.value, '$.ma_sp') ma_sp, 	
			JSON_VALUE(p.value, '$.so_luong')  so_luong,
			JSON_VALUE(p.value, '$.don_gia') don_gia 
			FROM JSON_TABLE( p_list_json_chitiet_hoadon, '$[*]' COLUMNS (
				value JSON PATH '$'
			)) AS p	;	
		 
		INSERT INTO chitiet_hoa_don (						 
				hoadon_id,
				ma_sp,
				so_luong,
				don_gia 	 
			)
			SELECT  
				p_hoadon_id,
				p.ma_sp,   
				p.so_luong,  
				p.don_gia 
			  FROM Results p;       
		DROP TABLE Results;  
	end if; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertTintuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertTintuc`(IN p_anh varchar(150),  p_tieude varchar(1500),
 p_tomtat varchar(3000), p_noidung text)
BEGIN 	 
	INSERT INTO tintuc (						 
				anh,tieude,tomtat,noidung 
			) values (p_anh,p_tieude,p_tomtat,p_noidung);	 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertUser`(IN p_hoten varchar(150),  p_username varchar(50),
 p_password varchar(50), p_anh varchar(150))
BEGIN 	 
	INSERT INTO user (						 
				hoten,
				username,
				password,
				anh 	 
			) values (p_hoten,p_username,p_password,p_anh);	 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SearchDanhMuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SearchDanhMuc`(IN p_pageIndex int, IN p_pageSize int,
                                                  IN p_search_content varchar(500) )
BEGIN
    DECLARE p_total_row long;    
    SET @row_number := 0;
		DROP TEMPORARY TABLE IF EXISTS DataTemp;
        CREATE TEMPORARY TABLE DataTemp AS
        SELECT d.danh_muc_id,
               d.ten_danh_muc,
               d.ghi_chu 
        FROM danh_muc d
        WHERE (p_search_content IS NULL
           OR CONCAT(COALESCE(d.ten_danh_muc, ''), COALESCE(d.ghi_chu, '')) LIKE CONCAT('%', p_search_content, '%'));
        
        DROP TEMPORARY TABLE IF EXISTS Results;
        CREATE TEMPORARY TABLE Results AS
        SELECT *, (@row_number := @row_number + 1) AS RowNumber
        FROM DataTemp;
        DROP TABLE DataTemp;
        SELECT COUNT(*) INTO p_total_row FROM Results;
        SELECT *, p_total_row AS RecordCount
        FROM Results
        WHERE RowNumber BETWEEN ((p_pageIndex - 1) * p_pageSize) + 1 AND (p_pageIndex * p_pageSize);
        DROP TABLE Results;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SearchTintuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SearchTintuc`(IN p_pageIndex int, IN p_pageSize int,
                                                  IN p_search_content varchar(500) )
BEGIN
    DECLARE p_total_row long;    
    SET @row_number := 0;
		DROP TEMPORARY TABLE IF EXISTS DataTemp;
        CREATE TEMPORARY TABLE DataTemp AS
        SELECT d.id,
               d.anh,
               d.tieude,
               d.tomtat 
        FROM tintuc d
        WHERE (p_search_content IS NULL
           OR CONCAT(COALESCE(d.tieude, ''), COALESCE(d.tomtat, '')) LIKE CONCAT('%', p_search_content, '%'));
        
        DROP TEMPORARY TABLE IF EXISTS Results;
        CREATE TEMPORARY TABLE Results AS
        SELECT *, (@row_number := @row_number + 1) AS RowNumber
        FROM DataTemp;
        DROP TABLE DataTemp;
        SELECT COUNT(*) INTO p_total_row FROM Results;
        SELECT *, p_total_row AS RecordCount
        FROM Results
        WHERE RowNumber BETWEEN ((p_pageIndex - 1) * p_pageSize) + 1 AND (p_pageIndex * p_pageSize);
        DROP TABLE Results;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateDanhMuc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateDanhMuc`( 
IN p_danh_muc_id INT,
IN p_ten_danh_muc varchar(100)
)
BEGIN 
 update danh_muc set ten_danh_muc = p_ten_danh_muc where danh_muc_id = p_danh_muc_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-27  9:35:27
