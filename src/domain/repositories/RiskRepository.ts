import { Risk } from "../entities/Risk";

export interface RiskRepository {
  save(risk: Risk): Promise<void>;
  findById(id: string): Promise<Risk | null>;
}
