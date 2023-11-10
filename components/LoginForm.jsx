
export default function Login({ setToken }) {

  const handleLogin = e => {
    e.preventdefault()
  }
  const { email, password } = e.target

  fetch("https://auth-api-jhs.web.app/users/login"), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  }
    .then(res => res.json())
    .then(data => setToken(data))
    .catch(alert)


  return (
    <section>
      <form action="submit" onSubmit={handleLogin}>
        <h2>Login to enter your recipe</h2>
        <label htmlFor="">
          <input type="email" />
          Email:
        </label>
        <label htmlFor="">
          Password:
          <input type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </section>
  )
}
