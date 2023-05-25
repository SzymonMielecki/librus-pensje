CREATE DATABASE libruspensje;

USE libruspensje;

CREATE TABLE employee (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE service (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE contract_type (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE salary_type (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE contract (
  id VARCHAR(36) NOT NULL,
  employee_id VARCHAR(36) NOT NULL,
  number VARCHAR(255) NOT NULL,
  contract_type_id VARCHAR(36) NOT NULL,
  fixed_salary DECIMAL(19,2) DEFAULT NULL,
  salary_type_id VARCHAR(36),
  employee_id VARCHAR(36),
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES employee (id),
  FOREIGN KEY (contract_type_id) REFERENCES contract_type (id),
  FOREIGN KEY (salary_type_id) REFERENCES salary_type (id)
);

CREATE TABLE category (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE contract_employee_type (
  id VARCHAR(36) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE hours_months (
  id VARCHAR(36) NOT NULL,
  month INT NOT NULL,
  hours_worked INT DEFAULT NULL,
  contract_service_id VARCHAR(36),
  PRIMARY KEY (id),
  FOREIGN KEY (contract_service_id) REFERENCES contract_service (id)
);

CREATE TABLE contract_service (
  id VARCHAR(36) NOT NULL,
  contract_id VARCHAR(36) NOT NULL,
  service_id VARCHAR(36) NOT NULL,
  salary DECIMAL(19,2) DEFAULT NULL,
  salary_type_id VARCHAR(36),
  category_id VARCHAR(36),
  contract_employee_type_id VARCHAR(36),
  PRIMARY KEY (id),
  FOREIGN KEY (contract_id) REFERENCES contract (id),
  FOREIGN KEY (service_id) REFERENCES service (id),
  FOREIGN KEY (salary_type_id) REFERENCES salary_type (id),
  FOREIGN KEY (category_id) REFERENCES category (id),
  FOREIGN KEY (contract_employee_type_id) REFERENCES contract_employee_type (id)
);
