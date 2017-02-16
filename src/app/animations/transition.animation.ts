import {trigger, state, animate, style, transition, AnimationEntryMetadata} from '@angular/core';

export function customTransition():AnimationEntryMetadata {
  return slideOutAndIn();
}

function slideOutAndIn():AnimationEntryMetadata {
  return trigger('customTransition', [
      state('active', style({
        'transform': 'translateY(-100%)'
      })),
      state('inactive', style({
        'transform': 'translateY(-100%)'
      })),
      transition('* => *', animate(500))
  ]);
}