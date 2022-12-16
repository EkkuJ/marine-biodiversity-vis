
# Marine biodiversity: Visualizing observations of marine species as a time series

Visualization available at https://marine-biodiversity-vis.netlify.app/

This visualizaion is based on the open data of Ocean Biodiversity Information System (OBIS). Python and pandas was used for fetching, processing and aggregating the data and final browser based visualization was built with React.

## Motivation
Oceans combined cover over 75 per cent of the surface of our globe. They constitute a living for over three billion people and yield resources with estimated worth of $3 trillion on a yearly basis. They also contribute by absorbing carbon dioxide and excess heat from the athmosphere. Thus, in may ways, oceans play an essential role in our journey to a sustainable future.

Recently, however, the water masses have been affected by climate change, pollution, eutrophication, and overfishing. These factors have led to, among other effects, radical changes in coastal and marine ecosystems. To battle this change Goal 14 of the UN Sustainable Development Goals aims to conserve marine resources and encourage sustainable use of the oceans. More specifically, target 14.A aims to increase scientific knowledge and research capacity aimed to improve ocean health and contribution of marine biodiversity to the development of developing countries.

To contribute to this target, the visualization creates an animated geospatial mapping of observations of various marine species. The mapping aims to create and distribute knowledge of the visualized species in an engaging and interactive manner and thus drive awareness of matters related to marine biodiversity.
 
## Information usability and interaction
The main target groups of this visualization are students and young professionals from Finland. With the visualization, they are able to traverse through data of different years using a scroll bar, or just click on Play animation and watch an animation go though the years by itself. They can also choose the area they want to visualize by scrolling through the map. By seeing the changes in observation of mafine species, I believe the users will learn the trajectories related to biodiversity. This hypothesis could be seen as verified when we see the users switching back and forth between the years where most of the changes can be seen.

To interact with the time in the visualization, the users have two options. Firstly, they can choose to let the software play the full animation and just watch. The animation takes around three minutes but the user also has an option to toggle the animation speed. Optionally, they can also specify the years they wish to visualize on the map. They can, for example check what the data looks like from last year, and then change to the data of 2000. Ideally, the users woud first scan through a couple of years, then play the full animation, and after come back to see the most important years, once again.

The data used is observations about marine species at certain locations. As there is a massive number of these observations, I first created aggregations for each species mapped to their geological location. The raw data is collected from OBIS. The organization connects over 500 institutions from 56 countries, and together they provide over 45 million observations from all over the world. It is the best source of marine data available. However, from regions where observation equipment and infrastructure are not as established, the data can contain null observations.

## Temporal aspects
The motivation behind the visualization is to create a compelling story that provokes emotions and calls for action. To achieve this, the visualization aims to take the user on a journey that they can relate to and feel connected to, and then convey the reality of the current trajectory. In order to create the connection, the user must feel comfortable with the context and setting of the visualization and build a solid base to further engage from. The key of feeling comfortable with the setting is to understand the temporal development of the animation, and thus time is the single most important aspect of the visualization to capture correctly.

Brehmer et. al. (2017) introduce a design space and some key considerations for presenting timeline stories with the aim of balancing expressiveness and effectiveness. They identified three variable dimensions of timelines, namely representation, scale, and layout. Although the development of time in the marine biodiversity visualization is conveyed through the animation, it also does so with a separate, interactable timeline. To keep the visualization effective, it uses the most intuitive and commonly used timeline designs of the 20 viable timeline designs that Behmer et. al. introduced comprising a linear representation, a chronological scale, and a unified layout. This intuitively gives the user a strong hint of what the visualization does, and how to follow it, thus leaving more cognitive resources for following the animation.

Although the main representation will be linear, there is also a point to be made for the seasonality of the movements of marine species. For example, the data clearly shows that the shrimp population in the East coast of Canada decreases during spring and increases during fall. To counteract that, the visualization could have taken advantage of a secondary, radial representation (Brehmer et. al., 2017) to indicate the current season. Another way to tackle the same problem would have been to aggregate the data on a yearly basis as then the data itself would have accounted for seasonal variability. However, with this approach a new issue might have arised regarding the amount of different data points. If the data is aggregated to too few chunks, the animation might have moved too fast for the user to keep track of the changes thus damaging the effectiveness of the visualization. In the end, this issue was tackled by showing the current moth as a textual representation.

In practice, the temporal development in the visualization is captured within three components. Firstly, an animated map visualizing the changes in observation counts. Secondly, below the map, a linear, chronological timeline showing the current moment in time, which the user can also interact with. Lastly, a textual indicator to demonstrate the cyclic nature of seasons.

## Spatial aspects
In addition to time, an important aspect to communicate to the user is the spatial setting. A clearly defined location within the animation will ground the context into the real world and thus creating a stronger connection between the user and the story. To definitively communicate the spatial context, the visualization is based on a map.

Andrienko et. al. (2010) suggest that the visualization of location is most often achieved through maps. However, they assess that the static nature of maps often allows for limited amount of temporal information and in order to tackle this one must take advantage of interactable maps. In the visualization, the spatial and temporal aspects are connected through an intractable and animated map.

## References

M. Brehmer, B. Lee, B. Bach, N. H. Riche and T. Munzner, "Timelines Revisited: A Design Space and Considerations for Expressive Storytelling," in IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 9, pp. 2151-2164, 1 Sept. 2017, doi: 10.1109/TVCG.2016.2614803.

Andrienko, Gennady, et al. "Space, time and visual analytics." International journal of geographical information science 24.10 (2010): 1577-1600.
