const MAX_BYTES = 65536;
const MAX_UINT32 = 4294967295;

const crypto = global.crypto || global.msCrypto;

export function randombytes(size) {
  if (size == 0) return;
  if (size > MAX_UINT32) throw new RangeError('Too many bytes requested');

  const bytes = new ArrayBuffer(size);
  const view = new Int32Array(bytes);

  if (size < MAX_BYTES) {
    crypto.getRandomValues(view);
  } else {
    for (let generated = 0; generated < size; generated += MAX_BYTES) {
      crypto.getRandomValues(view.slice(generated, generated + MAX_BYTES));
    }
  }

  return bytes;
} 
