import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("users") //Nome da tabela
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }
}

export { User };