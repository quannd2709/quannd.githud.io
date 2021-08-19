-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: manage_store
-- ------------------------------------------------------
-- Server version	8.0.21
use manage_store;

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_by` varchar(45) NOT NULL,
  `customer_id` int NOT NULL,
  `created_date` date DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `slove` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_customers` (`customer_id`),
  CONSTRAINT `fk_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES (1,'staff2',33,'2009-06-03','ok','ok','title1',NULL,NULL),(2,'staff22',35,'2020-09-09','bad','pendding','title1',NULL,NULL),(3,'staff23',32,'2020-09-09','bad','ok','title3',NULL,NULL),(4,'staff22',33,'2020-09-09','bad','ok','title4',NULL,NULL),(5,'staff21',33,'2020-09-09','bad','pendding','title5',NULL,NULL),(6,'staff21',37,'2020-09-09','bad','pendding','title6',NULL,NULL),(7,'staff22',36,'2009-06-03','bad','pendding','title7',NULL,NULL),(8,'staff23',38,'2009-06-03','ok','pendding','title8',NULL,NULL),(9,'staff23',39,'2009-06-03','ok','ok','title9',NULL,NULL),(10,'namvt',39,'2009-06-02','okvvvvvvvvvvvvzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz','ok','title9',NULL,NULL),(11,'namvt',39,'2009-06-02','okvvss11','ok','title9',NULL,NULL),(12,'Ngyễn quang phúc',68,'2021-07-18','zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz','pendding',NULL,'2021-07-18',''),(13,'Ngyễn quang phúc',47,'2021-07-19','xxxxx','pendding',NULL,'2021-07-19',''),(14,'Ngyễn quang phúc',71,'2021-07-18','cccccccccccccccc','pendding',NULL,'2021-07-18',''),(15,'Ngyễn quang phúc',75,'2021-07-16','hahhahahaha','ok',NULL,'2021-07-20','Ngyễn quang phúc'),(16,'Ngyễn quang phúc',71,'2021-07-17','ssssssssss','pendding',NULL,'2021-07-17',''),(17,'namvt',39,'2009-06-02','test me anf tell','ok','title9',NULL,NULL),(18,'namvt',39,'2009-06-02','ahahhaha them moi thanh cong','ok','title9',NULL,NULL),(19,'namvt',39,'2009-06-02','ahahhaha them moi ','ok','title9',NULL,NULL),(20,'namvt',39,'2009-06-02','ahxzxzxzxzx ','ok','title9',NULL,NULL),(21,'Ngyễn quang phúc',40,'2021-07-20','ccxcxcxc','pendding',NULL,'2021-07-20',''),(22,'Ngyễn quang phúc',40,'2021-07-20','fdfdshfdshsdfsfsfsdfsd','pendding',NULL,'2021-07-20',''),(23,'Ngyễn quang phúc',81,'2021-07-20','dsfdsvds','pendding',NULL,'2021-07-20',''),(24,'Ngyễn quang phúc',40,'2021-07-20','sssssssssssssssss','pendding',NULL,'2021-07-20',''),(25,'Ngyễn quang phúc',40,'2021-07-20',NULL,'ok',NULL,'2021-07-20',''),(26,'Ngyễn quang phúc',79,'2021-07-20','pendding','pendding',NULL,'2021-07-20',''),(27,'Ngyễn quang phúc',81,'2021-07-20',NULL,'pendding',NULL,'2021-07-20',''),(28,'Ngyễn quang phúc',40,'2021-07-20','OK Baby','pendding',NULL,'2021-07-20',''),(29,'Ngyễn quang phúc',41,'2021-07-20','OK Babyx','pendding','Vu Thanh Namx','2021-07-20',''),(30,'Ngyễn quang phúc',33,'2021-07-20','test1','pendding','test 1','2021-07-20',''),(31,'Ngyễn quang phúc',33,'2021-07-20','test2','pendding','test2','2021-07-20',''),(32,'Ngyễn quang phúc',40,'2021-07-20','hahhahaha','ok','Thật gần..thật xa','2021-07-20',''),(33,'Ngyễn quang phúc',74,'2021-07-19','xxxxxxxxxxxxxxxxxxx','pendding','xxxxxxxxxxxxxxxx','2021-07-19',''),(34,'Ngyễn quang phúc',77,'2021-07-20','vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv','ok','vvvvvvvvvvvvvv','2021-07-20','');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;



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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'nguyễn'),(2,'GOCHI'),(3,'CHANEL'),(4,'SUPPERME'),(5,'VICTORIA'),(6,'ADIDAS');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'QA','Quần','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(2,'VA','Váy','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(3,'AA','Áo','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(4,'VE','Vét','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10'),(5,'AT','Áo Thun','2021-06-10','Nguyễn Văn a','Nguyễn Văn a','2021-06-10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#43242','đỏ'),(2,'#543','xanh'),(3,'#5435','vàng'),(4,'#5345','nâu'),(5,'#342','trắng');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `created_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'321456256','N@gmail.com','Hà Nội','Nam','2000-02-02','adsa','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','trần hà','on'),(14,'215245698','N@gmail.com','Hà Nội','Nam','2000-02-02','dsds','2021-02-02','Nguyễn Văn a','2000-02-02','Nguyễn Văn a','quang phuc','on'),(15,'123','ffffffffffffff','Hà Nội','Nam','2000-02-02','dsds','2021-02-02',NULL,NULL,NULL,NULL,NULL),(17,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(18,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(19,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(20,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(21,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(22,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(23,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(24,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(25,'0912121212','haytintoi9x@gmail.com','hello anh','Nam','2021-07-06','hello','2021-07-15','','2021-07-15','Ngyễn quang phúc','aaaaaaaa','on'),(26,'0905050505',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'phuc',NULL),(27,'0325272555',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'phuc',NULL),(28,'0987655211',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'hoa',NULL),(29,'0984553718',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen quang phuc',NULL),(30,'0984256321',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen thi hoa',NULL),(31,'0984256329',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-15',NULL,'nguyen thi hoa',NULL),(32,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(33,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(34,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(35,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(36,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(37,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(38,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(39,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(40,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(41,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(42,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(43,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(44,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(45,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(46,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(47,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(48,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(49,'0945213225',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'kk',NULL),(50,'0912345678',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'aa',NULL),(51,'0984553710',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'phuc',NULL),(52,'0914553123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'aa',NULL),(53,'0812345687',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'aa',NULL),(54,'0987777777',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'aa',NULL),(55,'0965666666',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-16',NULL,'aa',NULL),(56,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(57,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(58,'0326272555',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-17',NULL,'nguyen thi a',NULL),(59,'0984555222',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-17',NULL,'nguyen thi c',NULL),(60,'0999999999',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-07-17',NULL,'tran thi giang',NULL),(61,'0984555555','haytin@gmail.com','thái bình',NULL,'2021-07-14',NULL,NULL,NULL,'2021-07-17',NULL,'le ba hao',NULL),(62,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(63,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(64,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(65,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(66,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(67,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(68,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(69,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(70,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(71,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(72,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(73,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(74,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(75,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(76,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(77,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(78,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(79,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(80,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(81,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(82,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(83,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(84,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(85,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(86,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(87,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off'),(88,'xxxxx',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Khách lẻ','off');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int NOT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(200) DEFAULT NULL,
  `remain_quantity` bigint DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (205,123,1,1,NULL,NULL,1,500),(206,124,1,1,NULL,NULL,0,500),(207,125,2,1,NULL,NULL,0,600),(208,126,1,1,NULL,NULL,0,500),(209,127,2,1,NULL,NULL,0,600),(210,128,12,1,NULL,NULL,1,500),(211,129,2,1,NULL,NULL,1,600),(212,130,2,1,NULL,NULL,1,600),(213,131,2,1,NULL,NULL,1,600),(214,132,12,1,NULL,NULL,1,500),(215,133,12,1,NULL,NULL,0,500),(216,134,12,1,NULL,NULL,1,500),(217,135,13,1,NULL,NULL,0,500),(218,136,13,1,NULL,NULL,0,500),(219,137,13,1,NULL,NULL,0,500),(220,138,15,1,NULL,NULL,1,50000);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `staff_id` int NOT NULL,
  `created_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `modified_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `modified_date` timestamp NULL DEFAULT NULL,
  `state` varchar(200) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `discount` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `staff_id_idx` (`staff_id`),
  FULLTEXT KEY `full_text_search_index` (`code`) /*!80000 INVISIBLE */,
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (123,'SAPO000123',74,3,'Ngyễn quang phúc',NULL,'2021-05-19 05:22:20',NULL,NULL,500,10),(124,'SAPO000124',75,3,'Ngyễn quang phúc',NULL,'2021-06-19 05:22:29',NULL,NULL,500,20),(125,'SAPO000125',76,3,'Ngyễn quang phúc',NULL,'2021-07-19 05:22:35',NULL,NULL,600,0),(126,'SAPO000126',77,3,'Ngyễn quang phúc',NULL,'2021-07-19 05:22:45',NULL,NULL,500,30),(127,'SAPO000127',78,3,'Ngyễn quang phúc',NULL,'2021-07-19 07:01:52',NULL,NULL,600,0),(128,'SAPO000128',79,3,'Ngyễn quang phúc',NULL,'2021-07-19 09:06:31',NULL,NULL,500,0),(129,'SAPO000129',80,3,'Ngyễn quang phúc',NULL,'2021-07-19 09:07:16',NULL,NULL,600,0),(130,'SAPO000130',81,3,'Ngyễn quang phúc',NULL,'2021-07-19 09:07:49',NULL,NULL,600,0),(131,'SAPO000131',81,3,'Ngyễn quang phúc',NULL,'2020-07-19 09:07:49',NULL,NULL,400,10),(132,'SAPO000132',82,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:36:50',NULL,NULL,500,0),(133,'SAPO000133',83,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:37:22',NULL,NULL,500,0),(134,'SAPO000134',84,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:39:00',NULL,NULL,500,0),(135,'SAPO000135',85,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:39:24',NULL,NULL,500,0),(136,'SAPO000136',86,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:40:29',NULL,NULL,500,0),(137,'SAPO000137',87,3,'Ngyễn quang phúc',NULL,'2021-07-20 05:41:25',NULL,NULL,500,0),(138,'SAPO000138',88,3,'Ngyễn quang phúc',NULL,'2021-07-20 11:02:03',NULL,NULL,50000,0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'VIEW_STAFF','Xem nhân viên'),(2,'CREATE_STAFF','Tạo nhân viên'),(3,'UPDATE_STAFF','Cập nhật nhân viên'),(4,'SEARCH_STAFF','Tìm kiếm nhân viên'),(5,'VIEW_PRODUCT','Xem sản phẩm'),(6,'CREATE_PRODUCT','Tạo sản phẩm'),(7,'UPDATE_PRODUCT','Cập nhật sản phẩm'),(8,'DELETE_PRODUCT','Xóa sản phẩm'),(9,'SEARCH_PRODUCT','Tìm kiếm sản phẩm'),(10,'FILTER_PRODUCT','Lọc sản phẩm'),(11,'VIEW_CUSTOMER','Xem khách hàng'),(12,'CREATE_CUSTOMER','Tạo khách hàng'),(13,'UPDATE_CUSTOMER','Cập nhật khách hàng'),(14,'DELETE_CUSTOMER','Xóa khách hàng'),(15,'SEARCH_CUSTOMER','Tìm kiếm khách hàng'),(16,'FILTER_CUSTOMER','Lọc khách hàng'),(17,'VIEW_ORDER','Xem hóa đơn'),(18,'CREATE_ORDER','Tạo hóa đơn'),(19,'SEARCH_ORDER','Tìm kiếm hóa đơn'),(20,'FILTER_ORDER','Lọc hóa đơn'),(21,'VIEW_STATISTICAL','Xem báo cáo'),(22,'VIEW_ROLE','Xem vai trò'),(23,'CREATE_ROLE','Tạo vai trò'),(24,'UPDATE_ROLE','Cập nhật vai trò');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brand_id` int NOT NULL,
  `number_product` int NOT NULL,
  `sell_product` int NOT NULL DEFAULT '0',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` decimal(8,3) DEFAULT NULL,
  `supplier_id` int NOT NULL,
  `decription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(40) NOT NULL,
  `created_date` date DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `size` varchar(40) NOT NULL,
  `category_id` int NOT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_id_idx` (`supplier_id`),
  KEY `brand_id_idx` (`brand_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `cate` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'#A','Áo khoác Chino thời thượng SID56708',1,2,243,'https://lh3.googleusercontent.com/NevAMsFwOcu9jE1olaVuBh7mOFjiwvX125G0gyU_yeOzFvT4mNodgJxBew33Wc0xJ7wAap9uhayfIcODs5dziCV0bdvAzEGMvHvEAF4f4-L6HDHRxPd4bwXYvztRu5McDOi9V-9xOw=s60-p-k',500.000,1,'chất vải mát','1','2021-02-02','2021-07-19','1',1,NULL,NULL,NULL),(2,'#A1','Áo khoác đầm dáng xòe nút bọc 2in1',1,1,338,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',600.000,1,'chất vải mát','2','2021-02-02','2021-07-19','2',1,NULL,NULL,NULL),(3,'#V','Váy phối sọc cá tính SID62366',2,0,142,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',300.000,2,'váy ngắn mát','5','2021-02-02','2021-07-15','2',2,NULL,NULL,NULL),(4,'#V2','Váy phối sọc cá tính SID62366',2,2,105,'https://tmluxury.vn/wp-content/uploads/Anh-quan-jean-nam-ong-dung-lacoste-tmj17-hinh-lon.jpg',250.000,2,'váy đầm','4','2021-02-02','2021-07-19','1',2,NULL,NULL,NULL),(5,'#AT','Áo thun phối sọc cá tính SID62366',3,0,100,'https://buway.vn/wp-content/uploads/2018/12/41.jpg',250.000,3,'áo thun coton','5','2021-02-02','2021-07-19','3',3,NULL,NULL,NULL),(6,'#AT1','Áo thun phối sọc cá tính SID62366',4,99,1,'https://buway.vn/wp-content/uploads/2018/12/41.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-07-13','3',4,NULL,NULL,NULL),(7,'#AT1','Áo thun phối sọc cá tính SID62366',4,99,1,'chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-07-13','3',4,NULL,NULL,NULL),(8,'#AT1','Áo sơ mi',4,100,0,'https://file.hstatic.net/1000177103/file/tao-dang-vat-cheo-chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(9,'#AT1','Quần short',4,100,0,'http://file.hstatic.net/1000177103/article/tao-dang-vest-khoac-ao-qua-vai_a99203d3a86f421e82fc7d8221573b67_1138eccce7c04378b459eb4af815347c_1024x1024.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(10,'#AT1','quần kaki',4,100,0,'https://nhiet.vn/wp-content/uploads/2018/10/shop-%C3%A1o-vest-nam-h%C3%A0-n%E1%BB%99i-4.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(11,'#AT1','Áo sơ mi',4,100,0,'chan_393c7cbec47e411ba225cd0665c5fb3b_grande.jpg',300.000,3,'áo thun dáng xuông','4','2021-02-02','2021-02-02','3',4,NULL,NULL,NULL),(12,'a','Ao thun',2,33,88,'https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d1-ngoc.jpg',500.000,2,'','XANH','2021-07-13','2021-07-20','l',5,NULL,NULL,NULL),(13,'gfdgfd','Ao thun',2,88,40,'https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d1-ngoc.jpg',500.000,3,'','Xanh','2021-07-13','2021-07-20','L',1,NULL,NULL,'Deleted'),(14,'SKU14','aaaaaaaa',2,5,0,'',10.000,2,'','','2021-07-19','2021-07-19','',1,NULL,NULL,NULL),(15,'SKU15','quần đùi',4,99,1,'ao-phong-co-tron-meo-3d1-ngoc.jpg',50000.000,5,'','','2021-07-19','2021-07-20','',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_order_details`
--

DROP TABLE IF EXISTS `return_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_order_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `return_order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quanlity` int DEFAULT NULL,
  `discount` bigint DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_id_idx` (`return_order_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `bill_id` FOREIGN KEY (`return_order_id`) REFERENCES `return_orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_order_details`
--

LOCK TABLES `return_order_details` WRITE;
/*!40000 ALTER TABLE `return_order_details` DISABLE KEYS */;
INSERT INTO `return_order_details` VALUES (115,76,1,1,NULL,NULL,500),(116,77,2,1,NULL,NULL,600),(117,78,1,1,NULL,NULL,500),(118,79,2,1,NULL,NULL,600),(119,80,13,1,NULL,NULL,500),(120,81,13,1,NULL,NULL,500),(121,82,13,1,NULL,NULL,500),(122,83,12,1,NULL,NULL,500);
/*!40000 ALTER TABLE `return_order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_orders`
--

DROP TABLE IF EXISTS `return_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `staff_id` int NOT NULL,
  `modified_date` datetime DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `order_id` int NOT NULL,
  `price` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_bill_order` (`order_id`),
  KEY `fk_bill_staff` (`staff_id`),
  KEY `fk_bill_customer` (`customer_id`),
  CONSTRAINT `fk_bill_customer` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `fk_bill_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_bill_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_orders`
--

LOCK TABLES `return_orders` WRITE;
/*!40000 ALTER TABLE `return_orders` DISABLE KEYS */;
INSERT INTO `return_orders` VALUES (76,'RSAPO00076',75,3,NULL,NULL,'2021-07-19 12:27:09','Ngyễn quang phúc',123,500),(77,'RSAPO00077',76,3,NULL,NULL,'2021-07-19 13:52:48','Ngyễn quang phúc',124,600),(78,'RSAPO00078',75,3,NULL,NULL,'2021-07-19 13:53:02','Ngyễn quang phúc',124,500),(79,'RSAPO00079',78,3,NULL,NULL,'2021-07-19 14:33:54','Ngyễn quang phúc',127,600),(80,'RSAPO00080',87,3,NULL,NULL,'2021-07-20 17:22:26','Ngyễn quang phúc',137,500),(81,'RSAPO00081',86,3,NULL,NULL,'2021-07-20 17:25:38','Ngyễn quang phúc',136,500),(82,'RSAPO00082',85,3,NULL,NULL,'2021-07-20 17:32:32','Ngyễn quang phúc',135,500),(83,'RSAPO00083',83,3,NULL,NULL,'2021-07-20 17:44:51','Ngyễn quang phúc',133,500);
/*!40000 ALTER TABLE `return_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permission`
--

DROP TABLE IF EXISTS `role_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permission` (
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `fk_permission_idx` (`permission_id`),
  CONSTRAINT `fk_permission` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permission`
--

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;
INSERT INTO `role_permission` VALUES (3,1),(4,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12),(3,13),(3,14),(3,15),(3,16),(3,17),(3,18),(3,19),(3,20),(3,21),(3,22),(3,23),(3,24);
/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `notes` varchar(45) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'nhân viên bán hàng','STAFF_SALE',NULL,NULL,NULL,NULL,NULL),(2,'nhân viên chăm sóc khách hàng','STAFF_CARE',NULL,NULL,NULL,NULL,NULL),(3,'chủ cửa hàng','ADMIN',NULL,NULL,NULL,NULL,NULL),(4,'Nhan vien xem Staff',NULL,'Chi co quyen xem Staff','2021-07-20','Ngyễn quang phúc',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `id` int NOT NULL AUTO_INCREMENT,
  `size` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'S'),(2,'M'),(3,'L'),(4,'XL'),(5,'XXL'),(6,'40'),(7,'41'),(8,'42');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pass_word` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mail` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `status` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modifed_by` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Nguyễn Văn a','12345678','Hà Nội','A@gmail.com','123652458','2000-02-02','làm việc','2121-02-02','Admin','Admin',NULL,NULL),(2,'Nguyễn Văn B','12345678','Hà Nội','B@gmail.com','87654321','2000-02-02','làm việc','2021-02-02','Admin','Admin',NULL,NULL),(3,'Ngyễn quang phúc','$2a$10$DYrVLl77vG3V9s3PqCYZUeEi9VBFsVzmCt.1MJTf3V3DpdlaayY3q','Hà Nội','admin@gmail.com','123','2000-02-02','chủ','2020-02-02','Admin','Admin',NULL,NULL),(4,'Tran Van Binh','$2a$10$vABUxLxxXSo7Nuzuzavg1.70L6JAZadIusX0rpvR6ZZXPFKYdRz0K','Hà Nội','ABC@gmail.com','0376655731','2000-02-03','Đang làm việc','2021-07-20','Ngyễn quang phúc',NULL,NULL,NULL),(5,'Tran Van Cung','$2a$10$qGg9GXRNALvepU/jnqd6oe0hBUFa4uBBXWv8EJWgIieaKYrVTeXGq','Hà Nội','ABC@gmail.com','0376655732','1991-10-17','Đang làm việc','2021-07-20','Ngyễn quang phúc',NULL,NULL,NULL);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_role`
--

DROP TABLE IF EXISTS `staff_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_role` (
  `staff_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`staff_id`,`role_id`),
  KEY `staff_idx` (`staff_id`),
  KEY `roles_idx` (`role_id`),
  CONSTRAINT `roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_role`
--

LOCK TABLES `staff_role` WRITE;
/*!40000 ALTER TABLE `staff_role` DISABLE KEYS */;
INSERT INTO `staff_role` VALUES (1,1),(2,2),(3,3),(4,1),(5,4);
/*!40000 ALTER TABLE `staff_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `created_by` varchar(45) DEFAULT NULL,
  `modified_by` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'QT','Quảng Châu','quangchau@gmail.com','Trung Quốc','0123654789',NULL,NULL,NULL,NULL,NULL),(2,'NH','Ninh Hiệp','nh@gmail.com','Hà Nội-Việt Nam','06325489586',NULL,NULL,NULL,NULL,NULL),(3,'DX','Đồng Xuân','dx@gmail.com','Hà Nội -Việt Nam','0569654852',NULL,NULL,NULL,NULL,NULL),(4,'DN','Đà Nẵng','dn@gmail.com','Tp HCM','0123659854',NULL,NULL,NULL,NULL,NULL),(5,'HCM','Hồ Chí Minh','hcm@gmail.com','Tp HCM','0986532145',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-21  1:47:55
