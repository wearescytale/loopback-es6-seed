# Loopback ES6 Seed
* Custom model folder structure
* Automatically controller and service loaders
* Environment configuration for application settings
* Unit test and coverage setup
* Project root added has `require` lookup path

## How to use
To use the clone the repository into a folder and change the default origin so that you can still track changes made to the seed project.

```
git clone --origin seed-origin git@github.com:wearescytale/loopback-es6-seed.git <project_name>
```

## Folder structure
We changed the default folder structure to keep thing more organized. Instead of having a list of `.js` and `.json` files inside `common/models` we use a folder-first structure. This results in each model being inside a folder with the model name. Inside each folder we have the `model-name.js` and `model-name.json` together with two folders `controllers` and `services`. The `controllers` folder is where all custom endpoints are saved on for each file. The `services` folder is where all reusable code for that model lives.

Loopback will automatically look for the model definition inside every `common` child folders thanks to the automatic lookup system implemented in `modal-config.local.js`. This is needed since the `modal-config.json` doesn't accept path with globs.

## Automatically controller and service loader
Every custom endpoint inside the controller folder is automatically loaded into the model without having to require it on the `modal-name.js`. This reduces the boilerplate around creating new endpoints.

Just like the endpoints the services are also automatically loaded into the model, with one particularly difference. On each model is created a `services` objects to store all services. This way we have a clear distinction between reusable and endpoints methods, since both are static. Every file inside the services folder is loaded into the `services` object with his filename (converted to camel case) has key. this way a `auth.js` service file will be available has `ModelName.services.auth`.

## Environment Configurations
Loopback automatically loads his configurations based on the current environment. We created a similar system for custom configuration used by the application. All environment configurations are saved inside the `environment` folder on the project root. Inside it there needs to be a file for every environment used.

To use this configurations we load the `environment` folder instead of individual files. This way the correct file is automatically selected based on the `NODE_ENV` variable (this defaults to `dev` if no variable is set). We also throw an error is a configuration file is missing for that environment.
