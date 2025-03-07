import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  gap: 20,
});

export const title = style({
  marginBottom: 10,
  fontSize: vars.fontSize.lg,
  fontWeight: 'bold',
});
