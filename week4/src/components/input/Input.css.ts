import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const input = style({
  marginBottom: 10,
  padding: 12,
  width: '100%',
  maxWidth: 400,
  borderRadius: 8,
  border: `1px solid ${vars.color.gray300}`,
  fontSize: vars.fontSize.md,

  '::placeholder': {
    color: vars.color.gray600,
  },
});
