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
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) DEFAULT NULL,
  `length` double DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `poster_link` varchar(500) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `avg_rating` double DEFAULT '0',
  `description` varchar(500) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `vote_count` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,'Bollywood',171,'3 Idiots','images\\3 Idiots.jpg','MOVIE',4.333333333333333,'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \'idiots\'.','2009-12-25',0),(2,'Tollywood',150,'Kantara','images\\Kantara.jpg','MOVIE',5,'It involves culture of Kambala and Bhootha Kola. A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leads to war between villagers and evil forces. Will he be able to regain peace in the village?','2021-09-30',0),(3,'Bollywood',122,'Babumoshai Bandookbaaz','images\\Babumoshai Bandookbaaz.jpg','MOVIE',3,'The movie, filled with humor and romance, is a quirky ride into the life and times of a small time contract killer, Babu, played by Nawazuddin Siddiqui. The film spins around his love, his friends, his rivalries and his revenge.','2017-08-25',3),(4,'Bollywood',149,'Chak De! India','images\\Chakde India.jpg','MOVIE',4.67,'Chak De India is the story of a coach s fight of making his team, Team India by overcoming their diverse backgrounds, by learning to use everything that life hurls on them as a secret weapon. It\'s a story about honesty, sincerity and integrity. A story to remind the nation of its National sport.','2007-08-10',3),(5,'Bollywood',141,'Chennai Express','images\\Chennai Expresss.jpg','MOVIE',4.5,'A man heading towards Rameshwaram via Chennai express to immerse his late grandfather\'s ashes unwillingly gets caught amidst goons after helping their boss\'s daughter and them board the train.','2013-08-08',2),(6,'sad',3.23,'Baarish','images\\Baarish Song.jpg','SONG',0,'Tum Hi Ho composer Mithoon is back again with a beautiful romantic song which is sung by Mohammed Irfan. Baarish/Is Dard-e-Dil ki Sifarish lyrics are penned by Mithoon himself.','2021-11-29',0);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
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
