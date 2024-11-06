import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: vars.color.background,
});

export const title = style({
  marginBottom: 16,
  fontSize: vars.fontSize['2xl'],
  fontWeight: 'bold',
});

export const link = style({
  color: vars.color.primary,
  textDecoration: 'underline',

  ':hover': {
    color: vars.color.blue600,
    transition: 'background-color 0.3s',
  },
});
