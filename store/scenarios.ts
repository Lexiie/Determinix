export interface RaikuScenario {
  id: string;
  name: string;
  description: string;
  sequence: string[];
  explanation: string;
  educationTopic: 'overview' | 'aot' | 'jit' | 'retry' | 'developers';
  slotReservation?: number;
}

export const raikuScenarios: RaikuScenario[] = [
  {
    id: "aot-execution",
    name: "AOT Reserved Execution",
    description: "Guaranteed slot reservation for deterministic ordering",
    sequence: ["reserve_aot", "execute", "confirm"],
    explanation: "AOT = reservasi slot sebelum eksekusi, cocok untuk orderbook DEX, settlement, NFT mint batch. Slot dijamin, tidak ada gas war.",
    educationTopic: "aot",
    slotReservation: 5
  },
  {
    id: "jit-execution",
    name: "JIT Execution Window",
    description: "Flexible timing for latency-sensitive operations",
    sequence: ["reserve_jit", "execute", "confirm"],
    explanation: "JIT = reservasi slot tepat sebelum eksekusi, cocok untuk transaksi latency-sensitive dan cross-chain atomic settlement.",
    educationTopic: "jit",
    slotReservation: 8
  },
  {
    id: "ackermann-retry",
    name: "Failure & Ackermann Retry",
    description: "Automatic retry without user resubmission",
    sequence: ["reserve_jit", "execute", "fail", "retry", "execute", "confirm"],
    explanation: "Retry otomatis oleh Ackermann Node. Tidak butuh resubmit dari user → lebih stabil, bebas spam.",
    educationTopic: "retry",
    slotReservation: 6
  },
  {
    id: "nft-mint-fair",
    name: "Fair NFT Mint",
    description: "Deterministic ordering eliminates gas wars",
    sequence: ["reserve_aot", "execute", "confirm"],
    explanation: "Semua user reservasi slot window, deterministic ordering, tidak ada gas war. First-come-first-served yang benar-benar fair.",
    educationTopic: "aot",
    slotReservation: 3
  },
  {
    id: "cross-chain-settlement",
    name: "Cross-chain Atomic Settlement",
    description: "Precise timing coordination across chains",
    sequence: ["reserve_jit", "execute", "confirm"],
    explanation: "JIT memungkinkan koordinasi timing yang presisi untuk settlement atomic cross-chain.",
    educationTopic: "jit",
    slotReservation: 10
  }
];
