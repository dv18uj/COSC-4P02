
# COSC 4P02


Brock University and Niagara-on-the-Lake Museum require software that allows visitors
to learn and explore history showcased by the museum in the form of an interactive
timeline system. The application will provide visuals of historic significance and upon
interaction from the user, it will provide further information on the topic. The software
will make use of the museum’s database in-order to provide historical background.

The interactive timeline system will help visitors retrieve historical information in a
convenient and interactive manner.
Museums commonly use interactive tools to:
- Engage the audience.
- Provide a sensory element to the information being given.
- Users will leave the museum with a more in depth knowledge and a memorable experience.



## Acknowledgements

 - [ThreeJS](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
 - [React Native](https://reactnative.dev/docs/intro-react-native-components)
 - [Orbit Controls](https://sbcode.net/react-three-fiber/orbit-controls/)


## Deployment

To install libraries for the project run

```
npm install 
```

#### Expo does not support past Node 16.90.0
 - For MacOS: using node's version management to install Node v16:
```
npm install -g n
n 16.90.0
```
- To check version:
```
node -v
```
Once installed the working directory is `cd Desktop/COSC-4P02/PanoTourAPP`
- To run IOS/Android version (Currently WIP) and scan QR code
```
npx expo start
```
To use the currently working web server build with 
```
npx expo export:web
```
Once the webpack is compiled the project can be ran with
```
npx serve web-build
```
## Running Tests

To run tests, run the following command

```
npm run test
```


## Authors

- [Diego Vergara](https://github.com/dv18uj)
- [Michael Wisniewski](https://github.com/akaJengo)
- [Wayne Bessey](https://github.com/WayneB17)
- [Zachary McGovarin](https://github.com/OkayHmm)
- [Haseeb Ahmad](https://github.com/zacole123)
- [Alexander Gibson](https://github.com/AlexGibby2000)
- [Micah Rose-Mighty](https://github.com/MicahRM)
- [Samuel Onabolu](https://github.com/topmansam)

