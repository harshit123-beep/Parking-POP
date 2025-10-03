import React, { useEffect, useMemo, useState } from 'react';
import { HerbChainClient } from '@herbchain/sdk';
import { OfflineSyncManager } from '@herbchain/sdk';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export function App() {
  const client = useMemo(() => new HerbChainClient(API_BASE), []);
  const sync = useMemo(() => new OfflineSyncManager(client), [client]);
  const [loginId, setLoginId] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  const [name, setName] = useState('Tulsi');
  const [weightKg, setWeightKg] = useState(10);
  const [harvestDate, setHarvestDate] = useState<string>(() => new Date().toISOString().slice(0,10));
  const [location, setLocation] = useState<{lat:number;lng:number}|null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      sync.trySync().catch(() => void 0);
    }, 5000);
    return () => clearInterval(id);
  }, [sync]);

  async function onRequestOtp() {
    setStatus('Requesting OTP...');
    const res = await client.requestOtp(loginId);
    setStatus(res.dev && res.otp ? `OTP (dev): ${res.otp}` : 'OTP sent');
  }

  async function onVerifyOtp() {
    setStatus('Verifying...');
    const res = await client.verifyOtp(loginId, otp);
    setToken(res.token);
    setStatus('Logged in');
  }

  async function onCreateBatchOnline() {
    if (!location) { setStatus('No location yet'); return; }
    try {
      setStatus('Creating batch...');
      const res = await client.createBatch({ name, weightKg, harvestDate, location });
      setStatus(`Created batch ${res.batch.id}`);
    } catch (err) {
      setStatus('Failed online, queued offline');
      await sync.enqueueCreateBatch({ name, weightKg, harvestDate, location });
    }
  }

  async function onCreateBatchOffline() {
    if (!location) { setStatus('No location yet'); return; }
    await sync.enqueueCreateBatch({ name, weightKg, harvestDate, location });
    setStatus('Queued offline');
  }

  return (
    <div style={{ padding: 16, maxWidth: 560, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>HerbChain - Farmer</h2>
      <p>{status}</p>

      {!token && (
        <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
          <h3>Login (Phone/Email + OTP)</h3>
          <input placeholder="Phone or email" value={loginId} onChange={(e) => setLoginId(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={onRequestOtp}>Request OTP</button>
            <input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={onVerifyOtp}>Verify</button>
          </div>
        </div>
      )}

      {token && (
        <div style={{ marginTop: 16, border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
          <h3>Add Herb Batch</h3>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />

          <label>Weight (kg)</label>
          <input type="number" value={weightKg} onChange={(e) => setWeightKg(parseFloat(e.target.value))} style={{ width: '100%', padding: 8, marginBottom: 8 }} />

          <label>Harvest Date</label>
          <input type="date" value={harvestDate} onChange={(e) => setHarvestDate(e.target.value)} style={{ width: '100%', padding: 8, marginBottom: 8 }} />

          <div style={{ marginTop: 8 }}>
            <strong>Location:</strong> {location ? `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}` : 'Locating...'}
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={onCreateBatchOnline}>Create (Online)</button>
            <button onClick={onCreateBatchOffline}>Queue (Offline)</button>
          </div>
        </div>
      )}
    </div>
  );
}
