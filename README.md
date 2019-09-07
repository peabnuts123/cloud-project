# Cloud Project
Learning about cloud infrastructure and the application delivery lifecycle by creating a simple, yet broad application - one piece at a time.

I intended to write blog posts for each stage of the development, and potentially medium.com posts for each large chunk of the project. The specific goals of this project are still being decided, whether it serve as a how-to for others to learn, or be a proof-of-concept for my own learning, etc.

## Plan

This is the current plan for the development of the project. The application will be developed in steps, with each step layering in more functionality. Eventually, the application will be a fully-functioning web application with a broad array of features. The application will start simple, and slowly add more functionality with each step.

As each part of the application is developed, a docker container will be made to run that part locally. The containers will all be designed to run together in one big local environment.

  - Stage 0
    - Design web app for desktop and mobile
      - Figma
  - Stage 1
    - Static / Single-page-application (SPA) front-end
      - S3 / Cloudfront
      - Preact
      - A SPA is chosen over a regular web server because it adds more infrastructure
  - Stage 2
    - API
      - ASP.NET Core, likely
      - Probably start off with Lambda, maybe investigate EC2
  - Stage 3
    - An easy database
      - Probably NoSQL
      - Is this actually easy for dotnet core to use?
      - If so, maybe drop this step, or maybe the client can talk straight to the DB
  - Stage 4
    - A real database
      - RDS, probably?
      - EF Core 🙂
  - Stage 5
    - GraphQL with your database
      - Compare against previous work, how it improves, what problems it solves
  - Stage 6
    - ?

## Misc goals
  - NoSQL database (DynamoDB?, DocumentDB?)
  - Proper DB (RDS, Aurora?)
  - Document storage / S3 storage
  - Some kind of CMS? Hosted on EC2 perhaps?
  - GraphQL with Postgres
  - Compare the app in Lambda vs the app in EC2
  - Auth of some kind – probably can't Terraform this 😅
  - Monitoring / Logging / infrastructure in production

## Application design
  - Social media kind of thing
  - Keep this real simple
  - There are users
  - Users can make posts
    - Each user has a feed of posts
    - Posts are markdown
    - ? Posts can have an attachment / image ?
  - Users can follow other users
  - Users' homepage is the feed of the users they follow
  - Users have a small profile
    - Picture
    - Information
    - URL
    - Metadata

