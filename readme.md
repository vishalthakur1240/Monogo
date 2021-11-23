(connn.js)
    npm init -y
    npm i mongoose
    npm i express
    require mongoose
    connect mongoose
    export conn

(schema.js)
    require mongoose
    make schema
    convert schema to model
    export model

(index.js)
    require express
    import connectDB from conn.js
    import model from schema.js

    use CURD operation here