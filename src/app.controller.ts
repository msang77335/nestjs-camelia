import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get('')
  async helloWord() {
    return 'Hello Word!';
  }
}
