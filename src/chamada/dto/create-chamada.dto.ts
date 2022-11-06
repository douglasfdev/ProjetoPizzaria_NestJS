class Origem {
  readonly lat: number;
  readonly lon: number;
  readonly rua: string;
  readonly numero: string;
  readonly complemento?: string;
  readonly observacoes: string;
  readonly bairro: string;
  readonly cidade: string;
  readonly estado: string;
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

export class CreateChamadaDto {
  origem: Origem;
  destino: Destino;
  opcionais: Opcionais;
  passageiro: Passageiro;
  justificativa?: string;
  referenciaId: string;
  atendimentoId: string;
  empresaAtendimento: string;
}
