import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
export default () => ({
  appSecret: config.get('JWT_SECRET'),
});
