function initializeLegendMargin(e,t){var n=e.$eval(t.legendmargin)||{left:0,top:5,bottom:5,right:0};typeof n!="object"&&(n={left:n,top:n,bottom:n,right:n}),e.legendmargin=n}function configureLegend(e,t,n){e.legend&&n.showlegend&&n.showlegend==="true"&&(initializeLegendMargin(t,n),e.legend.margin(t.legendmargin),e.legend.width(n.legendwidth===undefined?400:+n.legendwidth),e.legend.height(n.legendheight===undefined?20:+n.legendheight),e.legend.key(n.legendkey===undefined?function(e){return e.key}:t.legendkey()),e.legend.color(n.legendcolor===undefined?nv.utils.defaultColor():t.legendcolor()),e.legend.align(n.legendalign===undefined?!0:n.legendalign==="true"),e.legend.rightAlign(n.legendrightalign===undefined?!0:n.legendrightalign==="true"),e.legend.updateState(n.legendupdatestate===undefined?!0:n.legendupdatestate==="true"),e.legend.radioButtonMode(n.legendradiobuttonmode===undefined?!1:n.legendradiobuttonmode==="true"))};