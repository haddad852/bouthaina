-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: banque
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chequier`
--

DROP TABLE IF EXISTS `chequier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chequier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `compte_cheque` varchar(45) DEFAULT NULL,
  `nb_cheque` varchar(45) DEFAULT NULL,
  `price_cheque` varchar(45) DEFAULT NULL,
  `cheque_for` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `traite` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chequier`
--

LOCK TABLES `chequier` WRITE;
/*!40000 ALTER TABLE `chequier` DISABLE KEYS */;
INSERT INTO `chequier` VALUES (1,'3','8',NULL,'2021-11-18 18:01:41.895','2021-11-18 16:40:23.104','1'),(2,'3','10',NULL,'2021-11-18 18:02:57.835','2021-11-18 16:43:17.455','1'),(3,'4','12',NULL,'2021-11-18 18:04:23.504','2021-11-18 16:43:24.018','1'),(4,'1','5',NULL,NULL,'2021-11-18 17:24:22.839','0'),(8,'2','8',NULL,NULL,'2021-11-18 18:06:39.119','0'),(9,'4','8',NULL,'2021-11-18 18:06:53.920','2021-11-18 18:06:49.091','1');
/*!40000 ALTER TABLE `chequier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compte`
--

DROP TABLE IF EXISTS `compte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cin` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `compte` varchar(45) DEFAULT NULL,
  `id_transaction` varchar(45) DEFAULT NULL,
  `solde` double DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `created_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compte`
--

LOCK TABLES `compte` WRITE;
/*!40000 ALTER TABLE `compte` DISABLE KEYS */;
INSERT INTO `compte` VALUES (1,'tt','test','tsts','ss','893BE270-4866-11EC-98A7-7502BBF1E351',-93315,'zjzj@d.co',NULL),(2,'1929922','test1','test2','description d','D5F7E5A0-4866-11EC-98A7-7502BBF1E351',-233486,'email@gmail.com',NULL),(3,'19292003','test28','TZTZ','292','4D2DC060-486A-11EC-B7B4-6D72AA67CC8A',357805,'ha@aj.co','2021-11-18 13:23:14.022'),(4,'200202','compte 2','compte3','test','CCEFB660-4878-11EC-A7A6-CF5AA3B0B6F4',27935,'ema@gmail.Com','2021-11-18 15:07:01.319');
/*!40000 ALTER TABLE `compte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from` varchar(45) DEFAULT NULL,
  `to` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `montant` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (3,'2','3','2021-11-18 15:01:17.247','11292'),(4,'2','3','2021-11-18 15:01:19.513','111292'),(5,'1','3','2021-11-18 15:01:22.894','111292'),(6,'1','2','2021-11-18 15:01:29.453','1112'),(7,'1','2','2021-11-18 15:01:32.664','192'),(8,'2','1','2021-11-18 15:05:21.459','19383'),(9,'1','2','2021-11-18 15:06:05.619','102'),(10,'4','2','2021-11-18 16:15:18.385','1992'),(11,'2','4','2021-11-18 16:15:41.292','7');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-18 18:07:53
