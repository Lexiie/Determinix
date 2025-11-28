# Determinix

An interactive web application for learning and simulating Deterministic Finite Automaton (DFA) concepts, now featuring **Raiku Execution Mode** for visualizing deterministic Solana transaction execution.

## About

Determinix is an educational tool designed to help students and developers understand DFA theory through interactive visualization and simulation. The application provides a hands-on approach to learning automata theory with real-time state machine visualization.

## Raiku Deterministic Execution Challenge Submission

This project has been extended to demonstrate **Raiku's deterministic execution model** using DFA (Deterministic Finite Automaton) theory. The Raiku Execution Mode visualizes how Solana transactions can be executed deterministically through:

- **AOT (Ahead-of-Time) Slot Reservations** - Guaranteed execution timing
- **JIT (Just-in-Time) Slot Reservations** - Flexible execution timing
- **Ackermann Retry Logic** - Automatic retry mechanism for failed transactions
- **Deterministic Ordering** - Elimination of MEV through guaranteed transaction ordering
- **State Machine Visualization** - Clear visual representation of transaction lifecycle

### Why DFA for Raiku?

Deterministic Finite Automata are perfect for modeling Raiku's execution flow because:

1. **Deterministic by nature** - Each state has exactly one transition per input, matching Raiku's deterministic guarantees
2. **Clear state representation** - Transaction lifecycle (Idle → Reserved → Executing → Confirmed) maps naturally to DFA states
3. **Visual clarity** - State machines provide intuitive visualization of execution paths
4. **Formal verification** - DFA theory enables formal reasoning about execution guarantees

### Raiku Scenarios

The simulator includes real-world scenarios:

1. **Perp DEX Order Execution** - Guaranteed ordering with no MEV
2. **NFT Mint Fairness** - Fair first-come-first-served minting
3. **NFT Mint with Retry** - Demonstrating Ackermann retry logic
4. **Cross-chain Settlement** - JIT reservations for timing coordination
5. **Full Retry Flow** - Complete demonstration of failure recovery

## Tech Stack

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management

## Features

- **Interactive DFA Simulator** - Create and test DFA state machines in real-time
- **Raiku Execution Mode** - Visualize deterministic Solana transaction execution
- **Scenario Library** - Pre-built scenarios demonstrating Raiku primitives
- **Learning Materials** - Comprehensive tutorials and explanations about DFA concepts
- **Visual State Machine** - Dynamic visualization of automaton states and transitions
- **Input Testing** - Test strings against your DFA to see acceptance/rejection paths

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

Access Raiku Execution Mode at [http://localhost:3000/raiku](http://localhost:3000/raiku)

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app          - Next.js app router pages
  /raiku      - Raiku Execution Mode page
  /simulator  - Classic DFA simulator
/components   - React components
  /simulator  - DFA visualizer, scenario selector, info panels
/store        - Zustand state management
  raikuPreset.ts  - Raiku DFA definition
  scenarios.ts    - Raiku execution scenarios
/lib          - Utility functions and simulation logic
```

## Raiku Mode Usage

1. Navigate to the Raiku Execution Mode
2. Select a scenario from the sidebar
3. Click "Auto Run" to see the full execution flow
4. Or use "Step" to advance through each state transition
5. Observe how different states (AOT, JIT, Retry) affect execution

## Links

- [Raiku Challenge Details](https://twitter.com/superteambr) (Add actual link)
- [Demo Video](https://youtube.com) (Add when available)
