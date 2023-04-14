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

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(300, style({ opacity: 0 }))]),
]);

export const checkButtonTrigger = trigger('checkButtonState', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);
