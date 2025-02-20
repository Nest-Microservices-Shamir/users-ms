import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Is } from "sequelize-typescript";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()   
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

}
