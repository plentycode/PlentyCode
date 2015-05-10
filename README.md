# Plentycode.com

Demo page: [http://www.plentycode.com](http://www.plentycode.com).

## Getting Started

#### Prerequisites

You will need **git** to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Clone PlentyCode
To get started, please clone the repository:

```
git clone https://github.com/civanm/PL_CIM.git
cd PL_CIM
```

If you just want to start a new project:

```bash
git clone --depth=1 https://github.com/civanm/PL_CIM.git <your-project-name>
```


#### Install Dependencies


```
npm install
```
#### Build the app
After installing the package dependencies, it's time to build our application, do it running the gulps tasks:
```
gulp build
```
and then to uglify and minify release files, run:

```
gulp release
```

### Running the App 

Install a node.js tool called http-server. You can install http-server globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd release
http-server -a localhost -p 8000
