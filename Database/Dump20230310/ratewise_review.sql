-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ratewise
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` double DEFAULT NULL,
  `review` varchar(300) DEFAULT NULL,
  `timestamp` datetime(6) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhwr0hod04ukbt80ty4u0lubo6` (`content_id`),
  KEY `FKiyf57dy48lyiftdrf7y87rnxi` (`user_id`),
  CONSTRAINT `FKhwr0hod04ukbt80ty4u0lubo6` FOREIGN KEY (`content_id`) REFERENCES `content` (`id`),
  CONSTRAINT `FKiyf57dy48lyiftdrf7y87rnxi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (3,5,'Best Story','2023-03-06 03:10:06.199549','Excellent',1,1),(4,5,'Superb performance by all the actors','2023-03-06 12:01:25.156047','Superb',2,2),(5,4,'Showed the reality of every student','2023-03-06 12:10:34.749696','Amazing Movie',1,2),(6,4,'loved It','2023-03-06 13:06:46.718570','Amazing',1,3),(7,4,'Loved so much..!!!','2023-03-06 14:04:13.657260','Fabulous',4,3),(8,5,'Every minute worth watching!','2023-03-06 14:05:26.843859','Good Story',4,2),(9,3,'will not reconmend to watch','2023-03-09 16:09:30.716225','Not As expected',3,3),(10,4,'Nawaz was good as always','2023-03-09 16:32:49.657953','Something Missing',3,1),(11,2,'Not Good','2023-03-09 16:40:05.440613','Much Abusive',3,2),(12,4,'Superb..!!!Loved It','2023-03-09 16:46:37.649867','A powerpack performace performance',5,1),(13,5,'really enjoyed it ','2023-03-09 16:50:11.371040','Super Entertaining',5,2),(14,5,'really enjoyed it every second of it','2023-03-09 17:03:38.745655','Mesmerizing',4,1);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-10  2:50:41
