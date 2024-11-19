import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./Api";

interface UserContextProps {
  data: any;
  login: boolean;
  loading: boolean;
  error: string | null;
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
}

interface UserStorageProps {
  children: ReactNode;
}

const defaultUserContext: UserContextProps = {
  data: null,
  login: false,
  loading: false,
  error: null,
  userLogin: async () => { },
  userLogout: async () => { },
};

export const UserContext = React.createContext<UserContextProps>(defaultUserContext);

export const UserStorage = ({ children }: UserStorageProps) => {
  const [data, setData] = useState<any>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLoading(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err: any) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider value={{ data, login, loading, error, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
