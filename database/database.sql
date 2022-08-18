create database node_test;

create table cliente(
	id serial primary key,
	nombre text not null,
	apellido text not null,
	fechanacimiento date not null
);