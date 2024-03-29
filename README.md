# User Registration Next.js/NestJs



## Run Project - VSCODE

Clone the project

```bash
git clone https://github.com/yemredogru/Dbase-case.git
```

Install Dependencies - Install Node.js/Windows

```bash
  
Go to the official Node.js website: [Node.js](https://nodejs.org/en/download/) Download Page

```
```bash
Choose the "LTS" (Long-Term Support) version in the middle of the page   and download the "Windows Installer."
```
```bash
Run the downloaded .msi file by double-clicking it.
The installer will guide you through the installation steps. You can use the default options during the installation.
```
```bash
Once the installation is complete, Node.js and npm (Node.js Package Manager) will be successfully installed on your computer.
```
Install Dependencies - Install Node.js/MacOs

```bash
Go to the official Node.js website: [Node.js](https://nodejs.org/en/download/) Download Page

```

```bash
Run the downloaded .pkg file by double-clicking it.
```
```bash
The installer will guide you through the installation steps. You can use the default options during the installation.
```
```bash
Choose the "LTS" (Long-Term Support) version in the middle of the page and download the "macOS Installer."
```
```bash
Once the installation is complete, Node.js and npm will be successfully installed on your computer.
```
Install Dependencies - Install MongoDB/Windows
```bash
  Go to the official MongoDB website: [MongoDB](https://www.mongodb.com/try/download/community) Download Page

```
```bash
In the "Community Server" section, click the "Download" button to go to the download page.
```
```bash
Download the .msi file by clicking the "Download" button.
```
```bash
Run the downloaded .msi file by double-clicking it.
```
```bash
The installer will guide you through the installation steps. You can choose the "Complete" option to proceed.
```
```bash
You can also choose to install MongoDB Compass during the installation.
```
```bash
Once the installation is complete, MongoDB will be successfully installed on your computer.
```
Install Dependencies - Install MongoDB/MacOs
```bash
Go to the official MongoDB website: [MongoDB](https://www.mongodb.com/try/download/community) Download Page

```
```bash
In the "Community Server" section, click the "Download" button to go to the download page.
```
```bash
Download the .tgz file by clicking the "Download" button.
```
```bash
Extract the downloaded .tgz file by double-clicking it.
```
```bash
Open Terminal and navigate to the extracted directory (cd <extracted directory>).
```
```bash
To start MongoDB, run the ./mongod command in the terminal.
You can also download and install MongoDB Compass for a graphical interface.
```
```bash
To stop MongoDB, press Ctrl + C in the terminal.
Once the installations are complete, Node.js and MongoDB will be successfully installed on your computer.
```
Run Backend
```bash
  cd Dbase-case
```
```bash
  cd backend
```
```bash
  npm install
```
```bash
  create a .env file
```
```bash
  add this line to env file MONGO_URI=mongodb://127.0.0.1:27017/DbCase
```
```bash
  npm run start
```

The application will start running on localhost:3000.

Run Frontend
```bash
  cd ../frontend
```

```bash
  npm install
```

```bash
  npm run dev
```

The application will start running on localhost:3001.

We can register by using to the localhost:3001 link in our browser.


