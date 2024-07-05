import * as React from 'react';
import { css, type Variants, type TokenamiStyle } from './css';
import './tokenami.css';

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <div
      className={`theme-${theme}`}
      style={css({
        '--surface-from': 'var(--color_primary)',
        '--surface-to': 'var(--color_secondary)',
        '--background-image': 'var(--surface_radial-gradient)',
        '--height': 'var(--size_screen-h)',
        '--display': 'flex',
        '--flex-direction': 'column',
        '--md_flex-direction': 'row',
        '--align-items': 'center',
        '--justify-content': 'center',
        '--gap': 4,
      })}
    >
      <Button onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}>
        toggle theme
      </Button>

      {/* note the padding passed here correctly overrides the internal `px` padding */}
      <Button disabled style={css({ '--padding-left': 10, '--padding-right': 10 })}>
        disabled
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

type ButtonElement = React.ElementRef<'button'>;
type ButtonElementProps = React.ComponentPropsWithoutRef<'button'>;
interface ButtonProps extends TokenamiStyle<ButtonElementProps>, Variants<typeof button> {}

const Button = React.forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const { outline = true, disabled = false, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      ref={forwardedRef}
      disabled={disabled}
      style={button({ outline, disabled }, props.style)}
    />
  );
});

Button.displayName = 'Button';

const button = css.compose({
  '--height': 15,
  '--px': 8,
  '--bg-color': 'var(--color_secondary)',
  '--border-radius': 'var(--radii_rounded)',
  '--border': 'var(--border_none)',
  '--font-family': 'var(--font_sans)',
  '--font-size': 'var(--font-size_medium)',
  '--color': 'var(--color_tertiary)',
  '--transition': 'var(--transition_all)',

  '--hover_bg-color': 'var(--color_tertiary)',
  '--hover_color': 'var(--color_secondary)',
  '--hover_animation': 'var(--anim_wiggle)',

  variants: {
    disabled: {
      true: {
        '--opacity': 'var(--alpha_disabled)',
      },
    },
    outline: {
      true: {
        '--box-shadow': 'var(--shadow_ring)',
      },
    },
  },
});

/* ---------------------------------------------------------------------------------------------- */

export default App;
