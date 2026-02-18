/* build: v1.11.1 */
import type {} from '@digdir/designsystemet-types';

// Augment types based on theme
declare module '@digdir/designsystemet-types' {
  export interface ColorDefinitions {
    accent: never;
    brand1: never;
    brand2: never;
    'support-color-3': never;
    'support-color-4': never;
    'support-color-5': never;
    'support-color-6': never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
