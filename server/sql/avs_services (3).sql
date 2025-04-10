-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2024 at 10:17 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `avs_services`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacted_users`
--

CREATE TABLE `contacted_users` (
  `id` int(249) NOT NULL,
  `contact_id` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` int(10) NOT NULL,
  `ifdeletd` int(10) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacted_users`
--

INSERT INTO `contacted_users` (`id`, `contact_id`, `name`, `email`, `mobile`, `reason`, `message`, `status`, `ifdeletd`, `createdAt`, `updatedAt`) VALUES
(1, 'cOn1716538556728', 'Orlando Rosario', 'zorodito@mailinator.com', '-14086187965', 'Anim facilis velit ', 'Non nemo consequatur', 0, 0, '2024-05-24 08:15:56', '2024-05-24 08:15:56'),
(2, 'cOn1716538590430', 'Orlando Rosario', 'zorodito@mailinator.com', '-14086187965', 'Anim facilis velit ', 'Non nemo consequatur', 0, 0, '2024-05-24 08:16:30', '2024-05-24 08:16:30');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(249) NOT NULL,
  `invoice_id` varchar(50) DEFAULT NULL,
  `transaction_id` varchar(100) NOT NULL,
  `order_id` text DEFAULT NULL,
  `payment_id` text NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `remarks` text NOT NULL,
  `slot_date` varchar(50) DEFAULT NULL,
  `amount` decimal(59,2) NOT NULL,
  `signature` text NOT NULL,
  `file` longtext DEFAULT NULL,
  `status` int(10) NOT NULL,
  `ifdeleted` int(10) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `invoice_id`, `transaction_id`, `order_id`, `payment_id`, `user_id`, `remarks`, `slot_date`, `amount`, `signature`, `file`, `status`, `ifdeleted`, `createdAt`, `updatedAt`) VALUES
(115, 'iNv1716470669528', 'tRn1716470022905', '', '', 'uSr1716470022275', 'booking slot payment', '2024-05-29T18:30:00.000Z', '499.00', '', 'data:application/pdf;base64,JVBERi0xLjMKJf////8KOSAwIG9iago8PAovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+CmVuZG9iagoxMyAwIG9iago8PAovUyAvVVJJCi9VUkkgKG1haWx0bzpzdXBwb3J0QGF2c2NvbnN1bHRpbmdzZXJ2aWNlLmNvbSkKPj4KZW5kb2JqCjE0IDAgb2JqCjw8Ci9TdWJ0eXBlIC9MaW5rCi9BIDEzIDAgUgovVHlwZSAvQW5ub3QKL1JlY3QgWzI1OC4yMzIwMTUgMjI1LjkyNjAyOCA0MjguNjkyMDE1IDIzOS4zNjYwMjhdCi9Cb3JkZXIgWzAgMCAwXQovRiA0Cj4+CmVuZG9iagoxNSAwIG9iago8PAovUyAvVVJJCi9VUkkgKGh0dHBzOi8vYXZzY29uc3VsdGluZ3NlcnZpY2UuY29tLykKPj4KZW5kb2JqCjE2IDAgb2JqCjw8Ci9TdWJ0eXBlIC9MaW5rCi9BIDE1IDAgUgovVHlwZSAvQW5ub3QKL1JlY3QgWzU1IDE5MS4wNDYwMzIgNTQwLjI4MDAyOSAyMDQuNDg2MDMxXQovQm9yZGVyIFswIDAgMF0KL0YgNAo+PgplbmRvYmoKOCAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDEgMCBSCi9NZWRpYUJveCBbMCAwIDU5NS4yODAwMjkgODQxLjg5MDAxNV0KL0NvbnRlbnRzIDYgMCBSCi9SZXNvdXJjZXMgNyAwIFIKL1VzZXJVbml0IDEKL0Fubm90cyBbMTQgMCBSIDE2IDAgUl0KPj4KZW5kb2JqCjcgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgPDwKL0dzMSA5IDAgUgo+PgovRm9udCA8PAovRjIgMTAgMCBSCi9GMyAxMSAwIFIKL0YxIDEyIDAgUgo+Pgo+PgplbmRvYmoKMTggMCBvYmoKKHJlYWN0LXBkZikKZW5kb2JqCjE5IDAgb2JqCihyZWFjdC1wZGYpCmVuZG9iagoyMCAwIG9iagooRDoyMDI0MDUyMzEzMjQyOVopCmVuZG9iagoxNyAwIG9iago8PAovUHJvZHVjZXIgMTggMCBSCi9DcmVhdG9yIDE5IDAgUgovQ3JlYXRpb25EYXRlIDIwIDAgUgo+PgplbmRvYmoKMTIgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9IZWx2ZXRpY2EKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iagoyMiAwIG9iago8PAovVHlwZSAvRm9udERlc2NyaXB0b3IKL0ZvbnROYW1lIC9CQlJWQ1ErT3N3YWxkLVJlZ3VsYXIKL0ZsYWdzIDQKL0ZvbnRCQm94IFstMTk3IC0yODcgMTIyMyAxMjk3XQovSXRhbGljQW5nbGUgMAovQXNjZW50IDExOTMKL0Rlc2NlbnQgLTI4OQovQ2FwSGVpZ2h0IDgxMAovWEhlaWdodCA1NzgKL1N0ZW1WIDAKL0ZvbnRGaWxlMiAyMSAwIFIKPj4KZW5kb2JqCjIzIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0Jhc2VGb250IC9CQlJWQ1ErT3N3YWxkLVJlZ3VsYXIKL0NJRFN5c3RlbUluZm8gPDwKL1JlZ2lzdHJ5IChBZG9iZSkKL09yZGVyaW5nIChJZGVudGl0eSkKL1N1cHBsZW1lbnQgMAo+PgovRm9udERlc2NyaXB0b3IgMjIgMCBSCi9XIFswIFs2ODIgNDkyIDUwNSA0NzMgMjI5IDUxNSA0MjQgNDM5IDM3NCA0NDAgMjI5IDMwOCAyMjkgNDM1IDQyMSAzMjEgMzg1IDQxMSA0OTUgNDI2IDM5Ml1dCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0JCUlZDUStPc3dhbGQtUmVndWxhcgovRW5jb2RpbmcgL0lkZW50aXR5LUgKL0Rlc2NlbmRhbnRGb250cyBbMjMgMCBSXQovVG9Vbmljb2RlIDI0IDAgUgo+PgplbmRvYmoKMTEgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKPj4KZW5kb2JqCjQgMCBvYmoK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GLTZ3beXzo1BH0jnTYw4/UuN6sdxKPBb2rGVo2uawrzmyhZEsYI87GojqP/+AzWauqMKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgMjUKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAxOTAwIDAwMDAwIG4gCjAwMDAwMDE5NTcgMDAwMDAgbiAKMDAwMDAwMTgxMyAwMDAwMCBuIAowMDAwMDAxNzkyIDAwMDAwIG4gCjAwMDAwMDIwMDQgMDAwMDAgbiAKMDAwMDAwNjU4MCAwMDAwMCBuIAowMDAwMDAwNjE5IDAwMDAwIG4gCjAwMDAwMDA0NjUgMDAwMDAgbiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAxNTQzIDAwMDAwIG4gCjAwMDAwMDE2OTIgMDAwMDAgbiAKMDAwMDAwMDkyNyAwMDAwMCBuIAowMDAwMDAwMDU5IDAwMDAwIG4gCjAwMDAwMDAxMzYgMDAwMDAgbiAKMDAwMDAwMDI2OSAwMDAwMCBuIAowMDAwMDAwMzQwIDAwMDAwIG4gCjAwMDAwMDA4NTEgMDAwMDAgbiAKMDAwMDAwMDc1OSAwMDAwMCBuIAowMDAwMDAwNzg3IDAwMDAwIG4gCjAwMDAwMDA4MTUgMDAwMDAgbiAKMDAwMDAwMjA0NyAwMDAwMCBuIAowMDAwMDAxMDI1IDAwMDAwIG4gCjAwMDAwMDEyNDAgMDAwMDAgbiAKMDAwMDAwNjE5MyAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDI1Ci9Sb290IDMgMCBSCi9JbmZvIDE3IDAgUgovSUQgWzw1NDk4NDIzZjg1OTIyN2I2MzJiN2Q5ZDc4MTc0YmI5Nj4gPDU0OTg0MjNmODU5MjI3YjYzMmI3ZDlkNzgxNzRiYjk2Pl0KPj4Kc3RhcnR4cmVmCjkwNjgKJSVFT0YK', 0, 0, '2024-05-23 13:24:29', '2024-05-23 13:24:29');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(249) NOT NULL,
  `transaction_id` varchar(50) DEFAULT NULL,
  `invoice_id` varchar(50) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `order_id` text DEFAULT NULL,
  `remarks` text NOT NULL,
  `amount` decimal(50,2) NOT NULL DEFAULT 0.00,
  `status` int(10) NOT NULL,
  `ifdeleted` int(10) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transaction_id`, `invoice_id`, `user_id`, `order_id`, `remarks`, `amount`, `status`, `ifdeleted`, `createdAt`, `updatedAt`) VALUES
