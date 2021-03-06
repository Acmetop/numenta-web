---
title: "Cortical Columns | Numenta"
header: "Cortical columns"
keywords: "cortical columns"
description: "Vernon Mountcastle was the first to propose that a canonical circuit consisting of cortical columns underlies everything the neocortex does. Understanding the function of cortical columns is a central goal of our research program. On this page, you'll find all our resources regarding cortical columns."
columns: true
dropcap: false
---
<section>
<aside>

![Cortical Columns - Cajal Artwork](../images/cortical-columns-1.png)

</aside>

The neocortex is complex. It contains dozens of cell types, numerous layers, and intricate connectivity patterns. The connections between cells suggest a columnar flow of information across layers as well as a laminar flow within some layers. Fortunately, this complex circuitry is remarkably preserved in all regions. Vernon Mountcastle was the first to propose that a canonical circuit consisting of cortical columns underlies everything the neocortex does. The way we see, feel, hear, move, and even do high level planning runs on the same circuitry.

If we can understand how a single cortical column works, we will have a framework for understanding how the entire neocortex works. Understanding the function of cortical columns is a central goal of our research program.


</section>
<section>
<aside>

![Cortical Columns - Multiple Columns Diagram](../images/cortical-columns-2.png)

</aside>

In October 2018 we released a paper that proposes a broad framework [1] for how a single cortical column works, which we believe is a framework for understanding how the entire neocortex works. The framework explains how individual columns learn models of objects, how columns learn new objects as compositions of previously learned objects, and how behaviors of objects are represented and learned. It has significant implications for how we think about biological and machine intelligence and about the hierarchy, a subject of our blog post, The Thousand Brains Theory of Intelligence.

The framework was the result of a surprising idea that we proposed in October 2017 [2]: that a single cortical column can learn models of complete objects through movement. We proposed there is a key feature common to all cortical columns: a signal representing location. This location signal represents a location relative to the object being sensed, not relative to the sensor. In other words, a column knows not only what feature is being sensed, but where that feature is on the object. As we move our sensors, the “features at locations” input is integrated over time so that a single column can learn and recognize complete objects. We showed how numerous complex objects can be learned and distinguished in a single cortical column, and how multiple cortical columns can speed up the recognition process.

In [3] we showed how the cortex generates location signals through integration of sensory and motor inputs over time. This paper uses the properties of grid cells to show how the location signal can be derived from our movement using a network of neurons.

In this overall framework, cortical columns have far more powerful recognition and modeling capabilities than previously assumed. It is consistent with Mountcastle’s original idea, and the concept that if the neocortex is doing a function somewhere, it must be doing it everywhere.


</section>

## Cortical Columns Resources

### Papers

<span style="margin-left: 10pt; display:block"><b>[1]</b> <a href="https://numenta.com/neuroscience-research/research-publications/papers/a-framework-for-intelligence-and-cortical-function-based-on-grid-cells-in-the-neocortex/">Hawkins, J., Lewis, M., Purdy, S., Klukas, M., & Ahmad, S. (2018) A Framework for Intelligence and Cortical Function Based on Grid Cells in the Neocortex. <i>Submitted</i></a></span>
<span style="margin-left: 10pt; display:block"><b>[2]</b> <a href="https://numenta.com/neuroscience-research/research-publications/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/">Hawkins, J., Ahmad, S., & Cui, Y. (2017) A Theory of How Columns in the Neocortex Enable Learning <br>the Structure of the World. <i>Front. Neural Circuits</i>, <b>11</b>, 81.</a></span>
<span style="margin-left: 10pt; display:block"><b>[3]</b> <a href="https://numenta.com/neuroscience-research/research-publications/papers/locations-in-the-neocortex-a-theory-of-sensorimotor-object-recognition-using-cortical-grid-cells/"> Lewis, M., Purdy, S., Ahmad, S., & Hawkins, J. Locations in the Neocortex: A Theory of Sensorimotor Object Recognition Using Cortical Grid Cells. <i>Submitted</i></a></span>

### Videos
* [Location, Location, Location: A Framework for Intelligence and Cortical Computation](/resources/videos/jeff-hawkins-johns-hopkins-apl-talk/)
*	[Does the neocortex use grid cell-like mechanisms to learn the structure of objects?](/resources/videos/jeff-hawkins-simons-institute-talk/)
*	[Have We Missed Half of What the Neocortex Does? Allocentric Location as the Basis of Perception](/resources/videos/jeff-hawkins-mit-talk/)

### Posters
* [Bernstein 2018: Representing N-dimensional cognitive variables with grid cells](/neuroscience-research/research-publications/posters/bernstein-2018-representing-n-dimensions-with-grid-cells/)
* [Grid Cell Meeting 2018: Using Grid Cells for Coordinate Transforms](/neuroscience-research/research-publications/posters/grid-cell-meeting/)
*	[Cosyne 2018: Determining Allocentric Locations of Sensed Features](/neuroscience-research/research-publications/posters/cosyne-2018-allocentric-locations-of-sensed-features/)
*	[NCM 2017: A Cortical Circuit for Sensorimotor Learning and Recognition](/neuroscience-research/research-publications/posters/ncm-2017a-cortical-circuit-for-learning-sensorimotor-representations/)
*	[Cosyne 2017: How Do Cortical Columns Learn 3D Sensorimotor Models?](/neuroscience-research/research-publications/posters/cosyne-2017-how-do-cortical-columns-learn-3d-sensorimotor-models/)
