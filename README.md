# Generate a big amount of tests

This repo was created for jest learning purposes. It aims to generate a big amount of tests (based in a template) to verify if in some circunstances a test can affect another one, when we mock env vars or localstorage, for example.

## Using

Install the project dependencies (only Jest) running the following command:

```
yarn 
```

After that, generate your test files using the shell script create-tests:

```
./create-tests.sh envvar 15
```

The command above accepts 2 parameters: 

* **Test template name:** The test template used to generate the tests. Accepts `envar` or `localstorage`. **Default:** `envar`.
* **Number of generated files:** Number ot test files that will be generated. **Default:** `10`.

## Running the tests

Now, you can run the generated tests using the following command:

```
yarn test
```
