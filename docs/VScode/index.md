### VScode 自定义设置「settings.json」

官方说明文档：https://code.visualstudio.com/docs/getstarted/settings

VS Code provides two different scopes for setting: 
* User Settings: 全局应用于你打开的VS Code 实例。 -- setting.json
* Workspace Settings: 存储在工作区内的设置，仅在工作区打开时应用。 -- 项目根目录 .vscode 文件夹

Workspace Settings override User Setting. 

需要解决的问题

1. import 换行
```javascript
// 现状
import {
  stat
} from "fs";
// 期待
import { stat } from "fs";
```

2.  数组格式
```javascript
// 现状
options: [{
        label: 'systemM.platformLevel',
        value: 'superadmin'
      },
      {
        label: 'systemM.tenantLevel',
        value: 'admin'
      },
    ]
// 期待
options: [
      {
        label: 'systemM.platformLevel',
        value: 'superadmin'
      },
      {
        label: 'systemM.tenantLevel',
        value: 'admin'
      },
    ]
```