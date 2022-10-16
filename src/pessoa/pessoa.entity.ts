import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    idPessoa: number;

    @Column()
    PessoaNome: string;

    @Column()
    CodEndereco: number;

    @Column()
    CodContato: number;
}