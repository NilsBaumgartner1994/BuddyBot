# buddy-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that Helps to improve your code over time

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t buddy-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> buddy-bot
```

## Contributing

If you have suggestions for how buddy-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Nils Baumgartner <nilsbaumgartner1994@gmail.com>
