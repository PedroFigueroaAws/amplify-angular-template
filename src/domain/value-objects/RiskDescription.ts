export class RiskDescription {
    private constructor(private readonly description: string) {}
  
    public static create(description: string): RiskDescription {
      if (description.length < 10) {
        throw new Error("Description must be at least 10 characters");
      }
      return new RiskDescription(description);
    }
  
    public getValue(): string {
      return this.description;
    }
  }
  