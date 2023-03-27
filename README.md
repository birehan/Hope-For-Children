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

# Users schema

|Attribute               | Required|
|--------------          |:-------:|
|Username                |True     |
|Email                   |True     |
|Password                |True     |
|First Name              |True     |
|Last Name               |True     |
|Title                   |True     |
|Residence               |True     |
|Resume/CV               |False    |
|Gender                  |False    |
|Date of Birth           |False    |
|About                   |False    |
|Timestamp               |default  |

# UserProfile Schema
|Attribute               | Required|
|--------------          |:-------:|
|UserId                  |ForeignKey(User)     |
|Linkedin                |False    |
|Education               |False    |
|Certification           |False    |
|Skills                  |ForeignKey(Skill)    |
|Timestamp               |default  |          

# Client SChema
|Attribute               | Required|
|--------------          |:-------:|
|ClientId                |True     |
|Email                   |True     |
|Organization            |False    |
|HiringManagerName       |False    |
|CareerSite              |False    |
|password                |True     |
|Timestamp               |default  |
# Skill Schema
|Attribute               | Required|
|--------------          |:-------:|
|skillId                 |default  |
|name                    |False    |
