-- Select your empty MySQL database before running this script.
-- Matches the current JPA entities and Spring Boot snake_case naming.
-- No DROP statements or sample accounts are included.
CREATE TABLE IF NOT EXISTS users (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    role VARCHAR(255),
    email VARCHAR(255),
    CONSTRAINT uk_users_username UNIQUE (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS stocks (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255),
    category VARCHAR(255),
    location VARCHAR(255),
    quantity INT NOT NULL,
    status VARCHAR(255),
    price DOUBLE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS marketplace_items (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price VARCHAR(255),
    type VARCHAR(255),
    description VARCHAR(255),
    image_url VARCHAR(1000)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS activity_logs (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(255),
    details VARCHAR(255),
    status VARCHAR(255),
    timestamp DATETIME(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
