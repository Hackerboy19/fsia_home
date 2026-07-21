<?php
/**
 * Database & Global Configuration for Forever Star India Awards (FSIA)
 * Replicates production environment standard (PHP 8.x + MySQL PDO)
 */

// Enable strict CORS headers for the frontend application
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials (configured for dynamic environment override or default local values)
define('DB_HOST', getenv('DB_HOST') ?: '127.0.0.1');
define('DB_PORT', getenv('DB_PORT') ?: '3306');
define('DB_NAME', getenv('DB_NAME') ?: 'fsia_influencer_db');
define('DB_USER', getenv('DB_USER') ?: 'fsia_admin');
define('DB_PASS', getenv('DB_PASS') ?: 'fsia_secure_pass_2026');

/**
 * Establish a secure PDO database connection with proper error modes
 */
function getDatabaseConnection(): PDO {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        return new PDO($dsn, DB_USER, DB_PASS, $options);
    } catch (PDOException $e) {
        // Return structured JSON error on failure without exposing raw system secrets
        sendJsonResponse([
            "success" => false,
            "error" => "Database connection failed",
            "message" => "An internal validation registry error occurred. Please verify your connection config."
        ], 500);
        exit();
    }
}

/**
 * Utility to send a standardized JSON response and exit
 */
function sendJsonResponse(array $data, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit();
}

/**
 * Strict Input Sanitization helper
 */
function sanitizeInput(string $data): string {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}
