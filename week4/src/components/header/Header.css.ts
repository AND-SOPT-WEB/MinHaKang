import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  minHeight: vars.spacing.headerHeight,
  gap: 20,

  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 60,
});

export const title = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: 'bold',
});

export const nav = style({
  display: 'flex',
  gap: 40,
});

export const link = style({
  fontSize: vars.fontSize.lg,

  ':hover': {
    color: vars.color.secondary,
  },
});

export const logoutButton = style({
  fontSize: vars.fontSize.lg,

  ':hover': {
    color: vars.color.secondary,
  },
});
