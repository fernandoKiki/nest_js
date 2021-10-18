import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class task{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default: false})
    completed: boolean;
}