# mini-microservices-app-template
## A simple template on how to build microservices app, and Dockerize it with Kubernetes and Skaffold.
### This app consists of 5 servces:
1. posts
  - allow user to create post
2. query
  - get all post created by user 
3. moderation
  - add status to comment: accepted, pending or rejected. Comment with word "orange" will be rejected
4. event-bus
  - handle events between services. Event including PostCreated, CommentCreated,  CommentModerated and CommentUpdated
5. comment
  - allow user to add comment under posts

## Simple UI of this app
![image](https://user-images.githubusercontent.com/35439849/101474063-9220f880-3985-11eb-93b0-84d9cd845f0d.png)

## Simple Architecture of the app

## How to use the app
1. Clone the repo
2. cd to the mini-microservices-app-template directory
3. Depends on you are windows/Mac/Linux user, go to the following file, add `127.0.0.1 posts.com` at the end
4. In the mini-microservices-app-template directory, `run skaffold dev`
5. Open your browser and go to posts.com. Now, you can create your first post. Noted that this app is a simple template, you need to refresh your browser to get the new added post/comment.
    
