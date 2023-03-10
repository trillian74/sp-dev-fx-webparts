# Using Mobx with multiple stores

## Summary

A sample web part that uses the [Mobx](https://mobx.js.org/) library with multiple stores to keep track of the applications state.

<img src="assets/demo.gif"/>


## Compatibility

| :warning: Important          |
|:---------------------------|
| Every SPFx version is only compatible with specific version(s) of Node.js. In order to be able to build this sample, please ensure that the version of Node on your workstation matches one of the versions listed in this section. This sample will not work on a different version of Node.|
|Refer to <https://aka.ms/spfx-matrix> for more information on SPFx compatibility.   |

![SPFx 1.8.2](https://img.shields.io/badge/SPFx-1.8.2-green.svg) 
![Node.js v10 | v8](https://img.shields.io/badge/Node.js-v10%20%7C%20v8-green.svg) 
![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)
![Does not work with SharePoint 2019](https://img.shields.io/badge/SharePoint%20Server%202019-Incompatible-red.svg)
![Does not work with SharePoint 2016 (Feature Pack 2)](https://img.shields.io/badge/SharePoint%20Server%202016%20(Feature%20Pack%202)-Incompatible-red.svg "SharePoint Server 2016 Feature Pack 2 requires SPFx 1.1")
![Local Workbench Compatible](https://img.shields.io/badge/Local%20Workbench-Compatible-green.svg)
![Hosted Workbench Compatible](https://img.shields.io/badge/Hosted%20Workbench-Compatible-green.svg)
![Compatible with Remote Containers](https://img.shields.io/badge/Remote%20Containers-Compatible-green.svg)

For more information about SPFx compatibility, please refer to https://aka.ms/spfx-matrix

## Applies to

* [SharePoint Framework](https://learn.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
* [SharePoint Framework Web part Samples](https://github.com/pnp/sp-dev-fx-webparts)
* [Office 365 developer tenant](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-developer-tenant)

## Contributors

* Kemal Sinanagic / [@kemicza](http://twitter.com/kemicza) / kemicza@gmail.com

## Version history

Version|Date|Comments
-------|----|--------
1.0|May 24, 2019|Initial release


## Minimal Path to Awesome

```

>  This sample can also be opened with [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview). Visit https://aka.ms/spfx-devcontainer for further instructions.sh
$ git clone https://github.com/pnp/sp-dev-fx-webparts
$ cd sp-dev-fx-webparts/samples/react-mobx-multiple-stores
$ npm install
$ gulp serve
```

>  This sample can also be opened with [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview). Visit https://aka.ms/spfx-devcontainer for further instructions.

## Features

* Enforces that the state always needs be updated in **actions**, using the <em>always</em> flag for <em>enforceActions</em>.
* Demonstrates the **toJS** method to convert an observable array to a javascript structure. This is used to render the items in a DetailsList.
* Out-of-the-box MobX **decorators** to keep the code clean.
* **Asynchronous** actions
* MobX **computed** values
* **Typescript** version 3.3.4 using <em>@microsoft/rush-stack-compiler-3.3</em> for compatibility with the latest MobX version and typings


## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**


<img src="https://pnptelemetry.azurewebsites.net/sp-dev-fx-webparts/samples/react-mobx-multiple-stores" />
