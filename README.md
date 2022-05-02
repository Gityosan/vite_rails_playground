[Vite Rails]: https://github.com/ElMassimo/vite_rails

# [Vite Rails] running on Docker

A minimal example on how to configure Docker to run a [Vite.js](http://vitejs.dev/) process alongside a Rails app.

The integration is powered by [Vite Rails].

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

Once you have started both services, you can verify that the Vite dev
server can be reached from Rails by running:

```bash
docker-compose run --rm --entrypoint "bin/rails c" rails
```

and then:

```ruby
> ViteRuby.instance.dev_server_running?
=> true
```

## Further Configuration 📖

Now that you have learned the basics, please follow this guide instead for a
more comprehensive configuration:

- [__Ruby on Whales: Dockerizing Ruby and Rails development__](
https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development?utm_source=twitter.com&utm_medium=social&utm_campaign=attention-all-rails-docker-users!-we-hav)

At the time of writing, the guide covers how to use Webpacker, but configuring [Vite Rails] should be very similar:

- Use `bundle exec ./bin/vite dev` instead of `bundle exec ./bin/webpack-dev-server`
- Expose port [`3036`](https://github.com/ElMassimo/vite_rails_docker_example/blob/main/docker-compose.yml#L23) instead of `3035`
- Rename the `webpacker` service to [`vite`](https://github.com/ElMassimo/vite_rails_docker_example/blob/main/docker-compose.yml#L15)
- Rename `WEBPACKER_DEV_SERVER_HOST` to `VITE_RUBY_HOST`:
    - Including `WEBPACKER_DEV_SERVER_HOST: webpacker` to [`VITE_RUBY_HOST: vite`](https://github.com/ElMassimo/vite_rails_docker_example/blob/main/docker-compose.yml#L10)
