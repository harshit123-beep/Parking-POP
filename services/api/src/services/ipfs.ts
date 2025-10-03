// Minimal IPFS service stub; replace with real client later
export type IpfsAddResult = { cid: string; size: number };

export async function addBufferToIpfs(_buffer: Buffer, _filename?: string): Promise<IpfsAddResult> {
  const fakeCid = `bafy${Math.random().toString(36).slice(2, 10)}`;
  return { cid: fakeCid, size: _buffer.length };
}
