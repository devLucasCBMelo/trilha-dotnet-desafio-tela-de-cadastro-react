import { useEffect, useMemo, useState } from "react";

const Teste = () => {

  const [userName, setUserName] = useState('Lucas');

  const handleChangeName = () => {
    setUserName(prev => prev === 'Lucas' ? 'Nayanne' : 'Lucas')
  }


  useEffect(() => {
    handleChangeName();
  }, []);

  return (
    <div>
      <p>
        {userName}
      </p>
      <button onClick={handleChangeName}>Alterar</button>
    </div>
  )
}

export default Teste;