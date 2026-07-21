<?php
/**
 * Influencer & Contestant Registration API Endpoint
 * Processes candidate profiles, validates data, and persists into MySQL safely.
 */

require_once __DIR__ . '/config.php';

// Verify request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse([
        "success" => false,
        "error" => "Method Not Allowed",
        "message" => "Only secure POST requests are authorized for this registry."
    ], 405);
}

// Retrieve and decode input payload
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    sendJsonResponse([
        "success" => false,
        "error" => "Bad Request",
        "message" => "Malformed or empty JSON payload received."
    ], 400);
}

// Extract and sanitize required fields
$fullname = isset($data['fullname']) ? sanitizeInput($data['fullname']) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_VALIDATE_EMAIL) : false;
$phone = isset($data['phone']) ? sanitizeInput($data['phone']) : '';
$category = isset($data['category']) ? sanitizeInput($data['category']) : 'General';
$city = isset($data['city']) ? sanitizeInput($data['city']) : '';
$state = isset($data['state']) ? sanitizeInput($data['state']) : '';
$instagram = isset($data['instagram']) ? sanitizeInput($data['instagram']) : '';
$experience = isset($data['experience']) ? sanitizeInput($data['experience']) : '';

// Simple validation checks
if (empty($fullname) || !$email || empty($phone) || empty($city) || empty($state)) {
    sendJsonResponse([
        "success" => false,
        "error" => "Unprocessable Entity",
        "message" => "All core registry fields (Full Name, Valid Email, Phone, City, and State) must be complete."
    ], 422);
}

// Initialize secure Database Connection
$pdo = getDatabaseConnection();

try {
    // Zero-Setup: Dynamically establish the tables if they are absent
    $createTableSql = "
        CREATE TABLE IF NOT EXISTS influencer_registrations (
            id INT AUTO_INCREMENT PRIMARY KEY,
            fullname VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(50) NOT NULL,
            category VARCHAR(100) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(100) NOT NULL,
            instagram VARCHAR(255) DEFAULT NULL,
            experience TEXT DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";
    $pdo->exec($createTableSql);

    // Insert Registration record using Parameterized Prepared Statements
    $insertSql = "
        INSERT INTO influencer_registrations (fullname, email, phone, category, city, state, instagram, experience)
        VALUES (:fullname, :email, :phone, :category, :city, :state, :instagram, :experience)
    ";
    
    $stmt = $pdo->prepare($insertSql);
    $stmt->execute([
        ':fullname' => $fullname,
        ':email' => $email, // already filtered
        ':phone' => $phone,
        ':category' => $category,
        ':city' => $city,
        ':state' => $state,
        ':instagram' => $instagram,
        ':experience' => $experience
    ]);

    sendJsonResponse([
        "success" => true,
        "message" => "Congratulations! Your registration for Forever Star India has been registered securely.",
        "registration_id" => $pdo->lastInsertId(),
        "candidate" => [
            "name" => $fullname,
            "category" => $category,
            "city" => $city
        ]
    ], 201);

} catch (PDOException $e) {
    sendJsonResponse([
        "success" => false,
        "error" => "Database Execution Failure",
        "message" => "Failed to write candidate record to registry database: " . $e->getMessage()
    ], 500);
}
