import { Origem, Destino, Opcionais, Passageiro } from '@dtos/prop.dtos';
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
