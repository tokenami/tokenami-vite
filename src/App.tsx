import * as React from 'react';
import { css, type Variants, type TokenamiStyle } from './css';
import './tokenami.css';

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <div
      data-theme={theme}
      style={css({
        '--background-color': 'var(--color_blue9)',
        '--background-image': 'var(--gradient_to-b)',
        '--gradient-from': 'var(--color_blue9)',
        '--gradient-to': 'var(--color_violet10)',
        '--height': 'var(--size_screen-h)',
        '--display': 'flex',
        '--flex-direction': 'column',
        '--gap': 4,
        '--align-items': 'center',
        '--justify-content': 'center',

        '--md_flex-direction': 'row',
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
  const { disabled = false, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      ref={forwardedRef}
      disabled={disabled}
      style={button({ disabled }, props.style)}
    />
  );
});

Button.displayName = 'Button';

const button = css.compose({
  '--height': 15,
  '--px': 8,
  '--border-radius': 'var(--radii_base)',
  '--border': 'var(---,none)',
  '--bg': 'var(--color_sky9)',
  '--font-size': 'var(--fluid-text-size_md-2xl)',
  '--fluid-text-size-min': 1.125,
  '--fluid-text-size-max': 1.5,
  '--transition': 'var(--morph_all)',
  '--transition-duration': 'var(--time_300)',
  '--cursor': 'pointer',

  '--hover_bg': 'var(--color_iris9)',
  '--hover_color': 'var(--color_white)',
  '--hover_animation': 'var(--anim_wiggle)',
  '--hover_box-shadow': 'var(--shadow_2xl)',
  '--hover_shadow-color': 'var(--color_skyA9)',

  variants: {
    disabled: {
      true: {
        '--opacity': 'var(--alpha_60)',
      },
    },
  },
});

/* ---------------------------------------------------------------------------------------------- */

export default App;
