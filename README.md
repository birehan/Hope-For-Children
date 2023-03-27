# Hope-For-Children-Website
This is the official repository for the Hope For Children website, a non-profit organization dedicated to improving the lives of children in need around the world. The website provides information about the organization's mission, programs, and events, as well as opportunities for donations and volunteer work. 
<h1 style={{text-align:"center"}}>Database Schemas</h1>

# Project Schema
|Attribute               | Required|
|--------------          |:-------:|
|id                          |True     |
|project title               |True     |
|project description         |True     |
|image                       |True     |
|Project File                |True     |
<br>

# Program Schema

|Attribute               | Required|
|--------------          |:-------:|
|id                          |True     |
|project title               |True     |
|project description         |True     |
|image                       |True     |
|Project Activities          |True     |

# Gallery Schema
|Attribute               | Required|
|--------------          |:-------:|
|id                          |True     |
|Gallery Category            |True     |
|Image File                  |True     |
|Image caption               |True     |

# Donation Schema
|Attribute               | Required|
|--------------          |:-------:|
|id                      |True     |
|donor name              |True     |
|donor email             |True     |
|donated amount          |False    |

# Skill Schema
|Attribute               | Required|
|--------------          |:-------:|
|skillId                 |default  |
|name                    |False    |
