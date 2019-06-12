create database Workers;
use Workers;
create table if not exists Worker_Info(
Name varchar(20) not null, 
Surname varchar(20)  not null,
Position varchar(20) not null,
Pay int not null);
insert into  Worker_Info (Name, Surname, Position, Pay) values ('Oleg','Sysoev','Junior',66666);
insert into  Worker_Info (Name, Surname, Position, Pay) values ('Alex','Nuller','Spy', 22222);
insert into  Worker_Info (Name, Surname, Position, Pay) values ('Ada','Vong','Secret agent', 77777);
insert into  Worker_Info (Name, Surname, Position, Pay) values ('Jack','Handsome','Director', 99999);
insert into  Worker_Info (Name, Surname, Position, Pay) values ('Dmitry','Shorkin','Junior',66666);
select Name, Surname, Position, Pay from Worker_Info where pay < 30000;
select Name, Surname, Position, Pay from Worker_Info where pay < 30000 and Position='Spy';