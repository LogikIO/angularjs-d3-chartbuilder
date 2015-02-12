
<h3>Tutorials</h3>
</div>
<div class="col-lg-8 col-lg-offset-2">
<h3><strong>Scatter Plot With Trend Lines</strong></h3>
<br />
<p class="lead">Creating a scatter plot is pretty straightforward, but adding trend lines can be a little tricky. Lets tackle that with Chartbuilder.</p>
<p>We'll start by importing our data. Select <strong>Scatter Plus Line Chart</strong> as your chart type, then upload a tsv file containing data for <a href="demos/tutorial2.tsv">the density of MRI units in the US vs other countries from 1995-2010</a> by clicking <strong>Add Existing Data -> Upload</strong>. The tsv file has some basic time series data that Chartbuilder will convert into groups for editing.</p>
<br />
<p>Scatter charts allow you to change the size and shape for the data point markers from the live edit table view. After that we can make a few more tweaks if we like. I've added text and scaled the y-axis to show 0-40.</p>
<br />
<p>Now comes the tricky part. The charting library doesn't do the calculations for the trend line automatically, so we'll have to do it ourselves, and input in the two special data group fields: <strong>slope</strong> and <strong>intercept</strong>. Slope can be calculated by via a simple equation: <blockquote><i>y1 - y2 / x1 - x2</i> (You can use different points if you want to adjust the trend line.)</blockquote> Intercept is the point on the Y-axis where the line intersects at x = 0. So for this data it's actually a little odd since we're using the numerical point values of the year. Finding the intercept: <blockquote><i>[slope] x [-xmin]</i> or <i>1.3052941176470592 x -1995</i></blockquote> for the second line in our data. This calculation is imperfect, so we can nudge the intercept manually until we get the line in the right place. I settled on <i>-2593</i>. Be aware that if you change the Datatype of your axis, the calculation may change eg choosing <strong>Date</strong> for the X-axis would necessitate using the timestamp value in that calculation instead.</p>
<h2>{{ tutorial2.meta.title }}</h2>
<h4>{{ tutorial2.meta.subtitle }}</h4>
<nvd3 options="tutorial2.options" data="tutorial2.data" colors="tutorial2.colors" events="$root.events" config="{ extended: true }"></nvd3>
<p>{{ tutorial2.meta.caption }}</p>
<h6 ng-if="tutorial2.meta.attribution">{{ tutorial2.meta.attribution }}</h6>
</div>
<div class="col-lg-8 col-lg-offset-2">
<h3><strong>Line Chart with Two Highlight Lines</strong></h3>
<br />
<p class="lead">This one is a little different, since we only want to highlight two lines, but still show the rest. This is the chart we want to match:</p>
<br />
<img class="img-thumbnail" src="../images/tutorial1-requirement.png" />
<br />
<br />
<p>There are some things we can't do with Chartbuilder, yet, like adding the persistent labels to a line, or adding a generic label. The chart we build is going to be a little different, and will supplement the plot lines with an interactive tooltip.</p>
<br />
<p>First, let's import data. In <a href="demos/tutorial1.csv">the csv file</a> for this example we have years and percentages for several countries. The first column is a standard four digit year, the second is a formatted percentage. Upload the csv data to Chartbuilder by clicking <strong>Add Existing Data -> Upload</strong>. Now we have values populated in our data groups, and some plotted lines. To get these to plot properly for our line graph, we'll need to set the datatypes and formatters for our axis. For the first column, we set <strong>x-Axis Datatype</strong> to <i>Date</i>. This attempts to parse dates from the values in the first column, and handles most common date formats, like this four digit year as well as 2005-12-14, etc. Now the graph knows we are making a time series, and will plot accordingly. We can also use the available time formatters to make our axis label look like it should. <strong>xAxis -> Tick Formatter</strong> has a few available options. We'll pick <i>Year (YYYY)</i>. As for the y-Axis, since our percent values are already formatted, we can use the default <strong>y-Axis Datatype</strong> of <i>Y,</i> and set the <strong>y-Axis Tick Formatter</strong> to <i>Percent (unmultiplied).</i> Other percent formatters take raw decimal data and multiply it to get percentages, but we don't need to do that here.</p>
<br />
<p>Next we want to adjust our scale, so that the y-Axis goes from 0 to 18%. Use the <strong>y-Axis Endpoints</strong> option to set <i>0 </i>(the start) and <i>1 </i>(the end) to 0 and 18.</p>
<br />
<p>To smooth the lines, set <strong>Interpolate</strong> to <i>bundle</i>.</p>
<br />
<p>Since we're using custom colors in this chart, click <strong>Enable Live Edit</strong>, and go through each data series to associate highlight colors with United States and Comparable Country Average, and a grey for the other comparison countries. Enable <strong>useInteractiveGuideline</strong> for a nice tooltip that tracks the mouse on the x-Axis and summarizes the value group.</p>
<br />
<p>It's not exact, but we have replicated the data plot for this graph, and have a nice interactive tooltip for line values instead of the static line labels. This graph is also responsive and can be styled to match your site's theme.</p>
<br />
<h2>{{ tutorial1.meta.title }}</h2>
<h4>{{ tutorial1.meta.subtitle }}</h4>
<nvd3 options="tutorial1.options" data="tutorial1.data" colors="tutorial1.colors" events="$root.events" config="{ extended: true }"></nvd3>
<p>{{ tutorial1.meta.caption }}</p>
<h6 ng-if="tutorial1.meta.attribution">{{ tutorial1.meta.attribution }}</h6>
