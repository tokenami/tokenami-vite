import * as React from 'react';
import { css, type Variants, type TokenamiStyle } from './css';
import './tokenami.css';

const App = () => (
  <Container>
    {/* note the padding here correctly overrides the internal `px` padding */}
    <Button disabled style={{ '--padding-left': 10, '--padding-right': 10 }}>
      disabled
    </Button>
  </Container>
);

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const [cn, css] = container();
  return (
    <div data-theme={theme} className={cn()} style={css()}>
      <Button onClick={() => setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))}>
        toggle theme
      </Button>
      {children}
    </div>
  );
};

const container = css.compose({
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
});

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

type ButtonElement = React.ElementRef<'button'>;
type ButtonElementProps = React.ComponentPropsWithoutRef<'button'>;
interface ButtonProps extends TokenamiStyle<ButtonElementProps>, Variants<typeof button> {}

const Button = React.forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const { disabled = false, ...buttonProps } = props;
  const [cn, css] = button({ disabled });
  return (
    <button
      {...buttonProps}
      ref={forwardedRef}
      disabled={disabled}
      className={cn(props.className)}
      style={css(props.style)}
    />
  );
});

const button = css.compose({
  '--height': 15,
  '--px': 8,
  '--border-radius': 'var(--radii_base)',
  '--border': 'var(---,none)',
  '--bg': 'var(--color_sky9)',
  '--font-size': 'var(--fluid-text-size-clamp_md-2xl)',
  '--fluid-text-size-min': 'var(--fluid-text-size_lg)',
  '--fluid-text-size-max': 'var(--fluid-text-size_2xl)',
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
        '--opacity': 0.6,
        '--pointer-events': 'none',
      },
    },
  },
});

/* ---------------------------------------------------------------------------------------------- */

export default App;
