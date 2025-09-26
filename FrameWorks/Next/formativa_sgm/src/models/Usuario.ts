//Modelo de Criação de Usuário com Bcrypt

import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document{
    _id:string; //vou precisar do _id no view // evita erro no código
    username: string;
    password?:string; // que pode ser nulo ( nao vou retonar a senha)
    tipo: string;
    comparePassword(userPassword:string): Promise<boolean>;
}

//criaração do SCHEMa do MongoDB (construtor)

const UsuarioSchema: Schema<IUsuario> = new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true, select:false},
    tipo:{type: String, enum:["tecnico","gerente","admin"],required:true}
    //select impede que a senha retorne por padrão
});

//Middleware para hashear a senha
//serve para criptografar a senha quando for armazenar u usuário no BD
UsuarioSchema.pre<IUsuario>('save', async function (next){
    if(!this.isModified('password') || !this.password) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error:any) {
        next(error);
    }
})

//método para comparar senha
//quando o usuário for fazer o login (compara a senha digitada e criptografasda com a senha criptografada do banco)
UsuarioSchema.methods.comparePassword = function (userPassword:string):Promise<boolean>{
    return bcrypt.compare(userPassword, this.password);
}

//to e from
const Usuario: Model<IUsuario> = mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;

