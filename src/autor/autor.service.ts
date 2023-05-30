import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { AutorEntity } from "./autor.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AutorService{

    constructor(
        @InjectRepository(AutorEntity)
        private autorRepository: Repository<AutorEntity>
    ){}

    findAll(): Promise<AutorEntity[]>{
        return this.autorRepository.find();
    }

    async findById(id: string): Promise<AutorEntity> {
        const findOne = await this.autorRepository.findOne({where :{ id } });
        if (findOne == null){
            throw new NotFoundException(`Autor não encontrado para o id: ${id}`);
        }
        return findOne;
    }

    async remove(id:string){
        const findById = await this.findById(id);
        await this.autorRepository.remove(findById);
        return { id, ...findById};
    }
}