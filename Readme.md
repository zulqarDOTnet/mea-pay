# MeaPay, renamed from gecPAY
MEA Utilize Provider's, Online Payment Application.

Frontend UI Versions:
————————————————
Angular - 18.1.4
Angular Material: 18.1.4
Bootstrap: 5.3.3
jQuery: 3.7.1
Node: 18.20.4
npm: 10.7.0

Backend Versions:
————————————————
Java: 17.0.12
Maven: 3.8.7
Spring Boot: 3.3.2

## Contents

- [Operating System](#os)
- [Development Environment](#env)
- [Editor](#vsc)

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

* Using the built-in Java from Android Studio

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

**Running the Backend EndPoint API's Server**

>> First time
```sh
zulqar@mint:~$ cd mea-pay-backend
zulqar@mint:~$ mvn clean package
```

>> Run
```sh
zulqar@mint:~$ java -jar target/meapay-0.0.1-SNAPSHOT.jar
```

**Running the Frontend NodeJS Server**

>> First time
```sh
zulqar@mint:~$ cd mea-pay-frontend
zulqar@mint:~$ rm -rf node_modules && rm -f package.json.lock && npm install
```

>> Run
```sh
zulqar@mint:~$ ng serve
```

http://127.0.0.1:4200

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
