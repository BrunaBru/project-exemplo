import { IsOptional, IsString, IsUUID, IsNotEmpty, IsDateString, IsEnum } from "class-validator";
import { GeneroEnum } from "./genero.enum";

export class AutorDto{
    @IsUUID()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    nome:string;

    @IsDateString()
    @IsOptional()
    dataNascimenti?: Date;

    @IsEnum(GeneroEnum)
    @IsOptional()
    genero?: GeneroEnum;
}