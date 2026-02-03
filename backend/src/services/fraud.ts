export interface FraudSignal {
  velocityScore: number;
  deviceMismatch: boolean;
  flagged: boolean;
}

export function evaluateFraudRisk(amount: number): FraudSignal {
  const velocityScore = amount > 500 ? 0.9 : 0.2;
  const deviceMismatch = false;
  return {
    velocityScore,
    deviceMismatch,
    flagged: velocityScore > 0.8 || deviceMismatch
  };
}
