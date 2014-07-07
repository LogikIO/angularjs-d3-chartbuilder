function configureXaxis(e,t,n){n.xaxisorient&&e.xAxis.orient(n.xaxisorient),n.xaxisticks&&e.xAxis.scale().ticks(n.xaxisticks),n.xaxistickvalues&&(Array.isArray(t.$eval(n.xaxistickvalues))?e.xAxis.tickValues(t.$eval(n.xaxistickvalues)):typeof t.xaxistickvalues()=="function"&&e.xAxis.tickValues(t.xaxistickvalues())),n.xaxisticksubdivide&&e.xAxis.tickSubdivide(t.xaxisticksubdivide()),n.xaxisticksize&&e.xAxis.tickSize(t.xaxisticksize()),n.xaxistickpadding&&e.xAxis.tickPadding(t.xaxistickpadding()),n.xaxistickformat&&e.xAxis.tickFormat(t.xaxistickformat()),n.xaxislabel&&e.xAxis.axisLabel(n.xaxislabel),n.xaxisscale&&e.xAxis.scale(t.xaxisscale()),n.xaxisdomain&&(Array.isArray(t.$eval(n.xaxisdomain))?e.xDomain(t.$eval(n.xaxisdomain)):typeof t.xaxisdomain()=="function"&&e.xDomain(t.xaxisdomain())),n.xaxisrange&&(Array.isArray(t.$eval(n.xaxisrange))?e.xRange(t.$eval(n.xaxisrange)):typeof t.xaxisrange()=="function"&&e.xRange(t.xaxisrange())),n.xaxisrangeband&&e.xAxis.rangeBand(t.xaxisrangeband()),n.xaxisrangebands&&e.xAxis.rangeBands(t.xaxisrangebands()),n.xaxisshowmaxmin&&e.xAxis.showMaxMin(n.xaxisshowmaxmin==="true"),n.xaxishighlightzero&&e.xAxis.highlightZero(n.xaxishighlightzero==="true"),n.xaxisrotatelabels&&e.xAxis.rotateLabels(+n.xaxisrotatelabels),n.xaxisstaggerlabels&&e.xAxis.staggerLabels(n.xaxisstaggerlabels==="true"),n.xaxislabeldistance&&e.xAxis.axisLabelDistance(+n.xaxislabeldistance)}function configureX2axis(e,t,n){n.x2axisorient&&e.x2Axis.orient(n.x2axisorient),n.x2axisticks&&e.x2Axis.scale().ticks(n.x2axisticks),n.x2axistickvalues&&(Array.isArray(t.$eval(n.x2axistickvalues))?e.x2Axis.tickValues(t.$eval(n.x2axistickvalues)):typeof t.xaxistickvalues()=="function"&&e.x2Axis.tickValues(t.x2axistickvalues())),n.x2axisticksubdivide&&e.x2Axis.tickSubdivide(t.x2axisticksubdivide()),n.x2axisticksize&&e.x2Axis.tickSize(t.x2axisticksize()),n.x2axistickpadding&&e.x2Axis.tickPadding(t.x2axistickpadding()),n.x2axistickformat&&e.x2Axis.tickFormat(t.x2axistickformat()),n.x2axislabel&&e.x2Axis.axisLabel(n.x2axislabel),n.x2axisscale&&e.x2Axis.scale(t.x2axisscale()),n.x2axisdomain&&(Array.isArray(t.$eval(n.x2axisdomain))?e.x2Axis.domain(t.$eval(n.x2axisdomain)):typeof t.x2axisdomain()=="function"&&e.x2Axis.domain(t.x2axisdomain())),n.x2axisrange&&(Array.isArray(t.$eval(n.x2axisrange))?e.x2Axis.range(t.$eval(n.x2axisrange)):typeof t.x2axisrange()=="function"&&e.x2Axis.range(t.x2axisrange())),n.x2axisrangeband&&e.x2Axis.rangeBand(t.x2axisrangeband()),n.x2axisrangebands&&e.x2Axis.rangeBands(t.x2axisrangebands()),n.x2axisshowmaxmin&&e.x2Axis.showMaxMin(n.x2axisshowmaxmin==="true"),n.x2axishighlightzero&&e.x2Axis.highlightZero(n.x2axishighlightzero==="true"),n.x2axisrotatelables&&e.x2Axis.rotateLabels(+n.x2axisrotatelables),n.x2axisstaggerlabels&&e.x2Axis.staggerLabels(n.x2axisstaggerlabels==="true"),n.x2axislabeldistance&&e.x2Axis.axisLabelDistance(+n.x2axislabeldistance)}function configureYaxis(e,t,n){n.yaxisorient&&e.yAxis.orient(n.yaxisorient),n.yaxisticks&&e.yAxis.scale().ticks(n.yaxisticks),n.yaxistickvalues&&(Array.isArray(t.$eval(n.yaxistickvalues))?e.yAxis.tickValues(t.$eval(n.yaxistickvalues)):typeof t.yaxistickvalues()=="function"&&e.yAxis.tickValues(t.yaxistickvalues())),n.yaxisticksubdivide&&e.yAxis.tickSubdivide(t.yaxisticksubdivide()),n.yaxisticksize&&e.yAxis.tickSize(t.yaxisticksize()),n.yaxistickpadding&&e.yAxis.tickPadding(t.yaxistickpadding()),n.yaxistickformat&&e.yAxis.tickFormat(t.yaxistickformat()),n.yaxislabel&&e.yAxis.axisLabel(n.yaxislabel),n.yaxisscale&&e.yAxis.scale(t.yaxisscale()),n.yaxisdomain&&(Array.isArray(t.$eval(n.yaxisdomain))?e.yDomain(t.$eval(n.yaxisdomain)):typeof t.yaxisdomain()=="function"&&e.yDomain(t.yaxisdomain())),n.yaxisrange&&(Array.isArray(t.$eval(n.yaxisrange))?e.yRange(t.$eval(n.yaxisrange)):typeof t.yaxisrange()=="function"&&e.yRange(t.yaxisrange())),n.yaxisrangeband&&e.yAxis.rangeBand(t.yaxisrangeband()),n.yaxisrangebands&&e.yAxis.rangeBands(t.yaxisrangebands()),n.yaxisshowmaxmin&&e.yAxis.showMaxMin(n.yaxisshowmaxmin==="true"),n.yaxishighlightzero&&e.yAxis.highlightZero(n.yaxishighlightzero==="true"),n.yaxisrotatelabels&&e.yAxis.rotateLabels(+n.yaxisrotatelabels),n.yaxisrotateylabel&&e.yAxis.rotateYLabel(n.yaxisrotateylabel==="true"),n.yaxisstaggerlabels&&e.yAxis.staggerLabels(n.yaxisstaggerlabels==="true"),n.yaxislabeldistance&&e.yAxis.axisLabelDistance(+n.yaxislabeldistance)}function configureY1axis(e,t,n){n.y1axisticks&&e.y1Axis.scale().ticks(n.y1axisticks),n.y1axistickvalues&&(Array.isArray(t.$eval(n.y1axistickvalues))?e.y1Axis.tickValues(t.$eval(n.y1axistickvalues)):typeof t.y1axistickvalues()=="function"&&e.y1Axis.tickValues(t.y1axistickvalues())),n.y1axisticksubdivide&&e.y1Axis.tickSubdivide(t.y1axisticksubdivide()),n.y1axisticksize&&e.y1Axis.tickSize(t.y1axisticksize()),n.y1axistickpadding&&e.y1Axis.tickPadding(t.y1axistickpadding()),n.y1axistickformat&&e.y1Axis.tickFormat(t.y1axistickformat()),n.y1axislabel&&e.y1Axis.axisLabel(n.y1axislabel),n.y1axisscale&&e.y1Axis.yScale(t.y1axisscale()),n.y1axisdomain&&(Array.isArray(t.$eval(n.y1axisdomain))?e.y1Axis.domain(t.$eval(n.y1axisdomain)):typeof t.y1axisdomain()=="function"&&e.y1Axis.domain(t.y1axisdomain())),n.y1axisrange&&(Array.isArray(t.$eval(n.y1axisrange))?e.y1Axis.range(t.$eval(n.y1axisrange)):typeof t.y1axisrange()=="function"&&e.y1Axis.range(t.y1axisrange())),n.y1axisrangeband&&e.y1Axis.rangeBand(t.y1axisrangeband()),n.y1axisrangebands&&e.y1Axis.rangeBands(t.y1axisrangebands()),n.y1axisshowmaxmin&&e.y1Axis.showMaxMin(n.y1axisshowmaxmin==="true"),n.y1axishighlightzero&&e.y1Axis.highlightZero(n.y1axishighlightzero==="true"),n.y1axisrotatelabels&&e.y1Axis.rotateLabels(+t.y1axisrotatelabels),n.y1axisrotateylabel&&e.y1Axis.rotateYLabel(n.y1axisrotateylabel==="true"),n.y1axisstaggerlabels&&e.y1Axis.staggerlabels(n.y1axisstaggerlabels==="true"),n.y1axislabeldistance&&e.y1Axis.axisLabelDistance(+n.y1axislabeldistance)}function configureY2axis(e,t,n){n.y2axisticks&&e.y2Axis.scale().ticks(n.y2axisticks),n.y2axistickvalues&&e.y2Axis.tickValues(t.$eval(n.y2axistickvalues)),n.y2axisticksubdivide&&e.y2Axis.tickSubdivide(t.y2axisticksubdivide()),n.y2axisticksize&&e.y2Axis.tickSize(t.y2axisticksize()),n.y2axistickpadding&&e.y2Axis.tickPadding(t.y2axistickpadding()),n.y2axistickformat&&e.y2Axis.tickFormat(t.y2axistickformat()),n.y2axislabel&&e.y2Axis.axisLabel(n.y2axislabel),n.y2axisscale&&e.y2Axis.yScale(t.y2axisscale()),n.y2axisdomain&&(Array.isArray(t.$eval(n.y2axisdomain))?e.y2Axis.domain(t.$eval(n.y2axisdomain)):typeof t.y2axisdomain()=="function"&&e.y2Axis.domain(t.y2axisdomain())),n.y2axisrange&&(Array.isArray(t.$eval(n.y2axisrange))?e.y2Axis.range(t.$eval(n.y2axisrange)):typeof t.y2axisrange()=="function"&&e.y2Axis.range(t.y2axisrange())),n.y2axisrangeband&&e.y2Axis.rangeBand(t.y2axisrangeband()),n.y2axisrangebands&&e.y2Axis.rangeBands(t.y2axisrangebands()),n.y2axisshowmaxmin&&e.y2Axis.showMaxMin(n.y2axisshowmaxmin==="true"),n.y2axishighlightzero&&e.y2Axis.highlightZero(n.y2axishighlightzero==="true"),n.y2axisrotatelabels&&e.y2Axis.rotateLabels(+t.y2axisrotatelabels),n.y2axisrotateylabel&&e.y2Axis.rotateYLabel(n.y2axisrotateylabel==="true"),n.y2axisstaggerlabels&&e.y2Axis.staggerlabels(n.y2axisstaggerlabels==="true"),n.y2axislabeldistance&&e.y2Axis.axisLabelDistance(+n.y2axislabeldistance)};