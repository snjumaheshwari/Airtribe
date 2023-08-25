### Lecture: 1 - Data Modeling -> 3

->  Integrating DB and Code in the real world.
- What all should be measured for Database and Queries? 

 - For Database 
    - Latency 
    - Memory Usage
    - CPU Utilisiation (Load on the database)
    - Read and write 
    - databbase / table growth (Disk Utilisation)
    - Queries per second (performance)
    - Database connection count (Open connection)
    - Buffer Pool size for RAM (Temporary Storage Memory from disk) -- amount of data taking in ram to process the query. 
    - Replication Delay (Primary and Replica sync)
    - Errors and Exception 

 - For each query 
    - avg query katencgy
    - row returned per query 
    - Io heavy queries
    - long running queries
    - critical queries and most frequently used query 
    
- disk vs memory 
    - Disk Permanent storgage
    - Memory -> RAM 

- Figure out right way to implement this metrics as per use case.

ORM (Object relational mapping)



- Example of monitorings - Percona, cloudwatch
- Example of ORMs - Sequelize 


# Resource: https://sequelize.org/ 


find: findAll, findByPk, findOrCreate



- Associations 
    - HasOne, BelongsTo, HasMany, BelongsToMany 

- One to one 
- One to many 
- Many to many 


# Lecture 2: Data Modelling - 4 




# Additional Lecture: SQL Practice session with Dhaval Trivedi 