(81, 'tRn1716364030906', '', 'uSr1716364030283', '', 'booking slot payment', '499.00', 0, 0, '2024-05-22 07:47:10', '2024-05-22 07:47:10'),
(82, 'tRn1716364092733', '', 'uSr1716364092142', '', 'booking slot payment', '499.00', 0, 0, '2024-05-22 07:48:12', '2024-05-22 07:48:12'),
(83, 'tRn1716364228946', '', 'uSr1716364228319', '', 'booking slot payment', '499.00', 0, 0, '2024-05-22 07:50:28', '2024-05-22 07:50:28'),
(84, 'tRn1716364264545', '', 'uSr1716364263949', '', 'booking slot payment', '499.00', 0, 0, '2024-05-22 07:51:04', '2024-05-22 07:51:04'),
(85, 'tRn1716366874288', '', 'uSr1716366873693', '', 'booking slot payment', '499.00', 0, 0, '2024-05-22 08:34:34', '2024-05-22 08:34:34'),
(86, 'tRn1716449295193', '', 'uSr1716449294605', '', 'booking slot payment', '499.00', 0, 0, '2024-05-23 07:28:15', '2024-05-23 07:28:15'),
(87, 'tRn1716470022905', '', 'uSr1716470022275', '', 'booking slot payment', '499.00', 0, 0, '2024-05-23 13:13:42', '2024-05-23 13:13:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(249) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `alternative_mobile` varchar(20) DEFAULT NULL,
  `gender` varchar(20) NOT NULL,
  `age` int(20) NOT NULL,
  `aadhar_card` varchar(20) DEFAULT NULL,
  `current_address` text DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `educations` longtext DEFAULT NULL,
  `experiences` longtext DEFAULT NULL,
  `ref_code` varchar(20) NOT NULL,
  `status` int(10) NOT NULL,
  `ifdeleted` int(10) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `name`, `email`, `mobile`, `alternative_mobile`, `gender`, `age`, `aadhar_card`, `current_address`, `permanent_address`, `educations`, `experiences`, `ref_code`, `status`, `ifdeleted`, `createdAt`, `updatedAt`) VALUES
(20, 'uSr1716364030283', 'Brian Cunningham', 'wulukyha@mailinator.com', '42523', '523', 'Male', 53, '32523', 'Adipisci pariatur F', 'Culpa dolorem obcaec', '{\"1\":{\"TITLE\":\"Cupiditate eligendi \",\"CAPTION\":\"Do eveniet voluptas\",\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2019-12-31T18:30:00.000Z\"}}', '{}', 'AVS3120', 0, 0, '2024-05-22 07:47:10', '2024-05-22 07:47:10'),
(21, 'uSr1716364092142', 'Brian Cunningham', 'wulukyha@mailinator.com', '42523', '523', 'Male', 53, '32523', 'Adipisci pariatur F', 'Culpa dolorem obcaec', '{\"1\":{\"TITLE\":\"Cupiditate eligendi \",\"CAPTION\":\"Do eveniet voluptas\",\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2019-12-31T18:30:00.000Z\"}}', '{}', 'AVS3120', 0, 0, '2024-05-22 07:48:12', '2024-05-22 07:48:12'),
(22, 'uSr1716364228319', 'Brian Cunningham', 'wulukyha@mailinator.com', '42523', '523', 'Male', 53, '32523', 'Adipisci pariatur F', 'Culpa dolorem obcaec', '{\"1\":{\"TITLE\":\"Cupiditate eligendi \",\"CAPTION\":\"Do eveniet voluptas\",\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2019-12-31T18:30:00.000Z\"}}', '{}', 'AVS3120', 0, 0, '2024-05-22 07:50:28', '2024-05-22 07:50:28'),
(23, 'uSr1716364263949', 'Brian Cunningham', 'wulukyha@mailinator.com', '42523', '523', 'Male', 53, '32523', 'Adipisci pariatur F', 'Culpa dolorem obcaec', '{\"1\":{\"TITLE\":\"Cupiditate eligendi \",\"CAPTION\":\"Do eveniet voluptas\",\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2019-12-31T18:30:00.000Z\"}}', '{}', 'AVS3120', 0, 0, '2024-05-22 07:51:03', '2024-05-22 07:51:03'),
(24, 'uSr1716366873693', 'Felix Massey', 'qugelorega@mailinator.com', '86', '76', 'Male', 86, '685856', 'Molestiae sint velit', 'Cumque id assumenda', '{\"1\":{\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2019-12-31T18:30:00.000Z\"}}', '{}', 'AVS0799', 0, 0, '2024-05-22 08:34:33', '2024-05-22 08:34:33'),
(25, 'uSr1716449294605', 'Trevor Lawson', 'vatez@mailinator.com', '12', '12', 'Male', 12, '2', 'Accusantium labore d', 'Ratione excepteur qu', '{\"1\":{\"TITLE\":\"Sit quos in est obc\",\"CAPTION\":\"Dolor cumque dolores\",\"FROM_YEAR\":\"2020-12-31T18:30:00.000Z\",\"END_YEAR\":\"2023-12-31T18:30:00.000Z\"}}', '{}', 'AVS4312', 0, 0, '2024-05-23 07:28:14', '2024-05-23 07:28:14'),
(26, 'uSr1716470022275', 'Kalyan', 'kalyankn85@gmail.com', '9550049382', '9550049382', 'Male', 24, '23232323232323', 'Ut perferendis aute ', 'Dolorum voluptatem ', '{\"1\":{\"TITLE\":\"Dolor mollit nostrud\",\"CAPTION\":\"Nihil excepteur exer\",\"FROM_YEAR\":\"2019-12-31T18:30:00.000Z\",\"END_YEAR\":\"2021-12-31T18:30:00.000Z\"}}', '{}', 'AVS3120', 0, 0, '2024-05-23 13:13:42', '2024-05-23 13:13:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacted_users`
--
ALTER TABLE `contacted_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacted_users`
--
ALTER TABLE `contacted_users`
  MODIFY `id` int(249) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(249) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(249) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(249) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
