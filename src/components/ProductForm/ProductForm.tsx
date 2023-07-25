import { useState } from 'react';
import { Motorcycle, Accessory } from '@/interfaces';
import styled from '@emotion/styled';
import {
  Typography,
  Divider,
  Button,
  TextField,
  InputLabel,
  Grid,
  FormHelperText,
} from '@mui/material';
import { SuccessMessage } from '../';

interface ProductFormProps {
  type: string;
  product: Motorcycle | Accessory;
}

export const ProductForm: React.FC<ProductFormProps> = ({ type, product }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [lastname, setLastname] = useState('');
  const [lastnameError, setLastnameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);

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

    const payload = {
      first_name: name,
      last_name: lastname,
      email,
      phone,
      product_type: type,
      product_name: product.name,
      product_price: product.price,
    };

    fetch('/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => setSuccess(true));
  };

  return (
    <>
      {success ? (
        <SuccessMessage type={type} />
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)} noValidate>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='h2' sx={{ fontSize: '34px', pb: '14px' }}>
                Detail Quotation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='body1' sx={{ pb: '5px', fontWeight: '500' }}>
                {product.name}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              Price
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
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

            <Grid item xs={12} sm={6} sx={{ pr: { xs: 0, md: '10px' } }}>
              <InputLabel sx={{ pt: '10px' }}>First Name</InputLabel>
              <TextField
                type='text'
                id='firstname'
                variant='outlined'
                size='small'
                value={name}
                onChange={(event) => setName(event.target.value)}
                error={nameError}
                fullWidth
                required
              />
              <FormHelperText error>
                {nameError ? 'Este campo es mandatorio' : ''}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ pl: { xs: 0, md: '10px' } }}>
              <InputLabel sx={{ pt: '10px' }}>Last Name</InputLabel>
              <TextField
                type='text'
                id='lastname'
                variant='outlined'
                size='small'
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                error={lastnameError}
                fullWidth
                required
              />
              <FormHelperText error>
                {lastnameError ? 'Este campo es mandatorio' : ''}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <InputLabel sx={{ pt: '10px' }}>Email</InputLabel>
              <TextField
                type='text'
                id='email'
                variant='outlined'
                size='small'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={emailError}
                fullWidth
                required
              />
              <FormHelperText error>
                {emailError ? 'Este campo es mandatorio' : ''}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <InputLabel sx={{ pt: '10px' }}>Phone</InputLabel>
              <TextField
                type='text'
                id='phone'
                variant='outlined'
                size='small'
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                error={phoneError}
                fullWidth
                required
              />
              <FormHelperText error>
                {phoneError ? 'Este campo es mandatorio' : ''}
              </FormHelperText>
            </Grid>
          </Grid>

          <StyledButton
            variant='contained'
            fullWidth
            sx={{ mt: '40px' }}
            type='submit'
          >
            Submit
          </StyledButton>
        </Form>
      )}
    </>
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
