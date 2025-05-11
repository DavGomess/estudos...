'use client';

interface ErroProps {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: ErroProps) {
  return (
    <main>
      <h2>Ocorreu um Erro!</h2>
      <p>{error.message}</p>
      <button 
      type="button"
      onClick={() => reset()}
      >
        Tentar novamente
    </button>
    </main>
  );
}
