create database dad_jokes_db;
use dad_jokes_db;
create table jokes
(
    id int
    auto_increment not null,
name varchar
    (250) null,
punchline varchar
    (250) null,
genre varchar
    (250) null,
primary key
    (id)
);
    create table ratings
    (
        id int
        auto_increment not null,
rating int
        (10) null,
primary key
        (id)
)
