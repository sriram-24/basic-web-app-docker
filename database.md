Lets create a database docker container and expose the port to our local machine. The database used in the example is Postgresql database.

Pull the image from docker hub.

```bash
docker pull postgres:17-alpine
```

I'm using the docker alpine image to my local machine.

Build the container using the image and run it.

```bash
docker run -it --rm --name web-test-db -e POSTGRES_PASSWORD=test -p 5433:5432 postgres:17-alpine
```

The above command will create a simple database with username `postgres` and `dev` as password.

#### Creating a user 

To create a database user in the docker container, First open the shell in container.

```bash
docker exec -it web-server-db bash
```

Connect to psql to create a user. By default `postgres` user will be created so we can login using the below command.

```bash
psql -U postgres
```

Create a user with permissions using the command below.

```psql
 create user test with password 'test' createdb createrole superuser;
```

To delete the user, run the below command.

```psql
drop user if exists test;
```

#### Persist the data by using volumes

The created postgres container will be destroyed after it was disconnected from the interactive shell.

Lets create a persist volume to store our data created inside the container. 

##### Create volume 

Lets create a new volume by using [Volume commands](https://docs.docker.com/engine/storage/volumes/)

```bash
docker volume create web-server-db-volume
```

Lets run a persist volume container with postgres and mount the volume.

```bash
docker run -d --name web-test-db -v web-server-db-volume:/var/lib/postgresql/data -e POSTGRES_PASSWORD=test -p 5433:5432 postgres:17-alpine 
```

Now we successfully created a persistable volume and container to store all of the database data in the server. So that the data will not be lost when the docker container is destroyed.

#### Creating Database and tables

```sql
create database test owner dev tablespace pg_default;
```

```sql
CREATE TABLE if not exists users(
	id serial PRIMARY KEY,
	name varchar(200),
	createdDate timestamptz
)

insert into users(name,createddate) values('John Doe','2024-12-22 09:42');
insert into users(name,createddate) values('Jane doe','2024-12-22 09:42');
insert into users(name,createddate) values('Robert','2024-12-22 09:42');
insert into users(name,createddate) values('super user','2024-12-22 09:42');

select * from users u 

delete from users where id=5
```

