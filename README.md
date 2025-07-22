# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

---

## Navigation

- **app directory**: A special directory containing only routes and their layouts. Any files added to this directory become a screen inside our native app and a page on the web.
- **Root layout**: The *app/_layout.tsx* file. It defines shared UI elements such as headers and tab bars so they are consistent between different routes.
- **Not Found Screen**: Expo Router uses a special *+not-found.tsx* file to handle this case.
- **File name conventions**: Index file names, such as *index.tsx*, match their parent directory and do not add a path segment. For example, the index.tsx file in the app directory matches / route.

## App Icon
- The App Icon route is defined in ```app.json``` file

## Splash Screen
- The Splash Screen route is defined in ```app.json``` file, ```
- In order to test the Splash Screen we need to **create a preview or a production build**