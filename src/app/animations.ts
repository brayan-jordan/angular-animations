import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '2px solid #FFB2B2',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '300ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
  ]),
]);
