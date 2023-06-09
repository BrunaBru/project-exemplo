import { Column,Entity, PrimaryGeneratedColumn } from "typeorm"
import { GeneroEnum } from "./genero.enum";

@Entity({ name: 'autores' })
export class AutorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string

    @Column({ type: 'date', name: 'data_nascimento', nullable : true})
    dataNascimento: Date;

    @Column({
        type: 'enum',
        enum: GeneroEnum,
        default: GeneroEnum.INDEFINIDO,
        nullable:  true,
    })
    genero: GeneroEnum;
}