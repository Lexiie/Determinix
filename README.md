# Determinix

An interactive web application for learning and simulating Deterministic Finite Automaton (DFA) concepts.

## About

Determinix is an educational tool designed to help students and developers understand DFA theory through interactive visualization and simulation. The application provides a hands-on approach to learning automata theory with real-time state machine visualization.

## Tech Stack

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management

## Features

- **Interactive DFA Simulator** - Create and test DFA state machines in real-time
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

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
/app          - Next.js app router pages
/components   - React components
/store        - Zustand state management
/lib          - Utility functions and simulation logic
```
