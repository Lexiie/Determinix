export interface RaikuScenario {
  id: string;
  name: string;
  description: string;
  sequence: string[];
  explanation: string;
}

export const raikuScenarios: RaikuScenario[] = [
  {
    id: "perp-dex",
    name: "Perp DEX: Deterministic Order Execution",
    description: "Guaranteed order execution with no MEV",
    sequence: ["reserve_aot", "execute", "confirm"],
    explanation: "AOT reservation ensures deterministic execution order, eliminating MEV opportunities and providing fair execution for perpetual DEX trades."
  },
  {
    id: "nft-mint-success",
    name: "NFT Mint (AOT Slot Fairness)",
    description: "Fair NFT minting with guaranteed slot",
    sequence: ["reserve_aot", "execute", "confirm"],
    explanation: "AOT slot reservation guarantees fair ordering for NFT mints, preventing front-running and ensuring first-come-first-served fairness."
  },
  {
    id: "nft-mint-retry",
    name: "NFT Mint with Retry",
    description: "NFT mint with Ackermann retry on failure",
    sequence: ["reserve_aot", "execute", "fail", "retry", "execute", "confirm"],
    explanation: "When execution fails, Ackermann node retry logic automatically retries the transaction, ensuring eventual consistency and success."
  },
  {
    id: "cross-chain",
    name: "Cross-chain Timed Settlement",
    description: "JIT reservation for flexible timing",
    sequence: ["reserve_jit", "execute", "confirm"],
    explanation: "JIT reservation allows flexible execution timing for cross-chain settlements where exact timing coordination is needed."
  },
  {
    id: "ackermann-retry",
    name: "Ackermann Node Retry Logic",
    description: "Demonstrating retry mechanism",
    sequence: ["reserve_jit", "execute", "fail", "retry", "execute", "confirm"],
    explanation: "Full demonstration of Ackermann retry logic: JIT reservation, initial failure, automatic retry, and eventual confirmation."
  }
];
