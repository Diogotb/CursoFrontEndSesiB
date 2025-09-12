
//definir primeiro a infraestrutura do obj

import mongoose, { Document, Model, Schema } from "mongoose";

export interface Itarefa extends Document{
    //herdamos a base Document do Mongoose
    //Vamos criar os atributos do OBJ
    titulo:string;
    concluida:boolean;
    criadaEm:Date;
}

//vamos criar a Regra do Schema

const TarefaSchema: Schema<Itarefa> = new mongoose.Schema({
    titulo:{
        type:String,
        required:[true, "O Título é Obrigatorio"],
        trim: true,
        maxlength: [50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now //pega o carimbo de data e hora
    }

});

const Tarefa: Model<Itarefa> = mongoose.models.Tarefa || mongoose.model<Itarefa>("Tarefa",TarefaSchema);

//componente reutilizavel
export default Tarefa;