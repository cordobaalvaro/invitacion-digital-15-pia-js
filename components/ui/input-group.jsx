'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
function InputGroup(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div data-slot="input-group" role="group" className={cn('group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none', 'h-9 has-[>textarea]:h-auto', 'has-[>[data-align=inline-start]]:[&>input]:pl-2', 'has-[>[data-align=inline-end]]:[&>input]:pr-2', 'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3', 'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3', 'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]', 'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40', className)} {...props}/>);
}
const inputGroupAddonVariants = cva("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50", {
    variants: {
        align: {
            'inline-start': 'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
            'inline-end': 'order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]',
            'block-start': 'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
            'block-end': 'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
        },
    },
    defaultVariants: {
        align: 'inline-start',
    },
});
function InputGroupAddon(_a) {
    var { className, align = 'inline-start' } = _a, props = __rest(_a, ["className", "align"]);
    return (<div role="group" data-slot="input-group-addon" data-align={align} className={cn(inputGroupAddonVariants({ align }), className)} onClick={(e) => {
            var _a, _b;
            if (e.target.closest('button')) {
                return;
            }
            (_b = (_a = e.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('input')) === null || _b === void 0 ? void 0 : _b.focus();
        }} {...props}/>);
}
const inputGroupButtonVariants = cva('text-sm shadow-none flex gap-2 items-center', {
    variants: {
        size: {
            xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
            sm: 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
            'icon-xs': 'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
            'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
        },
    },
    defaultVariants: {
        size: 'xs',
    },
});
function InputGroupButton(_a) {
    var { className, type = 'button', variant = 'ghost', size = 'xs' } = _a, props = __rest(_a, ["className", "type", "variant", "size"]);
    return (<Button type={type} data-size={size} variant={variant} className={cn(inputGroupButtonVariants({ size }), className)} {...props}/>);
}
function InputGroupText(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<span className={cn("text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className)} {...props}/>);
}
function InputGroupInput(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<Input data-slot="input-group-control" className={cn('flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent', className)} {...props}/>);
}
function InputGroupTextarea(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<Textarea data-slot="input-group-control" className={cn('flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent', className)} {...props}/>);
}
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea, };
