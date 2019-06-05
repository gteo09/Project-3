-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: passport_demo
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `farms`
--

DROP TABLE IF EXISTS `farms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `farms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `products` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farms`
--

LOCK TABLES `farms` WRITE;
/*!40000 ALTER TABLE `farms` DISABLE KEYS */;
INSERT INTO `farms` VALUES (1,'Kelsey Creek Farm','410 130th Pl SE, Bellevue, WA 98005','https://parks.bellevuewa.gov/community-centers/kelsey-creek-farm','(425) 452-7688','Open 365 days a year, Kelsey Creek Community Park features 150 acres of forest, meadows and wetlands in the heart of Bellevue, offering a glimpse of this city\'s rural past.','fish, corn, strawberries, fresh dairy','2019-05-31 12:46:21','2019-05-31 12:46:21'),(2,'Enfield Farms','9490, 1064 Birch Bay Lynden Rd, Lynden, WA 98264','https://www.enfieldfarms.com/','(360) 354-3019','Serving fresh berries since 1977','blueberries, raspberries','2019-05-31 12:46:21','2019-05-31 12:46:21'),(3,'Rader Farms Inc','1270 E Badger Rd, Lynden, WA 98264','https://jobs.raderfarms.com/Home/Contact','(360) 354-6574','In 1941 the Rader family put down their roots in the Pacific Northwest and began farming their fine berries. They settled in a perfect growing region, 76 years later, the legacy continues.','frozen blueberries,frozen raspberries,frozen mangoes,frozen sweet cherries','2019-05-31 12:46:21','2019-05-31 12:46:21'),(4,'Twin Brook Creamery','9728 Double Ditch Rd, Lynden, WA 98264','https://www.twinbrookcreamery.com/','(360) 354-4105','Twin Brook Creamery is fifth-generation farm, now owned and operated by Larry Stap and his wife Debbie, along with daughter Michelle Tolsma and her husband Mark.','jersey milk,chocolate milk,eggnog,cream','2019-05-31 12:46:21','2019-05-31 12:46:21');
/*!40000 ALTER TABLE `farms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oldfarms`
--

DROP TABLE IF EXISTS `oldfarms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oldfarms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `products` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oldfarms`
--

LOCK TABLES `oldfarms` WRITE;
/*!40000 ALTER TABLE `oldfarms` DISABLE KEYS */;
/*!40000 ALTER TABLE `oldfarms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profileinfos`
--

DROP TABLE IF EXISTS `profileinfos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `profileinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cuisine` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `UsersOldId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `UsersOldId` (`UsersOldId`),
  CONSTRAINT `profileinfos_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `profileinfos_ibfk_2` FOREIGN KEY (`UsersOldId`) REFERENCES `usersolds` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profileinfos`
--

LOCK TABLES `profileinfos` WRITE;
/*!40000 ALTER TABLE `profileinfos` DISABLE KEYS */;
/*!40000 ALTER TABLE `profileinfos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test@test.com','$2a$10$aK3oo5u9g7.uj4hW2zvl/.zB8V3X5BDx7hrsvGvw5VxFirFWckldS','stuff','5556667777','1234 ave st, fake, wa 99999','www.google.com','2019-05-31 19:42:53','2019-05-31 19:42:53'),(2,'harry','harry@potter.com','$2a$10$gw.FZoSTJgJX3ULMQIvGiOaRY8aHySZHLE2D7ypE1y24.adN5eRZq','wizardry','5556667777','1427 Western Avenue','www.google.com','2019-05-31 22:53:17','2019-05-31 22:53:17'),(3,'justin','justin1@justin.com','$2a$10$lXxkUqcc94Mxd.6Ys2JcR.UkY5K/JSlDUeC82PgbLFtR5rQhz0eb2','something','5556667777','5555 me ave, me, wa, 88888','www.google.com','2019-06-01 17:09:21','2019-06-01 17:09:21'),(4,'gabriel','gabriel@teotonio.com','$2a$10$e6K9ROnPtkvhKH64xR2RcOVwywqiqDb6mvCcyPbZwGhEPUHW4ZUAC','farms','5556667777','5555 me ave, me, wa, 88888','www.google.com','2019-06-01 17:14:58','2019-06-01 17:14:58'),(5,'andrew','andrew@rice.com','$2a$10$KmLrIR0ytDCl4Vv0po8xNu68ULe1LnfhM5fyezZYxwATUf3p/7eWC','kgb','5556667777','5555 me ave, me, wa, 88888','www.google.com','2019-06-01 17:17:30','2019-06-01 17:17:30'),(9,'aaron','aaron@aaron.com','$2a$10$Xtx2zq0cxyC6ODVKXEe1K.ABtf8NnyEgoa2gxtfl0kBf97KrKNPa.','things','5556667777','5555 me ave, me, wa, 88888','www.google.com','2019-06-01 20:05:47','2019-06-01 20:05:47');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersolds`
--

DROP TABLE IF EXISTS `usersolds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usersolds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersolds`
--

LOCK TABLES `usersolds` WRITE;
/*!40000 ALTER TABLE `usersolds` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersolds` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-05 12:10:30
