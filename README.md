# English

## What is StoryTime?
StoryTime is a platform for amateur (or otherwise) writers, where people will be able to share their stories and read what others have shared. It is being built with Next and Slate. The CMS chosen was DatoCMS. Login will be done with Twitter auth, probably. I also plan on including internationalization, so interfaces work on both Brazilian portuguese and english.

## Why those technologies?
### Next
Next was picked because it offers Incremental Static Regeneration, which is, to me, a core functionality of the platform, as, most of the time, users will probably be reading a simple text, which doesn't have to be generated every time, and can be served as static HTML with no problem. Not only that, but changes to the text are probably not going to be frequent. Aside from this feature, Next also has api routes, which make it quite easy to do stuff like social authentication. The fact that I was already familiar with it also weighted on the decision.

### DatoCMS
I wanted a CMS so I could store content without using any database and even without having any backend whatsoever. I picked Dato because it provides a GraphQL API, which I like a lot and makes sense for the project, I liked their content modeling (including the Structured Text type of field, which I'll probably use for the main text of the chapters) and it seemed to have an easy integration with Next.

### Slate
As I wanted to use DatoCMS's Structured Text field, I also wanted a rich text editor that gave me a nice data structure. Not only that, but, as StoryTime already has a visual identity, I needed it to be flexible in how it looked. I also wanted it to be flexible on how it worked, so I could easily add whatever I felt was interesting and useful to writers. It took me some time to get used to working with it, but it delivered all of that.

### Social Authentication, and why Twitter?
As I said before, I didn't want to build a backend for this project, but I needed a way to authenticate my users, so social authentication was the best option. I picked Twitter because it seemed like the most fitting of all of them. It didn't have extra requirements, had some of the things I intend to store on my CMS and most people will probably already have a Twitter account anyway. I won't be doing any feed integration, though, at least for now.

### Chakra UI
I wanted something to speed up my design, and, knowing how easy it is to extend themes in Chakra and to build around their basic components, I had to use it. I tried creating my own little thing before deciding on it, and it was just too much work for what Chakra had already done, and done better, with built in accessibility concerns and a bunch of helpful components.

## How is it looking, though?
Well, I'm glad you asked. Here are some screenshots:

### Home Page
![Screenshot_1123](https://user-images.githubusercontent.com/54380823/137223768-90ed87f0-7917-4035-ac48-e60a09538d19.png)
(there's 2 login related call to actions there, but that's a remnant of a previous age where social authentication wasn't the idea yet)

### All authors
![Screenshot_1124](https://user-images.githubusercontent.com/54380823/137225998-56dc27a0-7be1-4b0c-8718-a4ee5c38157e.png)

### An author's page
![Screenshot_1125](https://user-images.githubusercontent.com/54380823/137226040-e7e52532-e38c-4884-ba52-b0e0649f42bc.png)

### A story's page
![Screenshot_1126](https://user-images.githubusercontent.com/54380823/137226582-e497fc54-cf05-4928-b91a-f3cdbce345de.png)

The other 3 menu items aren't done yet, but they will probably be similar in appearance to the all authors page.

### Rich Text Editor
![Screenshot_1128](https://user-images.githubusercontent.com/54380823/137230256-62062775-ec87-4a77-8439-8f02e08364bc.png)

