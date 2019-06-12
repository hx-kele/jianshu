import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1559511833516'); /* IE9 */
  src: url('./iconfont.eot?t=1559511833516#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARkAAsAAAAACKwAAAQXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqEUIQMATYCJAMUCwwABCAFhG0HTBuUBxEVnKnJvhiwm5OpptIUPgpOXHl6thRdR0bhU2qZmfnmQ+9lbzJJmyY1tKh5Ev9gfFXIwV6i7297v1cQWBZw41HEQZMFEmAAGCUFADjkHCKL6IwJZtDW5lg+DY3YZWQJLXr0haSAl2YkBf/PMdNF6cDy22wukUmZtKa9AY4HNKDouhK+Azn3M7lh7OIy1gMBCKx5IltyZiF4LK0bAZCzqaEKfEyDLSESvFwtZ2yBPODwbRHTCVjh/jz5sYQHGFwHrW/unlSL2C/4pZLOVKHURoDbnwkAMwmgAE8AC+TItdSivt8TJUjRrFAArzdi4HnI8+0vlaojXDBvLe14AgHAYNv/8cgATaIJsbEBFp4Hm9yd5EJOnnQ7pAOFl0reeUg4Wyb0FDwKkGK1lrQ9CBaHmXneSFTXEw01jDWnaCr6hxcPAsLMoa9ZIhVsMJENDhYOP5dLLxRDQzKFjiDXLBRaxKLi9dbCVlNl1TlxCSBEuCws7iazFIpZ7t0jZcd3Y+Yecck1QkZobnfU2jCrXVg3JFtisstll8eGQxbytYOKTmFxsCR5RK3dOCE2X+TpwczO/aJs5rmEa1LMJYUiwdjYUG8UZWI8RX5JIsPD8gmwhm62RIqRrVuyb9ZoSZoJe1b1hmMZzFyxom5J2GaD1NoatmQz0+HE+tctmlhRkJx7o3QMbrG2tuwtnWkzrf+wGaezk5LWrcPl+pQ+18S+Om2VNdwcnSNj4quboiX2zzrG3gj1IVyc9wg3eZNWmZgRG/60XDG2w8zoj/nuJ6cNjJ48/n5OXVvpxTiMDS5gtHs/73/N/Guj09NN9rQcp6mpXlNS9GtD1yY2PXKdte/0lUU280fcXrCBpqczEyceaF+AjZUlLQ3oPN+58Ny+zo0Ie4xPnmx3HxtPN3V2bgJCCrV0U+iMH+v+PL/eXiuZ1d9dzORt2yZjIYPNdDLFLIcJWyIUAKhOQ/2O9GV+UpVup9Y/xO/g21dta4VO5DdeZAEAt8xrzdw0FQV6A2+VW5v7+rk1S1iZr2m5EgtNjmjjxN48GwNvm//aw4C++/3YjCA0ETzLhcBQZwUUzxHJYj2BIwoENbwYEHhImSwyMBpFSgOAu3kACF2HgKHtElC6upAs9h5wjL0DNbqhIJDHYE6RcwxN69eMStCC/oRgWiVDL+te6gO616w4yndJL8gjuOBw7yAZuseK3MeA8eaORAiIW4E7sBnm3KBzi2hkz4v0q/19ynvRnmllsi6BUQla0J8QTKtkV5b11Pc/oHvNikuKSowvyCPUDod7BzWQ95Jaq+hcLhlv7kiEgLgVuAMmzLq/Qc9vFdHInm/h7Vf7qBzVleyNLyvXuApG2uA+LV0qfQb81UPd83nOZnFqqaimwzqp6qyKwVZPJgA=') format('woff2'),
  url('./iconfont.woff?t=1559511833516') format('woff'),
  url('./iconfont.ttf?t=1559511833516') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1559511833516#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;