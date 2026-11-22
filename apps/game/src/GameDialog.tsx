import React from 'react';
import {useDialogFocus} from './useDialogFocus';
export function GameDialog({label,onClose,children,style}:{label:string;onClose:()=>void;children:React.ReactNode;style?:React.CSSProperties}) {
 const ref=useDialogFocus(onClose);
 return <section ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={label} style={style}>{children}</section>;
}
