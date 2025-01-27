import { RiskId } from "../value-objects/RiskId";
import { RiskStatus, RiskStatusEnum } from "../value-objects/RiskStatus";
import { RiskDescription } from "../value-objects/RiskDescription";

export class Risk {
  constructor(
    private readonly id: RiskId,
    private description: RiskDescription,
    private status: RiskStatus
  ) {}

  public updateDescription(description: RiskDescription): void {
    this.description = description;
  }

  public close(): void {
    this.status = RiskStatus.create(RiskStatusEnum.CLOSED);
  }

  public getDetails() {
    return {
      id: this.id.getValue(),
      description: this.description.getValue(),
      status: this.status.getValue(),
    };
  }
}
