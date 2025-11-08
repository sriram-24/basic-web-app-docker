## Web-app-basic

This repo is a learning repo for docker and kubernetes. It contains my learning experience of building an application and deployment.

### Installing

For installation you need [docker](https://www.docker.com/products/docker-desktop/). 

For database setup follow database.md file for manual creation or it will restore backup from sampledb provided. 

After setting up database you can directly run the below command. 
```bash
docker compose up
```

### Setup

The application contains 3 components 
- Database (postgres)
- Server (express)
- Client (nextjs)

### View Application 

- Access the Db server on port 5432
- Access the Application server on `http://localhost:8080`
- Access the Client app on `http://localhost:3000`

### Issues

Any issues related to installation or documentation raise a [bug](https://github.com/sriram-24/basic-web-app-docker/issues)

### Contributing

Fork the repo and create a pull request. Contributions and suggestions are welcomed :heart:
