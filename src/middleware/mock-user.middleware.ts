// src/middleware/mock-user.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MockUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.user = {
      id: 1,
      username: 'testuser',
      roles: ['admin'], // Mock user roles
    };
    next();
  }
}
