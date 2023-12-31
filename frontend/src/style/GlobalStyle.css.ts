import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "sans-serif",
    textDecoration: "none",
    listStyle: "none",
})


globalStyle("a", {
    color: vars.colors.latter
})
export const checkout = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 18,
    height: 18,
    backgroundColor: vars.colors.purple,
    borderRadius: 8,
})

export const icon = style({
    fontSize: 22,
    color: vars.colors.latter
})
export const iconMark = style({
    fontSize: 22,
    color: vars.colors.white
})
export const mark = style({
    color: vars.colors.white,
    fontWeight: 600
})