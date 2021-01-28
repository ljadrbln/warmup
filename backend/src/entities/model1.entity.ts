import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Table1 {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    public fname!: string;

    @Column()
    public lname!: string;
}