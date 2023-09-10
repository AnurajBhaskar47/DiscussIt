# DiscussIt - A Reddit Clone

DiscussIt is a Reddit clone web application that allows users to engage in discussions on various topics, post content, upvote/downvote posts and comments, and much more. It is built upon the foundation of the "Josh Tried Coding Breadit" project, providing a familiar Reddit-like experience while adding some unique features of its own.

![image](https://github.com/AnurajBhaskar47/DiscussIt/assets/97795939/17875f62-3bee-45a4-b68c-f206cd6a2a43)


## Features

- **User Authentication**: Secure user registration and login system.<br>
          <img src="https://github.com/AnurajBhaskar47/DiscussIt/assets/97795939/c14952d7-65b3-4bda-b847-5bb2ee9cd4d3" width="850" height="410" alt="User Auth">
        
- **Post Management**: Create, edit, and delete posts.
        <img src="https://github.com/AnurajBhaskar47/DiscussIt/assets/97795939/8014415a-d7ad-4413-a80b-4d2186297fc2" width="850" height="410" alt="Post Management">
        
- **Comment System**: Engage in discussions by posting and replying to comments.
        <img src="https://github.com/AnurajBhaskar47/DiscussIt/assets/97795939/149d1bbc-7bbe-4760-acf4-773db73effa8" width="850" height="410" alt="Post Management">
     
- **Voting System**: Upvote and downvote posts and comments.
        <img src="https://github.com/AnurajBhaskar47/DiscussIt/assets/97795939/4b694758-3225-4d94-91e5-167efcbabdac" width="850" height="410" alt="Post Management">
       
- **Subreddits**: Organize content into categories, just like subreddits on Reddit.
          
- **User Profiles**: View user profiles and their post history.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## Getting Started

These instructions will help you set up the DiscussIt project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Prism](https://www.prisma.io/) (ORM)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AnurajBhaskar47/discussit.git

2. Navigate to the project directory:
       ```bash
   cd discussit
3. Install the project dependencies:
    ```bash
    npm install
    
4. Set up your Prisma environment:
   <ul>
      <li>
         Make sure you have Prisma installed globally:

   ```bash
   npm install -g prisma
   ```
      </li>
      <li>
      Initialize your Prisma project:
   
   ```bash
   prisma init
   ```
      </li>
      <li>
         Follow the prompts to set up your Prisma environment, choosing the appropriate database (e.g., PostgreSQL, MySQL, SQLite).
      </li>
      <li>
         Update the DATABASE_URL in your .env file with the connection URL generated by Prisma.
      </li>
   </ul>
6. Start the application:
   ```bash
   npm start
7. Access DiscussIt in your browser at http://localhost:3000.

### Contact
If you have any questions or suggestions, feel free to contact me at [bhaskar25903@gmail.com](url)
