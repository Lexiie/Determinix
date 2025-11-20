export type TxType = 'swap' | 'nft_mint' | 'liquidation' | 'game_move';
export type Priority = 'low' | 'medium' | 'high';
export type Mode = 'normal' | 'deterministic';

export interface TxInput {
  id: string;
  type: TxType;
  priority: Priority;
  targetSlot?: number;
}

export interface TxResult extends TxInput {
  assignedSlot: number;
  finalSlot: number;
  status: 'success' | 'pending' | 'fail';
  delay: number;
  reordered: boolean;
}

const SLOT_COUNT = 12;

export function simulate(mode: Mode, txs: TxInput[]): TxResult[] {
  return mode === 'normal' ? simulateNormal(txs) : simulateDeterministic(txs);
}

function simulateNormal(txs: TxInput[]): TxResult[] {
  const results: TxResult[] = [];
  const slotMap = new Map<number, number>();

  for (const tx of txs) {
    const assignedSlot = Math.floor(Math.random() * SLOT_COUNT) + 1;
    const delay = Math.floor(Math.random() * 4);
    const finalSlot = Math.min(assignedSlot + delay, SLOT_COUNT);
    const failureChance = tx.priority === 'high' ? 0.05 : tx.priority === 'medium' ? 0.2 : 0.4;
    const status = Math.random() > failureChance ? 'success' : 'fail';
    const count = slotMap.get(assignedSlot) || 0;
    slotMap.set(assignedSlot, count + 1);

    results.push({ ...tx, assignedSlot, finalSlot, status, delay, reordered: count > 0 });
  }
  return results;
}

function simulateDeterministic(txs: TxInput[]): TxResult[] {
  return txs.map(tx => {
    let assignedSlot = tx.targetSlot || (
      tx.priority === 'high' ? Math.floor(Math.random() * 3) + 3 :
      tx.priority === 'medium' ? Math.floor(Math.random() * 3) + 6 :
      Math.floor(Math.random() * 4) + 9
    );
    return { ...tx, assignedSlot, finalSlot: assignedSlot, status: 'success' as const, delay: 0, reordered: false };
  });
}
