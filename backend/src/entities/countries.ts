import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Countries extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;

    @Column()
    @Field()
    continent: string;
}