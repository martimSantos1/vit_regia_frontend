import { useState } from 'react';

function Login() {
    const [response, setResponse] = useState<{ message?: string; error?: string } | null>(null);
  
  
    /*const handleSignup = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: 'Alfredo',
            email: 'alfredo.silva@example.com',
            password: 'SenhaSegura123'
          }),
        });
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        setResponse({ error: 'Erro ao comunicar com o servidor' });
      }
    };*/
  
    return (
      <>
        <h1>Login</h1>
          <div>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        {response && (
          <div className="response">
            <h3>Resposta do Servidor:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </>
    );
  }
  
  export default Login;
