export interface RaikuDFA {
  states: string[];
  alphabet: string[];
  startState: string;
  acceptStates: string[];
  transitions: Record<string, Record<string, string>>;
}

export const raikuDFA: RaikuDFA = {
  states: [
    "Idle",
    "SlotReserved_AOT",
    "SlotReserved_JIT",
    "Executing",
    "AckermannRetry",
    "Confirmed",
    "Failed"
  ],
  alphabet: [
    "reserve_aot",
    "reserve_jit",
    "execute",
    "retry",
    "confirm",
    "fail"
  ],
  startState: "Idle",
  acceptStates: ["Confirmed"],
  transitions: {
    Idle: {
      reserve_aot: "SlotReserved_AOT",
      reserve_jit: "SlotReserved_JIT"
    },
    SlotReserved_AOT: {
      execute: "Executing"
    },
    SlotReserved_JIT: {
      execute: "Executing"
    },
    Executing: {
      confirm: "Confirmed",
      fail: "Failed"
    },
    Failed: {
      retry: "AckermannRetry"
    },
    AckermannRetry: {
      execute: "Executing"
    }
  }
};

export const stateColors: Record<string, string> = {
  Idle: "bg-slate-700",
  SlotReserved_AOT: "bg-blue-500",
  SlotReserved_JIT: "bg-yellow-500",
  Executing: "bg-green-500",
  AckermannRetry: "bg-red-400",
  Confirmed: "bg-green-600",
  Failed: "bg-red-600"
};

export const stateDescriptions: Record<string, string> = {
  Idle: "Initial state - waiting for transaction",
  SlotReserved_AOT: "Transaction execution time guaranteed by Raiku via Ahead-of-Time slot reservation",
  SlotReserved_JIT: "Just-in-Time slot reservation for flexible execution timing",
  Executing: "Transaction is being executed on-chain",
  AckermannRetry: "Retry mechanism activated via Ackermann node for failed transactions",
  Confirmed: "Transaction successfully confirmed on-chain",
  Failed: "Transaction execution failed"
};
