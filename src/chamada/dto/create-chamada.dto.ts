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
