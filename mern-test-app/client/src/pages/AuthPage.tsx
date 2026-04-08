import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (mode === 'register' && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const url = mode === 'login' ? '/api/auth/login' : '/api/auth/register';

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });

    navigate(role === 'student' ? '/student' : '/teacher');
  }

  return (
    <section className="max-w-sm mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-slate-900">
        {mode === 'login' ? 'Login' : 'Register'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-slate-700">Role</label>
          <select
            className="w-full border rounded-md px-3 py-2 text-sm bg-white"
            value={role}
            onChange={(e) => setRole(e.target.value as 'student' | 'teacher')}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-700">Email</label>
          <input
            className="w-full border rounded-md px-3 py-2 text-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-700">Password</label>
          <input
            className="w-full border rounded-md px-3 py-2 text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === 'register' && (
          <div>
            <label className="block text-sm mb-1 text-slate-700">
              Confirm password
            </label>
            <input
              className="w-full border rounded-md px-3 py-2 text-sm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium"
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
      </form>

      <p className="mt-4 text-xs text-center text-slate-600">
        {mode === 'login' ? "Don't have an account? " : 'Already registered? '}
        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          className="text-indigo-600 underline"
        >
          {mode === 'login' ? 'Register' : 'Login'}
        </button>
      </p>
    </section>
  );
}