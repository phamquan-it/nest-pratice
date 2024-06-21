import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;
  @IsInt()
  @Min(1)
  @Max(20)
  age: number;
  @IsString()
  breed: string;
}
