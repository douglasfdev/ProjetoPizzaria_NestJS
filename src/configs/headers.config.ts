import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HeadersConfig {
  constructor(public configService: ConfigService) {}
  getHeaders(): {
    APIPP_CUSTOMER: string;
    APIPP_PRIVATE: string;
    APIPP_HASH: string;
  } {
    return {
      APIPP_CUSTOMER: this.configService.get('APIPP_CUSTOMER'),
      APIPP_PRIVATE: this.configService.get('APIPP_PRIVATE'),
      APIPP_HASH: this.configService.get('APIPP_HASH'),
    };
  }
}
