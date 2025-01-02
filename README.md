# Polygon.io Client-JS Minimal Example

This repository demonstrates a minimal example of using the [Polygon.io JavaScript Client](https://github.com/polygon-io/client-js) library to make API calls. It shows how to fetch cryptocurrency aggregate data with just a few lines of code.

---

## Repository Location

This example is hosted at [https://github.com/polygon-io/js-client-example](https://github.com/polygon-io/js-client-example).

---

## Prerequisites

Before getting started, ensure you have the following:

1. **Git**: Install Git by following the [Git Installation Guide](https://github.com/git-guides/install-git).
   - Verify installation by running the following in a terminal window:
     ```bash
     git --version
     ```
2. **Node.js**: Download and install the latest version from [nodejs.org](https://nodejs.org/).
   - Verify installation by running:
     ```bash
     node --version
     npm --version
     ```
3. **An API Key from Polygon.io**: Sign up at [Polygon.io](https://polygon.io/) and generate your API key.

---

## Getting Started

### Step 1: Clone the Repository

Use Git to clone this repository to your local machine:

```bash
git clone https://github.com/polygon-io/js-client-example.git
cd js-client-example
```

---

### Step 2: Install Dependencies

Install the required library by running:

```bash
npm install
```

This will install the `@polygon.io/client-js` library as specified in the `package.json` file.

---

### Step 3: Add Your API Key

Open the `index.js` file and replace `'YOUR_API_KEY'` with your actual API key from Polygon.io. For example:

```javascript
const rest = restClient('YOUR_ACTUAL_API_KEY', 'https://api.polygon.io');
```

---

### Step 4: Run the Script

Run the script using Node.js by entering the following command in your terminal from the root of the project:

```bash
node index.js
```

If everything is set up correctly, you'll see the aggregate cryptocurrency data for Bitcoin (BTC) vs. USD in the console.

---

## Expected Output

When you run the script, you should see JSON output similar to this:

```json
{
  "ticker": "X:BTCUSD",
  "queryCount": 5,
  "resultsCount": 5,
  "adjusted": true,
  "results": [
    { "o": 23456.78, "h": 23987.65, "l": 23123.45, "c": 23890.12, "v": 1234, "t": 1674950400000 },
    ...
  ]
}
```

If there's an error (e.g., invalid API key or network issue), it will display an error message in the console.

---

## Troubleshooting

- **Invalid API Key**: Ensure your API key is correct and not expired.
- **Connection Issues**: Ensure you have an active internet connection and can access `https://api.polygon.io`.
- **Dependencies Not Installed**: Run `npm install` again to ensure `@polygon.io/client-js` is installed properly.

---

## Learn More

- [Polygon.io API Documentation](https://polygon.io/docs/)
- [Polygon.io Client-JS Library](https://github.com/polygon-io/client-js)

Happy coding! 🚀