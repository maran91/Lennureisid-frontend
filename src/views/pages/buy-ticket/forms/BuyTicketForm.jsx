import { useState } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

export const BuyTicketForm = ({ handleCustomerDataSubmit }) => {
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const customerData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    if (handleCustomerDataSubmit) {
      handleCustomerDataSubmit(customerData);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputText
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <Message severity="error" text={errors.firstName} />}
      </div>
      <div>
        <InputText
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <Message severity="error" text={errors.lastName} />}
      </div>
      <div>
        <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <Message severity="error" text={errors.email} />}
      </div>
      <Button label="Submit Preferences" onClick={handleSubmit} />
    </form>
  );
};
