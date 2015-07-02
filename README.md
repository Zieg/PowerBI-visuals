# Microsoft Power BI Visuals
Power BI Visuals is an visualization engine used by [Microsoft Power BI](https://powerbi.microsoft.com/) project. It provides both a collection of visual elements such as the Bar chart, Column chart, etc and the visualization framework itself so anyone can build a custom visual to meet their own needs or embeed an exisitng visualization element to their own page.

## What is included

1. `build` folder representing pre-built version of Power BI Visuals library so that you can start using it right away.
2. `src` folder includes library source code for your experiments and if you will desire to create a new visual.
3. `src\Clients\PowerBIVisualsRunner` is a sample application which could be used as a playground for existing and new visuals.

## Contribute
Coming soon
https://github.com/Microsoft/PowerBI-Visuals/edit/master/Contribute.md

## Documentation

*  [Quick tutorial](/GettingStarted.md)
*  [API specification](To be autogenerated from JSDoc)
*  [Homepage](https://powerbi.microsoft.com/)


## How To Build and Run

### Prerequisites

To build the library and run run sample application you will need:

- A Windows 8.1 64-bit machine with minimum 4 GB of RAM
- [Visual Studio Community 2013](https://www.visualstudio.com/en-us/news/vs2013-community-vs.aspx) (Free for use)
- [TypeScript 1.4 for Visual Studio 2013](https://visualstudiogallery.msdn.microsoft.com/2d42d8dc-e085-45eb-a30b-3f7d50d55304)
- [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/download/)

In order to run unit tests you will also need [Chutzpah JavaScript test runner](https://github.com/mmanela/chutzpah):
- Command Line Runner [nuget](https://www.nuget.org/packages/Chutzpah) or [chocolatey](http://chocolatey.org/packages/chutzpah)


### Build Power BI Visuals Library

In order to build the Power BI Visuals, ensure that you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:

```
git clone https://github.com/Microsoft/PowerBI-Visuals.git
```

Change to the PowerBI-Visuals directory:

```
cd PowerBI-Visuals
```

Install Grunt and dev dependencies:

```
npm install -g grunt-cli
npm install
```

Use the following commands to build and test:
```
npm run build                               # Build PowerBI Visualsinto `built` folder
npm test                                    # Run unit tests (requires 'chutzpah', see Prerequisites)
```

### Run Sample App

To run sample app open `src\PowerBIVisualsClient.sln` in Visual Studio and then run *PowerBIVisualsRunner* project.

__Note__: This sample requires 64-bit mode of IIS Express:

1. Start Visual Studio and click on `Tools` -> `Options`.
2. From the tree: `Projects and Solution`s, then `Web Projects`.
3. Make sure that `Use the 64 bit version of IIS Express for web sites and projects` is checked (press OK)

### Copyrights

Copyright (c) 2015 Microsoft

See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
