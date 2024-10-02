-- MySQL dump 10.13  Distrib 8.4.0, for Win64 (x86_64)
--
-- Host: localhost    Database: gestion-recipes
-- ------------------------------------------------------
-- Server version	8.4.0

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
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` text NOT NULL,
  `titre` text NOT NULL,
  `ingredient` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Dessert','Chocolate Cake','Flour, Sugar, Cocoa Powder, Eggs, Butter, Baking Powder'),(3,'Appetizer','Caesar Salad','Lettuce, Croutons, Parmesan Cheese, Caesar Dressing, Chicken Breast'),(4,'Dessert','Apple Pie','Apples, Flour, Sugar, Cinnamon, Butter, Pie Crust'),(5,'Main Course','Grilled Chicken','Chicken Breast, Olive Oil, Lemon, Garlic, Rosemary, Salt, Pepper'),(9,'Dessert','Apple Pie','Apples, Flour, Sugar, Cinnamon, Butter, Pie Crust'),(10,'Main Course','Grilled Chicken','Chicken Breast, Olive Oil, Lemon, Garlic, Rosemary, Salt, Pepper'),(11,'Dessert1244','Chocolate lxkxlCake','Flounr, Sugannr, Cocoa Powder, Eggs, Butter, Baking Powder'),(12,'Dessert','Chocolate Cake','Flour, Sugar, Cocoa Powder, Eggs, Butter, Baking Powder'),(13,'Main Course','Spaghetti Bolognese','Spaghetti, Ground Beef, Tomatoes, Onion, Garlic, Olive Oil, Basil'),(15,'Dessert','Apple Pie','Apples, Flour, Sugar, Cinnamon, Butter, Pie Crust'),(16,'Main Course','Grilled Chicken','Chicken Breast, Olive Oil, Lemon, Garlic, Rosemary, Salt, Pepper'),(17,'dessert','crepe','farime'),(18,'dessert','crepe','farime'),(19,'dessert','crepe','farime');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-02  9:37:44
