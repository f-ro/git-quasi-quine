Project Installation Instructions (Mac OS X):

---Requirements---

The software below must be installed in your machine in order for the steps below to work (versions listed are those used during development and testing of this app):
● Node.js (v14.15.5)
● npm  (v6.14.11)
● git  (v2.10.1)

If you are unsure as to whether the software above is installed in your machine, use the following commands in Terminal. If nothing is displayed, that means it's not installed, otherwise the commands will display a path:

which node
which npm
which git

To verify their versions:

node --version
npm --version
git --version

---Installation Steps---

1) In Terminal, cd to a directory of your choice where the project's directory may be downloaded to

2) Run the following command to download the project's source code (1 directory will be created):

git clone https://github.com/f-ro/git-quasi-quine.git

3) A new directory named git-quasi-quine will have been created, cd into that directory

4) Run the following command to install the project dependencies:

npm install

6)Run the following command to install to start your local server:

npm start

7) When the server is done launching, your default browser should run automatically and display the project's landing page, otherwise manually copy-paste the url displayed in Terminal after the previous npm start command completes, e.g. http://localhost:3000

8) The project should be fully functional in your browser


---Uninstall---

Simply delete the project's directory (git-quasi-quine)