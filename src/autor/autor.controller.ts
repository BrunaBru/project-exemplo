import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AutorService } from "./autor.service";
import { AutorEntity } from "./autor.entity";
import { AutorDto } from "./autor.autorDto";

@Controller('autores')
export class AutorController{
    
    constructor(private autorService: AutorService){}

    @Get()
    findAll(): Promise<AutorEntity[]>{
        return this.autorService.findAll();
    }

    @Get(':id')
    findById(@Param('id')id: string) {
        return this.autorService.findById(id);
    }

    @Delete(':id')
    remove (@Param('id') id :string){
        return this.autorService.remove(id);
    }

    @Post()
    create(@Body() dto: AutorDto){
        return this.autorService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: AutorDto){
        return this.autorService.update({ ...dto, id});
    }
}