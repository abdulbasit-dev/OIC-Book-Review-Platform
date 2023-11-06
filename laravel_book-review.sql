-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2023 at 03:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_book-review`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Fiction', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(2, 'Science', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(3, 'History', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(4, 'Biography & Autobiography', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(5, 'Business & Economics', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(6, 'Cooking', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(7, 'Self-Help', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(8, 'Technology & Engineering', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(9, 'Art', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(10, 'Religion', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(11, 'Health & Fitness', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(12, 'Travel', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(13, 'Science Fiction', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(14, 'Fantasy', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(15, 'Mystery & Detective', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(16, 'Romance', '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(17, 'Comics & Graphic Novels', '2023-11-05 06:58:50', '2023-11-05 06:58:50');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_11_03_124330_create_reviews_table', 1),
(6, '2023_11_05_093248_create_genres_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `book_id` varchar(20) NOT NULL,
  `review` text NOT NULL,
  `name` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `book_id`, `review`, `name`, `rating`, `created_at`, `updated_at`) VALUES
(1, 'In8mDwAAQBAJ', 'Omnis ea qui saepe impedit provident sint. Eum ipsam est et est facere architecto. Laborum soluta sapiente illo voluptatem qui cumque qui.', 'Jaeden Becker', 1, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(2, 'In8mDwAAQBAJ', 'Qui deleniti eos rerum ut ad. Voluptas expedita minima ut enim. Est dignissimos minus dolorem facere quasi.', 'Lauriane Steuber', 3, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(3, 'In8mDwAAQBAJ', 'Molestias cupiditate excepturi nobis est qui. Molestiae aut itaque qui. Laborum totam explicabo ipsa et eligendi vero.', 'Lenora Haag', 5, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(4, 'In8mDwAAQBAJ', 'Aut tempora ullam voluptatum modi tempore beatae vitae. Quia rem aperiam laborum deserunt tempora.', 'Mr. Ignatius Monahan PhD', 2, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(5, 'In8mDwAAQBAJ', 'Quia sunt maiores sit deleniti animi ex. Nobis veritatis autem exercitationem. Libero quam harum eos. Est expedita libero aut iusto provident.', 'Amir Heaney', 2, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(6, 'In8mDwAAQBAJ', 'Autem blanditiis ipsam ducimus iste animi. Amet excepturi repellendus harum voluptatum impedit possimus. Ad voluptates et doloribus. Rerum nihil molestiae minima odit et est ipsam provident.', 'Euna Baumbach', 5, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(7, 'In8mDwAAQBAJ', 'Exercitationem error ad officiis amet est placeat. Molestiae sunt labore explicabo voluptatum est eligendi omnis. Ea iure nesciunt esse sit. Dolores qui nobis in corporis.', 'Eula Douglas', 4, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(8, 'In8mDwAAQBAJ', 'Et optio voluptas natus ut. Sequi deserunt repudiandae aspernatur. Rem error nam est amet.', 'Bennie Fisher', 1, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(9, 'In8mDwAAQBAJ', 'Ipsa est in nostrum quos ut nostrum ullam eum. Laudantium ratione sint laborum qui. Consectetur voluptatem fuga quia impedit nihil molestiae corrupti perferendis.', 'Austen Jast', 5, '2023-11-05 06:58:50', '2023-11-05 06:58:50'),
(10, 'In8mDwAAQBAJ', 'Tempora qui eum eligendi doloribus. Nostrum provident molestiae sit. Ducimus provident autem doloribus esse. Incidunt qui est similique similique.', 'Miss Tamara Strosin DDS', 4, '2023-11-05 06:58:50', '2023-11-05 06:58:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
