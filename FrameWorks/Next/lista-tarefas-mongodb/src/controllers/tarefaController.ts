

// Funções do Controller

import Tarefa, { Itarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";

//get
export const getAllTarefas = async(): Promise<Itarefa[]> => {
    await connectMongo();
    const tarefas = await Tarefa.find({});
    return tarefas;
}

//post
export const createTarefa = async(data:Partial<Itarefa>):Promise<Itarefa> =>{
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa;
}

//patch
export const updateTArefa = async(id:string, data:Partial<Itarefa>):Promise<Itarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true
    });
    return tarefa;
}

//delete
export const deleteTarefa = async(id:string):Promise<boolean> => {
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;
}