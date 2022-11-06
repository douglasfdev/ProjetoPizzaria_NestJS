import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

class Origem {
  lat: number;
  lon: number;
  rua: string;
  numero: string;
  complemento?: string;
  observacoes: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class Destino {
  lat: number;
  lon: number;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class Opcionais {
  ar: boolean;
  portamalas: boolean;
  animal: boolean;
  cadeirante: boolean;
  premier: boolean;
  categoria: number;
}

class Passageiro {
  nome: string;
  telefone: string;
}

@Entity()
export class Chamada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json', { nullable: true })
  origem: Origem;

  @Column('json', { nullable: true })
  destino: Destino;

  @Column('json', { nullable: true })
  opcionais: Opcionais;

  @Column('json', { nullable: true })
  passageiro: Passageiro;
}
