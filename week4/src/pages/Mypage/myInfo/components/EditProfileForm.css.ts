import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  width: 400,
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4.5,
  marginBottom: 12,
});