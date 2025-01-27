import { Risk } from "../entities/Risk";
import { RiskId } from "../value-objects/RiskId";
import { RiskDescription } from "../value-objects/RiskDescription";
import { RiskStatus } from "../value-objects/RiskStatus";

export class RiskAggregate {
  private risks: Risk[] = [];

  public addRisk(id: string, description: string, status: string): void {
    const risk = new Risk(
      RiskId.create(id),
      RiskDescription.create(description),
      RiskStatus.create(status as any)
    );
    this.risks.push(risk);
  }

  public getRisks(): Risk[] {
    return this.risks;
  }
}
