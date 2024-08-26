import { dataSource } from "./config/db";
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { CountriesResolver } from "./resolvers/countriesResolver";

const start = async () => {
    console.log("hot reload is working ?");
    await dataSource.initialize();
    const schema = await buildSchema({
        resolvers: [CountriesResolver],
    });

    const server = new ApolloServer({
        schema,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 5000 },
    });
    
    console.log(`🚀 Server ready at ${url}`);
}

start();
