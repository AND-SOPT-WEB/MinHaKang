import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: `calc(100vh - ${vars.spacing.headerHeight})`,
  backgroundColor: vars.color.background,
});

export const title = style({
  marginBottom: 16,
  fontSize: vars.fontSize['2xl'],
  fontWeight: 'bold',
});
