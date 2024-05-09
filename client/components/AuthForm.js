import { useState } from "react";

export default function AuthForm({onSubmit, title, error, loading}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({email, password})
  }

  return <form onSubmit={handleSubmit} style={{padding: 10}}>
    <h4 style={{marginBottom: '2rem'}}>{title}</h4>
    <label htmlFor="email">Email</label>
    <input name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
    <label htmlFor="password">Password</label>
    <input type="password" name="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
    {error && <p>{error}</p>}
    <button disabled={loading} type='submit' className="btn">{loading ? 'Submitting...' : 'Submit'}</button>
  </form>
};
