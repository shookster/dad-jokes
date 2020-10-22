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

    --Jokester table, use this to get the total number of jokes in a ranking--
    create table jokesters
    (
        id int
        auto_increment not NULL,
 email varchar
        (250),
 password varchar
        (250),
 primary key
        (id)
);