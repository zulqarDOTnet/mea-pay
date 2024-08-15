# MeaPay, renamed from gecPAY

**Backend Versions**<br>
Java: 17.0.12<br>
Maven: 3.8.7<br>
Spring Boot: 3.3.2<br>

**Frontend Versions**<br>
Angular: 18.1.4<br>
Angular Material: 18.1.4<br>
Bootstrap: 5.3.3<br>
jQuery: 3.7.1<br>
Node: 18.20.4<br>
npm: 10.7.0<br>

## Contents

- [Operating System](#operating-system)
- [Development Environment](#development-environment)
- [Build & Run, API Server](#running-the-backend-endpoints-api-server)
- [Build & Run, Frontend UI Server](#running-the-frontend-nodejs-server)
- [Editor](#editor)
- [Author](#author)

## Operating System

```sh
zulqar@mint:~$ neofetch

`.-::---..                     Linux Mint Debian Edition
      .:++++ooooosssoo:.       -------------------------
    .+o++::.      `.:oos+.     OS: LMDE 6 (faye) x86_64
   :oo:.`             -+oo:    Host: ThinkPad E15
 `+o/`    .::::::-.    .++-`   Kernel: 6.1.0-21-amd64
`/s/    .yyyyyyyyyyo:   +o-`   Uptime: 12 days, 19 hours, 6 mins
`so     .ss       ohyo` :s-:   Packages: 3819 (dpkg), 8 (flatpak)
`s/     .ss  h  m  myy/ /s``   Shell: bash 5.2.15
`s:     `oo  s  m  Myy+-o:`    Resolution: 1920x1080
`oo      :+sdoohyoydyso/.      DE: Cinnamon 6.2.9
 :o.      .:////////++:        WM: Mutter (Muffin)
 `/++        -:::::-           WM Theme: Numix-Cinnamon-Semi-Transparent (Mint-Y)
  `++-                         Theme: Adapta [GTK2/3]
   `/+-                        Icons: Mint-Y [GTK2/3]
     .+/.                      Terminal: gnome-terminal
       .:+-.                   CPU: Intel i5-10210U (8) @ 4.200GHz
          `--.``               GPU: Intel CometLake-U GT2 [UHD Graphics]
                               Memory: 14035MiB / 31903MiB
```

## Development Environment

**Using the built-in Java from Android Studio**

```sh
zulqar@mint:~$ java --version
openjdk 17.0.12 2024-07-16
OpenJDK Runtime Environment (build 17.0.12+7-Debian-2deb12u1)
OpenJDK 64-Bit Server VM (build 17.0.12+7-Debian-2deb12u1, mixed mode, sharing)
```

```sh
zulqar@mint:~$ sudo apt install nodejs

zulqar@mint:~$ node -v
v18.20.4
```

```sh
zulqar@mint:~$ npm -v
10.7.0
```

```sh
zulqar@mint:~$ sudo apt install maven -y

zulqar@mint:~$ mvn --version
Apache Maven 3.8.7
Maven home: /usr/share/maven
Java version: 17.0.6, vendor: JetBrains s.r.o., runtime: /home/zulqar/android-studio/jbr
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "6.1.0-21-amd64", arch: "amd64", family: "unix"
```

```sh
zulqar@mint:~$ sudo npm install -g @angular/cli

zulqar@mint:~$ ng version
Angular CLI: 18.1.4
Node: 18.20.4
Package Manager: npm 10.7.0
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1801.4 (cli-only)
@angular-devkit/core         18.1.4 (cli-only)
@angular-devkit/schematics   18.1.4 (cli-only)
@schematics/angular          18.1.4 (cli-only)
```

## Running the Backend EndPoints API Server

> First time
```sh
zulqar@mint:~$ cd mea-pay-backend
zulqar@mint:~$ mvn clean package
```

> TO, Run!
```sh
zulqar@mint:~$ java -jar target/meapay-0.0.1-SNAPSHOT.jar
```

http://localhost:8393

## Running the Frontend NodeJS Server

> First time
```sh
zulqar@mint:~$ cd mea-pay-frontend
zulqar@mint:~$ rm -rf .angular && rm -rf dist && rm -rf node_modules && rm -f package.json.lock && npm install
```

> TO, Build
```sh
zulqar@mint:~$ ng build

> TO, Run!
```sh
zulqar@mint:~$ ng serve
```

> OR

```sh
zulqar@mint:~$ ng serve --configuration production
```

http://127.0.0.1:4200

> Admin Login
```sh
Admin
admin@pass
```

> User
```sh
zulqar
user@pass
```

## Editor

**Visual Studio Code**

```sh
zulqar@mint:~$ code -v

1.92.1
eaa41d57266683296de7d118f574d0c2652e1fc4
x64

Version: 1.92.1
Commit: eaa41d57266683296de7d118f574d0c2652e1fc4
Date: 2024-08-07T20:16:39.455Z
Electron: 30.1.2
ElectronBuildId: 9870757
Chromium: 124.0.6367.243
Node.js: 20.14.0
V8: 12.4.254.20-electron.0
OS: Linux x64 6.1.0-21-amd64
```
## Author

[![Author](https://img.shields.io/static/v1?label=author&message=Zulqarnain%20Zafar&color=green)](https://zulqar.net)
