import { Entity, Column, PrimaryGeneratedColumn , CreateDateColumn} from "typeorm";
@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    comment: string
    @CreateDateColumn()
    createdAt: Date
}