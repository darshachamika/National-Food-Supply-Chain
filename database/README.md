# Fresh MySQL database setup

This recreates the structure, not the old records. It follows all four current
JPA entities: users, stocks, marketplace_items and activity_logs. The entities
have no foreign-key relationships. Marketplace prices remain strings and stock
prices remain doubles to match the existing application.

## 1. Create an empty database

On a MySQL host, create a database and a user that can access it. Use the host's
assigned database name if it does not allow creating your own. Locally you can
run `CREATE DATABASE lksupply_db CHARACTER SET utf8mb4;` as a database admin.

Select that database in MySQL Workbench and execute `database/schema.sql`.
Alternatively: `mysql -h HOST -P PORT -u USER -p DATABASE < database/schema.sql`.
Use the TLS settings required by your provider. The script does not drop tables;
it is intended for a fresh database, not migrating an existing schema.

## 2. Connect the backend

Set these in the backend host's environment settings or IntelliJ run configuration:

| Variable | Value |
| --- | --- |
| SPRING_PROFILES_ACTIVE | hosted |
| DB_URL | jdbc:mysql://HOST:PORT/DATABASE?sslMode=VERIFY_IDENTITY |
| DB_USERNAME | Database user |
| DB_PASSWORD | Database password |
| JWT_SECRET | A newly generated random secret of at least 32 bytes |
| PORT | Hosting port, or 8080 locally |

Use your provider's documented JDBC/TLS configuration and trust certificate if
needed. For a local-only MySQL server, use its local JDBC URL instead.
Generate a new JWT secret with `openssl rand -base64 48`. Store credentials only
in environment settings. Spring Boot does not automatically load a root .env file.
The hosted profile overrides the legacy local credentials and JWT secret.

Start with `./mvnw spring-boot:run` (Windows: `mvnw.cmd spring-boot:run`).
Hibernate validates the imported schema on startup rather than changing it.

## 3. Create your first account locally

The database is intentionally empty. With the backend running locally, POST JSON
to `/api/auth/register` containing username, password, email and role (`PUBLIC`).
The existing controller hashes the password with BCrypt. Do not insert plaintext
passwords into users. Then sign in through `/api/auth/login`.

## Before public deployment

This change prepares the database only; it does not provision a live service.
The existing backend permits all requests and accepts a role supplied during
registration. Restrict privileged routes and prevent public role escalation
before exposing it. The frontend API URL, CORS origins and cookie configuration
also still need deployment configuration. Uploaded files live in the uploads
folder and need durable storage separately from MySQL.

## Verification status

Schema columns were checked against the repository entities. A real MySQL import,
Hibernate validation and registration/login check are required on the selected
host before calling this a working deployment.
