# novix

Script and trigger API requests from the command line.

## Install

```bash
npm install -g novix
```

## Usage

Create a `test.novix` file:

```json
{
  "method": "GET",
  "url": "https://swapi.dev/api/people/3/",
  "headers": {
    "Content-Type": "application/json"
  }
}
```

Run it:

```bash
novix test.novix
```
