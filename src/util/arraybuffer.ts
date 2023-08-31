function toString(buf: ArrayBuffer): string {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function toBuffer(str: string): ArrayBuffer {
  const buf = new ArrayBuffer(str.length * 2);
  const view = new Uint16Array(buf);
  for (let i = 0; i < str.length; ++i) {
    view[i] = str.charCodeAt(i);
  }
  return buf;
}

export { toString, toBuffer };
