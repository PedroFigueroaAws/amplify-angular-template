import { RiskRepository } from "../repositories/RiskRepository";
import { Risk } from "../entities/Risk";

export class RiskService {
  constructor(private readonly riskRepository: RiskRepository) {}

  public async createRisk(risk: Risk): Promise<void> {
    await this.riskRepository.save(risk);
  }

  public async getRiskById(id: string): Promise<Risk | null> {
    return await this.riskRepository.findById(id);
  }
}
