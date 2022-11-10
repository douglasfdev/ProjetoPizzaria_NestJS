import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Header } from 'src/types/Header';

@Injectable()
export class HeadersConfig {
  constructor(public configService: ConfigService) {}
  getHeaders(): Header {
    return {
      APIPP_CUSTOMER: this.configService.get('APIPP_CUSTOMER'),
      APIPP_PRIVATE: this.configService.get('APIPP_PRIVATE'),
      APIPP_HASH: this.configService.get('APIPP_HASH'),
    };
  }
}
