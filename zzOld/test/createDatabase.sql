CREATE USER 'myadmin'@'localhost' IDENTIFIED BY 'LivingEarth';
CREATE USER 'minion'@'localhost' IDENTIFIED BY 'tomewhite';

create database retiree;
use retiree; 

create table user (
    username varchar(40) not null primary key,
    passwd char(40) not null,
    email varchar(100) not null
);

create table list  (
    retireeid int unsigned not null auto_increment primary key,
    first varchar(24) not null,
    last varchar(24) not null,
    address varchar(100),
    city varchar (24),
    zip varchar(5),
    phone varchar(12),
    email varchar(100)
);


grant select, insert, update, delete
on retiree.*
to admin@localhost identified by 'LivingEarth';

grant select
on retiree.*
to minion@localhost identified by 'tomwhite';