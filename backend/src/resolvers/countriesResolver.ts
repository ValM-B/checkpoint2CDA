import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Countries } from "../entities/countries";

@InputType()
class CountriesInput {
    @Field()
    name: string;

    @Field()
    code: string;

    @Field()
    emoji: string;

    @Field()
    continent: string;
}

@Resolver()
export class CountriesResolver {
    @Query(() => [Countries])
    async getAllCountries() {
        return await Countries.find();
    }

    @Query(() => Countries)
    async getCountryByCode(
        @Arg("code") code: string
    ) {
        return await Countries.findOne({ where: { code } });
    }

    @Query(() => [Countries])
    async getCountriesByContinent(
        @Arg("continent") continent: string
    ) {
        return await Countries.find({ where: { continent } });
    }

    @Mutation(() => Countries)
    async createCountry(
        @Arg("input") newCountryData: CountriesInput
    ) {
        const country = Countries.create({...newCountryData});
        await country.save();
        return country;
    }    
}