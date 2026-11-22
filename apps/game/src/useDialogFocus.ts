import {useEffect,useRef} from 'react';

/** Manage keyboard focus in game overlays without a UI framework dependency. */
export function useDialogFocus(onClose:()=>void) {
  const dialogRef=useRef<HTMLElement|null>(null);
  const closeRef=useRef(onClose);
  closeRef.current=onClose;
  useEffect(()=>{
    const root=dialogRef.current;
    if(!root)return;
    const previous=document.activeElement instanceof HTMLElement?document.activeElement:null;
    const selector='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])';
    const focusables=()=>Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(el=>el.getClientRects().length>0);
    (focusables()[0]||root).focus();
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.preventDefault();event.stopPropagation();closeRef.current();return;}
      if(event.key!=='Tab')return;
      const items=focusables();
      if(!items.length){event.preventDefault();root.focus();return;}
      const first=items[0],last=items[items.length-1];
      if(event.shiftKey && (document.activeElement===first||!root.contains(document.activeElement))){event.preventDefault();last.focus();}
      else if(!event.shiftKey && (document.activeElement===last||!root.contains(document.activeElement))){event.preventDefault();first.focus();}
    };
    document.addEventListener('keydown',onKey,true);
    return()=>{document.removeEventListener('keydown',onKey,true);previous?.focus();};
  },[]);
  return dialogRef;
}
