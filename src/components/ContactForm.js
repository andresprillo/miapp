import {React } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqknpqka");
  if (state.succeeded) {
      return <p>Gracias por su mensaje!</p>;
  }
  return (
      <form method="POST" action="https://formspree.io/f/mqknpqka" onSubmit={handleSubmit}>
      <label htmlFor="email">
       Correo Electrónico
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
