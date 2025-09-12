CREATE USER notesUser;
ALTER ROLE notesUser SUPERUSER;
SELECT 'CREATE DATABASE notesDatabase' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'notesDatabase')\gexec
