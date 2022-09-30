postgres=# \password postgres
Enter new password for user "postgres": postgres

postgres=# CREATE USER kaieta WITH PASSWORD 'kaieta';

postgres=# CREATE DATABASE carrentdb OWNER kaieta;
