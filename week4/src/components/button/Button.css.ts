import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const button = style({
  marginBottom: 14,
  padding: 12,
  borderRadius: 8,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  textAlign: 'center',
  fontSize: vars.fontSize.md,

  ':hover': {
    backgroundColor: vars.color.blue600,
    transition: 'background-color 0.3s',
  },

  ':disabled': {
    backgroundColor: vars.color.gray300, 
    color: vars.color.gray100, 
    cursor: 'not-allowed', 
  },
});
