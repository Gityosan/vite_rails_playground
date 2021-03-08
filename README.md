# [Vite Rails](https://github.com/ElMassimo/vite_rails) running on Docker

An example on how to configure Docker to run a [Vite.js](http://vitejs.dev/) process alongside a Rails app.

The integration is powered by [Vite Rails](https://github.com/ElMassimo/vite_rails).

## Setup 💿

To prepare the Docker image, run:

```bash
docker-compose build
```

To start the Rails and Vite services, run:

```bash
docker-compose up
```

## Debugging 🐞

You can verify that the Vite dev server can be reached from Rails by running:

```bash
docker-compose run --rm --entrypoint "bin/rails c" rails
```

and then:

```ruby
> ViteRuby.instance.dev_server_running?
=> true
```
