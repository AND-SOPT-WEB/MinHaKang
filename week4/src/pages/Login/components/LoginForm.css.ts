import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  width: 400,
});

export const input = style({
  marginBottom: 10,
  padding: 12,
  borderRadius: 8,
  border: `1px solid ${vars.color.gray300}`,
  '::placeholder': {
    color: vars.color.gray600,
  },
});

export const button = style({
  marginBottom: 14,
  padding: 12,
  borderRadius: 8,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  textAlign: 'center',

  ':hover': {
    backgroundColor: vars.color.blue600,
    transition: 'background-color 0.3s',
  },
});
