export enum RiskStatusEnum {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
  }
  
  export class RiskStatus {
    private constructor(private readonly status: RiskStatusEnum) {}
  
    public static create(status: RiskStatusEnum): RiskStatus {
      if (!Object.values(RiskStatusEnum).includes(status)) {
        throw new Error("Invalid risk status");
      }
      return new RiskStatus(status);
    }
  
    public getValue(): RiskStatusEnum {
      return this.status;
    }
  }
  