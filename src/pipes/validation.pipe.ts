import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata);
    // Implement your validation logic here
    if (!value) {
      throw new BadRequestException('Validation failed: No value provided');
    }
    return value;
  }
}
