
-- Create the Admins table
CREATE TABLE Admins (
  admin_id INT PRIMARY KEY IDENTITY(1, 1),
  admin_name VARCHAR(255),
  admin_password VARCHAR(255)
);

-- Insert rows into the Admins table
INSERT INTO Admins (admin_name, admin_password)
VALUES
  ('John', 'password123'),
  ('Alice', 'securepass'),
  ('David', '123456'),
  ('Emily', 'adminpass'),
  ('Michael', 'p@ssw0rd');

  select * from Admins



-- Create the HelpCenter table
CREATE TABLE HelpCenter (
    help_id INT  IDENTITY (1,1),
    Name VARCHAR(255),
    Email VARCHAR(255),
    Query VARCHAR(200)
);

-- Insert sample rows
INSERT INTO HelpCenter (Name, Email, Query) VALUES
    ('John Doe', 'john.doe@example.com', 'How can I reset my account password?'),
    ('Jane Smith', 'jane.smith@example.com', 'I need assistance with a billing issue.'),
    ('Mark Johnson', 'mark.johnson@example.com', 'Can you provide instructions on how to use the new feature?'),
    ('Emily Brown', 'emily.brown@example.com', 'I''m experiencing difficulties accessing my account.'),
    ('Michael Davis', 'michael.davis@example.com', 'I have a question regarding your refund policy.');

-- Verify the data in the table
SELECT * FROM HelpCenter;

-- Create the Users table
CREATE TABLE Users (
    user_id INT IDENTITY (1,1),
    Username VARCHAR(255) UNIQUE,
    Email VARCHAR(255),
    Password VARCHAR(100)
);

-- Insert sample rows
INSERT INTO Users (Username, Email, Password) VALUES
    ('john01', 'john@example.com', 'password123'),
    ('jane04', 'jane@example.com', 'qwerty'),
    ('mark23', 'mark@example.com', '123456'),
    ('sarah15', 'sarah@example.com', 'pass123'),
    ('michael32', 'michael@example.com', 'securepass'),
    ('emily09', 'emily@example.com', 'p@55w0rd'),
    ('david18', 'david@example.com', 'letmein'),
    ('lisa12', 'lisa@example.com', 'password!'),
    ('steve25', 'steve@example.com', 'hello123'),
    ('natalie06', 'natalie@example.com', 'pass1234');

-- Verify the data in the table
SELECT * FROM Users;


