# Determinix

A **Raiku Deterministic Execution Simulator & Educational Explorer** - an interactive tool for understanding and visualizing how deterministic transaction execution works on Solana through Raiku.

## About

Determinix is an educational simulator that demonstrates Raiku's deterministic execution model through interactive visualization. The application provides hands-on learning about slot reservations, execution guarantees, and retry mechanisms without requiring deep technical knowledge.

## Raiku Deterministic Execution Challenge Submission

This project demonstrates **Raiku's deterministic execution model** through visual simulation and educational content. The simulator shows how Solana transactions can be executed deterministically through:

- **AOT (Ahead-of-Time) Slot Reservations** - Guaranteed execution timing and ordering
- **JIT (Just-in-Time) Slot Reservations** - Flexible execution timing for latency-sensitive operations
- **Ackermann Retry Logic** - Automatic retry mechanism without user resubmission
- **Deterministic Ordering** - Elimination of MEV through guaranteed transaction ordering
- **Slot Timeline Visualization** - Real-time visual representation of slot reservations and execution

## Why This Matters

Deterministic execution transforms how applications are built on Solana:

- **No MEV** - Guaranteed ordering eliminates front-running opportunities
- **Fair Systems** - First-come-first-served that actually works
- **Predictable Outcomes** - Developers can reason about execution order
- **Better UX** - Automatic retries reduce user friction
- **New Patterns** - Enables sophisticated on-chain systems previously impossible

## Features

### Dual Purpose: Simulation + Education

**Simulation**
- Interactive slot timeline showing transaction lifecycle
- State machine visualization with real-time updates
- Step-by-step execution playback
- Event log tracking all execution events
- Multiple real-world scenarios

**Education**
- Concept explanations for each execution model
- Use case descriptions for AOT vs JIT
- Developer guidance on when to use each approach
- Visual learning without heavy theory

### Scenario Library

1. **AOT Reserved Execution** - Guaranteed slot for orderbook DEX and settlements
2. **JIT Execution Window** - Flexible timing for latency-sensitive operations
3. **Failure & Ackermann Retry** - Automatic retry without user intervention
4. **Fair NFT Mint** - Deterministic ordering eliminates gas wars
5. **Cross-chain Atomic Settlement** - Precise timing coordination

## Tech Stack

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Access Raiku Simulator at [http://localhost:3000/raiku](http://localhost:3000/raiku)

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /raiku              - Raiku simulator page
  /simulator          - Classic DFA simulator
/components
  /simulator
    SlotTimeline.tsx       - Slot visualization
    DFAVisualizer.tsx      - State machine display
    EducationPanel.tsx     - Educational content
    EventLog.tsx           - Execution event tracking
    ScenarioSelector.tsx   - Scenario library
/store
  raikuPreset.ts      - Raiku DFA definition
  scenarios.ts        - Execution scenarios
```

## How to Use

1. Navigate to [http://localhost:3000/raiku](http://localhost:3000/raiku)
2. Select a scenario from the sidebar
3. Read the educational panel to understand the concept
4. Click "Auto Run" to see the full execution flow
5. Or use "Step" to advance through each state transition
6. Watch the slot timeline and event log for real-time updates

## Educational Content

The simulator teaches:
- **What is deterministic execution** and why Solana needs it
- **How AOT reservations work** and when to use them
- **How JIT reservations work** and their use cases
- **How Ackermann retry logic** provides automatic recovery
- **How developers can leverage** these primitives in their applications

## Links

- [Raiku Documentation](https://raiku.network)
- [Superteam Brasil Challenge](https://twitter.com/superteambr)

---

Built for the Raiku Deterministic Execution Challenge 🚀
