Basic Node Discord Bot
----------------------
This project is for running a basic discord bot with node.js and discord.js

Set-up Locally
--------------
1. Clone Github Repo in perfered directory
2. Cd into repository
3. Add .env file with CLIENT_TOKEN='*insert personal bot token*'
4. Run the command: Docker build -t discordbot
5. Run the command: Docker run -d --name discordbot discordbot
6. Interact with bot in Discord freely
7. To stop bot run the command: Docker rm -f discordbot

Set up through AWS
------------------
1. Create EC2 instance with AWS with vockey pairing
2. SSH to instance 
3. Install git and docker 
4. To install git run command: Sudo yum install -y git
5. To install docker run command: Sudo yum install -y docker
6. Clone repo to aws instance
7. Cd into repo
8. Add .env file with CLIENT_TOKEN='*insert personal bot token*'
9. Run the command: Docker build -t discordbot
10. Run the command: Docker run -d --name discordbot discordbot
11. Interact with bot in Discord freely
12. To stop bot run the command: Docker rm -f discordbot

Technology Used
----------------
1. Github - https://github.com/
2. Docker- https://www.docker.com/
3. AWS - https://aws.amazon.com
4. Node.js - https://nodejs.org/en
5. Discord.js -https://discord.js.org
6. Discord - https://discord.com
7. Discord Dev Portal - discord.com/developers

Background
----------
1. Discord.js - https://discordjs.guide/#before-you-begin
2. Node.js - 
3. Aws EC2 - https://aws.amazon.com/pm/ec2/
4. SSH to AWS - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html
5. Docker Build - https://docs.docker.com/engine/reference/commandline/build/
6. Docker Run - https://docs.docker.com/engine/reference/commandline/run/
