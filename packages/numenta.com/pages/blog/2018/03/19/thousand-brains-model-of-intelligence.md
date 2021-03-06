---
author: Numenta
description: 'In our paper, A Theory of How Columns in the Neocortex Enable Learning the Structure of the World, we proposed that a single cortical column can learn models of complete objects through movement. Jeff Hawkins and Christy Maver explain our “Thousand Brains Model of Intelligence” and its implications for AI in this blog.'
date: 2018/03/19
hideImage: false
image: ../images/thousand-brains.jpg
org: Jeff Hawkins & Christy Maver
keywords: "thousand brains model"
title: "The Thousand Brains Model of Intelligence"
header: "The Thousand Brains Model of Intelligence"
type: post
dropcap: false
---

*An updated version of this blog was published in January 2019 and is available [here](/blog/2019/01/16/the-thousand-brains-theory-of-intelligence/).*

In our most recent peer-reviewed paper, [A Theory of How Columns in the Neocortex Enable Learning the Structure of the World](/resources/papers/a-theory-of-how-columns-in-the-neocortex-enable-learning-the-structure-of-the-world/), we proposed a surprising and big idea. We said that cortical columns have more powerful recognition and modeling capabilities than previously assumed and that a single cortical column can learn models of complete objects through movement. This idea has large implications for how we think about biological and machine intelligence, which we will expand on in this post.

To understand these implications, we first need to revisit what we proposed in the paper. We said that there is a key feature common to all cortical columns: a signal representing **location**. This location signal represents a location relative to the object being sensed, not relative to the person sensing the object. Every column combines its sensory input with the location signal. In other words, a column knows not only what feature is being sensed, but where that feature is on the object. As we move our sensors, the “features at locations” input is integrated over time so that a single column can learn and recognize complete objects.

To illustrate this concept, imagine touching a coffee cup with one finger. As you move your finger over the cup, you sense different parts of it. You might feel the lip, then the curve of the handle, then the flatness of the bottom. Each sensation you receive is processed relative to its location on the cup. The curved handle of the mug is always in the same relative position on the cup, it is not a feature relative to you. At one moment it might be on your left and another moment on your right, but it is always in the same location on the cup. If you were asked to reach into a box and identify this object by touching it with one finger, you probably couldn’t with a single touch. But if you continued to move your finger over the object, you would integrate more input, until you recognized with certainty that the only object containing this set of features at these locations is the coffee cup.

One of the major implications of our proposal, which we did not elaborate on in the paper, is an idea we call the “Thousand Brains Model of Intelligence.” If every cortical column is able to learn complete objects, then our brain is not building one model of the world. It’s building thousands of models in parallel!

The Thousand Brains Model of Intelligence suggests we need to rethink how the entire neocortex processes information. In the classic view, the cortex receives input from a sensory organ and processes it in a series of hierarchical steps. Sensory input ascends from region to region, and at each level, cells respond to larger areas and more complex features of a sensory array. It’s commonly assumed that complete objects can only be recognized at a high enough level in the hierarchy where cells can take in the entire sensory array.

In the Thousand Brains Model of Intelligence, each column creates complete models of its world, based on what it can sense as its associated sensor moves. Connections in the cortex, both hierarchical connections and connections between adjacent columns, allow columns to work together to quickly identify objects. Imagine the same mug from before, but this time you grasp it with multiple fingers at the same time. Where before you had to move your finger to recognize the cup, now you might be able to recognize it with a single grasp. The columns associated with each finger don’t have enough information on their own to identify the cup, but connections between columns allow them to reach the correct answer more quickly. The same process occurs in all your senses, so cortical columns that process visual input can communicate with columns processing touch. There are connections in the cortex between low level sensory regions that don’t make sense in the classic hierarchical model of the cortex but do make sense in the model we proposed.

So, an individual column can infer through movement (one finger touching the mug multiple times) or through long-range connections between columns that share information to agree on what the object is (grasping and looking at a mug). Here is an illustration showing a cartoon version of the classic hierarchy and our proposed alternate model. Notice that we are not suggesting that the cortex is not organized as a hierarchy of regions. It is, and the hierarchy is important. But complete models of objects exist at each level of the hierarchy. We will expand on this idea in future papers.

![Thousand Brains Model of Intelligence - Illustration](../images/classic-hierarchy-vs-proposed-model.png)

### Implications for AI
If our proposal is correct, that brains are organized this way, then it begs the question: Do we also need to build intelligent machines this way? Today’s artificial neural networks work on the classic hierarchical view, often with one hundred or more levels! And these networks are very good at classifying images and other patterns. So, it might appear that the Thousand Brains Model of Intelligence is not required for AI. However, it is widely believed that today’s AI is not close to the flexibility of human intelligence, and it is not nearly as capable in applying learning in one domain to different types of problems, a.k.a. generalization.

There are two reasons to suggest that the Thousand Brains Model of Intelligence is required to solve these and other challenges. First, our proposal says that columns in the cortex learn the three-dimensional shape of objects, not just the two-dimensional shape that appears on our sensors. This provides a basis for learning the behaviors of objects, or how the shape and appearance of an object changes over time when we interact with it. A three-dimensional representation of objects also provides the basis for learning compositional structure, i.e. how objects are composed of other objects arranged in particular ways. We are currently figuring out the detailed mechanisms of how columns do these functions. Second, the Thousand Brains Model of Intelligence provides a means for integration across sensory modalities, what is sometimes called “sensor fusion.” It provides a model for how learning in one modality, such as touch, can be applied to and integrated with other modalities, such as vision.

The Thousand Brains Model of Intelligence is a rich concept that allows us to explain many mysteries of the brain. Whether it will prove to be indispensable to AI or not remains to be seen. Our research suggests it will.
