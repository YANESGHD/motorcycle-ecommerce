import { useState } from 'react';
import { useRouter } from 'next/router';
import { Motorcycle } from '@/interfaces';
import styled from '@emotion/styled';
import {
  Typography,
  Divider,
  Button,
  TextField,
  InputLabel,
  Grid,
  FormHelperText
} from '@mui/material';

interface ProductFormProps {
  product: Motorcycle;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastname, setLastname] = useState('');
  const [lastnameError, setLastnameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError(false);
    setLastnameError(false);
    setEmailError(false);
    setPhoneError(false);

    if (name === '') {
      setNameError(true);
      return;
    }

    if (lastname === '') {
      setLastnameError(true);
      return;
    }

    if (email === '') {
      setEmailError(true);
      return;
    }

    if (phone === '') {
      setPhoneError(true);
      return;
    }

    console.log({ name, lastname, email, phone})
    router.replace('/motorcycles');
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} noValidate>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h2' sx={{ fontSize: '36px', pb: '14px' }}>
            Detail Quotation
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='body1' sx={{ pb: '5px', fontWeight: '500' }}>
            {product.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          Price
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant='body1'
            sx={{ pb: '20px', display: 'flex', justifyContent: 'right' }}
          >
            {product.priceFormatted}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Divider light sx={{ mb: '10px', fontWeight: '500' }} />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ pr: '10px' }}>
          <InputLabel sx={{ pt: '10px' }}>Name</InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={nameError}
            fullWidth
            required
          />
          <FormHelperText error>
            {nameError ? "Este campo es mandatorio" : ""}
          </FormHelperText>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ pl: '10px' }}>
          <InputLabel sx={{ pt: '10px' }}>Lastname</InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            error={lastnameError}
            fullWidth
            required
          />
           <FormHelperText error>
            {lastnameError ? "Este campo es mandatorio" : ""}
          </FormHelperText>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <InputLabel sx={{ pt: '10px' }}>Email</InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={emailError}
            fullWidth
            required
          />
          <FormHelperText error>
            {emailError ? "Este campo es mandatorio" : ""}
          </FormHelperText>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <InputLabel sx={{ pt: '10px' }}>Phone</InputLabel>
          <TextField
            id='outlined-basic'
            variant='outlined'
            size='small'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            error={phoneError}
            fullWidth
            required
          />
          <FormHelperText error>
            {phoneError ? "Este campo es mandatorio" : ""}
          </FormHelperText>
        </Grid>
      </Grid>

      <StyledButton variant='contained' fullWidth sx={{ mt: '40px' }} type='submit'>
        Submit
      </StyledButton>
    </Form>
  );
};

const StyledButton = styled(Button)`
  color: '#903df7';
  background-color: '#903df7';

  &:hover {
    background-color: '#903df7';
  }
`;

const Form = styled.form``;

