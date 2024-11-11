import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  width: 400,
});

export const formTitle = style({
  marginTop: 16,
  marginBottom: 16,
  fontSize: vars.fontSize.lg,
  fontWeight: 'bold',
});

export const error = style({
  margin: 4,
  color: vars.color.red500,
});
