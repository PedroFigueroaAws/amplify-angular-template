export class RiskId {
    private constructor(private readonly id: string) {}
  
    public static create(id: string): RiskId {
      if (!id) throw new Error("Risk ID cannot be empty");
      return new RiskId(id);
    }
  
    public getValue(): string {
      return this.id;
    }
  }
  